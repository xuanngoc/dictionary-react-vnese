import { useEffect, useState} from 'react';
import axios from 'axios';

import Header from "../components/shared_components/header";
import MainLayout from "../components/shared_components/main_layout";
import EditWordModal from "../components/list_words/edit_word_modal";

const ListWords = () => {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [wordEditing, setWordEditing] = useState();

  const fetchData = async () =>{
    try {
      const response = await axios.get('https://demo0995292.mockable.io/words');
      setWords(response.data.words);
    } catch (error) {
      console.error(error.message);
    }
    setLoading(false);
  }

  const openModal = (word) => {
    setModalIsOpen(true);
    setWordEditing(word)
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <MainLayout>
      <Header pageName="Danh sách các từ" />

      <div className="flex mx-36 mt-12">
        <table className="table-auto border border-slate-400 flex-auto text-center">
          <thead>
            <tr>
              <th className="border border-slate-300">Stt</th>
              <th className="border border-slate-300">Từ</th>
              <th className="border border-slate-300">Phiên âm</th>
              <th className="border border-slate-300">Nghĩa</th>
              <th className="border border-slate-300">Hành động</th>
            </tr>
          </thead>
          <tbody>
          { 
            words.map((word, index) => {
              return (
                <tr key={word.id}>
                  <td className="py-2 border-b px-6 text-base font-medium text-gray-900">{index + 1}</td>
                  <td className="py-2 border-b px-6 text-base font-medium text-gray-900">{word.word}</td>
                  <td className="py-2 border-b px-6 text-base font-medium text-gray-900">{word.phonetic}</td>
                  <td className="py-2 border-b px-6 text-base font-medium text-gray-900">{word.meaning}</td>
                  <td className="py-2 border-b px-6 text-base font-medium text-gray-900">
                    <button className="bg-zinc-500 hover:bg-zinc-700 px-5 py-2 border-b mr-2 rounded" onClick={() => openModal(word)}>Sửa</button>
                    <button className="bg-red-500 hover:bg-red-700	px-5 py-2 border-b ml-2 rounded">Xóa</button>
                  </td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>

      <EditWordModal modalIsOpen={modalIsOpen} closeModal={closeModal} wordEditing={wordEditing} />
    </MainLayout>
  );
}

export default ListWords;
