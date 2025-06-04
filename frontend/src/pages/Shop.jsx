import React, { useState } from 'react'
import img1 from '../assets/Home Page 2 images/img 1.png'
import img2 from '../assets/Home Page 2 images/img 2.png'
import img3 from '../assets/Home Page 2 images/img 3.png'
import img4 from '../assets/Home Page 2 images/img 4.png'
import img5 from '../assets/Home Page 2 images/img 5.png'
import img6 from '../assets/Home Page 2 images/img 6.png'
import img7 from '../assets/Home Page 2 images/img 7.png'
import img8 from '../assets/Home Page 2 images/img 8.png'

const Shop = () => {
  // State for filters
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedPriceRange, setSelectedPriceRange] = useState('all')
  const [selectedType, setSelectedType] = useState('all')
  
  // Modal state
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Product data with enhanced properties
  const allProducts = [
    { id: 1, img: img1, name: 'Plain White Shirt', price: 29.00, category: 'women', type: 'clothing' },
    { id: 2, img: img2, name: 'Demin Jacket', price: 69.00, category: 'both', type: 'clothing' },
    { id: 3, img: img3, name: 'Black Polo Shirt', price: 49.00, category: 'women', type: 'clothing' },
    { id: 4, img: img4, name: 'Blue Sweatshirt', price: 79.00, category: 'women', type: 'clothing' },
    { id: 5, img: img5, name: 'Blue Plain Shirt', price: 49.00, category: 'men', type: 'clothing' },
    { id: 6, img: img6, name: 'Dark Blue Shirt', price: 89.00, category: 'men', type: 'clothing' },
    { id: 7, img: img7, name: 'Outcast T-shirt', price: 19.00, category: 'men', type: 'clothing' },
    { id: 8, img: img8, name: 'Polo Plain Shirt', price: 29.00, category: 'men', type: 'clothing' },
    // Additional sample products for different types
    { id: 9, img: img1, name: 'Leather Sneakers', price: 120.00, category: 'both', type: 'footwear' },
    { id: 10, img: img2, name: 'Canvas Shoes', price: 85.00, category: 'both', type: 'footwear' },
    { id: 11, img: img3, name: 'Leather Handbag', price: 150.00, category: 'women', type: 'bags' },
    { id: 12, img: img4, name: 'Messenger Bag', price: 95.00, category: 'men', type: 'bags' },
  ]

  // Filter functions
  const filterByPrice = (price) => {
    switch(selectedPriceRange) {
      case '0-25': return price >= 0 && price <= 25
      case '26-50': return price >= 26 && price <= 50
      case '51-75': return price >= 51 && price <= 75
      case '76-100': return price >= 76 && price <= 100
      case '100+': return price > 100
      default: return true
    }
  }

  const filterByCategory = (category) => {
    if (selectedCategory === 'all') return true
    return category === selectedCategory || category === 'both'
  }

  const filterByType = (type) => {
    if (selectedType === 'all') return true
    return type === selectedType
  }

  // Get filtered products
  const getFilteredProducts = () => {
    return allProducts.filter(product => 
      filterByPrice(product.price) && 
      filterByCategory(product.category) && 
      filterByType(product.type)
    )
  }

  const filteredProducts = getFilteredProducts()

  // Get products by category for sections
  const getAllProducts = () => filteredProducts
  const getMenProducts = () => filteredProducts.filter(p => p.category === 'men' || p.category === 'both')
  const getWomenProducts = () => filteredProducts.filter(p => p.category === 'women' || p.category === 'both')

  // Modal functions
  const openModal = (product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden' // Prevent background scrolling
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
    document.body.style.overflow = 'unset' // Restore scrolling
  }

  // Product component with click handler
  const ProductCard = ({ product }) => (
    <div 
      className='flex flex-col justify-center items-center cursor-pointer hover:transform hover:scale-105 transition-transform duration-200'
      onClick={() => openModal(product)}
    >
      <img src={product.img} alt="" className='w-48 h-56 md:w-56 md:h-64 lg:w-64 lg:h-72 object-cover' />
      <h4 className='text-center mt-2 text-sm md:text-base'>{product.name}</h4>
      <h5 className='text-center text-sm md:text-base font-semibold'>${product.price.toFixed(2)}</h5>
    </div>
  )

  // Modal component
  const ProductModal = () => {
    if (!isModalOpen || !selectedProduct) return null

    return (
      <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
        <div className='bg-white rounded-lg max-w-lg w-full max-h-screen overflow-y-auto relative'>
          {/* Close button */}
          <button 
            onClick={closeModal}
            className='absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold z-10'
          >
            ×
          </button>
          
          {/* Modal content */}
          <div className='p-6'>
            <div className='flex flex-col items-center'>
              <img 
                src={selectedProduct.img} 
                alt={selectedProduct.name} 
                className='w-full max-w-sm h-80 object-cover rounded-lg mb-4'
              />
              <h2 className='text-2xl font-bold text-center mb-2'>{selectedProduct.name}</h2>
              <p className='text-3xl font-semibold text-green-600 mb-4'>${selectedProduct.price.toFixed(2)}</p>
              
              {/* Product details */}
              <div className='w-full space-y-2 mb-6'>
                <div className='flex justify-between'>
                  <span className='font-medium'>Category:</span>
                  <span className='capitalize'>{selectedProduct.category}</span>
                </div>
                <div className='flex justify-between'>
                  <span className='font-medium'>Type:</span>
                  <span className='capitalize'>{selectedProduct.type}</span>
                </div>
              </div>
              
              {/* Action buttons */}
              <div className='flex gap-4 w-full'>
                <button className='flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium'>
                  Add to Cart
                </button>
                <button className='flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors font-medium'>
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='w-[100vw] h-fit overflow-x-hidden'>
      <div className="bg-shopm w-full h-56 sm:h-64 md:h-72 lg:h-80 about1 relative overflow-hidden">
        <h3 className='absolute top-32 sm:top-40 md:top-48 lg:top-56 left-2 sm:left-4 md:left-8 lg:left-16 right-2 sm:right-4 text-white text-xs sm:text-xs md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight break-words'>
          KHAFI_LEATHERAFFAIRS COLLECTIONS
        </h3>
      </div>

      {/* Filter Section */}
      <div className='w-full bg-gray-50 py-6 px-4 md:px-8 lg:px-12 xl:px-20 mt-8'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-lg md:text-xl font-semibold mb-4'>Filter Products</h2>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {/* Category Filter */}
            <div>
              <label className='block text-sm font-medium mb-2'>Category</label>
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className='w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              >
                <option value="all">All Categories</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
              </select>
            </div>

            {/* Price Filter */}
            <div>
              <label className='block text-sm font-medium mb-2'>Price Range</label>
              <select 
                value={selectedPriceRange} 
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className='w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              >
                <option value="all">All Prices</option>
                <option value="0-25">$0 - $25</option>
                <option value="26-50">$26 - $50</option>
                <option value="51-75">$51 - $75</option>
                <option value="76-100">$76 - $100</option>
                <option value="100+">$100+</option>
              </select>
            </div>

            {/* Type Filter */}
            <div>
              <label className='block text-sm font-medium mb-2'>Product Type</label>
              <select 
                value={selectedType} 
                onChange={(e) => setSelectedType(e.target.value)}
                className='w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              >
                <option value="all">All Types</option>
                <option value="clothing">Clothing</option>
                <option value="footwear">Footwear</option>
                <option value="bags">Bags</option>
              </select>
            </div>
          </div>

          {/* Clear Filters Button */}
          <button 
            onClick={() => {
              setSelectedCategory('all')
              setSelectedPriceRange('all')
              setSelectedType('all')
            }}
            className='mt-4 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors'
          >
            Clear All Filters
          </button>

          {/* Results Count */}
          <p className='mt-4 text-sm text-gray-600'>
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      {/* All Products Section */}
      <div className='page-2 w-full min-h-230 pt-6 md:pt-10 pb-6'>
        <header>
          <h1 className='mb-6 md:mb-10 text-center text-xl md:text-2xl lg:text-3xl px-4'>All Products</h1>
        </header>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-auto gap-8 md:gap-12 lg:gap-16 w-full px-4 md:px-8 lg:px-12 xl:px-20'>
          {getAllProducts().map(product => (
            <ProductCard key={`all-${product.id}`} product={product} />
          ))}
        </div>
        {getAllProducts().length === 0 && (
          <p className='text-center text-gray-500 mt-8'>No products found matching your filters.</p>
        )}
      </div>

      {/* Men's Products Section */}
      {getMenProducts().length > 0 && (
        <div className='page-2 w-full min-h-230 pt-6 md:pt-10 pb-6'>
          <header>
            <h1 className='mb-6 md:mb-10 text-center text-xl md:text-2xl lg:text-3xl px-4'>Men's Products</h1>
          </header>
          
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-auto gap-8 md:gap-12 lg:gap-16 w-full px-4 md:px-8 lg:px-12 xl:px-20'>
            {getMenProducts().map(product => (
              <ProductCard key={`men-${product.id}`} product={product} />
            ))}
          </div>
        </div>
      )}

      {/* Women's Products Section */}
      {getWomenProducts().length > 0 && (
        <div className='page-2 w-full min-h-230 pt-6 md:pt-10 pb-6'>
          <header>
            <h1 className='mb-6 md:mb-10 text-center text-xl md:text-2xl lg:text-3xl px-4'>Women's Products</h1>
          </header>
          
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-auto gap-8 md:gap-12 lg:gap-16 w-full px-4 md:px-8 lg:px-12 xl:px-20'>
            {getWomenProducts().map(product => (
              <ProductCard key={`women-${product.id}`} product={product} />
            ))}
          </div>
        </div>
      )}

      {/* Modal */}
      <ProductModal />
    </div>
  )
}

export default Shop