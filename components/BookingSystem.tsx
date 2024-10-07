'use client';

import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from '@/components/ui/use-toast';

const BookingSystem = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState<string | undefined>();
  const [court, setCourt] = useState<string | undefined>();

  const handleBooking = () => {
    if (!date || !time || !court) {
      toast({
        title: 'Booking Error',
        description: 'Please select a date, time, and court.',
        variant: 'destructive',
      });
      return;
    }

    // Here you would typically send this data to your backend API
    console.log('Booking:', { date, time, court });
    toast({
      title: 'Booking Confirmed',
      description: `Your booking for ${court} on ${date.toDateString()} at ${time} has been confirmed.`,
    });
  };

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
            Choose your preferred date, time, and court to make a reservation.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
            <Select onValueChange={setTime}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 14 }, (_, i) => i + 8).map((hour) => (
                  <SelectItem key={hour} value={`${hour}:00`}>
                    {hour}:00
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Select Court
            </label>
            <Select onValueChange={setCourt}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select court" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Court 1">Court 1</SelectItem>
                <SelectItem value="Court 2">Court 2</SelectItem>
                <SelectItem value="Court 3">Court 3</SelectItem>
                <SelectItem value="Court 4">Court 4</SelectItem>
              </SelectContent>
            </Select>
          </div>
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
