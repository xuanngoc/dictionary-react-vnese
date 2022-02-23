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

const EditWordModal = ({wordEditing, modalIsOpen, closeModal}) => {
  const [wordWrite, setWordWrite] = useState();
  const [phonetic, setPhonetic] = useState();
  const [meaning, setMeaning] = useState();
  
  return (
    <>
    { wordEditing ?  
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex justify-end">
          <button className="border " onClick={closeModal}>
            <CloseIcon />
          </button>
        </div>
        <h2 className="text-xl text-center">Sửa từ</h2>
        
        <form className="mx-12">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Từ
            </label>
            <input className=" border rounded  py-2 px-3 text-gray-700 leading-tight focus:shadow-outline" type="text" value={wordEditing.word}  />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Phiên âm
            </label>
            <input className=" border rounded  py-2 px-3 text-gray-700 leading-tight focus:shadow-outline" type="text" value={wordEditing.phonetic}/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Ngữ nghĩa
            </label>
            <input className=" border rounded  py-2 px-3 text-gray-700 leading-tight focus:shadow-outline" type="text" value={wordEditing.meaning} />
          </div>
      
          <button className="bg-zinc-500 hover:bg-zinc-700 px-7 py-3 m-auto block rounded">OK</button>
        </form>
      </Modal>
      : <h1>Loading...</h1>
    }
    </>
  )
}

export default EditWordModal;