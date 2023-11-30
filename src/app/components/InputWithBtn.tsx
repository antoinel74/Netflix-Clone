import React, { ChangeEvent } from "react";

interface InputWithButtonProps {
  value: string;
  onChange: (value: string) => void;
  onSave: () => void;
  isEditing: boolean;
  handleEdit: () => void;
  placeholder: string;
}

const InputWithButton: React.FC<InputWithButtonProps> = ({
  value,
  onChange,
  onSave,
  isEditing,
  handleEdit,
  placeholder,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <>
      {isEditing ? (
        <div className="flex items-center">
          <input
            type="text"
            value={value}
            onChange={handleChange}
            className="bg-transparent focus:outline-none border-solid border rounded-sm border-neutral-700"
            placeholder={placeholder}
          />
          <button
            className="ml-2 text-green-400 hover:text-green-600"
            onClick={onSave}
          >
            Save
          </button>
        </div>
      ) : (
        <p>
          {value}{" "}
          <button className="hover:text-gray-400" onClick={handleEdit}>
            {" "}
            <img
              src="/icons/pen-solid.svg"
              className="ml-2 w-1/2 opacity-70 hover:opacity-100"
            />
          </button>
        </p>
      )}
    </>
  );
};

export default InputWithButton;
