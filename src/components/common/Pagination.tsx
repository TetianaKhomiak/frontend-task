import { Link } from "react-router-dom";

const Pagination = () => {
  return (
    <div className="flex gap-4 justify-center mt-8 pb-16">
      <Link
        to="#"
        className="w-[187px] h-14 px-8 py-4 border border-gray-300 bg-white rounded-4xl font-(family-name:--font-anonymous) font-bold text-base uppercase text-center whitespace-nowrap dark:bg-[#1A2233] dark:text-[#E5E7EB] dark:border-[#2B3448]">
        Prejšnja stran
      </Link>

      <Link
        to="#"
        className="w-[187px] h-14 px-2 py-4 bg-[#002A00] text-[#D0DD26] rounded-4xl font-(family-name:--font-anonymous) font-bold text-base uppercase text-center whitespace-nowrap dark:text-[#E3F04A] dark:bg-[#0B3D0B]">
        Naslednja stran
      </Link>
    </div>
  );
};

export default Pagination;
