import React from 'react'
import {makeStyles} from '@material-ui/core/Styles'
//import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
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
	  width:'660%',
      height:'85px',
      display:'flex'
	},
	container:{
		width:'1085px',
		padding:'12px',
      '@media(max-width:760px)':{
        display:'table-header-group'
      }
	}
})
)
const AccountStatment=()=>{
	const classes=STYLES()
	return (
		   <div className={classes.root}> 
		     <Typography variant="h6">Account Statment</Typography>
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
		)
}
export default AccountStatment