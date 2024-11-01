import React from 'react';
import { Coffee, ShoppingBag, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Coffee className="w-8 h-8 text-[#D4A373]" />
            <span className="font-bold text-xl">КофеЭкспресс</span>
          </div>
          
          <div className="flex items-center space-x-8">
            <a href="#menu" className="text-gray-600 hover:text-[#D4A373]">Меню</a>
            <a href="#about" className="text-gray-600 hover:text-[#D4A373]">О нас</a>
            <a href="#contact" className="text-gray-600 hover:text-[#D4A373]">Контакты</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ShoppingBag className="w-6 h-6 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <User className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}