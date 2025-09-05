import React from "react";

function Features() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Fast & Free Delivery",
      description: "Lightning-fast delivery across India with no shipping charges on orders above ₹299. Get your skins delivered within 2-3 business days.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Quality Assurance",
      description: "Premium vinyl material with bubble-free application and long-lasting durability. Each skin undergoes rigorous quality testing.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Easy Returns",
      description: "Not satisfied? Return your unused skin within 7 days for a full refund. Customer satisfaction is our top priority.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.196l1.421 2.862 3.158.458-2.286 2.284.539 3.16L12 9.612l-2.832 1.348.539-3.16-2.286-2.284 3.158-.458L12 2.196z" />
        </svg>
      ),
      title: "Custom Designs",
      description: "Want something unique? We offer custom design services to create personalized skins that reflect your individual style.",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-secondary-50 to-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Premium <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto leading-relaxed">
            We are committed to delivering exceptional quality and service that exceeds your expectations 
            with every purchase.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} text-white shadow-large group-hover:shadow-xl transform group-hover:-translate-y-2 transition-all duration-300`}>
                  {feature.icon}
                </div>
                {/* Decorative circle */}
                <div className={`absolute inset-0 w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${feature.color} opacity-20 scale-150 group-hover:scale-175 transition-transform duration-500`}></div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover indicator */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`w-12 h-1 mx-auto rounded-full bg-gradient-to-r ${feature.color}`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-white rounded-2xl shadow-soft">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">10K+</div>
            <div className="text-secondary-600 text-sm">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-600 mb-2">500+</div>
            <div className="text-secondary-600 text-sm">Unique Designs</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">99%</div>
            <div className="text-secondary-600 text-sm">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-secondary-600 text-sm">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
