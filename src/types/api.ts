// Base response wrapper
export interface SuccessResponse<T> {
  success: boolean;
  message: string;
  data: T | null;
}

// Error response
export interface ErrorResponse {
  detail?: Array<{
    loc: Array<string | number>;
    msg: string;
    type: string;
  }>;
}

// Waitlist schemas (from OpenAPI)
export interface WaitlistCreateRequest {
  email: string;
  name: string;
  source?: string | null;
  captcha_token: string; // CAPTCHA verification token
  website?: string | null; // Honeypot field
}

export type WaitlistStatus = 'pending' | 'confirmed' | 'rejected' | 'spam';

export interface WaitlistResponse {
  id: string;
  email: string;
  name: string;
  status: WaitlistStatus;
  position: number | null;
  confirmed_at: string | null;
  created_at: string;
  updated_at: string | null;
}

export interface WaitlistConfirmationResponse {
  message: string;
  position: number | null;
  total_confirmed: number;
}

export interface WaitlistStatsResponse {
  total_entries: number;
  confirmed_entries: number;
  pending_entries: number;
  spam_blocked: number;
  last_24h: number;
}
