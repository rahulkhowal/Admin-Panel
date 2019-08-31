import React from 'react'
import Button from '@material-ui/core/Button'
//import {Route, BrowserRouter,Switch } from 'react-router-dom'
import {makeStyles} from'@material-ui/core/Styles'
import Typography from '@material-ui/core/Typography'
//import HorizontalPanel from './HorizontalPanel'
//import Radio from '@material-ui/core/Radio';
//import RadioGroup from '@material-ui/core/RadioGroup';
//import FormHelperText from '@material-ui/core/FormHelperText';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
//import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper'

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
    width:'135%',
    backgroundColor:'#fff8dc',
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
    padding:'7px'
  }
  })
)
const ProfitLossByDownline =()=>{
	const classes =STYLES()

  return (
    <div className={classes.root}>
      <Typography variant="h6">Profit/Loss By DownLine </Typography>
      <FormControl component="fieldset" className={classes.formControl}>
        <Paper className={classes.Paper}>
           <Typography variant="body1" classes={{root:classes.label}}>Time-Zone </Typography>
            <select name="Time-Zone" className={classes.margin}>
              <option value="Pacific/Midway">Pacific/Midway(GMT-11:00)</option>
              <option value="Pacific/Honolulu">Pacific/Honolulu(GMT-10:00)</option>
              <option value="America/Juneau">America/Juneau(GMT-9:00)</option>
              <option value="America/Phoenix">America/Phoenix(GMT-7:00)</option>
             <option value="America/Chicago">America/Chicago(GMT-6:00)</option>
             <option value="America/New_York" selected="selected">America/New_York(GMT-5:00)</option>
            </select>
             <Typography variant="body1" classes={{root:classes.label}}>Period:- </Typography>  
             <input type="date" className={classes.margin}/>
             <input type="time" className={classes.margin}/>
             <Typography variant="body1" classes={{root:classes.label}}>To</Typography>
             <input type="date" className={classes.margin}/>
             <input type="time" className={classes.margin}/>
             <Button variant="contained" color="secondary">Get P & L</Button>
         </Paper>
        </FormControl>
     
      </div>

		)
}
export default ProfitLossByDownline