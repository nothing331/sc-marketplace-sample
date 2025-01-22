import React,{useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import Carousel from 'react-multi-carousel';
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw';
import { CodeBlock } from './codeCopyBtn';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark, materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';


type Props = {
    markdown:string
}

interface CodeProps {
  node?: any;
  inline?: boolean;
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
}

function MarkdownComp({markdown}: Props) {
  const theme = useSelector((state: RootState) => state.theme)
  return (
    // <div>MArkdownComp</div>
    // <ReactMarkdown
    //           className="markdown-content"
    //           remarkPlugins={[remarkGfm]}
    //           rehypePlugins={[rehypeRaw]}
    //           components={{
    //             code({ node, inline, className, children, ...props }: CodeProps) {
    //               const match = /language-(\w+)/.exec(className || '');
    //               return !inline && match ? (
    //                 <CodeBlock
    //                   language={match[1]}
    //                   // themeMode={theme}
    //                 >
    //                   {String(children).replace(/\n$/, '')}
    //                 </CodeBlock>
    //               ) : (
    //                 <code className={className} {...props}>
    //                   {children}
    //                 </code>
    //               );
    //             },
    //           }}
    //         >
    //           {markdown}
    //           {/* {readmd} */}
    //         </ReactMarkdown>

    <ReactMarkdown
        children={markdown}
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                style={theme=='dark' ? materialDark : materialLight}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code
                style={{
                  backgroundColor: theme=='dark' ? '#333' : '#f4f4f4',
                  color: theme=='dark' ? '#c5c5c5' : '#d6336c',
                  padding: '0.2em 0.4em',
                  borderRadius: '4px',
                }}
                {...props}
              >
                {children}
              </code>
            );
          },
        }}
      />
  )
}

export default MarkdownComp