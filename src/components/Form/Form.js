import { useContext } from "react"
import { InputNick } from './Form.style'
import { UserContext } from '../../providers/UserProvider';

export default function From() {
        const { name, handleSelectWord } = useContext(UserContext)

        const handleNickChange = (event) => {
                handleSelectWord(event.target.value)
        }

        return(
                <InputNick name={name} placeholder='Enter your nickname here...' onChange={handleNickChange}></InputNick>
        )
}