import React from 'react'
//import Button from '@material-ui/core/Button'
import {makeStyles} from'@material-ui/core/Styles'
import Typography from '@material-ui/core/Typography'
//import FormControl from '@material-ui/core/FormControl';
//import Paper from '@material-ui/core/Paper'
//import TextField from '@material-ui/core/TextField'
import HorizontalNavigation from './HorizontalNavigation'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'

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
    backgroundColor:'#fff8dc'

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
       width:'96%'

      }
  },
  container:{
    padding:'8px',
    '@media(max-width:760px)':{
      display:'table-header-group'

      }
  }
  })
)
const TransactionHistory =()=>{
	const classes =STYLES()

  return (
    <div className={classes.root}>
      <HorizontalNavigation/>
    <div className={classes.formControl}>
      <Typography variant="h6">Transaction History</Typography>
        <Divider/>
                <Grid container className={classes.container}>
                   <Grid item xs={2}>
                        <Typography variant="subtitle">Date/Time</Typography>
                    </Grid>
                    <Grid item xs={2}>
                         <Typography variant="subtitle">Deposit</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="subtitle">Withdraw</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="subtitle">Balance</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="subtitle">Remark</Typography>
                    </Grid>
                   <Grid item xs={2}>
                       <Typography variant="subtitle">From/To</Typography>
                    </Grid>
                </Grid>
             <Divider/>
          </div>
        </div>
      

		)
}
export default TransactionHistory