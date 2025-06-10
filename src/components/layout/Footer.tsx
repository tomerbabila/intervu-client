import Icon from "../general/icon/Icon";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <Icon name="intervu" />
          <p className="text-sm mt-2 text-gray-400">
            Elevate your job preparation with real-world interview practice and expert feedback.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="text-sm space-y-1 text-gray-400">
            <li>
              <a href="/about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/pricing" className="hover:text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Disclaimer</h3>
          <p className="text-sm text-gray-400">
            INTERVU is an educational project designed to help users improve their interview skills. It does not
            guarantee job placements, and all content is for learning purposes only.
          </p>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} INTERVU. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
