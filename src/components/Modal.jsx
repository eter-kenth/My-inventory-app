import React, { useState } from 'react';

function Modal({ isOpen, onClose, onConfirm, actionType }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handleSubmit = () => {
    // Validate quantity before confirming
    if (quantity > 0) {
      onConfirm(quantity); // Pass the quantity back to the parent
      onClose(); // Close the modal
    } else {
      alert("Please enter a valid quantity.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-semibold text-center mb-4">
          {actionType === 'add' ? 'Add to Stock' : 'Remove from Stock'}
        </h2>
        <div className="flex flex-col">
          <label htmlFor="quantity" className="mb-2">Quantity:</label>
          <input
            id="quantity"
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-full p-2 mb-4 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex justify-between">
            <button
              onClick={onClose}
              className="bg-gray-300 px-4 py-2 rounded-md text-gray-800 hover:bg-gray-400 transition"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition"
            >
              {actionType === 'add' ? 'Add' : 'Remove'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
