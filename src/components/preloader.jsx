import { useState, useEffect } from "react";

const Preloader = () => {
  const [loadingProgress, setLoadingProgress] = useState(0); // Track loading progress

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10; // Increase progress by 10% every 200ms
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  if (loadingProgress >= 100) return null; // Hide preloader when loading is complete

  return (
    <div
      id="preloader"
      className="fixed top-0 left-0 right-0 bottom-0 bg-white z-50 flex flex-col justify-center items-center"
      style={{
        position: "absolute", // Ensure the div is positioned absolutely
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
      }}
    >
      {/* Image above the GIF */}
      <img
        src="assets/images/preloader.png" // Replace with the path to your image
        alt="Preloader Image"
        className="mb-4 mt-16" // Margin below it
        style={{
          width: "200px", // Adjust the width as needed
          height: "200px", // Adjust the height as needed
        }}
      />

      {/* Loading GIF */}
      <img
        src="assets/images/loading.gif" // Replace with the path to your GIF
        alt="Loading GIF"
        className="animate-spin-slow" // Set animation class
      />
    </div>
  );
};

export default Preloader;
