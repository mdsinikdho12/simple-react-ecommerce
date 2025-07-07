import { useParams } from "react-router";
import { initialProducts } from "../data/Product";
import { useCart } from "../context/CartContext";

const PostDetails = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  const { addToCart } = useCart();
  const product = initialProducts.find((item) => item.id === productId);

  if (!product) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold text-red-500">
          প্রোডাক্ট পাওয়া যায়নি
        </h1>
        <p>দয়া করে সঠিক প্রোডাক্ট নির্বাচন করুন।</p>
      </div>
    );
  }

  return (
    <div className="max-w-sm mx-auto bg-white mt-10 rounded-lg shadow p-4 text-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-24 h-24 mx-auto mb-3"
      />
      <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
      <p className="text-sm text-gray-600">{product.description}</p>
      <p className="text-lg font-semibold text-orange-600 mt-2">
        ৳ {product.price.toLocaleString()}
      </p>

      <div className="mt-3">
        <br />
        <button
          onClick={() => addToCart(product)}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
          কার্টে যোগ করুন
        </button>
      </div>
    </div>
  );
};

export default PostDetails;
