"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  console.log("Hero component rendered");

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-gray-800 pt-20"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-yellow-300/10 rounded-full blur-2xl animate-ping"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badges */}
            <div className="flex flex-wrap gap-3 animate-slideInLeft animation-delay-100">
              <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                <span className="w-3 h-3 mr-1">🛡️</span>DVLA Approved
              </div>
              <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                <span className="w-3 h-3 mr-1">⭐</span>5 Star Reviews
              </div>
              <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                <span className="w-3 h-3 mr-1">🏆</span>Premium Quality
              </div>
            </div>

            {/* Main heading */}
            <div className="space-y-4 animate-slideInLeft animation-delay-200">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight transform hover:scale-105 transition-transform duration-500">
                Premium<br />
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent animate-pulse">
                  Number Plates
                </span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-md">
                UK's leading supplier of legal car plates. From 3D Gel to 6D Laser Cut - we create premium number plates with DVLA compliance and 3 years warranty.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slideInLeft animation-delay-300">
              <Button 
                asChild
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 text-lg group transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-bounce"
              >
                <a href="https://numberplatemaster.com/collections/all" target="_blank" rel="noopener noreferrer">
                  Order Your Plates
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6 text-sm text-white/80 animate-slideInLeft animation-delay-400">
              <div className="flex items-center gap-2 transform hover:scale-105 transition-transform duration-300">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                DVLA Approved & Road Legal
              </div>
              <div className="flex items-center gap-2 transform hover:scale-105 transition-transform duration-300">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                3 Years Quality Warranty
              </div>
              <div className="flex items-center gap-2 transform hover:scale-105 transition-transform duration-300">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                3D, 4D, 5D & 6D Available
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 animate-slideInRight">
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 transform hover:scale-105 transition-all duration-300 hover:bg-white/10">
                <div className="text-2xl font-bold text-red-400">50k+</div>
                <div className="text-sm text-white/70">Plates Delivered</div>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 transform hover:scale-105 transition-all duration-300 hover:bg-white/10">
                <div className="text-2xl font-bold text-red-400">3Y</div>
                <div className="text-sm text-white/70">Warranty</div>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 transform hover:scale-105 transition-all duration-300 hover:bg-white/10">
                <div className="text-2xl font-bold text-red-400">FREE</div>
                <div className="text-sm text-white/70">UK Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
