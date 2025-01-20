import React from 'react';

function ProductTable({ product, onOpenAddModal, onOpenRemoveModal }) {
  return (
    <tr className="bg-white">
      <td className="px-4 py-2 text-gray-800 text-center">{product.name}</td>
      <td className="px-4 py-2 text-gray-600 text-center">{product.category}</td>
      <td className="px-4 py-2 text-gray-800 text-center">${product.price}</td>
      <td className="px-4 py-2 text-gray-800 text-center">{product.stock}</td>
      <td className="px-4 py-2 text-center">
        {/* Button to open the modal for adding stock */}
        <button
          className="bg-green-500 text-white rounded-md hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
          onClick={() => onOpenAddModal(product.id)}
        >
          Add to Stock
        </button>
        <button
          className="bg-red-500 text-white rounded-md hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors ml-2"
          onClick={() => onOpenRemoveModal(product.id)}
        >
          Remove from Stock
        </button>
      </td>
    </tr>
  );
}

export default ProductTable;
