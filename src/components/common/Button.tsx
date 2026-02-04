import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "danger";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant = "primary", children, className, ...props }, ref) => {
        const baseStyles = "px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-lg font-medium cursor-pointer flex items-center justify-center gap-2 transition-all duration-200 text-sm sm:text-base active:scale-95";
        
        const variantStyles = {
            primary: "bg-blue-500 text-white hover:bg-blue-600 shadow-md hover:shadow-lg hover:-translate-y-0.5",
            secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 shadow-sm hover:shadow-md hover:-translate-y-0.5",
            danger: "bg-red-500 text-white hover:bg-red-600 shadow-md hover:shadow-lg hover:-translate-y-0.5",
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