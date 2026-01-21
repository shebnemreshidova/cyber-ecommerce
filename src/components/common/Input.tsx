import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, ...props }, ref) => {
        return (
            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">{label}</label>
                <input
                    ref={ref}
                    {...props}
                    className={`border p-2 rounded-md focus:outline-none focus:border-2 focus:border-blue-500 ${error ? "border-red-500" : "border-gray-300"
                        }`}
                />
                {error && <span className="text-red-500 text-xs">{error}</span>}
            </div>
        );
    }
);

Input.displayName = "Input";

export default Input;
