import { lightFormat } from 'date-fns/fp';
import React from 'react';
import Markdown from 'react-markdown';
import ReactMarkdown from 'react-markdown';
import Carousel from 'react-multi-carousel';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from 'remark-gfm'


interface ReadmeTabProps {
  screenshots: string[];
  readme: string;
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

export const ReadmeTab: React.FC<ReadmeTabProps> = ({ screenshots , readme}) => {
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
      {/*<ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
        <li>Feature 1</li>
        <li>Feature 2</li>
        <li>Feature 3</li>
      </ul> */}
      {/* <ReactMarkdown>
        {readme}
      </ReactMarkdown> */}
      <div className="dark:text-gray-100 text-gray-900 dark:prose-invert">
      {/* <ReactMarkdown
              components={{
                code({ className, children, ...rest }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return match ? (
                    <SyntaxHighlighter
                      PreTag="div"
                      language={match[1]}
                      style={dark}
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

    <Markdown
        remarkPlugins={[remarkGfm]}
        // children={readme}
        // components={{
        //   code(props) {
        //     const {children, className, node, ...rest} = props
        //     const match = /language-(\w+)/.exec(className || '')
        //     return match ? (
        //       <SyntaxHighlighter
        //         // {...rest}
        //         // PreTag="div"
        //         children={String(children).replace(/\n$/, '')}
        //         language={match[1]}
        //         // style={dark}
        //       />
        //     ) : (
        //       <code {...rest} className={className}>
        //         {readme}
        //       </code>
        //     )
        //   }
        // }}
      >{readme}</Markdown>
      </div>
    </div>
  );
};
