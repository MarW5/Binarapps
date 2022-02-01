import { useContext } from "react"
import { InputNick, Error} from './Form.style'
import { UserContext } from '../../providers/UserProvider';

export default function From() {
        const { name, handleSelectWord, nameValidate } = useContext(UserContext)

        const handleNickChange = (event) => {
                handleSelectWord(event.target.value)
        }

        return(
                <>
                        <InputNick name={name} placeholder='Enter your nickname here...' onChange={handleNickChange}></InputNick>
                        {nameValidate ? null : <Error>The name must be at least 3 characters long.</Error>}
                </>
        )
}