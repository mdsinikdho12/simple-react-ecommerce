import React from "react";

const Modal = ({ message, onClose }) => {
  return (
    <div className="fixed top-[50px] right-6 z-50">
      <div className="bg-white rounded-lg px-6 py-4 shadow-lg border-l-4 border-green-500 max-w-sm w-full animate-slide-up">
        <p className="text-gray-800 text-sm mb-2 font-semibold">{message}</p>
        <div className="text-right">
          <button
            onClick={onClose}
            className="text-sm text-white bg-green-500 hover:bg-amber-600 px-3 py-1 rounded">
            ঠিক আছে
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
