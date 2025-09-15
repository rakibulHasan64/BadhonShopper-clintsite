import { useEffect, useState } from "react";

/**
 * useScrollRange hook
 * 
 * @param minY minimum scroll Y
 * @param maxY maximum scroll Y
 * @returns boolean => true if scroll is within range
 */
export function useScrollRange(minY: number, maxY: number): boolean {
   const [inRange, setInRange] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         const scrollY = window.scrollY;
         setInRange(scrollY >= minY && scrollY <= maxY);
      };
      handleScroll();

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, [minY, maxY]);

   return inRange;
}
