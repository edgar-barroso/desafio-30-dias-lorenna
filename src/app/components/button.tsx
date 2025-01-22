import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export function Button() {
  const whatsappLink = `https://chat.whatsapp.com/KT5nZWqqFC3KS2h7PdHqHb`;

  return (
    <Link 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center justify-center p-4 rounded-xl border font-bold gap-2 mb-20 text-nowrap bg-gradient-to-r from-secondary via-primary to-secondary text-white"
    >
      QUERO PARTICIPAR <GoArrowUpRight />
    </Link>
  );
}
