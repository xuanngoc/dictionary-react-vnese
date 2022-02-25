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

const EditWordModal = ({wordEditing, submitEdit, modalIsOpen, closeModal}) => {
  const [wordWrite, setWordWrite] = useState();
  const [phonetic, setPhonetic] = useState(wordEditing?.phonetic);
  const [meaning, setMeaning] = useState(wordEditing?.meaning);

  const onChangeWordWrite = (e) => {
    setWordWrite(e.target.value)
  }
  
  const onChangePhonetic = (e) => {
    setPhonetic(e.target.value)
  }
  
  const onChangeMeaning = (e) => {
    setMeaning(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    submitEdit({
      id: wordEditing.id,
      word: wordWrite,
      phonetic: phonetic,
      meaning: meaning
    })
  }

  useEffect(() => {
    setWordWrite(wordEditing?.word)
    setPhonetic(wordEditing?.phonetic)
    setMeaning(wordEditing?.meaning)
  }, [wordEditing])

  return (
    <>
    { wordEditing ?  
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Example Modal"
      >
        <div className="flex justify-end">
          <button className="border " onClick={closeModal}>
            <CloseIcon />
          </button>
        </div>
        <h2 className="text-xl text-center">Sửa từ</h2>
        
        <form className="mx-12" onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Từ
            </label>
            <input className=" border rounded  py-2 px-3 text-gray-700 leading-tight focus:shadow-outline" type="text" value={wordWrite} onChange={onChangeWordWrite}  />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Phiên âm
            </label>
            <input className=" border rounded  py-2 px-3 text-gray-700 leading-tight focus:shadow-outline" type="text" value={phonetic} onChange={onChangePhonetic}/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Ngữ nghĩa
            </label>
            <input className=" border rounded  py-2 px-3 text-gray-700 leading-tight focus:shadow-outline" type="text" value={meaning} onChange={onChangeMeaning} />
          </div>
      
          <input className="bg-zinc-500 hover:bg-zinc-700 px-7 py-3 m-auto block rounded" type="submit" value="OK" />
        </form>
      </Modal>
      : <></>
    }
    </>
  )
}

export default EditWordModal;