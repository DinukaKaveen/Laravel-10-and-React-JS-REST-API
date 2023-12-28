import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const result = await axios.get("http://localhost:8000/api/products");
    setProducts(result.data.products);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:8000/api/product/delete/${id}`);
    loadProducts();
  };

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {product.name}
                </th>
                <td className="px-6 py-4">{product.qty}</td>
                <td className="px-6 py-4">{product.price}</td>
                <td className="px-6 py-4">
                  <Link
                    to={`/product/edit/${product.id}`}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    EDIT
                  </Link>
                  &nbsp;&nbsp;
                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;
