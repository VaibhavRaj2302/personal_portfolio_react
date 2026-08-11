import React from "react";

export type ButtonType = "primary" | "danger" | "secondary" | "outline";

export interface ModalAction {
  label: string;
  type?: ButtonType;

  onClick: () => void;
  disabled?: boolean;
}

export interface GenericModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  content: React.ReactNode;
  actions?: ModalAction[];
}

const BUTTON_STYLES: Record<ButtonType, string> = {
  primary: "bg-blue-600 hover:bg-blue-700 text-white border-transparent",
  danger: "bg-red-600 hover:bg-red-700 text-white border-transparent",
  secondary: "bg-gray-600 hover:bg-gray-700 text-white border-transparent",
  outline: "bg-transparent text-gray-700 border-gray-300 hover:bg-gray-50",
};

export const GenericModal: React.FC<GenericModalProps> = ({
  isOpen,
  onClose,
  title,
  content,
  actions = [],
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl flex flex-col items-center text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        {title && (
          <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
        )}

        {/* Centered Content */}
        <div className="w-full text-gray-600 text-sm mb-6">
          {typeof content === "string" ? <p>{content}</p> : content}
        </div>

        {/* Action Buttons */}
        {actions.length > 0 && (
          <div className="flex w-full items-center justify-center gap-3">
            {actions.map((action, idx) => {
              const type = action.type || "primary";
              const buttonStyle = BUTTON_STYLES[type];

              return (
                <button
                  key={idx}
                  onClick={action.onClick}
                  disabled={action.disabled}
                  className={`px-4 py-2 text-sm font-medium rounded-md border transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${buttonStyle}`}
                >
                  {action.label}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default GenericModal;
