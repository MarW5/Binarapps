import React, {useState, useEffect} from "react";
import { GetDataAPI } from '../hooks/getData';

export const WordsContext = React.createContext({
        data: [],
        words: [],
        correctWords: [],
        category: "",
        finalScore: "",
        handleSelectWord: () => {},
        correctView: () => {},
        handleGetData: () => {},
        returnScore: () => {},
        resetGame: () => {},
})

const WordsProvider = ({children }) =>{
        const  [data, setData] = useState()
        const [category, setCategory] = useState("")
        const  [words, setWords] = useState([])
        const [answers, setAnswers] = useState([])
        const  [finalScore, setFinalScore] = useState("")
        const {getData} = GetDataAPI()

        useEffect(()=>{
                (async () =>{
                        const data = await getData()
                        handleGetData(data)
                        setCategory(data.question)
                })();
        },[])

        const handleGetData = (items) =>{
                setAnswers(items.good_words)
                const correctValues = items.all_words.map( ( elem, i) =>{
                        return (
                                {
                                        name: elem,
                                        correct: "empty"
                                }
                        )
                })
                setData(correctValues)
        }
        const handleSelectWord = (word) =>{
                let chosenWord = {
                        id: word.id,
                        name:word.innerText,
                        correct: "bad",
                }
                const index = data.findIndex((elem)=> elem.name === word.innerText)
                data[index] = chosenWord
                let filterWords = words.filter((word)=> chosenWord.id === word.id )
                if(filterWords.length === 0){
                correctView(chosenWord)
                setWords([chosenWord, ...words])

                }else {
                        let filterSelected = words.filter((word,)=> word.id !== chosenWord.id)
                        data[index].correct = "empty";
                        setWords(filterSelected)
                }

        }

        const correctView = ( chosenWord ) => {
                answers.filter((item) => {
                        if(item === chosenWord.name){
                              return chosenWord["correct"] = "good";
                        }
                })
        }

        const returnScore =()=>{
                let good = 0;
                let bad = 0;

                words.forEach(element=>{
                        if (element.correct === "good"){
                                good += 1
                        } else {
                                bad += 1
                        }
                })
                let score  = (good*2) - (bad + (answers.length - good));
                setFinalScore(score);
        }
        const resetGame = () => {
                setData([])
                setWords([])
                setAnswers([])
                setCategory("")
        }
        return(
                <WordsContext.Provider value={{data, words, category, handleSelectWord, correctView, handleGetData , returnScore, finalScore, resetGame}}>
                        {children}
                </WordsContext.Provider>
        )
}
export default WordsProvider;