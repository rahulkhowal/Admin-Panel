import React from 'react'
import Button from '@material-ui/core/Button'
//import {Route, BrowserRouter,Switch } from 'react-router-dom'
import {makeStyles} from'@material-ui/core/Styles'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl';
//import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'

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
    width:'100%',
    backgroundColor:'#fff8dc',
    '@media(max-width:760px)':{
        display:'inline',
       width:'auto'
      }

  },
  label:{
    fontSize:'15px',
    marginTop:'8px'
  },
  margin:{
    marginLeft:'4px',
    marginRight:'8px',
    '@media(max-width:760px)':{
        marginTop:'15px'
      }

  },
  formControl:{
    padding:'7px'
  },
  btn:{
    '@media(max-width:760px)':{
        marginTop:'20px'
      }
  }
  })
)
const ProfitLossByMarket =()=>{
	const classes =STYLES()

  return (
    <div className={classes.root}>
      <Typography variant="h6">Profit/Loss By Market </Typography>
      <FormControl component="fieldset" className={classes.formControl}>
        <Paper className={classes.Paper}>
        <Typography variant="body1" classes={{root:classes.label}}>Sports-All </Typography>
            <select name="Sports-All" className={classes.margin}>
              <option value="Cricket">Cricket</option>
              <option value="Scoccer">Scoccer</option>
              <option value="Tennis">Tennis</option>
              <option value="FancyBet">FancyBet</option>
              <option value="Rugby_Union">Rugby_Union</option>
              <option value="Horse_Racing">Horse_Racing</option>
              <option value="American_Football">American_Football</option>
              <option value="BasketBall">BasketBall</option>
            </select>
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
             <Button variant="contained" color="secondary" className={classes.btn}>Get P & L</Button>
         </Paper>
        </FormControl>
     
      </div>

		)
}
export default ProfitLossByMarket