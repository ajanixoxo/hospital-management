// ConfirmDeleteModal.tsx
import React from 'react';

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-lg font-bold text-gray-800">Confirm Delete</h2>
        <p className="mt-2 text-gray-600">Are you sure you want to delete this patient?</p>
        <div className="flex justify-end mt-4 space-x-2">
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
          >
            Yes, Delete
          </button>
          <button
            onClick={onCancel}
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
