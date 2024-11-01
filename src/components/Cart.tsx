import React from 'react';
import { X } from 'lucide-react';

export default function Cart() {
  return (
    <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-lg transform translate-x-full transition-transform duration-300 ease-in-out">
      <div className="p-6 h-full flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Ваш заказ</h2>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="border-b py-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Капучино</h3>
                <p className="text-sm text-gray-600">Стандартный размер</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">350 ₽</p>
                <div className="flex items-center space-x-2 mt-1">
                  <button className="w-6 h-6 bg-gray-100 rounded">-</button>
                  <span>1</span>
                  <button className="w-6 h-6 bg-gray-100 rounded">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-auto">
          <div className="border-t py-4">
            <div className="flex justify-between mb-2">
              <span>Подытог</span>
              <span>350 ₽</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Итого</span>
              <span>350 ₽</span>
            </div>
          </div>
          <button className="w-full bg-[#D4A373] text-white py-3 rounded-md hover:bg-[#BC8C5F] transition duration-300">
            Перейти к оформлению
          </button>
        </div>
      </div>
    </div>
  );
}