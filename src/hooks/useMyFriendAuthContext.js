import { MyFriendAuthContext } from "../context/MyFriendAuthContext"
import { useContext } from "react"

export const useMyFriendAuthContext = () => {
  const context = useContext(MyFriendAuthContext)

  if(!context) {
    throw Error('useMyFriendAuthContext must be used inside an MyFriendAuthContextProvider')
  }

  return context
}