import React from "react";
import { FaTimes } from "react-icons/fa";
interface DiagnosisCategoryModalProp {
  isOpen: boolean;
  // onConfirm: () => void;
  onClose: () => void;
}
const NewDiagnosisCategoryModal: React.FC<DiagnosisCategoryModalProp> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between pb-9 border-b">
          <h3>New Diagnosis Category</h3>
          <span onClick={onClose} className="cursor-pointer">
            <FaTimes />
          </span>
        </div>
        <div className="mt-7">
          <div className="flex flex-col gap-2">
            <label htmlFor="">Diagnosis Category:</label>
            <input
              type="text"
              placeholder="Diagnosis Category"
              className="px-3 py-2 h-10 rounded-md border "
            />
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <label htmlFor="">Description:</label>
            <textarea name="" id="" className="border h-28"></textarea>
          </div>
          <div className="flex gap-2 justify-end mt-3">
            <button className="px-6 py-2 rounded-md text-white bg-blue-600 ">
              Save
            </button>
            <button
              className="px-3 py-2 rounded-md text-black bg-gray-300"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewDiagnosisCategoryModal;
