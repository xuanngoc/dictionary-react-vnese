import AnswerGroup from './answer_group';
import { useEffect, useState} from 'react';

const Question = ({words, correct, incorrect}) => {
  const randomTestWord = () => {
    let rand = Math.floor(Math.random() * words.length);
    return words[rand];
  }

  const [testWord, setTestWord] = useState();

  const nextWord = () => {
    setTestWord(randomTestWord())
  }

  useEffect(() => {
    if (words) {
      setTestWord(randomTestWord())
    }
  }, [words])

  return (
    <div className="mt-12">
      <h1 className="text-center text-6xl text-blue-800	ml-6">{testWord?.word}</h1>
      
      <AnswerGroup words={words} testWord={testWord} correct={correct} incorrect={incorrect} nextWord={nextWord} />
    </div>
  )
}

export default Question;
