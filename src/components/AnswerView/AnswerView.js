import React, { useContext } from 'react';
import { WordContainer, WordDiv, Word, GoodWord, BadWord} from '../Views/Views.style'
import { WordsContext } from '../../providers/WordsProvider';

import Button from "../Button/Button"
export default function AnswerView(){
        const {data, returnScore} = useContext(WordsContext)
        returnScore()

        return (
                <>
                        <WordContainer>
                                {data.length === 0? <p>Loading...</p> :
                                 data.map((word) => {
                                        if(word.correct === "empty"){
                                                return <WordDiv><Word>{word.name}</Word></WordDiv>
                                        }else if(word.correct === "bad"){
                                                return <WordDiv><BadWord>{word.name}</BadWord></WordDiv>
                                        }else {
                                                return <WordDiv><GoodWord>{word.name}</GoodWord></WordDiv>
                                        }
                                })
                                }
                        </WordContainer>
                        <Button label={"finish game"} pathName= {"/final"}></Button>
                </>
        )
}