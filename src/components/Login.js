import React,{Component} from 'react'
import axios from 'axios'
import {TextField} from '@material-ui/core'
import Button from '@material-ui/core/Button';
import '../App.css'
import Cookies from 'universal-cookie';
//import {Redirect} from 'react-router-dom'
import {withStyles} from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
//import Home from './Home'
//import Signup from './Signup'
//import Dashboard from './Dashboard'
const cookies = new Cookies();
const STYLES= theme=>({
  root: {
    width:'41%',
    marginTop:'15%',
    marginLeft:'29%',
    marginBottom:'15%',
    padding:'0px 0px 30px 0px',
    display:'flex',
    height:'300px'


  },
  background:{
    backgroundColor:'#528B8B',
    display:'flex'
  },
  input:{
    position:'relative',
    //left: '5%'
  },
  form:{
    display:'inline-grid'
  },
  btn:{
    margin:'2%' 
     },
  container:{
   width:'54%',
   height:'110%',
   backgroundColor:'#00000042'
  },
  div2:{
   width:'52%',
   height:'330px'
  },

})
class Login extends  Component{
  constructor(props){
     super(props)
     this.state={
      email:'',
    password:''
     }
  }
 
  
  handleSubmit= async(e)=>{
     e.preventDefault()
     //console.log("Ihi")
     const Login={
       username:this.state.email || ' ',
       password: this.state.password || ''
      }
      
       //const  headers= {
         //'Access-Control-Allow-Origin':'http://localhost:3000'
     // }
   
    console.log("Login", Login);
       axios.post('http://localhost:3000/api/Users/login', {...Login}) 
    
     .then(res => {
        console.log(res);
        console.log(res.data); 
        axios.defaults.headers.common['Authorization'] =res.data.id;
        cookies.set('loggedIn', res.data.id, {path:'/'})
        this.props.history.push('/')
        console.log(cookies.cookies.loggedIn)
      })
      
      .catch(error =>  {
         console.log(error)
      })
     
  }

    
render(){
  const{classes}=this.props
    return(
      <div className={classes.background}>
        <Paper className={classes.root}>
          <div className={classes.container}>
            <form className={classes.form} onSubmit={this.handleSubmit}>
             <TextField
             className={classes.input}
             id="standard-name"
              label="Email"
               type="text"
               name="email"
               autoComplete="email"
               margin="normal"
               value={this.state.email}
               onChange={(event)=>this.setState({email:event.target.value})}
             />
             
            
            <TextField
              className={classes.input}
              id="standard-password"   
              label="password"
              type="password"
              name="password"
              autoComplete="password"
               margin="normal"
               value={this.state.password}
               onChange={(event)=>this.setState({password:event.target.value})}
             />
             <TextField
              className={classes.input}
              id="standard-name"   
              label="Validation"
              type="text"
              name="Validation"
               margin="normal"
               value={this.state.Validation}
               onChange={(event)=>this.setState({Validation:event.target.value})}
             />
            <Button variant="outlined" color="primary" type='submit' onClick={this.handleSubmit} className={classes.input}>
               Login
            </Button>
          </form>
          
          
      </div>
      <div className={classes.div2}>
        <img src={"https://fsa.zobj.net/crop.php?r=9TrC8wBxDE0E59UtLSUVC865h9l0LWjPknOtdV--LEfsB7BIQPjXUkN_vk6q-jCelggx5et0JLx1A4K2zq3RHUDAQgcsNPlerY4QL7Q3LwHuBKotr8qq26Ugp-4FJjuC-lVlvYEl43Rixrsw"}
              width="100%"
              height="100%"
              alt="Loginpanel"
              className={classes.image}
         />
      </div>
     </Paper>
   </div>
           
     )
    
    }
}
export default withStyles(STYLES)(Login)