import React from 'react';

const menuItems = [
  {
    id: 1,
    name: 'Эспрессо',
    description: 'Насыщенный и крепкий классический эспрессо',
    price: 180,
    image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    name: 'Капучино',
    description: 'Эспрессо с нежной молочной пенкой',
    price: 350,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    name: 'Латте',
    description: 'Эспрессо с горячим молоком и легкой пенкой',
    price: 380,
    image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    name: 'Раф',
    description: 'Эспрессо со взбитыми сливками и ванильным сахаром',
    price: 420,
    image: 'https://images.unsplash.com/photo-1585494156145-1c60a4fe952b?auto=format&fit=crop&q=80'
  },
  {
    id: 5,
    name: 'Флэт Уайт',
    description: 'Двойной эспрессо с молочной микропенкой',
    price: 380,
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&q=80'
  },
  {
    id: 6,
    name: 'Американо',
    description: 'Эспрессо с добавлением горячей воды',
    price: 200,
    image: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&q=80'
  }
];

export default function Menu() {
  return (
    <section className="py-16 bg-[#FAF7F2]" id="menu">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Наше меню</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <span className="text-[#D4A373] font-bold">{item.price} ₽</span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button className="w-full bg-[#D4A373] text-white py-2 rounded-md hover:bg-[#BC8C5F] transition duration-300">
                  В корзину
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}