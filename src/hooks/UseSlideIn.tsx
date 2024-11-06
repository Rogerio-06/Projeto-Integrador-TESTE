import { useEffect, useState } from 'react';

export function useSlideIn(direction: 'left' | 'right' = 'left', duration = 0.8) {
  const [style, setStyle] = useState<React.CSSProperties>({
    opacity: 0,
    transform: `translateX(${direction === 'left' ? '-100%' : '100%'})`,
  });

  useEffect(() => {
    const animationStyles = {
      opacity: 1,
      transform: 'translateX(0)',
      transition: `all ${duration}s ease-out`,
    };
    setStyle(animationStyles);
  }, [direction, duration]);

  return style;
}
    