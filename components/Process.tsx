"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Shield, Clock, Truck, CircleCheck, ArrowRight } from 'lucide-react';

const Process = () => {
  console.log("Process component rendered");

  const steps = [
    {
      number: "01",
      icon: Star,
      title: "Choose Your Style",
      description: "Select from our premium range of 3D, 4D, 5D, and 6D number plates. All designs are DVLA compliant and road legal.",
      features: ["DVLA Compliant", "Road Legal", "Premium Materials"]
    },
    {
      number: "02",
      icon: Shield,
      title: "Enter Your Registration",
      description: "Provide your vehicle registration number and we'll create your plates with precision and attention to detail.",
      features: ["Secure Process", "Quality Check", "Perfect Fit"]
    },
    {
      number: "03",
      icon: Clock,
      title: "Fast Production",
      description: "Our expert team manufactures your plates using premium materials and advanced techniques within 24-48 hours.",
      features: ["24-48 Hour Production", "Expert Craftsmanship", "Quality Materials"]
    },
    {
      number: "04",
      icon: Truck,
      title: "Free UK Delivery",
      description: "We deliver your premium number plates anywhere in the UK for free, with tracking and secure packaging.",
      features: ["Free UK Delivery", "Secure Packaging", "Tracking Included"]
    }
  ];

  return (
    <div id="process">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slideInDown">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-yellow-100 text-yellow-800 border-yellow-200 mb-4">
              How It Works
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Simple 4-Step Process
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Getting your premium number plates is simple. Follow our easy 4-step process and receive your DVLA compliant plates in just days.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isLast = index === steps.length - 1;
              
              return (
                <div key={index} className="relative animate-slideInUp animation-delay-200" style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-yellow-400 transform hover:scale-105">
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl font-bold text-black">{step.number}</span>
                        </div>
                        {!isLast && (
                          <div className="hidden lg:block absolute top-8 left-full w-8">
                            <ArrowRight className="w-6 h-6 text-yellow-400 mx-auto" />
                          </div>
                        )}
                      </div>
                      
                      <div className="flex justify-center mb-4">
                        <IconComponent className="w-8 h-8 text-yellow-500" />
                      </div>
                      
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {step.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm">
                          {step.description}
                        </p>
                      </div>
                      
                      <div className="space-y-2 pt-4 border-t border-gray-100">
                        {step.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                            <CircleCheck className="w-4 h-4 text-green-500 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gray-900 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-white/90 mb-6 max-w-md mx-auto">
                Join thousands of satisfied customers who trust NumberPlateMaster for their premium plates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg transition-colors">
                  <a href="https://numberplatemaster.com/collections/all" target="_blank" rel="noopener noreferrer">
                    Start Your Order
                  </a>
                </Button>
                <Button asChild className="border border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg transition-colors bg-transparent">
                  <a href="https://numberplatemaster.com/collections/all" target="_blank" rel="noopener noreferrer">
                    View Gallery
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;