import { FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#2d5f4a] text-white py-8 sm:py-10 text-center px-4 sm:px-6 md:px-10">
      {/* Title */}
      <h2 className="text-xl sm:text-2xl font-bold mb-2">KeenKeeper</h2>

      {/* Description */}
      <p className="text-xs sm:text-sm text-gray-200 mb-6 max-w-xl mx-auto">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>

      {/* Social */}
      <p className="mb-3 font-semibold text-sm sm:text-base">Social Links</p>

      <div className="flex justify-center gap-3 sm:gap-4 mb-6">
        <div className="bg-white text-black p-2 rounded-full hover:scale-105 transition">
          <FaGithub className="text-sm sm:text-base" />
        </div>
        <div className="bg-white text-black p-2 rounded-full hover:scale-105 transition">
          <FaFacebookF className="text-sm sm:text-base" />
        </div>
        <div className="bg-white text-black p-2 rounded-full hover:scale-105 transition">
          <FaTwitter className="text-sm sm:text-base" />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-400 max-w-5xl mx-auto mb-4"></div>

      {/* Bottom */}
      <div className="flex flex-col sm:flex-row justify-between items-center max-w-5xl mx-auto text-xs text-gray-200 gap-2 sm:gap-0">
        <p className="text-center sm:text-left">
          © 2026 KeenKeeper. All rights reserved.
        </p>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <span className="cursor-pointer hover:underline">Privacy Policy</span>
          <span className="cursor-pointer hover:underline">
            Terms of Service
          </span>
          <span className="cursor-pointer hover:underline">Cookies</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
