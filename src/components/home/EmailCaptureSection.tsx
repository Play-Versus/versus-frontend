'use client';

import { useState, FormEvent } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useScrollAnimation } from '@/hooks';
import { Button, Input } from '@/components/ui';
import { waitlistAPI } from '@/lib/api/endpoints/waitlist';
import type { WaitlistCreateRequest } from '@/types/api';

export const EmailCaptureSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!executeRecaptcha) {
      setError('reCAPTCHA not loaded. Please refresh the page.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Get reCAPTCHA token
      const captchaToken = await executeRecaptcha('waitlist_join');

      // Prepare payload matching OpenAPI spec
      const payload: WaitlistCreateRequest = {
        email: email.trim(),
        name: name.trim(),
        captcha_token: captchaToken,
        source: 'landing_page', // Optional: track where user came from
        website: '', // Honeypot field - leave empty
      };

      // Submit to API
      const response = await waitlistAPI.join(payload);

      // Success!
      setSuccess(true);
      setEmail('');
      setName('');

      // Log success data (optional)
      console.log('Joined waitlist:', {
        position: response.data?.position,
        status: response.data?.status,
      });

      // Optional: Track analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'waitlist_join', {
          email_domain: email.split('@')[1],
        });
      }
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'Something went wrong';
      setError(message);
      console.error('Waitlist error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Success state
  if (success) {
    return (
      <section id="email-capture" ref={ref} className="bg-black py-20">
        <div className="container mx-auto px-6 md:px-8">
          <div
            className={`mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-green-600 to-green-800 transition-all duration-700 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-12 opacity-0'
            }`}
          >
            <div className="py-16 text-center">
              <div className="mb-6 text-6xl">🎉</div>
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                You're on the list!
              </h2>
              <p className="mb-2 text-lg text-white/90">
                Check your email to confirm your spot.
              </p>
              <p className="text-sm text-white/70">
                Don't see it? Check your spam folder.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="mt-6 text-sm text-white/80 underline hover:text-white"
              >
                Submit another email
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Form state
  return (
    <section id="email-capture" ref={ref} className="bg-black py-20">
      <div className="container mx-auto px-6 md:px-8">
        <div
          className={`mx-auto max-w-4xl min-w-full overflow-hidden rounded-3xl bg-[url('/images/assets/email_capture_background.jpeg')] bg-cover bg-center transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <div className="bg-black/50 py-12 text-center backdrop-blur-sm">
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
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={loading}
                className="w-full bg-white/10 text-white placeholder:text-gray-300 disabled:opacity-50 md:w-56 lg:w-64"
              />
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
                className="w-full bg-white/10 text-white placeholder:text-gray-300 disabled:opacity-50 md:w-56 lg:w-64"
              />
              <Button
                type="submit"
                disabled={loading}
                className="min-w-40 rounded-2xl bg-green-500 px-4 py-3 font-semibold text-black transition hover:scale-105 hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
              >
                {loading ? 'Joining...' : 'Join the Waitlist'}
              </Button>
            </form>

            {/* Error message */}
            {error && (
              <div className="mx-auto mt-6 max-w-md rounded-lg bg-red-500/20 px-4 py-3 text-sm text-red-200 backdrop-blur-sm">
                {error}
              </div>
            )}

            {/* reCAPTCHA notice */}
            <p className="mt-6 text-xs text-gray-300">
              Protected by reCAPTCHA. Google{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-300"
              >
                Privacy Policy
              </a>{' '}
              and{' '}
              <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-300"
              >
                Terms
              </a>{' '}
              apply.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
