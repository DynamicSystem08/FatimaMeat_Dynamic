import { useState } from 'react'
import Login from '../Login'
import SignUp from '../SignUp'
import Form from './Form'

function Auth() {

    const [screen, setScreen] = useState(true)

    return <div>
        {
            screen ? <Login setScreen={setScreen} />
                : <SignUp setScreen={setScreen} />
        }
        {/* <Form /> */}
    </div >
}

export default Auth
