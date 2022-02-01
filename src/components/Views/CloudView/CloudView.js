import { useState, useContext } from 'react';
import {Wrapper, WrapperWords} from '../Views.style'
import TitleCategory from '../../TitleCategory/TitleCategory';
import WordsView from '../../WordsView/WordsView'
import { WordsContext } from '../../../providers/WordsProvider';
import AnswerView from '../../AnswerView/AnswerView'

export default function CloudView(){
        const { data, category } = useContext(WordsContext)
        const [checkView, setCheckView] = useState(false)

        const handleClickBtn = () =>{
                setCheckView(true)
                console.log("checkView", checkView)
        }
        return (
                <Wrapper>
                        <TitleCategory title= {category}/>
                        <WrapperWords>
                        { !checkView ?
                                <WordsView title= {category} words= {data} checkAnswer= {handleClickBtn}/>

                        : <AnswerView />}
                        </WrapperWords>
                </Wrapper>
                )

}