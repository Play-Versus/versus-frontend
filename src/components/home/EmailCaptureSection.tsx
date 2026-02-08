'use client';

import { useState, FormEvent } from 'react';
import { useScrollAnimation } from '@/hooks';
import { Button, Input } from '@/components/ui';

export const EmailCaptureSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Emails submitted:', { email, name });
    // Add your email submission logic here
  };

  return (
    <section id="email-capture" ref={ref} className="bg-black py-20">
      <div className="container mx-auto px-6 md:px-8">
        <div
          className={`mx-auto max-w-4xl min-w-full overflow-hidden rounded-3xl bg-[url('/images/assets/email_capture_background.jpeg')] bg-cover bg-center ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <div className="bg-black/50 py-12 text-center backdrop-blur-xs">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              It's almost Game Day
            </h2>
            <p className="mb-8 text-lg text-gray-200">
              Launching soon. Stay ready.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center justify-center gap-4 text-white md:flex-row md:flex-wrap md:justify-center md:gap-6 lg:flex-nowrap"
            >
              <Input
                type="name"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-white/10 text-white placeholder:text-gray-300 md:w-56 lg:w-64"
              />
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white/10 text-white placeholder:text-gray-300 md:w-56 lg:w-64"
              />

              <Button className="min-w-40 rounded-2xl bg-green-500 px-4 py-3 font-semibold text-black transition hover:scale-105 hover:bg-green-400">
                Join the Waitlist
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
