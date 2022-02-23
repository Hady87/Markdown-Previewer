import React from "react";
import { createContext, useState, useEffect } from "react";

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

const MarkdownContext = createContext();
export const MarkdownProvider = ({ children }) => {
  const [editorText, setEditorText] = useState();
  
  
  const [maxEditor, setMaxEditor] = useState(true);
  const [maxPreview, setMaxPreview] = useState(false);
  const [setOptions] = useState();

  const classEditor = maxEditor ? "show" : "hide";
  const classEditorN = maxEditor ? "hide" : "show";
  const classPreviewN = maxPreview ? "show" : "hide";
  const classPreview = maxPreview ? "hide" : "show";
  const rowMax = maxEditor ? 10 : 100;

  useEffect(() => {
    setEditorText(placeholder);
  }, []);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setEditorText(newValue);
  };
  const maxmizedEditor = () => {
    setMaxEditor((prevState) => !prevState);
  };
  const maxmizePreview = () => {
    setMaxPreview((prevState) => !prevState);
  };

  return (
    <MarkdownContext.Provider
      value={{
        editorText,
        rowMax,
        classPreview,
        classEditor,
        classEditorN,
        classPreviewN,
        handleChange,
        setOptions,
        maxmizedEditor,
        maxmizePreview,
      }}
    >
      {children}
    </MarkdownContext.Provider>
  );
};
export default MarkdownContext;
