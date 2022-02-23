import { useContext } from "react";

import { FaExpandArrowsAlt, FaExpandAlt } from "react-icons/fa";

import MarkdownText from "./MarkdownText";
import MarkdownContext from "../context/MarkdownContext";

function Preview() {
  const {
    classPreview,
    classEditor,

    maxmizePreview,
    classPreviewN,
  } = useContext(MarkdownContext);
 
  return (
    <>
      <div className={classEditor}>
        <div id="boxReview">
          <div className="title">
            <span>Preview </span>
            <FaExpandArrowsAlt
              onClick={maxmizePreview}
              className={classPreview}
            />
            <FaExpandAlt onClick={maxmizePreview} className={classPreviewN} />
          </div>
          <MarkdownText />
        </div>
      </div>
    </>
  );
}

export default Preview;
