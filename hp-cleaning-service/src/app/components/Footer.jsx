import React from "react";

const Footer = () => {
  return (
    <footer>
      {/* Footer content goes here */}
      <div className="bg-blue-500 flex sm:text-lg text-sm text-center text-white h-19 w-full p-2">
        <p className="w-full">© 2024 High Power Cleaning Service. Proudly designed by <span className="underline italic sm:text-lg text-md cursonr-pointer"><a href="https://www.sidneymcclean.com" target="_blank">SLM</a></span></p>
      </div>
    </footer>
  );
};

export default Footer;