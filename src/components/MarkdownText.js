import React, { useState } from "react";
//import ReactMarkdown from "react-markdown";
import { marked } from "marked";
import remarkGfm from "remark-gfm";
import Prism from "prismjs";

import { useContext } from "react";
import MarkdownContext from "../context/MarkdownContext";
function MarkdownText() {
  const { getMarkdownText } = useContext(MarkdownContext);

  const { editorText } = useContext(MarkdownContext);

  marked.setOptions({
    breaks: true,
    gfm: true,
    tables: true,
    sanitize: true,
    smartLists: true,
    highlight: function (code) {
      return Prism.highlight(code, Prism.languages.javascript, "javascript");
    },
  });

  // INSERTS target="_blank" INTO HREF TAGS (required for Codepen links)
  const renderer = new marked.Renderer();
  renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}</a>`;
  };

  return (
    <div
      id="preview"
      dangerouslySetInnerHTML={{
        __html: marked(editorText ?? "", { renderer: renderer }),
      }}
    />
  );
}

export default MarkdownText;
