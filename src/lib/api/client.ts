import axios, { AxiosError, AxiosInstance } from 'axios';
import type { ErrorResponse } from '@/types/api';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION || 'v1';

class APIClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: `${API_BASE_URL}/api/${API_VERSION}`,
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 10000,
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // Response interceptor for error handling
    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError<ErrorResponse>) => {
        // Handle validation errors from FastAPI
        if (error.response?.status === 422 && error.response.data?.detail) {
          const validationErrors = error.response.data.detail
            .map((err) => err.msg)
            .join(', ');
          throw new Error(validationErrors);
        }

        // Handle other API errors
        if (error.response?.data) {
          throw new Error(
            typeof error.response.data === 'string'
              ? error.response.data
              : 'API Error'
          );
        }

        // Network errors
        throw new Error(error.message || 'Network error');
      }
    );
  }

  getInstance() {
    return this.client;
  }
}

export const apiClient = new APIClient().getInstance();
