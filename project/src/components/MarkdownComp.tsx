import React,{useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import Carousel from 'react-multi-carousel';
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw';
import { CodeBlock } from './codeCopyBtn';

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
  return (
    // <div>MArkdownComp</div>
    <ReactMarkdown
              className="markdown-content"
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                code({ node, inline, className, children, ...props }: CodeProps) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <CodeBlock
                      language={match[1]}
                      // themeMode={theme}
                    >
                      {String(children).replace(/\n$/, '')}
                    </CodeBlock>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {markdown}
              {/* {readmd} */}
            </ReactMarkdown>
  )
}

export default MarkdownComp