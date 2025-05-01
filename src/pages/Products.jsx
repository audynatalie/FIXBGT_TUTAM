import { useState, useEffect } from 'react';
import Card from '../components/Card';

// Data produk dummy untuk menampilkan contoh
const dummyProducts = [
  {
    id: 1,
    name: 'Sneakers Casual Pria',
    category: 'Sepatu',
    price: 450000,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1587&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Kemeja Formal Slim Fit',
    category: 'Pakaian',
    price: 320000,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1525&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Jaket Denim Premium',
    category: 'Pakaian',
    price: 650000,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=1587&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Tas Ransel Kanvas',
    category: 'Aksesoris',
    price: 299000,
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=1588&auto=format&fit=crop'
  },
  {
    id: 5,
    name: 'Jam Tangan Analog Klasik',
    category: 'Aksesoris',
    price: 850000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1588&auto=format&fit=crop'
  },
  {
    id: 6,
    name: 'Kaos Polos Premium',
    category: 'Pakaian',
    price: 150000,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1587&auto=format&fit=crop'
  },
  {
    id: 7,
    name: 'Celana Jeans Slim Fit',
    category: 'Pakaian',
    price: 380000,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?q=80&w=1480&auto=format&fit=crop'
  },
  {
    id: 8,
    name: 'Topi Trucker Casual',
    category: 'Aksesoris',
    price: 120000,
    rating: 4.1,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1636&auto=format&fit=crop'
  }
];

// Kategori produk
const categories = ['Semua', 'Pakaian', 'Sepatu', 'Aksesoris'];

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Simulasi pengambilan data dari API
    setTimeout(() => {
      setProducts(dummyProducts);
      setLoading(false);
    }, 800);
  }, []);

  // Filter produk berdasarkan kategori dan pencarian
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'Semua' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 sm:mb-0">Produk Kami</h1>
          
          <div className="w-full sm:w-auto">
            <input
              type="text"
              placeholder="Cari produk..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-xl text-gray-600">Tidak ada produk yang ditemukan</h2>
            <p className="mt-2 text-gray-500">Coba ubah filter atau kata kunci pencarian Anda</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;