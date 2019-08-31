import React from 'react'
import {makeStyles} from '@material-ui/core/Styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
const STYLES=makeStyles(theme=>({
	root:{
      position:'absolute',
      left:'230px',
      top:'210px',
      '@media(max-width:760px)':{
        position:'inherit'
      }
	},
	paper:{
	  width:'560%',
      height:'85px',
      display:'flex',
       '@media(max-width:760px)':{
        width:'100%',
        height:'auto'
      }
	},
  item:{
      '@media(max-width:760px)':{
       display:'none'
      }
  }
})
)
const AccountSummary=()=>{
	const classes=STYLES()
	return (
		   <div className={classes.root}> 
		     <Typography variant="h6">Account Summary</Typography>
             <Paper className={classes.paper}>
                <Grid item xs={6}>
                   <Typography variant="subtitle">Your Balances</Typography>
                    <Typography variant="h6"> 0.00</Typography>
                </Grid>
                <Grid item xs={6} className={classes.item}>
                   <Typography variant="subtitle">Your Balances</Typography>
                    <Typography variant="h6"> 0.00</Typography>
                </Grid>
             </Paper>
           </div>
		)
}
export default AccountSummary