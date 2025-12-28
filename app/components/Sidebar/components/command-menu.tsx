import { Command } from "cmdk";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FiEye, FiLink, FiLogOut, FiPhone, FiPlus } from "react-icons/fi";

export const CommandMenu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [value, setValue] = useState("");

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div
      className="fixed inset-0 bg-stone-950/50"
      onClick={() => setOpen(false)}
    >
      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Global Command Menu"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-lg shadow-xl border-stone-300 border overflow-hidden w-full max-w-lg mx-auto mt-12"
        >
        <Command.Input
          value={value}
          onValueChange={setValue}
          placeholder="What do you need?"
          className="relative border-b border-stone-300 p-3 text-lg w-full placeholder:text-stone-400 focus:outline-none"
        />
        <Command.List className="p-3">
          <Command.Empty>
            No results found for{" "}
            <span className="text-violet-500">`{value}`</span>
          </Command.Empty>

          <Command.Group heading="Team">
            <Command.Item>
              <FiPlus />
              Invite Member
            </Command.Item>
            <Command.Item>
              <FiEye />
              See Org Chart
            </Command.Item>
          </Command.Group>

          <Command.Group
            heading="Integrations">
            <Command.Item>
              <FiLink />
              Link Services
            </Command.Item>
            <Command.Item >
              <FiPhone />
              Contact Support
            </Command.Item>
          </Command.Group>

          <Command.Item>
            <FiLogOut />
            Sign Out
          </Command.Item>
        </Command.List>
        </div>
      </Command.Dialog>
    </div>
  );
};