import React, { useState, useContext } from 'react';
import { WordContainer, WordDiv,  Word} from '../Views/Views.style'
import  { WordsContext }  from '../../providers/WordsProvider';
import Button from '../Button/Button';

export default function WordsView({words, checkAnswer}){
        const { handleSelectWord } = useContext(WordsContext)
        const [active, setActive] = useState([])

        const handleClickWord = (event) =>{
                handleSelectWord(event.currentTarget)
                let unSelected = active.filter((item)=> item === event.currentTarget.id);
                if(unSelected.length === 0 ){
                        setActive([event.currentTarget.id, ...active])
                }else {
                        let toggleSelect =  active.filter((item)=> item !== event.currentTarget.id)
                        setActive(toggleSelect)
                }
        }

                return (
                        <>
                                <WordContainer>
                                        {words === undefined ? <p>Loading...</p> :
                                                words.map((element, i) => (
                                                        <WordDiv active={active.includes(`${i}_wrd`)} 
                                                        key={`${i}_wrd`} id={`${i}_wrd`} 
                                                        onClick= {handleClickWord}>
                                                                <Word>{element.name}</Word>
                                                        </WordDiv>
                                                ))
                                        }
                                </WordContainer>
                                <Button label={"check answers"} linked={false} handleClick={checkAnswer}/>
                        </>
                )

}