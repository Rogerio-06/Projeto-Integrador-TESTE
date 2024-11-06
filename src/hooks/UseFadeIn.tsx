import { useMemo } from 'react';

export function useFadeIn({ duration = 1.8, ease = 'easeInOut' } = {}) {
  const variants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: (delay = 0) => ({
        opacity: 1,
        transition: { duration, delay, ease },
      }),
    }),
    [duration, ease]
  );

  return variants;
}