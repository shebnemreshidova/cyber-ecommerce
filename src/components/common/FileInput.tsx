import { forwardRef, useState } from "react";
import { UploadCloud } from "lucide-react";

interface UploadInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

const UploadInput = forwardRef<HTMLInputElement, UploadInputProps>(
    ({ label, error, ...props }, ref) => {
        const [fileName, setFileName] = useState<string | null>(null);
        return (
            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">{label}</label>

                <label
                    className={`flex flex-col items-center justify-center gap-2 cursor-pointer
          border-2 border-dashed rounded-lg p-6 transition
          ${error
                            ? "border-red-500"
                            : "border-gray-300 hover:border-blue-500"
                        }`}
                >
                    <UploadCloud className="w-8 h-8 text-gray-500" />
                    <span className="text-sm text-gray-600">
                        {fileName ? fileName : "Click to upload image"}
                    </span>

                    <input
                        type="file"
                        name="file"
                        accept="image/png, image/jpeg"
                        ref={ref}
                        {...props}
                        className="hidden"
                        onChange={(e) => {
                            const file = e.target.files?.[0];

                            if (file) {
                                const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];
                                if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
                                    alert("Only JPG, PNG, WEBP allowed");
                                    e.target.value = "";
                                    setFileName(null);
                                    return;
                                }

                                setFileName(file.name);
                            } else {
                                setFileName(null);
                            }

                            props.onChange?.(e);
                        }}
                    />

                </label>

                {error && <span className="text-red-500 text-xs">{error}</span>}
            </div>
        );
    }
);

UploadInput.displayName = "UploadInput";

export default UploadInput;
