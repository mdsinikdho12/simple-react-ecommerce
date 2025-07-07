import Modal from "../components/Modal";
import { useCart } from "../context/CartContext";
import { useState, useEffect } from "react";
import { initialProducts } from "../data/Product";
import { Link } from "react-router-dom";

const Home = () => {
  const { addToCart } = useCart();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [displayProducts, setDisplayProducts] = useState(initialProducts);

  const handleAddToCart = (product) => {
    addToCart(product);
    setModalMessage(`${product.name} কার্টে যোগ হয়েছে!`);
    setModalVisible(true);
    setTimeout(() => setModalVisible(false), 2000);
  };

  useEffect(() => {
    let filtered = initialProducts.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
    if (sortOrder === "high") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortOrder === "low") {
      filtered.sort((a, b) => a.price - b.price);
    }
    setDisplayProducts(filtered);
  }, [search, sortOrder]);

  return (
    <div className="min-h-[70vh] bg-gray-100 py-8 font-[Hind_Siliguri]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          সব প্রোডাক্ট
        </h2>

        {modalVisible && (
          <Modal
            message={modalMessage}
            onClose={() => setModalVisible(false)}
          />
        )}

        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between">
          <input
            type="text"
            placeholder="প্রোডাক্ট খুঁজুন..."
            className="w-full md:w-1/2 pl-4 pr-10 py-2 rounded-lg text-gray-900 bg-white border border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-200 placeholder:text-amber-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="w-full md:w-1/4 px-4 py-2 rounded-lg text-gray-900 bg-white border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}>
            <option value="">ফিল্টার করুন </option>
            <option value="high">High to Low</option>
            <option value="low">Low to High</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {displayProducts.length ? (
            displayProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-24 w-24 mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mb-1">
                  {product.description}
                </p>
                <p className="text-lg font-bold text-amber-600 mb-4">
                  <span className="text-base font-medium text-gray-500 mr-1">
                    ৳
                  </span>
                  {product.price.toLocaleString("en-BD")}
                </p>
                <Link
                  to={`/product/${product.id}`}
                  className="text-blue-500 px-4 py-2 rounded-lg font-semibold transition-colors duration-200 w-full text-center">
                  বিস্তারিত দেখুন
                </Link>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 mt-2">
                  কার্টে যোগ করুন
                </button>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-red-500 font-bold">
              কোনো প্রোডাক্ট পাওয়া যায়নি
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
