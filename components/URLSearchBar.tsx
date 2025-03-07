import { Button, CloseButton, Input, Space } from "@mantine/core";
import { IconUnlink } from "@tabler/icons-react";

interface URLSearchBarProps {
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onGet: () => void;
}

export default function URLSearchBar({
  placeholder,
  value,
  setValue,
  onGet,
}: URLSearchBarProps) {
  return (
   <div></div>
  );
}
