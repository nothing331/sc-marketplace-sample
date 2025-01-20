import React,{useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import Carousel from 'react-multi-carousel';
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw';
import { CodeBlock } from './codeCopyBtn';


interface ReadmeTabProps {
  screenshots: string[];
  readme: string;
  // theme:{useSelector((state: RootState) => state.theme)}
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

interface CodeProps {
  node?: any;
  inline?: boolean;
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
}

export const ReadmeTab: React.FC<ReadmeTabProps> = ({ screenshots , readme}) => {

  // const [readmd, setReadmd] = useState('')

//   useEffect(() => {
//     const fetchReadme = async () => {
//         try {
//             const response = await fetch('demo_readme.md');
//             const text = await response.text();
//             setReadmd(text);
//             console.log('text decoded:', text);
//         } catch (error) {
//             console.error('Error fetching readme:', error);
//         }
//     };

//     fetchReadme();
// }, []); // Empty dependency array is properly closed
  

  // const theme = useSelector((state: RootState) => state.theme);
  const screenshortsValue = screenshots.length>0 ? true : false;
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      {screenshortsValue && (
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
        )
      }
       <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white mt-4">
        Features
      </h2>
      <div className="dark:text-gray-100 text-gray-900 dark:prose-invert">
      {/* <ReactMarkdown
              components={{
                code({ className, children, ...rest }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return match ? (
                    <SyntaxHighlighter
                      PreTag="div"
                      language={match[1]}
                      style={theme == 'dark' ? atomDark: prism}
                      {...rest}
                    >
                      {children}
                    </SyntaxHighlighter>
                  ) : (
                    <code {...rest} className={className}>
                      {children}
                    </code>
                  );
                },
              }}
            >
        {readme}
      </ReactMarkdown> */}

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
          {readme}
          {/* {readmd} */}
        </ReactMarkdown>

      
      </div>
    </div>
  );
};
