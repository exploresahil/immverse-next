"use client";

import Header from "@/components/Header";
import "./scss/globals.scss";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("theme-light");
  const [showPopup, setShowPopup] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "theme-light" ? "theme-dark" : "theme-light";
    setTheme(newTheme);
  };

  const handlePopupButtonClick = () => {
    setShowVideo(true);
    setShowPopup(false);
  };

  useEffect(() => {
    const videoElement = document.getElementById("layout-video");
    if (videoElement) {
      videoElement.addEventListener("ended", handleVideoEnd);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, []);

  const handleVideoEnd = () => {
    setShowVideo(false);
  };

  return (
    <html lang="en">
      <body className={theme}>
        {showPopup && (
          <div className="popup">
            <h2>
              Click on the button to see <span>the future</span>
            </h2>
            <button onClick={handlePopupButtonClick}>Button</button>
          </div>
        )}

        {showVideo && (
          <div className="loading-screen">
            <video
              id="layout-video"
              autoPlay
              disablePictureInPicture
              onEnded={handleVideoEnd}
            >
              <source src="assets/videos/loading.mp4" type="video/mp4" />
            </video>
          </div>
        )}

        <Header theme={theme} setTheme={setTheme} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
