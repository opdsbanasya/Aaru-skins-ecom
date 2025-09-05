import React from "react";
import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();

  const categoryData = [
    {
      name: "Samsung", 
      id: 1, 
      image: "https://www.layers.shop/cdn/shop/files/Untitled-1_0003_Samsung-logo.jpg?v=1673873290&width=1080",
      description: "Premium skins for Galaxy series",
      products: "50+ designs"
    },
    {
      name: "Google", 
      id: 2, 
      image: "https://www.layers.shop/cdn/shop/files/Untitled-1_0013_google-logo-9824.jpg?v=1673873483&width=1080",
      description: "Perfect fit for Pixel phones",
      products: "30+ designs"
    },
    {
      name: "Apple", 
      id: 3, 
      image: "https://www.layers.shop/cdn/shop/files/Untitled-1_0002_Symbol-of-the-iPhone-logo.jpg?v=1673873290&width=1080",
      description: "Elegant designs for iPhone",
      products: "100+ designs"
    },
    {
      name: "Vivo", 
      id: 4, 
      image: "https://www.layers.shop/cdn/shop/files/Untitled-1_0001_Vivo-Logo_cd254c4e-9c28-4522-b2f1-311e46b01ed1.jpg?v=1677084031&width=1080",
      description: "Stylish skins for V series",
      products: "25+ designs"
    },
    {
      name: "Asus", 
      id: 5, 
      image: "https://www.layers.shop/cdn/shop/files/Untitled-1_0014_Asus-Logo-1995-present.jpg?v=1673873483&width=1080",
      description: "Gaming-focused designs",
      products: "15+ designs"
    },
    {
      name: "Oppo", 
      id: 6, 
      image: "https://www.layers.shop/cdn/shop/files/Untitled-1_0006_Oppo-logo.jpg?v=1673873290&width=1080",
      description: "Trendy skins for Find series",
      products: "20+ designs"
    },
    {
      name: "Techno", 
      id: 7, 
      image: "https://www.layers.shop/cdn/shop/files/Untitled_design_7.png?v=1712143042&width=1080",
      description: "Affordable premium skins",
      products: "10+ designs"
    },
    {
      name: "Realme", 
      id: 8, 
      image: "https://www.layers.shop/cdn/shop/files/Untitled-1_0004_realme-logo-png-3.jpg?v=1673873290&width=1080",
      description: "Youth-oriented designs",
      products: "18+ designs"
    },
    {
      name: "OnePlus", 
      id: 9, 
      image: "https://www.layers.shop/cdn/shop/files/Untitled-1_0007_OnePlus-Logo.jpg?v=1673873290&width=1080",
      description: "Never Settle designs",
      products: "22+ designs"
    }
  ];

  const handleCategoryClick = (category) => {
    navigate(`/products/${category.name.toLowerCase()}`, { state: { category } });
  };

  return (
    <section className="section-padding bg-gradient-to-b from-white to-secondary-50">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            Shop by Brand
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Choose Your <span className="text-gradient">Device Brand</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto leading-relaxed">
            Find premium skins designed specifically for your device. Each brand collection features 
            unique designs crafted for perfect fit and style.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryData.map((category, index) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category)}
              className="group cursor-pointer card hover:shadow-large transform hover:-translate-y-2 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-body">
                <div className="flex items-center justify-center mb-6">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50 p-4 group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-secondary-600 mb-3 text-sm">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-primary-600">
                    <span className="text-sm font-medium">{category.products}</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-4 rounded-2xl shadow-large hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <span className="font-medium">Can't find your device?</span>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
