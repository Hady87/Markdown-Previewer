import { useContext } from "react";
import MarkdownContext from "../context/MarkdownContext";
import { FaExpandArrowsAlt, FaExpandAlt } from "react-icons/fa";
function Editor() {
  const {
    editorText,
    handleChange,
    maxmizedEditor,
    
    rowMax,
    classEditor,
    classPreview,
    classEditorN,
    
  } = useContext(MarkdownContext);
  return (
    <>
     <div className={classPreview}>
      <div id="container">
        <label htmlFor="editor" className="title">
          <span>Editor</span>
          <div>
            <FaExpandArrowsAlt
              onClick={maxmizedEditor} 
              className={classEditor}
            />
            <FaExpandAlt onClick={maxmizedEditor} className={classEditorN} />
          </div>
        </label>
        <textarea
          id="editor"
          name="editor"
          rows={rowMax}
          cols="50"
          autoFocus
          onChange={handleChange}
          value={editorText}
         
        ></textarea>
      </div>
      </div>
    </>
  );
}

export default Editor;
