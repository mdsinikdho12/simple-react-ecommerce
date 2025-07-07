import React from "react";
import { Link } from "react-router-dom"; // ✅ ঠিক করলাম
import { useCart } from "../context/CartContext"; // ✅ CartContext থেকে count আনবো
import { ShoppingCart } from "lucide-react"; // অথবা FontAwesome বা অন্য icon

const Navbar = () => {
  const { cartItems } = useCart(); // ✅ Cart item list

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between shadow">
      <div className="font-bold text-xl">MyShop</div>

      <div className="flex gap-6 items-center">
        <Link to="/" className="hover:text-amber-400 transition">
          Home
        </Link>

        <Link to="/about" className="hover:text-amber-400 transition">
          About
        </Link>

        <div className="relative">
          <Link
            to="/cart"
            className="hover:text-amber-400 transition flex items-center gap-1">
            <ShoppingCart className="h-5 w-5" />
            <span>Cart</span>
          </Link>

          {/* 🟡 Show Count if > 0 */}
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold">
              {cartItems.length}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
