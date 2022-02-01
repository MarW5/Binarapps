import styled from 'styled-components'
export const ButtonAtom = styled.div`
        min-width:120px;
        border: 2px  #26C5FF solid;
        border-radius: 10px;
        margin: 50px;
        color:  #26C5FF;
        text-align: center;
        padding: 10px 20px;
        &:hover{
                border: 3px  #26C5FF solid;
                cursor:pointer;
        }
        a, a:link, a:visited, a:focus, a:hover, a:active {
                display: block;
                text-decoration: none;
                color: #26C5FF;
        }

`