import styled from 'styled-components'
export const ButtonAtom = styled.div`
        min-width:120px;
        border: 2px  #26C5FF solid;
        border-radius: 10px;
        margin: 50px;
        padding: 10px 10px;
        color:  #26C5FF;
        text-align: center;
        &:hover{
                border: 3px  #26C5FF solid;
                cursor:pointer;
        }
        a:hover{
                border-bottom: 1px solid #26C5FF
        }
        a, a:link, a:visited, a:focus, a:hover, a:active {
                text-decoration: none;
                color: #26C5FF;

        }

`