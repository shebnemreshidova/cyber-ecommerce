interface ModalProps {
    title?: string;
    onClose: () => void;
    children: React.ReactNode;
    isOpen: boolean;
}
const Modal = ({ title, onClose, children, isOpen }: ModalProps) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-gray-400 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
                {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                >
                    &times;
                </button>
                <div>{children}</div>
            </div>
        </div>
    )
}

export default Modal