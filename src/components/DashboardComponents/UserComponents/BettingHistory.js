import React from 'react'
import Button from '@material-ui/core/Button'
import {Route, BrowserRouter,Switch } from 'react-router-dom'
import {makeStyles} from'@material-ui/core/Styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import HorizontalNavigation from './HorizontalNavigation'
import FormControl from '@material-ui/core/FormControl';


const STYLES=makeStyles(theme=>({
  root:{
  	backgroundColor:'#DCDCDC',
  	display:'block',
    height:'-webkit-fill-available',
    width:'100%'

  },
  group:{
    flexDirection:'row'
  },
  Paper:{
    display:'flex',
    padding:'25px',
    backgroundColor:'#fff8dc',
    width:'100%',
    '@media(max-width:760px)':{
       display:'contents'
      }
    

  },
  label:{
    fontSize:'15px',
    marginTop:'8px'
  },
  margin:{
    marginLeft:'4px',
    marginRight:'8px'
  },
  formControl:{
    padding:'7px',
    position:'absolute',
    left:'226px',
    top:'235px',
    width:'78%',
    '@media(max-width:760px)':{
       position:'inherit',
       left:'auto',
       top:'auto',

      }
  },
  btn:{
    '@media(max-width:760px)':{
       marginTop:'10px'
      }
  }
  })
)
const BettingHistory =()=>{
	const classes =STYLES()
  

return (
  <div className={classes.root}>
      <HorizontalNavigation/>
    <div className={classes.formControl} >
      <Typography variant="h6">Betting History</Typography>
      <formControl >
        <Paper className={classes.Paper}>
           <Typography variant="body1" classes={{root:classes.label}}>Bet Status:- </Typography>
            <select name="country" className={classes.margin}>
              <option value="UnMatched">UnMatched</option>
              <option value="Matched">Matched</option>
              <option value="Settled">Settled</option>
              <option value="Cancelled">Cancelled</option>
              <option value="Voided">Voided</option>
              <option value="Pending">Pending</option>
            </select>
             <Typography variant="body1" classes={{root:classes.label}}>Period:- </Typography>  
             <input type="date" className={classes.margin}/>
             <input type="time" className={classes.margin}/>
             <Typography variant="body1" classes={{root:classes.label}}>To</Typography>
             <input type="date" className={classes.margin}/>
             <input type="time" className={classes.margin}/>
             <Button variant="contained" color="secondary" className={classes.btn}>Get History</Button>
         </Paper>
        </formControl>
     
      </div>
  </div>
		)
}
export default BettingHistory