import { PricingType } from "@/data/tools";

const options: { value: PricingType | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "free", label: "Free" },
  { value: "freemium", label: "Freemium" },
  { value: "paid", label: "Paid" },
];

export default function PricingFilter({
  value,
  onChange,
}: {
  value: PricingType | "all";
  onChange: (v: PricingType | "all") => void;
}) {
  return (
    <div className="flex gap-2">
      {options.map(opt => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            value === opt.value
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
