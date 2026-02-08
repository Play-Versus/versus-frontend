'use client';

import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useCallback } from 'react';

export const useRecaptcha = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const getToken = useCallback(
    async (action: string = 'submit') => {
      if (!executeRecaptcha) {
        throw new Error('reCAPTCHA not loaded');
      }

      try {
        const token = await executeRecaptcha(action);
        return token;
      } catch (error) {
        console.error('reCAPTCHA error:', error);
        throw new Error('Failed to verify reCAPTCHA');
      }
    },
    [executeRecaptcha]
  );

  return { getToken };
};
