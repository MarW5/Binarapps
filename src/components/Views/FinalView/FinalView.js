import React, { useContext } from "react"
import {UserContext} from '../../../providers/UserProvider'
import { WordsContext } from "../../../providers/WordsProvider"
import { Wrapper, FinalText, ScoreText } from '../Views.style'

export default function FinalView(){
        const { name } = useContext(UserContext)
        const { data } = useContext(WordsContext)
        // console.log(data)
        // let sum = 0;
        // const returnScore =()=>{
        //         data.forEach((element , i)=>{
        //                 if (element.correct === "good"){
        //                         sum += 2
        //                 } else {
        //                         console.log(element)
                                
        //                 }
        //         })
        // }
        // console.log("sum", sum)

        return (
                <Wrapper>
                        <FinalText>Congratulations, {name}</FinalText>
                        <FinalText>Your score:</FinalText>
                        <ScoreText>5 points</ScoreText>
                </Wrapper>
        )
}