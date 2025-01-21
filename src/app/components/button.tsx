import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export function Button() {
  const phoneNumber = '5554999272907';
  const message = 'Olá, gostaria de participar do desafio 30 dias para emagrecimento!'; 
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

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
