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
    <div className="flex flex-col max-w-[800px] m-auto">
      <div className="w-full flex items-center space-x-2">
        {/* Input field */}
        <Input
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
          placeholder={placeholder}
          leftSection={<IconUnlink size={16} />}
          className="flex-1"
          radius="md"
        />

        {/* CloseButton, only visible when there is text */}
        {value && (
          <CloseButton
            onClick={() => setValue("")}
            className="cursor-pointer"
            bg={"gray"}
          />
        )}
      </div>

      <Space m={10} />
      {/* Get Button */}
      <Button variant="default" onClick={onGet} className="w-full" radius="md">
        Get
      </Button>
    </div>
  );
}
