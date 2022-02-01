import React from 'react';
import { Wrapper, Header } from '../Views.style'

import Form from '../../Form/Form'
import Button from '../../Button/Button'
import { UserContext } from '../../../providers/UserProvider';

export default function StartView() {
        const {nameValidate} = {UserContext}
        console.log("nameValidate", nameValidate)
        return (
                <Wrapper>
                        <Header>Wordcloud game</Header>
                        <Form/>
                        <Button label={"play"} pathName= {"/wordcloud"} validate={nameValidate}/>
                </Wrapper>
        )
}