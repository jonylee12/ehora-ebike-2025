import React, { useState } from 'react'
import './Products.css'
import ProductCard from '../components/ProductCard'

const allProducts = [
  {
    id: 1,
    title: 'Eahora Romeo Ultra II',
    rating: 5.0,
    reviews: 14,
    priceNew: 3599,
    priceOld: 3999,
    specs: '60V 5000W / 4800Wh Pouch-Cell',
    colors: 2,
    type: 'Moped Electric Bikes',
    stock: true,
    image: '/images/bike1.jpg',
  },
  {
    id: 2,
    title: 'Eahora Romeo Ultra',
    rating: 5.0,
    reviews: 7,
    priceNew: 2599,
    priceOld: 2999,
    specs: '60V 3000W / 4200Wh Pouch-Cell',
    colors: 2,
    type: 'Moped Electric Bikes',
    stock: true,
    image: '/images/bike2.jpg',
  },
  {
    id: 3,
    title: 'Eahora Romeo Pro II 2025',
    rating: 4.9,
    reviews: 60,
    priceNew: 2899,
    priceOld: 3299,
    specs: '52V 3000W / 3640Wh Pouch-Cell',
    colors: 3,
    type: 'Moped Electric Bikes',
    stock: false,
    image: '/images/bike3.jpg',
  }
]

const Products = () => {
  const [filters, setFilters] = useState({
    inStock: false,
    outOfStock: false,
    type: '',
    maxPrice: 4000,
  })

  const filtered = allProducts.filter((product) => {
    const stockMatch =
      (filters.inStock && product.stock) ||
      (filters.outOfStock && !product.stock) ||
      (!filters.inStock && !filters.outOfStock)

    const typeMatch = filters.type === '' || product.type === filters.type
    const priceMatch = product.priceNew <= filters.maxPrice

    return stockMatch && typeMatch && priceMatch
  })

  return (
    <div className="products-page-grid">
      <aside className="filters">
        <h4>Filters</h4>
        <div className="filter-group">
          <label>
            <input
              type="checkbox"
              checked={filters.inStock}
              onChange={(e) =>
                setFilters({ ...filters, inStock: e.target.checked })
              }
            />
            In Stock
          </label>
          <label>
            <input
              type="checkbox"
              checked={filters.outOfStock}
              onChange={(e) =>
                setFilters({ ...filters, outOfStock: e.target.checked })
              }
            />
            Out of Stock
          </label>
        </div>
        <div className="filter-group">
          <label>Product Type:</label>
          <select
            value={filters.type}
            onChange={(e) =>
              setFilters({ ...filters, type: e.target.value })
            }
          >
            <option value="">All</option>
            <option value="Moped Electric Bikes">Moped Electric Bikes</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Max Price: ${filters.maxPrice}</label>
          <input
            type="range"
            min="0"
            max="4000"
            step="100"
            value={filters.maxPrice}
            onChange={(e) =>
              setFilters({ ...filters, maxPrice: Number(e.target.value) })
            }
          />
        </div>
      </aside>

      <section className="products-list">
        <h2>Romeo Version</h2>
        <div className="products-grid">
          {filtered.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Products
