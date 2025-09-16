// tagConfig.ts
import { FiAward, FiStar, FiZap } from "react-icons/fi";

export interface TagBadge {
   label: string;
   color: string;
   icon: JSX.Element;
}

export const tagConfig: Record<string, TagBadge> = {
   TOP_SALES: {
      label: "Top Sale",
      color: "bg-pink-600 hover:bg-pink-700",
      icon: <FiAward className="text-[12px] md:text-xl" />,
   },
   NEW_ARRIVAL: {
      label: "New Arrival",
      color: "bg-green-600 hover:bg-green-700",
      icon: <FiStar className="text-[12px] md:text-xl" />,
   },
   FEATURED: {
      label: "Featured",
      color: "bg-blue-600 hover:bg-blue-700",
      icon: <FiZap className="text-[12px] md:text-xl" />,
   },
};
