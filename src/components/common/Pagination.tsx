import { Link } from "react-router-dom";

const Pagination = () => {
  return (
    <div className="flex gap-4 justify-center mt-8 pb-16">
      <Link
        to="#"
        className="w-[187px] h-14 px-8 py-4 border border-gray-300 bg-white rounded-4xl font-(family-name:--font-anonymous) font-bold text-base uppercase text-center whitespace-nowrap">
        Prejšnja stran
      </Link>

      <Link
        to="#"
        className="w-[187px] h-14 px-2 py-4 bg-[#002A00] text-[#D0DD26] rounded-4xl font-(family-name:--font-anonymous) font-bold text-base uppercase text-center whitespace-nowrap">
        Naslednja stran
      </Link>
    </div>
  );
};

export default Pagination;
