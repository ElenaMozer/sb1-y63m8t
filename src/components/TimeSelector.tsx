import React from 'react';
import { Clock, X } from 'lucide-react';

export default function TimeSelector() {
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 8; hour <= 20; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        slots.push({
          time: `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`,
          available: Math.random() > 0.3 // Имитация доступности
        });
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 w-96">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Выберите время получения</h2>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-4">
            <Clock className="w-5 h-5 text-[#D4A373]" />
            <span className="font-semibold">Доступное время сегодня</span>
          </div>
          
          <div className="grid grid-cols-3 gap-2 max-h-64 overflow-y-auto">
            {timeSlots.map((slot, index) => (
              <button
                key={index}
                disabled={!slot.available}
                className={`p-2 rounded ${
                  slot.available
                    ? 'bg-[#FAF7F2] hover:bg-[#D4A373] hover:text-white'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
              >
                {slot.time}
              </button>
            ))}
          </div>
        </div>

        <button className="w-full bg-[#D4A373] text-white py-3 rounded-md hover:bg-[#BC8C5F] transition duration-300">
          Подтвердить время
        </button>
      </div>
    </div>
  );
}