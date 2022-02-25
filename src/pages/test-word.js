import Header from "../components/shared_components/header";
import MainLayout from "../components/shared_components/main_layout";
import Question from "../components/test_word/question";
import { WORDS } from "../constants";
import { useEffect, useState} from 'react';
import  axios from 'axios';

const TestWord = () => {
  const [words, setWords] = useState([]);
  const [isStart, setIsStart] = useState(true);
  const [isStop, setIsStop] = useState(true);
  const [correctWords, setCorrect] = useState(0);
  const [incorrectWords, setIncorrect] = useState(0);
  const [startOrStop, setStartOrStop] = useState('Bắt đầu');

  const fetchData = async () =>{
    try {
      const response = await axios.get('https://demo0995292.mockable.io/words');
      setWords(response.data.words);
    } catch (error) {
      setWords(WORDS);
      console.error(error.message);
    }
  }

  // const startOrStopGame = () => {
  //   if (isStart) {
  //     setIsStart(false);
  //     setStartOrStop('Dừng')
  //   } else {
  //     setIsStart(true);
  //     setStartOrStop('Bắt đầu')
  //   }
  // }

  const correct = () => {
    setCorrect(correctWords + 1);
  }

  const incorrect = () => {
    setIncorrect(incorrectWords + 1);
  }

  useEffect(() => {
    fetchData();
  }, [words])

  return (
    <MainLayout>
      <Header pageName="Kiểm tra" />
      {/* <div className="flex justify-center mt-24">
        <button className={`w-64 py-5 px-12 rounded text-xl ${isStart ? 'bg-blue-500' : 'bg-red-500' }`} onClick={startOrStopGame}>{startOrStop}</button>
      </div> */}
      <div className="flex justify-center mt-6">
        <span className="py-6 px-12  text-xl">Đúng: {correctWords}</span>
        <span className="py-6 px-12  text-xl">Sai: {incorrectWords}</span>
      </div>

      <Question words={words} correct={correct} incorrect={incorrect} />

    </MainLayout>
  );
}

export default TestWord;
