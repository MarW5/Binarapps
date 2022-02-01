import React, {useState, useEffect} from "react";
import { GetDataAPI } from '../hooks/getData';

export const WordsContext = React.createContext({
        data: [],
        words: [],
        correctWords: [],
        category: "",
        handleSelectWord: () => {},
        correctView: () => {},
        handleGetData: () => {},
        returnScore: ()=> {},
})

const WordsProvider = ({children }) =>{
        const  [data, setData] = useState()
        const [category, setCategory] = useState("")
        const  [words, setWords] = useState([])
        const [answers, setAnswers] = useState([])
        const  [btnActive, setBtnActive] = useState(false)
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
                console.log(correctValues)
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
                        console.log(item)
                        if(item === chosenWord.name){
                              return chosenWord["correct"] = "good";
                        }
                })
        }

        const returnScore =()=>{
                let sum = 0;
                let bad = 0;
                data.forEach((element , i)=>{
                        if (element.correct === "good"){
                                sum += 1
                        } else {
                                console.log(element)
                                bad += 1
                        }
                })
                const results = sum*2 - bad
                console.log(sum)
                console.log(bad)
                console.log(results)
        }
        return(
                <WordsContext.Provider value={{data, words, category, handleSelectWord, correctView, handleGetData , returnScore}}>
                        {children}
                </WordsContext.Provider>
        )
}
export default WordsProvider;