import { Link } from "react-router-dom";

const Pagination = () => {
  return (
    <div className="flex gap-4 flex justify-center mt-8 pb-16">
      <Link
        to="#"
        className="w-[187px] h-[56px] px-8 py-4 border border-gray-300 bg-white rounded-[32px] font-(family-name:--font-anonymous) font-bold text-[16px] text-center whitespace-nowrap">
        PREJŠNJA STRAN
      </Link>

      <Link
        to="#"
        className="w-[187px] h-[56px] px-8 py-4 bg-[#002A00] text-[#D0DD26] rounded-[32px] font-(family-name:--font-anonymous) font-bold text-[16px] text-center whitespace-nowrap">
        NASLEDNJA STRAN
      </Link>
    </div>
  );
};

export default Pagination;
