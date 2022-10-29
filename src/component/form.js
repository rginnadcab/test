import { useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";
function Form(){
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const socket = io("http://localhost:3000");

    // client-side
    socket.on("connect", () => {
        console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    });
    

    const handleSubmit = async(e) =>{
        e.preventDefault();
        setUserId(e.target.userId.value);
        setPassword(e.target.password.value);
        submitForm();
    }

    const submitForm = async() =>{
        const form = await axios.post("http://localhost:3001/",{ "userId" : userId, "password" : password });
        if(form){
            console.log("form submitted");
        }else{
            console.warn("error");
        }
    }

    console.log(userId, "User Id");
    console.log(password, "Password");
return (
    <div>
        <div className="container margin-top">
       <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" name="userId" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" name="password"   placeholder="Password"  />
            </div>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    </div>
);
}

export default Form;