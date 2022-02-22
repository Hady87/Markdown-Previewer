import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import MarkdownText from "./components/MarkdownText";
import { MarkdownProvider } from "./context/MarkdownContext";
function App() {
   
  return (
    <MarkdownProvider>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                
                <Editor />
                <Preview />
               
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </MarkdownProvider>
   
  );
}

export default App;
