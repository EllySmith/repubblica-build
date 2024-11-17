import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal } from '../store/modalSlice';

function Modal() {
  const dispatch = useDispatch();

  // Access modal data from Redux store
  const title = useSelector((state) => state.modal.title);
  const body = useSelector((state) => state.modal.body);
  const date = useSelector((state) => state.modal.date);
  const isOpen = useSelector((state) => state.modal.isOpen);

  // Close modal handler
  const handleClose = () => {
    dispatch(toggleModal(false));
  };

  // Return null if the modal is not open
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold"
        >
          &times;
        </button>

        {/* Modal Content */}
        <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
        <p className="text-gray-700 mb-4">{body}</p>
        <p className="text-gray-500 text-sm text-right">{date}</p>
      </div>
    </div>
  );
}

export default Modal;

