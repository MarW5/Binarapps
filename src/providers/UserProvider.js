import React, {useState} from "react";
export const UserContext = React.createContext({
        name: "",
        nameValidate: false,
        handleSelectWord: ()=>{},
})

const UserProvider = ({children }) =>{
        const  [name, setName] = useState("")
        const  [nameValidate, setValidate] = useState()
        const handleSelectWord = (userName) => {
                if(userName.length >= 3){
                        setName(userName)
                        setValidate(true)
                }else {
                        setValidate(false)
                }
        }
        return(
                <UserContext.Provider value={{name, nameValidate, handleSelectWord}}>
                        {children}
                </UserContext.Provider>
        )
}
export default UserProvider;