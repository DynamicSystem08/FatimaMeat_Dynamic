import { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'

function Auth() {

    const [screen, setScreen] = useState(true)

    return <div>
        {
            screen ? <Login setScreen={setScreen} />
                : <SignUp setScreen={setScreen} />
        }
    </div >
}

export default Auth
