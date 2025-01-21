import { SiBackblaze } from "react-icons/si";

interface CardGroupProps{
  inverse?:boolean
}
function CardGroup({inverse}:CardGroupProps) {
  return (
    <div className={inverse ? "card-group-inverse": "card-group"}>
      {[...Array(6)].map((_, index) => (
        <div key={index} className="card flex font-bold text-lg">
          <SiBackblaze /> Emagrecimento!
        </div>
      ))}
    </div>
  );
}

export function Belt() {
  return (
    <div className="relative flex flex-col">
        <div
          className={`absolute flex w-[110vw] -left-4 carousel bg-gradient-to-r from-[#E3C496] to-[#7D6C52] py-6 items-center rotate-2 shadow drop-shadow-md`}
        >
          <CardGroup />
          <CardGroup />
        </div>
        <div
          className={`absolute flex w-[110vw] -left-4 carousel bg-gradient-to-r from-[#7D6C52] to-[#E3C496] py-6 items-center -rotate-2 shadow drop-shadow-md`}
        >
          <CardGroup inverse/>
          <CardGroup inverse/>
        </div>
    </div>
  );
}
