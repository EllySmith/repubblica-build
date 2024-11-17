import React from 'react';
import dayjs from 'dayjs';
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal } from '../../store/modalSlice';

function Modal() {
     const dispatch = useDispatch();

     const title = useSelector((state) => state.modal.title);
     const body = useSelector((state) => state.modal.body);
     const date = useSelector((state) => state.modal.date);
     const link = useSelector((state) => state.modal.link);
     const isOpen = useSelector((state) => state.modal.isOpen);
     const formattedDate = dayjs(date).format('DD MMMM YYYY HH:mm:ss');

     const handleClose = () => {
          dispatch(toggleModal(false));
     };

     if (!isOpen) return null;

     return (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
               <div className="bg-white w-full max-w-lg p-6 shadow-lg relative">
                    <button
                         onClick={handleClose}
                         className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold"
                    >
                         &times;
                    </button>

                    <h2 className="text-2xl font-bold mb-4">{title}</h2>
                    <p className="text-gray-700">{body}</p>
                    <p className="text-gray-500 text-sm text-right mt-6">{formattedDate}</p>
                    <div className='flex justify-between items-center mt-6'>
                         <button onClick={handleClose} className="bg-black text-white px-4 py-2 rounded hover:bg-black">
                              Chiudi
                         </button>
                         <button className="bg-black text-white px-4 py-2 rounded hover:bg-black">
                              <a href={link} target="_blank" rel="noopener noreferrer">
                                   Vai al sito della Repubblica
                              </a>
                         </button>
                    </div>
               </div>
          </div>
     );
}

export default Modal;

