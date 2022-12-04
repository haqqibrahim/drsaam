import React from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'

const SafeSpace = () => {
    const { user } = useAuthContext()
  return (
    <div>
        {user && (
            <div>
              <span>{user.uid}</span>
            </div>
          )}
    </div>
  )
}

export default SafeSpace