import React from 'react'
import Button from '@material-ui/core/Button'
import {makeStyles} from'@material-ui/core/Styles'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import HorizontalNavigation from './HorizontalNavigation'

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
    width:'107%',
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
        marginTop:'30px'
      }
  },
  formControl:{
    padding:'7px',
    position:'absolute',
    left:'226px',
    top:'235px',
    width:'78%',
    '@media(max-width:760px)':{
        position:'inherit',
        top:'auto',
        left:'auto',
        width:'auto'

      }
  },
  btn:{
     '@media(max-width:760px)':{
       marginTop:'25px'
      }
  }
  })
)
const ProfitandLoss =()=>{
	const classes =STYLES()

  return (
    <div className={classes.root}>
      <HorizontalNavigation/>
    <div className={classes.formControl}>
      <Typography variant="h6">Profit and Loss History</Typography>
      <FormControl component="fieldset" >
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
      </div>

		)
}
export default ProfitandLoss