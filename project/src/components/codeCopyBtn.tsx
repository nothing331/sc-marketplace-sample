// import React from "react";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { useSelector } from "react-redux";
// import { RootState } from "../store/store";
// import { a11yDark, atomDark, prism } from "react-syntax-highlighter/dist/esm/styles/prism";

// export default function CodeCopyBtn({ children } : string) {

//     const theme = useSelector((state: RootState) => state.theme);
//     return(
//         <div>
//             <SyntaxHighlighter style={theme == 'dark' ? atomDark: prism}>
//                 {children}
//             </SyntaxHighlighter>
//         </div>
//     )

// }

import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark, prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

interface CodeBlockProps {
  children: string;
  language: string;
//   theme: 'light' | 'dark';
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ children, language }) => {
    const theme = useSelector((state: RootState) => state.theme)
  const [copyOk, setCopyOk] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    setCopyOk(true);
    setTimeout(() => {
      setCopyOk(false);
    }, 500);
  };

  return (
    <div className="relative">
      <button
        onClick={handleCopy}
        className="absolute right-2 top-2 text-sm px-2 py-1 rounded bg-gray-700 text-white hover:bg-gray-600"
      >
        {copyOk ? "Copied!" : "Copy"}
      </button>
      <SyntaxHighlighter
        language={language}
        style={theme === 'dark' ? atomDark : prism}
        customStyle={{
          padding: '1rem',
          borderRadius: '0.375rem',
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

