import React from 'react';
import ProductTable from './ProductTable';

function ProductList({ products, onOpenAddModal, onOpenRemoveModal }) {
  return (
    <div className="m-4">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-[#737373]">
            <th className="px-4 py-2 text-center">Product Name</th>
            <th className="px-4 py-2 text-center">Category</th>
            <th className="px-4 py-2 text-center">Price</th>
            <th className="px-4 py-2 text-center">Stock</th> {/* Stock Column */}
            <th className="px-4 py-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductTable
              key={product.id}
              product={product}
              onOpenAddModal={onOpenAddModal}
              onOpenRemoveModal={onOpenRemoveModal}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
