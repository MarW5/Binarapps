import React, { useContext } from "react"
import {UserContext} from '../../../providers/UserProvider'
import { WordsContext } from "../../../providers/WordsProvider"
import { Wrapper, FinalText, ScoreText } from '../Views.style'

export default function FinalView(){
        const { name } = useContext(UserContext)
        const { finalScore } = useContext(WordsContext)

        return (
                <Wrapper>
                        <FinalText>Congratulations, {name}</FinalText>
                        <FinalText>Your score:</FinalText>
                        <ScoreText>{finalScore} points</ScoreText>
                </Wrapper>
        )
}