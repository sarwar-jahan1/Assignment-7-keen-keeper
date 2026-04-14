import { FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#2d5f4a] text-white  py-10 text-center">
      
      <h2 className="text-2xl font-bold mb-2">KeenKeeper</h2>

      <p className="text-sm text-gray-200 mb-6">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
      </p>

      <p className="mb-3 font-semibold">Social Links</p>

      <div className="flex justify-center gap-4 mb-6">
        <div className="bg-white text-black p-2 rounded-full">
          <FaGithub />
        </div>
        <div className="bg-white text-black p-2 rounded-full">
          <FaFacebookF />
        </div>
        <div className="bg-white text-black p-2 rounded-full">
          <FaTwitter />
        </div>
      </div>

      <div className="border-t border-gray-400 max-w-5xl mx-auto mb-4"></div>

      <div className="flex justify-between max-w-5xl mx-auto text-xs text-gray-200 px-4">
        <p>© 2026 KeenKeeper. All rights reserved.</p>

        <div className="flex gap-4">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookies</span>
        </div>
      </div>

    </div>
  );
};

export default Footer;