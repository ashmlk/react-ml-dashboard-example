import React, { Component } from "react";
import { Formik, useFormik, Form, FieldArray } from "formik";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css"; //Example style, you can use another

/**
 * GraphQL code component for highlighting code
 */

function GraphQLQueryCode() {
  const [code, setCode] = React.useState(
    `function add(a, b) {\n  return a + b;\n}`
  );
  return (
    <Editor
      value={code}
      textareaId="graph_code_textarea_id"
      name="graph_code"
      onValueChange={(code) => setCode(code)}
      highlight={(code) => highlight(code, languages.js)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12,
        minHeight: "250px",
      }}
    />
  );
}

export default GraphQLQueryCode;
