import { apiClient } from '../client';
import type {
  WaitlistCreateRequest,
  WaitlistResponse,
  WaitlistConfirmationResponse,
  WaitlistStatsResponse,
  SuccessResponse,
} from '@/types/api';

export const waitlistAPI = {
  /**
   * Join the waitlist
   * POST /api/v1/waitlist/join
   */
  join: async (data: WaitlistCreateRequest) => {
    const response = await apiClient.post<SuccessResponse<WaitlistResponse>>(
      '/waitlist/join',
      data,
      {
        headers: {
          'User-Agent':
            typeof window !== 'undefined'
              ? window.navigator.userAgent
              : 'NextJS-Client',
        },
      }
    );
    return response.data;
  },

  /**
   * Confirm email with token
   * GET /api/v1/waitlist/confirm?token=xxx
   */
  confirm: async (token: string) => {
    const response = await apiClient.get<
      SuccessResponse<WaitlistConfirmationResponse>
    >('/waitlist/confirm', {
      params: { token },
    });
    return response.data;
  },

  /**
   * Get waitlist statistics
   * GET /api/v1/waitlist/stats
   */
  getStats: async () => {
    const response =
      await apiClient.get<SuccessResponse<WaitlistStatsResponse>>(
        '/waitlist/stats'
      );
    return response.data;
  },

  /**
   * Check status by email
   * GET /api/v1/waitlist/check/{email}
   */
  checkStatus: async (email: string) => {
    const response = await apiClient.get<SuccessResponse<WaitlistResponse>>(
      `/waitlist/check/${encodeURIComponent(email)}`
    );
    return response.data;
  },
};
