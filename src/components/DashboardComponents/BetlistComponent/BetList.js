import React from 'react'
import Button from '@material-ui/core/Button'
import {Route, BrowserRouter,Switch } from 'react-router-dom'
import {makeStyles} from'@material-ui/core/Styles'
import Typography from '@material-ui/core/Typography'
//import HorizontalPanel from './HorizontalPanel'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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
    width:'132%',
    backgroundColor:'#fff8dc',
    '@media(max-width:760px)':{
        display:'inline',
        width:'auto',
        padding:'20px'
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
        marginTop:'30px'
      }
  },
  formControl:{
    padding:'7px',
    '@media(max-width:760px)':{
        display:'grid'
      }
  },
  btn:{
     '@media(max-width:760px)':{
        marginTop:'30px'
      }
  }
  })
)
const BetList =()=>{
	const classes =STYLES()
  const [value, setValue] = React.useState('female');

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className={classes.root}>
      <Typography variant="h6">Bet-List</Typography>
      <FormControl component="fieldset" className={classes.formControl}>
         <RadioGroup
          name="gender1"
          className={classes.group}
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="Soccer" control={<Radio />} label="Soccer" />
          <FormControlLabel value="SportBook" control={<Radio />} label="Sport Book" />
          <FormControlLabel value="Tennis" control={<Radio />} label="Tennis" />
          <FormControlLabel value="Cricket" control={<Radio />} label="Cricket" />
          <FormControlLabel value="FancyBet" control={<Radio />} label="FancyBet" />
        </RadioGroup>
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
        </FormControl>
     
      </div>

		)
}
export default BetList