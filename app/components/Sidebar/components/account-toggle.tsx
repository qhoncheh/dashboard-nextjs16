import { FiChevronDown , FiChevronUp } from "react-icons/fi"

 const AccountToggle = () => {
  return (
    <>
      <div className="border-b border-stone-300 mb-4 mt-2 pb-2">
        <button className="flex items-center w-full gap-3 rounded hover:bg-stone-200 p-2 transition-colors cursor-pointer">
          <img
            src="https://api.dicebear.com/9.x/notionists/svg"
            alt="Avatar"
            className="size-10 rounded shadow shrink-0 bg-violet-500" 
          />

          <div className="flex-1 text-left">
            <span className="block text-sm font-semibold text-stone-900">
              Tom is loading
            </span>
            <span className="block text-xs text-stone-500">
              tom.over@dev
            </span>
          </div>
          <FiChevronDown size={16} className="text-stone-500 absolute right-2 translate-y-[calc(-50%+4px)]" />
          <FiChevronUp size={16} className="text-stone-500 absolute right-2 translate-y-[calc(-50%-4px)]" />
        </button>
      </div>
    </>
  );
};

export default AccountToggle;

