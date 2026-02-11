// src/app/confirm/page.tsx
import { waitlistAPI } from '@/lib/api/endpoints/waitlist';
import ConfirmationSuccess from '@/components/email_confirmation/ConfirmationSuccess';
import ConfirmationInvalid from '@/components/email_confirmation/ConfirmationInvalid';
import ConfirmationError from '@/components/email_confirmation/ConfirmationError';
import type { Metadata } from 'next';

// Prevent search engines from indexing confirmation pages
export const metadata: Metadata = {
  title: 'Email Confirmation',
  robots: { index: false, follow: false },
};

interface PageProps {
  searchParams: Promise<{ token?: string }>;
}

export default async function ConfirmPage({ searchParams }: PageProps) {
  const { token } = await searchParams;

  // Case 1: No token in URL
  if (!token || token.trim() === '') {
    return <ConfirmationError />;
  }
  try {
    // Case 2: Token present — validate against API
    const result = await waitlistAPI.confirm(token);
    if (result.success === true) {
      return <ConfirmationSuccess data={result.data} />;
    }

    if (result.success === false) {
      return <ConfirmationInvalid />;
    }
  } catch (error) {
    // Case 3: Server error
    return <ConfirmationError />;
  }
}
