import FileDownload from "../../assets/icons/ui/file-download.png";
import type { BlogDownloadCardProps } from "../../types/types";

const BlogUploadCard = ({ text, size }: BlogDownloadCardProps) => {
  return (
    <div className="w-full max-w-[384px] h-[144px] flex items-center justify-center gap-7 bg-white border-[1px] border-[#D0DD26] shadow-[16px_24px_32px_0px_rgba(108,182,63,0.2)] p-6">
      <img
        src={FileDownload}
        alt="Prenesi datoteko"
        className="cursor-pointer"
      />
      <div className="flex flex-col font-bold text-[#002A00] text-[14px] font-(family-name:--font-anonymous)">
        <p className="text-center max-w-[180px]"> {text}</p>
        <p className="text-[12px]">{size}</p>
      </div>
    </div>
  );
};

export default BlogUploadCard;
