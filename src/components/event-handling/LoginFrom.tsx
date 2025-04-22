import { useState } from "react"

const LoginFrom = () => {
const [email,setEmail] = useState<string>("");
const [password,setPassword] = useState<string> ("");
const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    alert(`Hi ${email} login successfully `)
}
  return (
    <div>
        <form onSubmit={handleSubmit} >
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" onChange={(e)=>{setEmail(e.target.value)}} value={email} />
            <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            </div>
            <div>
                <button type="submit" >LogIn</button>
            </div>
        </form>
    </div>
  )
}

export default LoginFrom