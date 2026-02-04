import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      
        <div>
          <h2 className="text-lg font-bold mb-4">MyShop</h2>
          <p className="text-gray-400 text-sm">
            The best online shop for shoes, clothes, and accessories.
          </p>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link to="/products/shoes" className="hover:text-white transition-colors">
                Phones
              </Link>
            </li>
            <li>
              <Link to="/products/clothes" className="hover:text-white transition-colors">
                Smart Watches
              </Link>
            </li>
            <li>
              <Link to="/products/accessories" className="hover:text-white transition-colors">
                Games
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-4">Contact</h3>
          <p className="text-gray-400 text-sm">Email: info@myshop.com</p>
          <p className="text-gray-400 text-sm">Phone: +123 456 7890</p>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} MyShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
