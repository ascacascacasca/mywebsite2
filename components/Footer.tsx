"use client";

import { Phone, Mail, MapPin, Clock, Star, Shield, Award } from 'lucide-react';

const Footer = () => {
  console.log("Footer component rendered");

  return (
    <div id="contact">
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center">
                <img 
                  src="https://assets.macaly-user-data.dev/bcwabm1u85jv3fwt9rra5p3m/fv93uk1709mfflcw9gsmt1bg/3_9L4KcckISZa1fTt5FOV/progetto-senza-titolo-20-.png" 
                  alt="NumberPlateMaster Logo" 
                  className="h-10 w-auto brightness-110"
                />
              </div>
              <p className="text-white/80 leading-relaxed">
                UK's leading supplier of premium number plates. DVLA compliant, road legal, and backed by our 12 months quality warranty.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="w-4 h-4 text-yellow-400" />
                  <span className="text-white/80">DVLA Approved</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Award className="w-4 h-4 text-yellow-400" />
                  <span className="text-white/80">12 Months Warranty</span>
                </div>
              </div>
            </div>



            {/* Popular Products */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Popular Products</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/80 hover:text-yellow-400 transition-colors">3D Gel Plates</a></li>
                <li><a href="#" className="text-white/80 hover:text-yellow-400 transition-colors">4D Laser Cut</a></li>
                <li><a href="#" className="text-white/80 hover:text-yellow-400 transition-colors">5D Laser Cut</a></li>
                <li><a href="#" className="text-white/80 hover:text-yellow-400 transition-colors">6D Gel Plates</a></li>
                <li><a href="#" className="text-white/80 hover:text-yellow-400 transition-colors">Bevel Style</a></li>
                <li><a href="#" className="text-white/80 hover:text-yellow-400 transition-colors">Standard Plates</a></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">02086 161 655</p>
                    <p className="text-white/70 text-sm">Mon-Fri 9AM-6PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white">numberplatemaster@gmail.com</p>
                    <p className="text-white/70 text-sm">24/7 Email Support</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white">Number Plate Master, Unit 1</p>
                    <p className="text-white">South Harrow Market</p>
                    <p className="text-white">South Harrow, HA2 0EU</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white">24-48 Hour Production</p>
                    <p className="text-white/70 text-sm">Free UK Delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Star className="w-8 h-8 text-yellow-400 mb-2" />
                <div className="text-2xl font-bold text-white">5.0</div>
                <div className="text-white/70 text-sm">Customer Rating</div>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="w-8 h-8 text-yellow-400 mb-2" />
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-white/70 text-sm">DVLA Compliant</div>
              </div>
              <div className="flex flex-col items-center">
                <Award className="w-8 h-8 text-yellow-400 mb-2" />
                <div className="text-2xl font-bold text-white">50k+</div>
                <div className="text-white/70 text-sm">Plates Delivered</div>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-8 h-8 text-yellow-400 mb-2" />
                <div className="text-2xl font-bold text-white">24-48h</div>
                <div className="text-white/70 text-sm">Fast Production</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 bg-black/20">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/70 text-sm">
                © 2024 NumberPlateMaster. All rights reserved. Company Reg: 12345678
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-white/70 hover:text-yellow-400 transition-colors">Privacy Policy</a>
                <a href="#" className="text-white/70 hover:text-yellow-400 transition-colors">Terms & Conditions</a>
                <a href="#" className="text-white/70 hover:text-yellow-400 transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;