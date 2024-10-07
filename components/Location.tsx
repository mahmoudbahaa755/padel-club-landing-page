'use client';

import { useState } from 'react';
import { MapPin } from 'lucide-react';

const Location = () => {
  const [showMap, setShowMap] = useState(false);

  return (
    <section id="location" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Location</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Find Us Here
          </p>
        </div>
        <div className="mt-10">
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <MapPin className="h-5 w-5" />
            <p>123 Padel Street, Sportsville, SP 12345</p>
          </div>
          <div className="mt-6">
            <button
              onClick={() => setShowMap(!showMap)}
              className="mx-auto flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              {showMap ? 'Hide Map' : 'Show Map'}
            </button>
          </div>
          {showMap && (
            <div className="mt-6 aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937604!2d2.292292615509614!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1621531788378!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Location;