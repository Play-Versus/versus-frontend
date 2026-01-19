"use client";

import { useState, FormEvent } from "react";
import { useScrollAnimation } from "@/hooks";
import { Button, Input } from "@/components/ui";

export const EmailCaptureSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [email, setEmail] = useState("");
  const [friendEmail, setFriendEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Emails submitted:", { email, friendEmail });
    // Add your email submission logic here
  };

  return (
    <section id="email-capture" ref={ref} className="bg-black py-20">
      <div className="container mx-auto px-6 md:px-8">
        <div
          className={`mx-auto min-w-full max-w-4xl overflow-hidden rounded-3xl bg-[url('/images/assets/pexels-thirdman-5247207.jpg')] bg-center bg-cover ${isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
            }`}
        >
          <div className="text-center backdrop-blur-sm py-12 ">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              It's almost Game Day
            </h2>
            <p className="mb-8 text-lg text-gray-300">
              Launching soon. Stay ready.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 justify-center items-center sm:flex-row sm:justify-center"
            >
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className=" min-w-full md:min-w-64"
              />


              <Button className="bg-green-500 min-w-40 px-4 py-3 rounded-2xl font-semibold text-black transition hover:bg-green-400 hover:scale-105">Join the Waitlist</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};