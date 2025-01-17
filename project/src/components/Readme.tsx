import React from 'react';
import Carousel from 'react-multi-carousel';


interface ReadmeTabProps {
  screenshots: string[];
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

export const ReadmeTab: React.FC<ReadmeTabProps> = ({ screenshots }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
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
        {screenshots.map((screenshot)=>{
            return <img
            src={screenshot}
            alt="Screenshot 1"
            className="rounded-lg w-full h-48 object-cover"
          />
        })}
      </Carousel>

      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white mt-4">
        Features
      </h2>
      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
        <li>Feature 1</li>
        <li>Feature 2</li>
        <li>Feature 3</li>
      </ul>
    </div>
  );
};
