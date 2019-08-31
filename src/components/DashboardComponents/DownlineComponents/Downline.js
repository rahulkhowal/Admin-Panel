import React,{Component} from 'react'
import {withStyles} from '@material-ui/core/Styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import {NavLink} from 'react-router-dom'
import Divider from '@material-ui/core/Divider';
//import AddPlayer from './AddPlayer'
import {BrowserRouter,Route} from 'react-router-dom'
import ListOfPlayers from './List'
import TextField from '@material-ui/core/TextField'
import Modal from 'react-awesome-modal'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel'
const STYLES=theme=>({
  root:{
  	backgroundColor:'#DCDCDC',
  	display:'block',
    height:'-webkit-fill-available',
    width:'100%'

  },
  
  paper:{
  	
  	display:'flex'
  },
  item:{
    textAlign:'center',
    '@media(max-width:760px)':{
      display:'none'
    }
  },
  color:{
  	color:'grey'
  },
  link:{
  	position:'absolute',
    left:'450px',
    top:'5px',
    '@media(max-width:760px)':{
      left:'10px',
      top:'10px'
    }
    
  },
  padding:{
      padding:'89px'
  },

  listheader:{
  	marginTop:'30px',
    '@media(max-width:760px)':{
      overflowX:'auto',
      minHeight:'0.1%'
    }
  },
  div:{
  	display:'flex',
  	padding:'15px',
  	justifycontent:'flexEnd',
    '@media(max-width:760px)':{
      marginLeft:'104px'
    }
  },
   close: {
   textDecoration:'none',
   color:'black',
   position:'relative',
   left:'530px',
   bottom:'600px',
   '@media(max-width:760px)':{
    position:'absolute',
    left:'360px',
    top:'15px'
    
  },
},
form:{
  display:'inherit'
},
div2:{
  display:'inline-grid',
  marginLeft:'190px',

},
Modal:{
  content:{
   '@media(max-width:760px)':{
   height:'630px',
   width:'270px' 
  }
  }
 
  
},
button:{
  marginTop:'20px',
  marginLeft:'112px',
  '@media(max-width:760px)':{
    marginTop:'0px',
    marginLeft:'0px'
  }
},
buttonposition:{
	display:'table-footer-group',
	marginLeft:'240px',
  '@media(max-width:760px)':{
    position:'absolute',
    left:'0px'
    
  },
},
group:{
  display:'contents',
  '@media(max-width:760px)':{
    display:'grid'
  }
},
item2:{
  display:'none',
  '@media(max-width:760px)':{
      display:'table',
      textAlign:'right',
      marginLeft:'42px'
    }
},
color2:{
  color:'grey',
  width:'196px'
},
btn:{
  '@media(max-width:760px)':{
    border:'none',
    backgroundColor:'#800000'
  },
},
container:{
   '@media(max-width:760px)':{
    display:'none',
    
  },
},
formdiv:{
  '@media(max-width:760px)':{
    position:'absolute',
    left:'-158px'
    
  },
}
})
class Downline extends Component{
	constructor(props){
		super(props)
		this.openModal2=this.openModal2.bind(this)
		this.state={
			players:[{id:1,Email:'rahulkhowal@gmail.com',Username:'rahulkhowal',Password:'123456',FirstName:'Rahul',LastName:'Khowal',Phone:'9654065267',Exposure:'0.00',Commison:'2%',Limit:'0.00',Credit:'0.00',Balance:'0.00',Avail:'0.00',Status:'Active',Action:'setting'},
		             {id:2,Email:'rahulkhowal@gmail.com',Username:'rahulkhowal',Password:'123456',FirstName:'Rahul',LastName:'Khowal',Phone:'9654065267',Exposure:'0.00',Commison:'2%',Limit:'0.00',Credit:'0.00',Balance:'0.00',Avail:'0.00',Status:'Active',Action:'setting'},
		             {id:3,Email:'rahulkhowal@gmail.com',Username:'rahulkhowal',Password:'123456',FirstName:'Rahul',LastName:'Khowal',Phone:'9654065267',Exposure:'0.00',Commison:'2%',Limit:'0.00',Credit:'0.00',Balance:'0.00',Avail:'0.00',Status:'Active',Action:'setting'},
		             {id:4,Email:'rahulkhowal@gmail.com',Username:'rahulkhowal',Password:'123456',FirstName:'Rahul',LastName:'Khowal',Phone:'9654065267',Exposure:'0.00',Commison:'2%',Limit:'0.00',Credit:'0.00',Balance:'0.00',Avail:'0.00',Status:'Active',Action:'setting'},
		             {id:5,Email:'rahulkhowal@gmail.com',Username:'rahulkhowal',Password:'123456',FirstName:'Rahul',LastName:'Khowal',Phone:'9654065267',Exposure:'0.00',Commison:'2%',Limit:'0.00',Credit:'0.00',Balance:'0.00',Avail:'0.00',Status:'Active',Action:'setting'},
		             {id:6,Email:'rahulkhowal@gmail.com',Username:'rahulkhowal',Password:'123456',FirstName:'Rahul',LastName:'Khowal',Phone:'9654065267',Exposure:'0.00',Commison:'2%',Limit:'0.00',Credit:'0.00',Balance:'0.00',Avail:'0.00',Status:'Active',Action:'setting'}
		            ],
		    visible:false ,
		    visible2:false ,
		    email:'',
		    username:'',
		    password:'',
		    firstname:'',
		    lastname:'',
		    phone:'',
		    exposure:'',
		    commision:'',
        status:''

		}

	}
	openModal2=(id)=>{
    console.log(id)
        this.setState({
            visible2 : true
        });
        console.log(this.state.visible2)
    }
    closeModal2() {
        this.setState({
            visible2 : false
        });
    }

	
	 openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

   
    handleSubmit=(e)=>{
    	e.preventDefault()
       let player={
       	id:Math.random(),
       	Email:this.state.email,
       	Username:this.state.username,
       	Password:this.state.password,
       	FirstName:this.state.firstname,
       	LastName:this.state.lastname,
       	Phone:this.state.phone,
       	Exposure:this.state.exposure,
       	Commison:this.state.commision,
       	Limit:'0.00',
       	Balance:'0.00',
       	Avail:'0.00',
        Status:'Action',
        Action:'setting',
        Credit:'0.00'
       }
       console.log(player)
       console.log(this.state.players)
      let players=[...this.state.players,player]
       this.setState({
       	players,
       	email:'',
	    username:'',
	    password:'',
		firstname:'',
		lastname:'',
		phone:'',
	    exposure:'',
		commision:''
       })
    }
     handleSubmit2=(e)=>{
      //e.preventDefault()
      console.log(e.target.id)
      this.setState({
      players: this.state.players.map(el => (el.id === e.target.id ? console.log('found') : console.log('notfound')))
    });
    console.log(this.state.players)
    }

render(){
	const {classes}=this.props
	return(
         <div className={classes.root}>
           <div className={classes.div}><Button variant="outlined" color="default" value="Open" onClick={() => this.openModal()} classes={{root:classes.btn}} >Add Player</Button></div>
           <Paper className={classes.paper}>
              <Grid item xs={2} className={classes.item} >
                 <Typography variant="body1" className={classes.color}>Total Balance</Typography>
                 <Typography variant="subtitle1"><b>PTH 520.00</b></Typography>
               </Grid>
               <Grid item xs={2} className={classes.item2} >
                 <Typography variant="body1" className={classes.color2}>Total Balance</Typography>
                 <Typography variant="subtitle1"><b>PTH 520.00</b></Typography>
               </Grid>
                <Grid item xs={2} className={classes.item} >
                 <Typography variant="body1" className={classes.color}>Total Balance</Typography>
                <Typography variant="subtitle1"><b>PTH 520.00</b></Typography>
               </Grid>
                <Grid item xs={2} className={classes.item} >
                 <Typography variant="body1" className={classes.color}>Total Balance</Typography>
                 <Typography variant="subtitle1"><b>PTH 520.00</b></Typography>
               </Grid>
                <Grid item xs={2} className={classes.item} >
                 <Typography variant="body1" className={classes.color}>Total Balance</Typography>
                 <Typography variant="subtitle1"><b>PTH 520.00</b></Typography>
               </Grid>
                <Grid item xs={2} className={classes.item} >
                 <Typography variant="body1" className={classes.color}>Total Balance</Typography>
                 <Typography variant="subtitle1"><b>PTH 520.00</b></Typography>
               </Grid>
            </Paper>
            <Divider/>
            <div className={classes.listheader}>
              <Divider/>
              <Grid container className={classes.container}>
                <Grid item xs={2} className={classes.item}>
                       <Typography variant="subtitle1"><b>Account</b></Typography>
                 </Grid>
                 <Grid item xs={1}>
                       <Typography variant="subtitle1"><b>Credit Ref.</b></Typography>
                 </Grid>
                 <Grid item xs={1}>
                       <Typography variant="subtitle1"><b>Balance</b></Typography>
                 </Grid>
                 <Grid item xs={1}>
                       <Typography variant="subtitle1"><b>Exposure</b></Typography>
                 </Grid>
                 <Grid item xs={1}>
                       <Typography variant="subtitle1"><b>Avail. bal.</b></Typography>
                 </Grid>
                 <Grid item xs={2} className={classes.item}>
                       <Typography variant="subtitle1"><b>Exposure Limit</b></Typography>
                 </Grid>
                 <Grid item xs={2} className={classes.item}>
                       <Typography variant="subtitle1"><b>Status</b></Typography>
                 </Grid>
                  <Grid item xs={2} className={classes.item}>
                       <Typography variant="subtitle1"><b>Action</b></Typography>
                 </Grid>
                </Grid>
               <Divider/>
               <ListOfPlayers players={this.state.players} openModal2={()=>{this.openModal2()}}/>
               <Modal visible={this.state.visible} width="600" height="630" effect="fadeInUp" onClickAway={() => this.closeModal()} style={classes.Modal}>
                    <div className={classes.formdiv}>
                        <form className={classes.form} onSubmit={this.handleSubmit}>
             <div className={classes.div2}>
             <TextField
             className={classes.input}
              label="Email"
               type="text"
               name="email"
               autoComplete="email"
               margin="normal"           
               onChange={(event)=>this.setState({email:event.target.value})}
             />
              <TextField
             className={classes.input}
              label="Username"
               type="text"
               name="Username"
               autoComplete="Username"
               margin="normal"             
               onChange={(event)=>this.setState({username:event.target.value})}
             />
            
            <TextField
              className={classes.input}
              id="standard-password"   
              label="password"
              type="password"
              name="password"
              autoComplete="password"
               margin="normal"              
               onChange={(event)=>this.setState({password:event.target.value})}
                />
             </div>
             <Divider/>
             <div className={classes.div2}>
             <TextField
              className={classes.input}
                 
              label="First Name"
              type="text"
              name="First Name"
               margin="normal"
               onChange={(event)=>this.setState({firstname:event.target.value})}
               /> 
            <TextField
             className={classes.input}
              label="Last Name"
               type="text"
               name="Last Name"
               autoComplete="Last Name"
               margin="normal"               
               onChange={(event)=>this.setState({lastname:event.target.value})}
             />
              <TextField
             className={classes.input}
              label="Phone"
               type="number"
               name="Phone"
               autoComplete="Phone"
               margin="normal"            
               onChange={(event)=>this.setState({phone:event.target.value})}
             />
              <TextField
             className={classes.input}
              label="Exposure"
               type="number"
               name="Exposure"
               autoComplete="Exposure"
               margin="normal"              
               onChange={(event)=>this.setState({exposure:event.target.value})}  
             />
              <TextField
             className={classes.input}
              label="Commission"
               type="number"
               name="Commission"
               autoComplete="Commission"
               margin="normal"
               onChange={(event)=>this.setState({commission:event.target.value})}
             />
             </div>
             
             <Button variant="contained" className={classes.buttonposition} onClick={this.handleSubmit}>Create</Button>
          </form>
                        <a  onClick={() => this.closeModal()} className={classes.close}>Close</a>
                    </div>
                </Modal>
              <Modal visible={this.state.visible2} width="500" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()} className={classes.Modal}>
                <div className={classes.padding}>
                   
                          <form onSubmit={this.handleSubmit2}>
                               <RadioGroup
                                    aria-label="gender"
                                    name="gender"
                                    className={classes.group}
                                    onChange={(event)=>this.setState({status:event.target.value})}
                                    
                                >
                                  <FormControlLabel value="Suspended" control={<Radio />} label="Suspended" />
                                  <FormControlLabel value="Active" control={<Radio />} label="Active" />
                                  <FormControlLabel value="Locked" control={<Radio />} label="Locked" />
                                </RadioGroup>
                                <Button variant="contained" color="secondary" className={classes.button} onClick={this.handleSubmit2}>Change status</Button>

                           </form>

                    
                   <a  onClick={() => this.closeModal2()} className={classes.link} >Close</a>
                 </div>
              </Modal>
            </div>
         </div>
		)
}
}
export default withStyles(STYLES)(Downline)