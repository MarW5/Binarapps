import styled from 'styled-components'
export const Wrapper = styled.div`
        width:50%;
        max-width: 1000px;
        height: 100vh;
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
`
export const Header = styled.h1`
        font-weight: 900;
        text-align: center;
        width: 100%;
`

export const WrapperWords = styled.div`
       width: 100%;
       display: flex;
       flex-direction: column;
       align-items: center;
`
export const WordContainer = styled.div`
       border: 1px #0F0E0E solid;
       border-radius: 5px;
       display: flex;
       flex-wrap: wrap;
       height: 40vh;

`
export const Error = styled.p`
        width: 100%;
        height: 30px;
        color: red;
        font-size: 16px;
        margin: 5px;
`

export const WordDiv = styled.div`
       width: 150px;
       color: ${
              props=> props.active ? "#0F0E0E" : "#7B8194"
       };
       cursor: pointer;
`

export const Word = styled.p`
        font-weight: 900;
        text-align: center;
        width: 100%;
`

export const GoodWord = styled.p`
       font-weight: 900;
        text-align: center;
        width: 100%;
        color: green;
`

export const BadWord = styled.p`
       font-weight: 900;
       text-align: center;
       width: 100%;
       color: red;
`

export const FinalText = styled.p`
        font-weight: 900;
        margin: 10px;
        line-height: 1;
`

export const ScoreText = styled.p`
        font-weight: 900;
        color: #26C5FF;
        margin: 15px;
`