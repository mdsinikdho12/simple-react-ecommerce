import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => {
      acc[item.id] = 1;
      return acc;
    }, {})
  );

  const handleQuantityChange = (id, value) => {
    if (value < 1) return;
    setQuantities((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div className="p-8 font-[Hind_Siliguri]">
      <h2 className="text-2xl font-bold mb-4 text-center">কার্টে প্রোডাক্ট</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">কার্ট খালি!</p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="border-b py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="h-24 w-24 border-2 border-yellow-500 rounded-lg shadow-md"
              />
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">
                  ইউনিট মূল্য: ৳{item.price}
                </p>
                <p className="text-lg font-bold">
                  ৳{item.price * item.quantity}
                </p>

                <div className="flex items-center mt-2 gap-2">
                  <label className="text-sm font-medium">পরিমাণ:</label>
                  <input
                    type="number"
                    value={quantities[item.id]}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                    min={1}
                    className="w-16 px-2 py-1 border border-gray-400 rounded text-center"
                  />
                </div>
              </div>
            </div>

            <div className="text-right">
              <p className="text-lg font-bold text-amber-600">
                মোট: ৳{item.price * quantities[item.id]}
              </p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-white px-4 py-1 mt-2 bg-red-500 rounded hover:bg-red-600">
                মুছে ফেলুন
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
