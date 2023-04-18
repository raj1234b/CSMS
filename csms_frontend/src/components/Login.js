import {useReducer,useEffect,useState} from 'react';
import "../styles/Login.css";
import { useNavigate } from 'react-router-dom';

const init = {
    user_username:null,
    user_password:null
}

const reducer = (state,action) => {
    switch(action.type){
        case 'update':
            return { ...state, [action.field]: action.val};
        case 'clear' :
            return init;   
        default :
        return init;
    }
}

let Login = () => {

    const [user, dispatch] = useReducer(reducer, init);
    const navigate = useNavigate();
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    useEffect(() => {

        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(user);
        }
      }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        if (!values.user_username) {
          errors.username = "Username is required!";
        }        
        if (!values.user_password) {
          errors.password = "Password is required";
        } 
        return errors;
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(user));
        setIsSubmit(true);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            //console.log(com);
            sendData(e);
          }
      };
      
    const sendData = (e) => {        
            e.preventDefault();

            const reqData = {
                method: "POST",
                headers: {
                    "content-type":"application/json"
                },
                body: JSON.stringify({
                    username: user.user_username,
                    password: user.user_password
                })    
            }
           
        fetch("http://localhost:8080/login",reqData)
        .then(resp => (resp.ok ? resp : Promise.reject(resp)))
        .then(resp => resp.text())
        .then(data => {           
           
            const json=JSON.parse(data);
            
            if(!json.error){
               
                if(json.userRole===1)
                {      
                    localStorage.setItem("admin",data)    
                    navigate('/adminpanel/home');
                }
                else if(json.user.userRole===2)
                {
                    console.log("in role");
                    if(json.user.userStatus==="true")
                    {
                    localStorage.setItem("company",data)
                    navigate('/companypanel/home');
                    }
                    else{
                        alert("Your request is pending, Please wait !!!");
                        navigate("/login");
                    }
                }
                else if(json.user.userRole===3)
                {
                    localStorage.setItem("customer",data)
                    navigate('/customerpanel');
                }
               
            }
            else
            {
                alert("Invalid Username/Password");
            }
        })          
    }
   const registerhandler = ()=>{
    navigate("/register")
   }
    
    return (
        <div className='login' style={{width: "600px",margin:"auto",marginTop:"50px", borderColor: "rgb(0, 78, 143)", borderRadius: "10px", borderStyle: "solid", boxShadow: "white 1px 1px 20px 5px"}}>
            <h1> Login Form </h1>
            <form className='form'>
            <div className="form-outline mb-4">
            <label className="form-label" for="form2Example1">Enter Username</label>
            <input type="text" id="form2Example1" className="form-control" name="name" value={user.user_username}
                onChange={ (e)=>{dispatch({type: 'update', field: 'user_username', val: e.target.value })} } required/>
            <p className="text-danger">{formErrors.username}</p>   
            </div>  

            <div className="form-outline mb-4">
            <label className="form-label" for="form2Example2">Password</label>
                <input type="password" id="form2Example2" className="form-control"  name="pwd" value={user.user_password}
                onChange={ (e)=>{dispatch({type: 'update', field: 'user_password', val: e.target.value })} }required/>
            <p className="text-danger">{formErrors.password}</p>
            </div>
           
                <input type="submit" className="btn btn-primary btn-block mb-4" value="Submit" 
                onClick={ (e)=> {handleSubmit(e)}}
                />
                <input type="reset" value="Clear" className="btn btn-primary btn-block mb-4"
                onClick={ ()=>{dispatch({type: 'clear'})} }
                />
                <div className="text-center">
                <p>Create a New Account <a onClick={registerhandler} style={{textDecoration:"underline",color:"blue",cursor:"pointer"}} >Register</a></p>
                </div>

            </form> 
        </div>
    )

}

export default Login;