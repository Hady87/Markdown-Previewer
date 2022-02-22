import  {useContext,useState } from "react";
import ReactMarkdown from "react-markdown";
import { marked } from "marked";
import remarkGfm from 'remark-gfm'
import Prism from "prismjs";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
//import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import {docco}  from 'react-syntax-highlighter/dist/esm/styles/hljs';
import gfm from 'remark-gfm'
import  MarkdownText from "./MarkdownText";
import MarkdownContext from "../context/MarkdownContext";
import { FaTimes } from 'react-icons/fa'

import Editor from './Editor'

function Preview() {
const {editorText,placeholder} = useContext(MarkdownContext);
const {markText,setMarkdown} = useContext(MarkdownContext);

  return (
 
    <>
   <div className="boxReview">
        <div className="title">
           <span>Preview </span> 
           <FaTimes
          style={{ color: 'black', cursor: 'pointer' }}
          
        />
        </div>
        <MarkdownText/>
    </div>
    </>
  )
}

export default Preview