"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CircleCheck } from 'lucide-react';

const Services = () => {
  console.log("Services component rendered");

  const products = [
    {
      title: "3D Gel Plate",
      description: "Premium gel resin letters with raised 3D effect. DVLA compliant and road legal.",
      price: "£39.99",
      originalPrice: "£54.99",
      badge: "POPULAR",
      badgeColor: "bg-green-500",
      emoji: "🏆",
      image: "https://numberplatemaster.com/cdn/shop/files/NPM-3D-6_1024x1024_2x_aee23209-ed4d-4545-89e3-d4b6d2d53cfd.jpg?v=1749369704&width=533",
      features: ["3D Raised Letters", "Weather Resistant", "12 Months Warranty", "DVLA Approved"],
      delay: "0ms",
      link: "https://numberplatemaster.com/products/3d-gel-plate-1"
    },
    {
      title: "4D Laser Cut Plate",
      description: "Precision laser-cut acrylic letters for sharp, clean finish. Professional appearance.",
      price: "£44.98",
      originalPrice: "£69.99",
      badge: "PREMIUM",
      badgeColor: "bg-blue-500",
      emoji: "✨",
      image: "https://numberplatemaster.com/cdn/shop/files/NPM-4D-4_1024x1024_2x_a2882f28-7dc5-4053-8430-bfda7f1234f2.jpg?v=1749371024&width=533",
      features: ["Laser Precision", "Acrylic Letters", "Modern Design", "Road Legal"],
      delay: "100ms",
      link: "https://numberplatemaster.com/products/4d-laser-cut-plate"
    },
    {
      title: "5D Laser Cut Plate",
      description: "Advanced 5D design with superior depth and premium materials.",
      price: "£64.98",
      originalPrice: "£99.99",
      badge: "LUXURY",
      badgeColor: "bg-yellow-500",
      emoji: "💎",
      image: "https://numberplatemaster.com/cdn/shop/files/NPM-5D-3_1024x1024_2x_455e0be2-4a87-45cf-ba85-01756af8224a.jpg?v=1749366896&width=533",
      features: ["5D Technology", "Premium Materials", "Enhanced Depth", "Long Lasting"],
      delay: "200ms",
      link: "https://numberplatemaster.com/products/5d-laser-cut-gel-plate"
    },
    {
      title: "6D Gel Plate",
      description: "Ultimate 6D gel technology for maximum impact and durability.",
      price: "£79.99",
      originalPrice: "£99.99",
      badge: "ULTIMATE",
      badgeColor: "bg-red-500",
      emoji: "👑",
      image: "https://numberplatemaster.com/cdn/shop/files/NPM-6D-3_1024x1024_2x_8e1f4037-f00f-4463-afcb-43678121dfa9.jpg?v=1749375354&width=533",
      features: ["6D Technology", "Maximum Impact", "Superior Quality", "Weather Proof"],
      delay: "300ms",
      link: "https://numberplatemaster.com/products/6d-gel-plate"
    },
    {
      title: "Bevel Style",
      description: "Elegant beveled edges for sophisticated look. Premium choice for luxury vehicles.",
      price: "£79.99",
      originalPrice: "£109.99",
      badge: "ELEGANT",
      badgeColor: "bg-indigo-500",
      emoji: "🎯",
      image: "https://numberplatemaster.com/cdn/shop/files/DSC09721_eecd3163-b0b7-43d7-9df1-3aa94e1be2f3.png?v=1749536855&width=533",
      features: ["Beveled Edges", "Luxury Look", "Premium Quality", "Sophisticated Design"],
      delay: "400ms",
      link: "https://numberplatemaster.com/products/bevel"
    },
    {
      title: "Double 4D Plate",
      description: "Double layer 4D effect for enhanced visibility and style.",
      price: "£64.98",
      originalPrice: "£99.99",
      badge: "ENHANCED",
      badgeColor: "bg-orange-500",
      emoji: "🔥",
      image: "https://numberplatemaster.com/cdn/shop/files/DSC09706_32a38300-db42-401b-b3e4-fe9e692f05fe.png?v=1749537070&width=533",
      features: ["Double Layer", "Enhanced Visibility", "Stylish Design", "DVLA Approved"],
      delay: "500ms",
      link: "https://numberplatemaster.com/products/double-4d"
    },
    {
      title: "Ghost 4D",
      description: "Subtle ghost effect for understated elegance and modern appeal.",
      price: "£69.99",
      originalPrice: "£109.99",
      badge: "SUBTLE",
      badgeColor: "bg-gray-500",
      emoji: "👻",
      image: "https://numberplatemaster.com/cdn/shop/files/DSC09732.png?v=1749536726&width=533",
      features: ["Ghost Effect", "Understated", "Modern Appeal", "Premium Finish"],
      delay: "600ms",
      link: "https://numberplatemaster.com/products/ghost-4d"
    },
    {
      title: "Matt 4D",
      description: "Matte finish 4D plates for non-reflective, sophisticated appearance.",
      price: "£74.98",
      originalPrice: "£109.99",
      badge: "MATTE",
      badgeColor: "bg-slate-500",
      emoji: "🖤",
      image: "https://numberplatemaster.com/cdn/shop/files/GHOST_1024x1024_2x_bd0e8f1a-239b-4a77-a15e-8206533b89d7.jpg?v=1749367633&width=533",
      features: ["Matte Finish", "Non-Reflective", "Sophisticated", "Premium Quality"],
      delay: "700ms",
      link: "https://numberplatemaster.com/products/matte-4d"
    },
    {
      title: "Standard Plate",
      description: "Classic DVLA compliant plates. Reliable, legal, and affordable option.",
      price: "£24.98",
      originalPrice: "£39.99",
      badge: "CLASSIC",
      badgeColor: "bg-green-600",
      emoji: "⭐",
      image: "https://numberplatemaster.com/cdn/shop/files/NPM-Standard-4_1024x1024_2x_83697ec6-1aad-4bdd-9629-53f0d4c8dd36.jpg?v=1749375884&width=533",
      features: ["DVLA Compliant", "Reliable", "Affordable", "Road Legal"],
      delay: "800ms",
      link: "https://numberplatemaster.com/products/standard-plate"
    }
  ];

  return (
    <div id="services">
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slideInUp">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Premium Number Plates
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Choose from our extensive range of premium number plates. All plates are DVLA compliant, road legal, and come with a 3 years warranty.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div 
                key={index}
                className="animate-slideInUp h-full"
                style={{ animationDelay: product.delay }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-yellow-400 transform hover:scale-[1.02] group">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold text-white border-0 ${product.badgeColor}`}>
                        {product.badge}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 text-3xl bg-white/20 backdrop-blur-sm rounded-full p-2">
                      {product.emoji}
                    </div>
                  </div>
                  <div className="flex flex-col p-6 space-y-4">
                    <div>
                      <h3 className="font-semibold text-xl text-gray-900 mb-2">
                        {product.title}
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 pt-0 space-y-6">
                    <div className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-700">
                          <CircleCheck className="w-4 h-4 text-green-600 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-sm text-gray-600">Special Price</div>
                          <div className="flex items-baseline gap-2">
                            <div className="text-2xl font-bold text-gray-900">{product.price}</div>
                            <div className="text-lg text-gray-500 line-through">{product.originalPrice}</div>
                          </div>
                          <div className="text-sm text-gray-600">per pair</div>
                        </div>
                      </div>
                      <Button 
                        asChild
                        className="w-full bg-gray-900 hover:bg-gray-800 text-white group transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <a href={product.link} target="_blank" rel="noopener noreferrer">
                          Order Now
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Help Section */}
          <div className="text-center mt-16 p-8 bg-gradient-to-r from-black to-gray-800 rounded-2xl text-white transform hover:scale-[1.02] transition-all duration-300 shadow-2xl">
            <h3 className="text-2xl font-semibold mb-4">Need Help Choosing?</h3>
            <p className="text-white/90 mb-6 max-w-md mx-auto">
              Our expert team can help you select the perfect plates for your vehicle. Contact us for professional guidance and V5C document assistance.
            </p>
            <div className="flex justify-center">
              <Button 
                asChild 
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <a href="https://numberplatemaster.com/collections/all" target="_blank" rel="noopener noreferrer">
                  Get Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
