import * as OpenAPISnippet from "openapi-snippet";
import React from "react";
import ReactDOM from "react-dom";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

// Since swagger-ui-react was not configured to change the request snippets some workarounds required
// configuration will be added programatically
// Custom Plugin
const SnippedGenerator = {
  statePlugins: {
    // extend some internals to gain information about current path, method and spec in the generator function metioned later
    spec: {
      wrapSelectors: {
        requestFor: (ori, system) => (state, path, method) => {
          return ori(path, method)
            ?.set("spec", state.get("json", {}))
            ?.setIn(["oasPathMethod", "path"], path)
            ?.setIn(["oasPathMethod", "method"], method);
        },
        mutatedRequestFor: (ori) => (state, path, method) => {
          return ori(path, method)
            ?.set("spec", state.get("json", {}))
            ?.setIn(["oasPathMethod", "path"], path)
            ?.setIn(["oasPathMethod", "method"], method);
        },
      },
    },
    // extend the request snippets core plugin
    requestSnippets: {
      wrapSelectors: {
        // add additional snippet generators here
        getSnippetGenerators:
          (ori, system) =>
          (state, ...args) =>
            ori(state, ...args)
              // add node native snippet generator
              .set(
                // key
                "node_native",
                // config and generator function
                system.Im.fromJS({
                  title: "NodeJs Native",
                  syntax: "javascript",
                  hostname: "test",
                  fn: (req) => {
                    // get extended info about request
                    const { spec, oasPathMethod } = req.toJS();
                    const { path, method } = oasPathMethod;

                    // run OpenAPISnippet for target node
                    const targets = ["node_native"];
                    let snippet;
                    try {
                      // set request snippet content
                      snippet = OpenAPISnippet.getEndpointSnippets(
                        spec,
                        path,
                        method,
                        targets
                      ).snippets[0].content.replaceAll("undefinedundefined", "https://api.cal.com/v1");
                    } catch (err) {
                      // set to error in case it happens the npm package has some flaws
                      snippet = JSON.stringify(snippet);
                    }
                    // return stringified snipped
                    return snippet;
                  },
                })
              )
              .set(
                // key
                "node_fetch",
                // config and generator function
                system.Im.fromJS({
                  title: "NodeJs fetch",
                  syntax: "javascript",
                  fn: (req) => {
                    // get extended info about request
                    const { spec, oasPathMethod } = req.toJS();
                    const { path, method } = oasPathMethod;

                    // run OpenAPISnippet for target node
                    const targets = ["node_fetch"];
                    let snippet;
                    try {
                      // set request snippet content
                      snippet = OpenAPISnippet.getEndpointSnippets(
                        spec,
                        path,
                        method,
                        targets
                      ).snippets[0].content.replaceAll("undefinedundefined", "https://api.cal.com/v1");
                    } catch (err) {
                      // set to error in case it happens the npm package has some flaws
                      snippet = JSON.stringify(snippet);
                    }
                    // return stringified snipped
                    return snippet;
                  },
                })
              )
              .set(
                // key
                "php_curl",
                // config and generator function
                system.Im.fromJS({
                  title: "PHP (curl)",
                  syntax: "php",
                  fn: (req) => {
                    // get extended info about request
                    const { spec, oasPathMethod } = req.toJS();
                    const { path, method } = oasPathMethod;

                    // run OpenAPISnippet for target node
                    const targets = ["php_curl"];
                    let snippet;
                    try {
                      // set request snippet content
                      snippet = OpenAPISnippet.getEndpointSnippets(
                        spec,
                        path,
                        method,
                        targets
                      ).snippets[0].content.replaceAll("undefinedundefined", "https://api.cal.com/v1");
                    } catch (err) {
                      // set to error in case it happens the npm package has some flaws
                      snippet = JSON.stringify(snippet);
                    }
                    // return stringified snipped
                    return snippet;
                  },
                })
              )
              .set(
                // key
                "java_okhttp",
                // config and generator function
                system.Im.fromJS({
                  title: "Java (OkHttp)",
                  syntax: "java",
                  fn: (req) => {
                    // get extended info about request
                    const { spec, oasPathMethod } = req.toJS();
                    const { path, method } = oasPathMethod;
                    console.log(spec, oasPathMethod, path, method);
                    // run OpenAPISnippet for target node
                    const targets = ["java_okhttp"];
                    let snippet;
                    try {
                      // set request snippet content
                      snippet = OpenAPISnippet.getEndpointSnippets(
                        spec,
                        path,
                        method,
                        targets
                      ).snippets[0].content.replaceAll("undefinedundefined", "https://api.cal.com/v1");
                    } catch (err) {
                      // set to error in case it happens the npm package has some flaws
                      snippet = JSON.stringify(snippet);
                    }
                    // return stringified snipped
                    return snippet;
                  },
                })
              )
              .set(
                // key
                "java",
                // config and generator function
                system.Im.fromJS({
                  title: "Java (Unirest)",
                  syntax: "java",
                  fn: (req) => {
                    // get extended info about request
                    const { spec, oasPathMethod } = req.toJS();
                    const { path, method } = oasPathMethod;

                    // run OpenAPISnippet for target node
                    const targets = ["java"];
                    let snippet;
                    try {
                      // set request snippet content
                      snippet = OpenAPISnippet.getEndpointSnippets(
                        spec,
                        path,
                        method,
                        targets
                      ).snippets[0].content.replaceAll("undefinedundefined", "https://api.cal.com/v1");
                    } catch (err) {
                      // set to error in case it happens the npm package has some flaws
                      snippet = JSON.stringify(snippet);
                    }
                    // return stringified snipped
                    return snippet;
                  },
                })
              )
              .set(
                // key
                "shell_httpie",
                // config and generator function
                system.Im.fromJS({
                  title: "Shell (HTTPie)  ",
                  syntax: "bash",
                  fn: (req) => {
                    // get extended info about request
                    const { spec, oasPathMethod } = req.toJS();
                    const { path, method } = oasPathMethod;

                    // run OpenAPISnippet for target node
                    const targets = ["shell_httpie"];
                    let snippet;
                    try {
                      // set request snippet content
                      snippet = OpenAPISnippet.getEndpointSnippets(
                        spec,
                        path,
                        method,
                        targets
                      ).snippets[0].content.replaceAll("undefinedundefined", "https://api.cal.com/v1");
                    } catch (err) {
                      // set to error in case it happens the npm package has some flaws
                      snippet = JSON.stringify(snippet);
                    }
                    // return stringified snipped
                    return snippet;
                  },
                })
              )
              .set(
                // key
                "c_libcurl",
                // config and generator function
                system.Im.fromJS({
                  title: "C (libcurl)  ",
                  syntax: "bash",
                  fn: (req) => {
                    // get extended info about request
                    const { spec, oasPathMethod } = req.toJS();
                    const { path, method } = oasPathMethod;

                    // run OpenAPISnippet for target node
                    const targets = ["c_libcurl"];
                    let snippet;
                    try {
                      // set request snippet content
                      snippet = OpenAPISnippet.getEndpointSnippets(
                        spec,
                        path,
                        method,
                        targets
                      ).snippets[0].content.replaceAll("undefinedundefined", "https://api.cal.com/v1");
                    } catch (err) {
                      // set to error in case it happens the npm package has some flaws
                      snippet = JSON.stringify(snippet);
                    }
                    // return stringified snipped
                    return snippet;
                  },
                })
              )
              .set(
                // key
                "go_native",
                // config and generator function
                system.Im.fromJS({
                  title: "Go",
                  syntax: "bash",
                  fn: (req) => {
                    // get extended info about request
                    const { spec, oasPathMethod } = req.toJS();
                    const { path, method } = oasPathMethod;

                    // run OpenAPISnippet for target node
                    const targets = ["go_native"];
                    let snippet;
                    try {
                      // set request snippet content
                      snippet = OpenAPISnippet.getEndpointSnippets(
                        spec,
                        path,
                        method,
                        targets
                      ).snippets[0].content.replaceAll("undefinedundefined", "https://api.cal.com/v1");
                    } catch (err) {
                      // set to error in case it happens the npm package has some flaws
                      snippet = JSON.stringify(snippet);
                    }
                    // return stringified snipped
                    return snippet;
                  },
                })
              )
              .set(
                // key
                "ruby",
                // config and generator function
                system.Im.fromJS({
                  title: "Ruby",
                  syntax: "ruby",
                  fn: (req) => {
                    // get extended info about request
                    const { spec, oasPathMethod } = req.toJS();
                    const { path, method } = oasPathMethod;

                    // run OpenAPISnippet for target node
                    const targets = ["ruby"];
                    let snippet;
                    try {
                      // set request snippet content
                      snippet = OpenAPISnippet.getEndpointSnippets(
                        spec,
                        path,
                        method,
                        targets
                      ).snippets[0].content.replaceAll("undefinedundefined", "https://api.cal.com/v1");
                    } catch (err) {
                      // set to error in case it happens the npm package has some flaws
                      snippet = JSON.stringify(snippet);
                    }
                    // return stringified snipped
                    return snippet;
                  },
                })
              )
              .set(
                // key
                "ruby",
                // config and generator function
                system.Im.fromJS({
                  title: "Python",
                  syntax: "python",
                  fn: (req) => {
                    // get extended info about request
                    const { spec, oasPathMethod } = req.toJS();
                    const { path, method } = oasPathMethod;

                    // run OpenAPISnippet for target node
                    const targets = ["python"];
                    let snippet;
                    try {
                      // set request snippet content
                      snippet = OpenAPISnippet.getEndpointSnippets(
                        spec,
                        path,
                        method,
                        targets
                      ).snippets[0].content.replaceAll("undefinedundefined", "https://api.cal.com/v1");
                    } catch (err) {
                      // set to error in case it happens the npm package has some flaws
                      snippet = JSON.stringify(snippet);
                    }
                    // return stringified snipped
                    return snippet;
                  },
                })
              ),
      },
    },
  },
};

const requestSnippets = {
  generators: {
    curl_bash: {
      title: "cURL (bash)",
      syntax: "bash",
    },
    curl_powershell: {
      title: "cURL (PowerShell)",
      syntax: "powershell",
    },
    curl_cmd: {
      title: "cURL (CMD)",
      syntax: "bash",
    },
  },
  defaultExpanded: true,
  languages: ["curl_bash", "node"],
  // e.g. only ow curl bash = ["curl_bash"]
};
export default function APIDocs() {
  return (
    <SwaggerUI
      url={process.env.NEXT_PUBLIC_SWAGGER_DOCS_URL || "http://localhost:3002/docs"}
      supportedSubmitMethods={["get", "post", "put", "delete", "patch"]}
      requestSnippets={requestSnippets}
      requestSnippetsEnabled={true}
      plugins={[SnippedGenerator]}
      tryItOutEnabled={true}
      syntaxHighlight={true}
      docExpansion="none"
      filter={true}
    />
  );
}
