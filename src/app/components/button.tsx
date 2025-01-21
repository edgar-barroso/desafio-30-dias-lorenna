import { GoArrowUpRight } from "react-icons/go";

export function Button() {
  return (
    <button className="flex items-center justify-center p-4 rounded-xl border  font-bold gap-2 mb-20 text-nowrap bg-gradient-to-r from-secondary  via-primary to-secondary">
      QUERO PARTICIPAR <GoArrowUpRight />
    </button>
  );
}
