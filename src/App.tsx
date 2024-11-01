import React from 'react';
import { Coffee, Clock, ShoppingBag, CreditCard } from 'lucide-react';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Cart from './components/Cart';
import TimeSelector from './components/TimeSelector';

function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80")'
      }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Без очередей. Больше времени для себя</h1>
            <p className="text-xl mb-8">Закажите любимый кофе заранее и заберите в удобное для вас время</p>
            <button className="bg-[#D4A373] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#BC8C5F] transition duration-300">
              Сделать заказ
            </button>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Как это работает</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#FAF7F2] rounded-full flex items-center justify-center">
                <Coffee className="w-8 h-8 text-[#D4A373]" />
              </div>
              <h3 className="font-semibold mb-2">Выберите напитки</h3>
              <p className="text-gray-600">Просмотрите меню и выберите любимые напитки</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#FAF7F2] rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-[#D4A373]" />
              </div>
              <h3 className="font-semibold mb-2">Укажите время</h3>
              <p className="text-gray-600">Выберите удобное время получения заказа</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#FAF7F2] rounded-full flex items-center justify-center">
                <CreditCard className="w-8 h-8 text-[#D4A373]" />
              </div>
              <h3 className="font-semibold mb-2">Оплатите онлайн</h3>
              <p className="text-gray-600">Безопасная оплата вашего заказа</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#FAF7F2] rounded-full flex items-center justify-center">
                <ShoppingBag className="w-8 h-8 text-[#D4A373]" />
              </div>
              <h3 className="font-semibold mb-2">Заберите заказ</h3>
              <p className="text-gray-600">Получите заказ без очереди в выбранное время</p>
            </div>
          </div>
        </div>
      </section>

      <Menu />
      <Cart />
      <TimeSelector />
    </div>
  );
}

export default App;