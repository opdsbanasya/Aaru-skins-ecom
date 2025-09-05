import React from "react";
import { useNavigate } from "react-router-dom";

function LatestProduct() {
  const latestProductData = [
    { 
      name: "Golden Skull", 
      price: 399, 
      image: "https://www.layers.shop/cdn/shop/files/14_pro_shikara_1_d6bf76d0-23c7-4e1a-881f-29d31ae56de0.png?v=1717071389&width=1540",
      category: "Premium",
      rating: 4.8,
      isNew: true
    },
    { 
      name: "Chaos", 
      price: 359, 
      image: "https://www.layers.shop/cdn/shop/files/Chaos_Skin_1cd9e72c-0658-4f98-8064-ac3e0b052ba3.png?v=1711951803&width=840",
      category: "Dark",
      rating: 4.9,
      isNew: false
    },
    { 
      name: "Cybernatic Charge", 
      price: 429, 
      image: "https://www.layers.shop/cdn/shop/files/Cybernetic_Charge_WB.png?v=1714375353&width=1540",
      category: "Cyber",
      rating: 4.7,
      isNew: true
    },
    { 
      name: "Before Sunset", 
      price: 499, 
      image: "https://www.layers.shop/cdn/shop/files/Before_sunset.webp?v=1700557615&width=1540",
      category: "Nature",
      rating: 4.8,
      isNew: false
    },
    { 
      name: "Judgement Day", 
      price: 419, 
      image: "https://www.layers.shop/cdn/shop/files/14_pro_grafiiti_copy.png?v=1713942370&width=640",
      category: "Dark",
      rating: 4.9,
      isNew: true
    },
    { 
      name: "GameBoi", 
      price: 799, 
      image: "https://www.layers.shop/cdn/shop/files/14_pro_gameboi_wb_33f02124-21ac-4c9b-aeff-a9e4a49e9c78.png?v=1710911152&width=1540",
      category: "Retro",
      rating: 4.8,
      isNew: false
    },
    { 
      name: "Concrete Rock", 
      price: 479, 
      image: "https://www.layers.shop/cdn/shop/files/14_pro_concrete.png?v=1711961547&width=1540",
      category: "Texture",
      rating: 4.6,
      isNew: false
    },
    { 
      name: "Vector Velocity", 
      price: 579, 
      image: "https://www.layers.shop/cdn/shop/files/Vector_Velocity_WB.png?v=1714375347&width=1540",
      category: "Abstract",
      rating: 4.7,
      isNew: true
    }
  ];

  const navigate = useNavigate();

  const handleProductClick = (product) => {
    navigate(`/product/${product.name}`, { state: { product } });
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Premium': 'bg-accent-100 text-accent-700',
      'Dark': 'bg-secondary-100 text-secondary-700',
      'Cyber': 'bg-primary-100 text-primary-700',
      'Nature': 'bg-green-100 text-green-700',
      'Retro': 'bg-orange-100 text-orange-700',
      'Texture': 'bg-purple-100 text-purple-700',
      'Abstract': 'bg-pink-100 text-pink-700'
    };
    return colors[category] || 'bg-secondary-100 text-secondary-700';
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-medium mb-4">
            Latest Collection
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Trending <span className="text-gradient">Phone Skins</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto leading-relaxed">
            Discover our newest arrivals featuring cutting-edge designs and premium materials 
            that perfectly complement your device.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {latestProductData.map((product, index) => (
            <div
              key={index}
              onClick={() => handleProductClick(product)}
              className="group cursor-pointer card hover:shadow-large transform hover:-translate-y-2 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-t-xl">
                {/* Product Image */}
                <div className="aspect-[4/5] bg-gradient-to-br from-secondary-50 to-primary-50 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Overlay Elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                  {product.isNew && (
                    <span className="px-3 py-1 bg-accent-500 text-white text-xs font-medium rounded-full">
                      New
                    </span>
                  )}
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(product.category)}`}>
                    {product.category}
                  </span>
                </div>

                {/* Quick Action */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <button className="p-2 bg-white/90 hover:bg-white rounded-full shadow-medium transition-colors duration-200">
                    <svg className="w-5 h-5 text-secondary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="card-body">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors duration-300 leading-tight">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-1 text-xs text-yellow-500">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span className="font-medium text-secondary-600">{product.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary-600">₹{product.price}</span>
                    <span className="text-sm text-secondary-500 line-through">₹{Math.round(product.price * 1.4)}</span>
                  </div>
                  <button className="opacity-0 group-hover:opacity-100 p-2 bg-primary-50 hover:bg-primary-100 text-primary-600 rounded-lg transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9m-9 0h9" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button
            onClick={() => navigate('/products')}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-glow"
          >
            View All Products
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default LatestProduct;
