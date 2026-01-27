import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "danger";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant = "primary", children, className, ...props }, ref) => {
        const baseStyles = "px-4 py-2 rounded-md font-medium transition-colors duration-200 cursor-pointer flex items-center gap-2";
        const variantStyles = {
            primary: "bg-blue-500 text-white hover:bg-blue-600",
            secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
            danger: "bg-red-500 text-white hover:bg-red-600",
        };

        return (
            <button 
            
                ref={ref}
                {...props}
                className={`${baseStyles} ${variantStyles[variant]} ${className ?? ""}`}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";

export default Button;
