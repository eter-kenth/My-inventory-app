import React, { useState } from 'react';
import Header2 from '../components/Header2';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import Modal from '../components/Modal';
import mockData from '../utils/mockData.json';

function InventoryPage() {
  const [query, setQuery] = useState('');
  const [inventory, setInventory] = useState(mockData); // Estado inicial del inventario basado en mockData
  const [filteredInventory, setFilteredInventory] = useState(mockData); // Estado filtrado
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentAction, setCurrentAction] = useState('');
  const [currentProductId, setCurrentProductId] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
  });

  const categories = ['Electronics', 'Clothing', 'Books', 'Home', 'Toys'];

  // Filtrar inventario cuando cambie el query
  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    const results = inventory.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredInventory(results);
  };

  // Agregar nuevo producto
  const handleAddNewProduct = (e) => {
    e.preventDefault();
    const newId = inventory.length + 1;
    const newProductData = {
      id: newId,
      ...newProduct,
      price: parseFloat(newProduct.price),
      stock: parseInt(newProduct.stock, 10),
    };
    const updatedInventory = [...inventory, newProductData];
    setInventory(updatedInventory);
    setFilteredInventory(updatedInventory); // Actualizar inventario filtrado
    setNewProduct({ name: '', category: '', price: '', stock: '' });
    setIsFormVisible(false);
  };

  // Manejar stock (agregar o remover)
  const handleStockUpdate = (quantity) => {
    if (quantity > 0) {
      const updatedInventory = inventory.map((product) =>
        product.id === currentProductId
          ? {
              ...product,
              stock:
                currentAction === 'add'
                  ? product.stock + quantity
                  : Math.max(product.stock - quantity, 0),
            }
          : product
      );
      setInventory(updatedInventory);
      setFilteredInventory(updatedInventory); // Actualizar inventario filtrado
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <Header2 />
      <div className="flex flex-col">
        <SearchBar onSearch={handleSearch} />
        <div className="p-4">
          <button
            onClick={() => setIsFormVisible((prev) => !prev)}
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500 transition mb-4"
          >
            {isFormVisible ? 'Cancel' : 'Add a New Product'}
          </button>
          {isFormVisible && (
            <form onSubmit={handleAddNewProduct} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Product Name"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                required
                className="p-2 border rounded-md"
              />
              <select
                value={newProduct.category}
                onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                required
                className="p-2 border rounded-md"
              >
                <option value="" disabled>
                  Select Category
                </option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <input
                type="number"
                placeholder="Price"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                required
                className="p-2 border rounded-md"
              />
              <input
                type="number"
                placeholder="Stock"
                value={newProduct.stock}
                onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                required
                className="p-2 border rounded-md"
              />
              <button
                type="submit"
                className="bg-green-600 text-white py-2 rounded-md hover:bg-green-500 transition"
              >
                Add Product
              </button>
            </form>
          )}
        </div>
        <ProductList
          products={filteredInventory}
          onOpenAddModal={(id) => {
            setCurrentAction('add');
            setCurrentProductId(id);
            setIsModalOpen(true);
          }}
          onOpenRemoveModal={(id) => {
            setCurrentAction('remove');
            setCurrentProductId(id);
            setIsModalOpen(true);
          }}
        />
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleStockUpdate}
        actionType={currentAction}
      />
    </>
  );
}

export default InventoryPage;
