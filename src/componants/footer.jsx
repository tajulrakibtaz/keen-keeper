import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-[#1E5A47] text-white py-16 mt-20 mb-0">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <h2 className="text-5xl font-bold mb-4">KeenKeeper</h2>

        <p className="text-sm text-gray-200 max-w-2xl mx-auto mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">Social Links</h3>

          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white text-[#1E5A47] flex items-center justify-center hover:scale-110 duration-300"
            >
              <FaInstagram size={16} />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white text-[#1E5A47] flex items-center justify-center hover:scale-110 duration-300"
            >
              <FaFacebookF size={16} />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white text-[#1E5A47] flex items-center justify-center hover:scale-110 duration-300"
            >
              <FaXTwitter size={16} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 mt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white duration-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white duration-300">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;