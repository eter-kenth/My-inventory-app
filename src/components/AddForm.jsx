import React, { useState } from 'react';

function AddForm({ onAddItem }) {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.category && formData.price && formData.stock) {
      onAddItem({
        id: Date.now(), // Generate a unique ID
        ...formData,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock, 10),
      });
      setFormData({ name: '', category: '', price: '', stock: '' });
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
      <h2 className="text-xl font-bold mb-4">Add New Item</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-1">Product Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="block mb-1">Category</label>
        <input
          type="text"
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block mb-1">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="stock" className="block mb-1">Stock</label>
        <input
          type="number"
          id="stock"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Item
      </button>
    </form>
  );
}

export default AddForm;
