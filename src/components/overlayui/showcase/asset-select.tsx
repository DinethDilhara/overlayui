interface AssetOption {
  label: string;
  value: string;
  preview?: string;
}

interface AssetSelectProps {
  value: string;
  options: AssetOption[];
  onChange: (value: string) => void;
}

export function AssetSelect({
  value,
  options,
  onChange,
}: AssetSelectProps) {
  return (
    <select
      value={value}
      onChange={(event) =>
        onChange(event.target.value)
      }
      className="
        h-10
        w-full
        rounded-md
        border
        bg-background
        px-3
        text-sm
        outline-none
        focus:border-ring
        focus:ring-2
        focus:ring-ring/20
      "
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}