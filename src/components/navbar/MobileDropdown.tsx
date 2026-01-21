import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

type MobileDropdownProps = {
  data: string[];
  open: boolean;
   closeDropdown: () => void;
  closeMenu: () => void;
};

const MobileDropdown = ({ data, open , closeDropdown, closeMenu}: MobileDropdownProps) => {
 
  const handleClose=()=>{
     closeDropdown();
  closeMenu();
  }

  return (
    <div className="md:hidden bg-gray-100">
      <div className="grid grid-cols-2 pl-10 py-1 gap-1">
        {data.map((item, i) => (
          <Link
            key={i}
            href={`/holidays/${item.toLowerCase()}`}
            onClick={handleClose}
            className="text-sm py-1 hover:text-[#3fa72a]"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileDropdown;