import { useEffect, useState} from 'react';

const AnswerGroup = ({words, testWord, correct, incorrect, nextWord}) => {
  const [answers, setAnswers] = useState();

  const randomWord = () => {
    let rand = Math.floor(Math.random() * words.length);
    return words[rand];
  }

  const generateAnswers = () => {
    let answerA = randomWord();
    while (answerA.id == testWord.id) {
      answerA = randomWord();
    }

    let answerB = randomWord();
    while (answerB.id == testWord.id || answerB.id == answerA.id) {
      answerB = randomWord();
    }

    let answerC = randomWord();
    while (answerC.id == testWord.id || answerC.id == answerA.id || answerC.id == answerB.id) {
      answerC = randomWord();
    }

    let answerD = testWord;

    let combinationAnswers = [
      { a: answerA, b: answerB, c: answerC, d: answerD },
      { a: answerB, b: answerA, c: answerD, d: answerC },
      { a: answerC, b: answerD, c: answerA, d: answerB },
      { a: answerD, b: answerB, c: answerC, d: answerA }
    ]

    return combinationAnswers[Math.floor(Math.random() * 4)];
  }

  const onSelectAnswer = (e) => {
    if (e.target.innerText == testWord.meaning) {
      correct()
    } else (
      incorrect()
    )
    nextWord()
  }

  useEffect(() => {
    if (words && testWord) {
      const answers = generateAnswers();
      setAnswers(answers);
    }
  }, [words, testWord])

  return (
    <>
      {
        answers &&
        <div className="text-2xl mt-24">
          <div className="flex justify-center mb-6">
            <button className="w-64 py-6 bg-blue-200 hover:bg-blue-800 mr-6 rounded" onClick={onSelectAnswer} >{answers.a.meaning}</button>
            <button className="w-64 py-6 bg-blue-200 hover:bg-blue-800 ml-6 rounded" onClick={onSelectAnswer} >{answers.b.meaning}</button>
          </div>
          <div className="flex justify-center">
            <button className="w-64 py-6 bg-blue-200 hover:bg-blue-800 mr-6 rounded" onClick={onSelectAnswer} >{answers.c.meaning}</button>
            <button className="w-64 py-6 bg-blue-200 hover:bg-blue-800 ml-6 rounded" onClick={onSelectAnswer} >{answers.d.meaning}</button>
          </div>
        </div>
      }
    </>

  )
}

export default AnswerGroup;
