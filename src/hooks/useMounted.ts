"use client";

import { useEffect, useState } from "react";

/**
 * Hook to check if component is mounted (client-side)
 * Prevents hydration mismatches
 */
export const useMounted = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
};