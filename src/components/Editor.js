import { useContext } from "react";
import MarkdownContext from "../context/MarkdownContext";
import { FaTimes } from "react-icons/fa";
function Editor() {
 const {editorText,handleChange} = useContext(MarkdownContext);
  return (
    <>
      <div className="container">
        <label htmlFor="editor" className="title">
          <span>Editor</span>
          <FaTimes style={{ color: "black", cursor: "pointer" }} />
        </label>
        <textarea
          id="editor"
          name="editor"
          rows="4"
          cols="20"
          autoFocus
          onChange={handleChange}
          value={editorText}
        ></textarea>
      </div>
    </>
  );
}

export default Editor;
