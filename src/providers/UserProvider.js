import React, {useState} from "react";
export const UserContext = React.createContext({
        name: "",
        handleSelectWord: ()=>{},
})

const UserProvider = ({children }) =>{
        const  [name, setName] = useState("")

        const handleSelectWord = (userName) => {
                if(userName.length >= 3){
                        setName(userName)
                }else {
                        setName("")
                }
        }

        return(
                <UserContext.Provider value={{name, handleSelectWord}}>
                        {children}
                </UserContext.Provider>
        )
}
export default UserProvider;