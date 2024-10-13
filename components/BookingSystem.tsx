"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";

const BookingSystem = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState<string | undefined>();
  const [court, setCourt] = useState<string | undefined>();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [hours, setHours] = useState<number | undefined>();

  const handleBooking = () => {
    if (!date || !time || !court || !name || !email || !phone || !hours) {
      toast({
        title: "Booking Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send this data to your backend API
    console.log("Booking:", { date, time, court, name, email, phone, hours });
    toast({
      title: "Booking Confirmed",
      description: `Your booking for ${court} on ${date.toDateString()} at ${time} for ${hours} hour(s) has been confirmed.`,
    });
  };
  const unavailableHours = ["10:00", "14:00"]; // Example of unavailable hours

  return (
    <section id="booking" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Booking
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Reserve Your Court
          </p>
          <p className="mt-4 text-xl text-gray-500">
            Choose your preferred date to make a reservation.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Select Date
            </label>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Select Time
            </label>
            <div className="grid grid-cols-4 gap-2">
              {Array.from({ length: 14 }, (_, i) => i + 8).map((hour) => {
                const hourString = `${hour}:00`;
                const isDisabled = unavailableHours.includes(hourString);
                return (
                  <button
                    key={hour}
                    onClick={() => !isDisabled && setTime(hourString)}
                    className={`p-2 rounded-md border ${
                      isDisabled
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-white hover:bg-gray-100"
                    }`}
                    disabled={isDisabled}
                  >
                    {hourString}
                  </button>
                );
              })}
            </div>
          </div>
          {/* <div>
            <label className="block text-sm font-medium text-gray-700">
              Booking Hours
            </label>
            <input
              type="number"
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              min="1"
            />
          </div> */}
        </div>
        <div className="mt-8">
          <Button onClick={handleBooking} className="w-full">
            Confirm Booking
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BookingSystem;
