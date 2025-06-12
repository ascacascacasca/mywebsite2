"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  console.log("Reviews component rendered");

  const reviews = [
    {
      name: "James Wilson",
      location: "London",
      product: "4D Laser Cut",
      review: "Absolutely brilliant service! The 4D plates look fantastic on my BMW. Quality is exceptional and delivery was super fast. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Sarah Mitchell",
      location: "Manchester",
      product: "3D Gel Plate",
      review: "Outstanding quality and fantastic customer service. The 3D gel plates exceeded my expectations. Will definitely order again!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612c5c7?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "David Thompson",
      location: "Birmingham",
      product: "5D Laser Cut",
      review: "Professional service from start to finish. The plates are perfect, exactly what I wanted. Great value for money and fast delivery.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Emma Clarke",
      location: "Liverpool",
      product: "4D Shadow",
      review: "Amazing quality plates! The shadow effect looks incredible. Customer service was excellent and the whole process was seamless.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Michael Roberts",
      location: "Leeds",
      product: "6D Gel Plate",
      review: "Best number plates I've ever bought. The quality is superb and they look amazing on my car. Delivery was quick and packaging was excellent.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Lisa Brown",
      location: "Glasgow",
      product: "Bevel Style",
      review: "Fantastic experience! The plates are top quality and the customer service is outstanding. Will recommend to all my friends.",
      avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <div id="reviews">
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slideInDown">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Join thousands of satisfied customers who trust NumberPlateMaster for premium quality plates and exceptional service.
            </p>
            
            <div className="mt-8 flex flex-col items-center gap-2 animate-slideInUp animation-delay-300">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 hover:scale-110 transition-transform duration-300" />
                ))}
              </div>
              <p className="text-white/80">5.0 out of 5 based on 2,000+ reviews</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 animate-slideInUp transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-yellow-400" />
                  </div>
                  
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-white/90 leading-relaxed mb-4">
                    "{review.review}"
                  </p>
                  
                  <div className="border-t border-white/10 pt-4">
                    <div className="font-semibold text-white">{review.name}</div>
                    <div className="text-white/70 text-sm">{review.location}</div>
                    <div className="text-yellow-400 text-sm font-medium mt-1">{review.product}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-3xl font-bold text-yellow-400 mb-2">50,000+</div>
              <div className="text-white/80">Plates Delivered</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold text-yellow-400 mb-2">12 Months</div>
              <div className="text-white/80">Quality Warranty</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
              <div className="text-white/80">DVLA Compliant</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold text-yellow-400 mb-2">5 Star</div>
              <div className="text-white/80">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;