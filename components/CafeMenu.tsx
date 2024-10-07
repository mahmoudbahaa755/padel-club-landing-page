'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const menuItems = {
  drinks: [
    { name: 'Espresso', price: 2.5 },
    { name: 'Cappuccino', price: 3.5 },
    { name: 'Latte', price: 3.5 },
    { name: 'Fresh Orange Juice', price: 4 },
    { name: 'Smoothie of the Day', price: 5 },
  ],
  snacks: [
    { name: 'Energy Bar', price: 2 },
    { name: 'Fruit Salad', price: 4 },
    { name: 'Protein Shake', price: 5 },
    { name: 'Granola Yogurt Parfait', price: 4.5 },
  ],
  meals: [
    { name: 'Chicken Caesar Salad', price: 8 },
    { name: 'Veggie Wrap', price: 7 },
    { name: 'Tuna Sandwich', price: 6.5 },
    { name: 'Quinoa Bowl', price: 9 },
  ],
};

const CafeMenu = () => {
  const [activeTab, setActiveTab] = useState('drinks');

  return (
    <section id="cafe" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Café Menu</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Fuel Your Game
          </p>
          <p className="mt-4 text-xl text-gray-500">
            Enjoy our selection of healthy and delicious options to keep you energized on and off the court.
          </p>
        </div>
        <div className="mt-12">
          <Tabs defaultValue="drinks" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="drinks">Drinks</TabsTrigger>
              <TabsTrigger value="snacks">Snacks</TabsTrigger>
              <TabsTrigger value="meals">Meals</TabsTrigger>
            </TabsList>
            {Object.entries(menuItems).map(([category, items]) => (
              <TabsContent key={category} value={category}>
                <ul className="divide-y divide-gray-200">
                  {items.map((item) => (
                    <li key={item.name} className="py-4 flex justify-between">
                      <span className="text-lg font-medium text-gray-900">{item.name}</span>
                      <span className="text-lg font-medium text-gray-500">${item.price.toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default CafeMenu;