import React, {useState, useContext} from 'react';
import { Wrapper, Header, Error } from '../Views.style'

import Form from '../../Form/Form'
import Button from '../../Button/Button'
import { UserContext } from '../../../providers/UserProvider';

export default function StartView() {
        const {name} = useContext(UserContext)
        const [msgError, setMsgError] = useState()
        const handleClickBtn = (e) => {
                if(name.length === 0){
                        e.preventDefault()
                        setMsgError(true)
                }else {
                        setMsgError(false)
                }
        }

        return (
                <Wrapper>
                        <Header>Wordcloud game</Header>
                        <Form/>
                        { msgError  ? <Error>The name must be at least 3 characters long.</Error> : null }
                        <Button label={"play"} pathName= {"/wordcloud"} handleClick={handleClickBtn}/>
                </Wrapper>
        )
}