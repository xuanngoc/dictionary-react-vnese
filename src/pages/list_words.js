import { useEffect, useState} from 'react';
import axios from 'axios';

import Header from "../components/shared_components/header";
import MainLayout from "../components/shared_components/main_layout";
import EditWordModal from "../components/list_words/edit_word_modal";
import ConfirmDeleteWordModal from "../components/list_words/confirm_delete_word_modal";
import SearchWordForm from '../components/list_words/search_word_form';
import { WORDS } from "../constants";
import AddWordModal from '../components/list_words/add_word_modal';

const ListWords = () => {
  const [words, setWords] = useState([]);
  const [defaultWords, setDefaultWords] = useState([]);

  const [loading, setLoading] = useState(true);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);

  const [confirmDeleteModalIsOpen, setConfirmDeleteModalIsOpen] = useState(false);
  const [wordEditing, setWordEditing] = useState();
  const [wordDeleting, setWordDeleting] = useState();

  const fetchData = async () =>{
    try {
      const response = await axios.get('https://demo0995292.mockable.io/words');
      setWords(response.data.words);
      setDefaultWords(response.data.words)
    } catch (error) {
      setWords(WORDS);
      setDefaultWords(WORDS)
      console.error(error.message);
    }
    setLoading(false);
  }

  const openAddModal = () => {
    setAddModalIsOpen(true);
  }

  const closeAddModal = () => {
    setAddModalIsOpen(false);
  }

  const submitAdd = (word) => {
    const tmp = words.slice()
    tmp.push(word)
    setWords(tmp)
    closeAddModal()
  }


  const openEditModal = (word) => {
    setEditModalIsOpen(true);
    setWordEditing(word)
  }

  const closeEditModal = () => {
    setEditModalIsOpen(false);
  }

  const submitEdit = (word) => {
    words.map((w, index) => {
      if (word.id == w.id) {
        return words[index] = word;
      }
    })

    setWords(words);
    closeEditModal()
  }

  // Confirm delete
  const openDeleteModal = (word) => {
    setConfirmDeleteModalIsOpen(true);
    setWordDeleting(word)
  }

  const closeDeleteModal = () => {
    setConfirmDeleteModalIsOpen(false);
  }

  const submitDelete = () => {
    words.map((w, index) => {
      if (wordDeleting.id == w.id) {
        return words.splice(index, 1);
      }
    })

    setWords(words);
    closeDeleteModal()
  }

  const setSearchWord = (input) => {
    if (!input) {
      return setWords(defaultWords);
    };

    let result = words.filter(word => {
      return word.word.indexOf(input) != -1;
    })

    setWords(result);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <MainLayout>
      <Header pageName="Danh sách các từ" />

      <SearchWordForm setSearchWord={setSearchWord} />

      <div className="flex justify-end mr-40">
        <button className="bg-zinc-500 hover:bg-zinc-700 px-5 py-2 border-b mr-2 rounded" onClick={openAddModal}>Thêm</button>
      </div>
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
                    <button className="bg-zinc-500 hover:bg-zinc-700 px-5 py-2 border-b mr-2 rounded" onClick={() => openEditModal(word)}>Sửa</button>
                    <button className="bg-red-500 hover:bg-red-700	px-5 py-2 border-b ml-2 rounded"  onClick={() => openDeleteModal(word)}>Xóa</button>
                  </td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>

      <AddWordModal modalIsOpen={addModalIsOpen} submitAdd={submitAdd} closeModal={closeAddModal} />
      <EditWordModal modalIsOpen={editModalIsOpen} submitEdit={submitEdit} closeModal={closeEditModal} wordEditing={wordEditing} />
      <ConfirmDeleteWordModal modalIsOpen={confirmDeleteModalIsOpen} submitDelete={submitDelete} closeModal={closeDeleteModal} wordDeleting={wordDeleting} />
    </MainLayout>
  );
}

export default ListWords;
