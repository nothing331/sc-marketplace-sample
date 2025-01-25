import { lightFormat } from 'date-fns/fp';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Carousel from 'react-multi-carousel';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface ReadmeTabProps {
  screenshots: string[];
  readme: string;
}

interface PreProps {
  children: React.ReactNode;
}

interface CodeProps {
  node?: any;
  inline?: boolean;
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
}

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Pre: React.FC<PreProps> = ({ children }) => (
  <pre className="blog-pre">
    <CodeCopyBtn>{children}</CodeCopyBtn>
    {children}
  </pre>
);

interface CodeCopyBtnProps {
  children: React.ReactNode;
}

const CodeCopyBtn: React.FC<CodeCopyBtnProps> = ({ children }) => {
  const [copyOk, setCopyOk] = React.useState(false);
  const iconColor = copyOk ? '#0af20a' : '#ddd';
  const icon = copyOk ? 'fa-check-square' : 'fa-copy';

  const handleClick = (e: React.MouseEvent) => {
    if (React.isValidElement(children) && 
        React.isValidElement(children.props.children) && 
        React.isValidElement(children.props.children[0])) {
      const text = String(children.props.children[0].props.children[0]);
      navigator.clipboard.writeText(text);
      setCopyOk(true);
      setTimeout(() => {
        setCopyOk(false);
      }, 500);
    }
  };

  return (
    <div className="code-copy-btn">
      <i className={`fas ${icon}`} onClick={handleClick} style={{ color: iconColor }} />
    </div>
  );
};

export const ReadmeTab: React.FC<ReadmeTabProps> = ({ screenshots, readme }) => {
  const screenshotsValue = screenshots.length > 0;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      {screenshotsValue && (
        <div>
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            Screenshots
          </h2>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            transitionDuration={500}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            itemClass="px-4"
          >
            {screenshots.map((screenshot, index) => (
              <img
                key={index}
                src={screenshot}
                alt={`Screenshot ${index + 1}`}
                className="rounded-lg w-full h-48 object-cover"
              />
            ))}
          </Carousel>
        </div>
      )}
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white mt-4">
        Features
      </h2>
      <div className="dark:text-gray-100 text-gray-900 dark:prose-invert">
        <ReactMarkdown
          className='post-markdown'
          linkTarget='_blank'
          rehypePlugins={[rehypeRaw]}
          remarkPlugins={[remarkGfm]}
          components={{
            pre: Pre,
            code({ node, inline, className = "blog-code", children, ...props }: CodeProps) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  style={a11yDark}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            }
          }}
        >
          {readme}
        </ReactMarkdown>
      </div>
    </div>
  );
};