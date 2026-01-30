import { CountdownTimer } from "./CountdownTimer";

const Banner = () => {
  const targetDate = new Date("2026-02-20T00:00:00");

  return (
    <div className="h-[40px] flex px-4 pl-[41%] bg-[#6cb63f] font-(family-name:--font-anonymous) text-white">
      <div className="w-full max-w-[492px] h-[40px] flex items-center justify-between text-[14px] font-bold">
        <p className="flex items-center gap-2">
          Akcija domen .si še <CountdownTimer targetDate={targetDate} />
        </p>
        <button type="button">PREVERI ZDAJ!</button>
      </div>
    </div>
  );
};

export default Banner;
