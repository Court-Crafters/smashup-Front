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
      className="preloader"
      style={{
        flexDirection: "column", // Align children vertically
        justifyContent: "center", // Center children horizontally
        alignItems: "center", // Center children vertically
      }}
    >
      {/* Image above the GIF */}
      <div>
        <img
          src="assets/images/preloader.png" // Replace with the path to your image
          alt="Preloader Image"
          className="mb-4 mt-16" // Margin below it
          style={{
            width: "200px", // Adjust the width as needed
          }}
        />
      </div>
      {/* Loading GIF */}
      <div>
        <img
          src="assets/images/loading.gif" // Replace with the path to your GIF
          alt="Loading GIF"
          className="animate-spin-slow" // Set animation class
        />
      </div>
      {/* Progress bar */}
    </div>
  );
};

export default Preloader;
