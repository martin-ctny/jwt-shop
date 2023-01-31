import { useState } from "react"
import AuthService from "../../../src/services/auth.service"
import UserAuthInputs from "../user/form/UserAuthInputs"

const Signup = () => {
    const [credentials, setCredentials] = useState({})

    const handleChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await AuthService.signup(credentials)
        } catch (error) {
            console.log(error)
        }
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <UserAuthInputs handleChange={handleChange} />
            <div>
                <input 
                    type="submit"
                    value="Signup"
                />
            </div>
        </form>
     );
}
 
export default Signup;