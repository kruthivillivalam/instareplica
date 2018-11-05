import React from 'react';
import './css/home.css';
import {connect} from 'react-redux';
import Header from './Header';

class Home extends React.Component{
   submit(e){
    e.preventDefault();
       // console.log("here")
        const user = document.getElementById('email').value;
        const pwd = document.getElementById('psw').value;
        const pwdRepeat = document.getElementById('psw-repeat').value;
       // console.log("Here")
        (pwd === pwdRepeat)? (this.signup(user,pwd)):(alert("Passwords dont match"))       
    }
    signup(user,pwd){
        this.props.history.push('/signup')
        this.props.action(user,pwd)
        

    }
    render(){
        
        return(
            <div >
                <Header/>
               <form className = "modal-content" onSubmit={this.submit.bind(this)}>
               <div className="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr/>
                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" id="email" required/>

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" id="psw" required/>

                    <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>

                    <label>
                        <input type="checkbox" checked="checked" name="remember" style={{marginBottom:15}}/> Remember me
                    </label>

                    <p>By creating an account you agree to our <a href="#" style={{color:"dodgerblue"}}>Terms & Privacy</a>.</p>

                    <div className="clearfix">
                        <button type="button"  className="cancelbtn">Cancel</button>
                        <button type="submit" className="signup">Sign Up</button>
                    </div>
                    </div>
               </form>
            </div>
        )
    }
}

const mapStateToProps = (state) =>  {
    console.log("State===="+JSON.stringify(state))
    return {
        signup : state.users
    }
   
}

const mapDispatchToProps = (dispatch) => {
    return{
        action : (name,pwd) => {
            dispatch({
                type: 'SIGNUP',
                username: name,
                
            })
        }
    }
   
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);