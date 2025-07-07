import React from "react";
import Navbar from "../Components/Navbar";

const About = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen p-6">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">About Us</h1>
        <p className="text-gray-700 mb-2">
          Welcome to MyShop! We are dedicated to providing you with the best
          online shopping experience. Our mission is to offer a wide range of
          products at competitive prices, ensuring quality and customer
          satisfaction.
        </p>
        <p className="text-gray-700 mb-2">
          Our team works tirelessly to curate the latest trends and timeless
          classics, making sure you find exactly what you're looking for.
        </p>
        <p className="text-gray-700">
          Thank you for choosing MyShop. We look forward to serving you!
        </p>
      </div>
    </>
  );
};

export default About;
