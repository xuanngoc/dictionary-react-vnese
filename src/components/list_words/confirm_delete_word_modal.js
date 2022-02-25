import Modal from 'react-modal';
import { ReactComponent as CloseIcon } from '../../icons/close.svg';
import { useEffect, useState} from 'react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    border: '1px solid',
    transform: 'translate(-50%, -50%)',
  },
};

const ConfirmDeleteWordModal = ({wordDeleting, submitDelete, modalIsOpen, closeModal}) => {
  const [wordWrite, setWordWrite] = useState();
  const [phonetic, setPhonetic] = useState();
  const [meaning, setMeaning] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    submitDelete();
  }

  useEffect(() => {
    setWordWrite(wordDeleting?.word)
    setPhonetic(wordDeleting?.phonetic)
    setMeaning(wordDeleting?.meaning)
  }, [wordDeleting])

  return (
    <>
    { wordDeleting ?  
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Example Modal"
      >
        <div className="flex justify-end">
          <button className="border w-6" onClick={closeModal}>
            <CloseIcon />
          </button>
        </div>
        <h2 className="text-xl text-center">Xóa từ</h2>
        
        <form className="mx-12" onSubmit={onSubmit}>
          <div className="mt-6 text-gray-900 text-xm font-bold mb-2">
            {wordWrite} - {phonetic} -  {meaning}
          </div>
      
          <input className="mt-6 bg-zinc-500 hover:bg-zinc-700 px-7 py-3 m-auto block rounded" type="submit" value="Xóa" />
        </form>
      </Modal>
      : <></>
    }
    </>
  )
}

export default ConfirmDeleteWordModal;