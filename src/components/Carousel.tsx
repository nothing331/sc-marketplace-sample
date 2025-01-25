import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { PackageCard } from "./PackageCard";
import { Package } from "../types/package";

interface PackageCarouselProps {
  packages: Package[];
  title: string;
  subtitle: string; // Add subtitle prop
}

const PackageCarousel: React.FC<PackageCarouselProps> = ({ packages, title, subtitle }) => {
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

  return (
    <div className="my-8  p-4">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          {title}
        </h2> {/* Title aligned to the left */}
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {subtitle}
        </p> Subtitle aligned to the left
      </div>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        transitionDuration={500}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="px-4" // Add spacing between items
      >
        {packages.map((pkg, index) => (
          <div key={index}>
            <PackageCard package={pkg} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PackageCarousel;
