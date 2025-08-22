import * as React from "react";

export type InputSize = "sm" | "md" | "lg";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
  size?: InputSize;
  fullWidth?: boolean;
  className?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    id,
    label,
    error,
    size = "md",
    fullWidth = true,
    className,
    required,
    ...props
  },
  ref
) {
  const uid = React.useId();
  const inputId = id ?? `input-${uid}`;
  const describedBy = error ? `${inputId}-error` : undefined;

  const base =
    "block rounded-lg border bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed";
  const bySize =
    size === "sm"
      ? "h-9 px-3 text-sm"
      : size === "lg"
      ? "h-12 px-4 text-base"
      : "h-10 px-3";
  const border = error ? "border-red-500" : "border-gray-300";
  const width = fullWidth ? "w-full" : "";

  return (
    <div className={fullWidth ? "w-full" : undefined}>
      {label && (
        <label htmlFor={inputId} className="mb-1 block text-sm font-medium text-gray-700">
          {label} {required ? <span className="text-red-600">*</span> : null}
        </label>
      )}

      <input
        id={inputId}
        ref={ref}
        aria-invalid={!!error}
        aria-describedby={describedBy}
        required={required}
        className={[base, bySize, border, width, className].filter(Boolean).join(" ")}
        {...props}
      />

      {error ? (
        <p id={describedBy} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
});
