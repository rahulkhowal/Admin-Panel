import React from 'react'
import {NavLink } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core/Styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'

const STYLES=makeStyles(theme=>({
  root:{
   display:'inline-block',
   width:'200px' 
  },
item:{
	backgroundColor:'black',
	color:'white',
	padding:'5px'
} ,
link:{
	textDecoration:'none',
	color:'black'
},
div:{
	display:'grid',
	padding:'10px'
},
div2:{
	padding:'10px 10px'
},
padding:{
	padding:'5px'
}

}))
const HorizontalPanel=()=>{
	const classes= STYLES()
	return(
		<div className={classes.div}>
            <div className={classes.div2}>
		       <Button variant="outlined" color="default" size="large">Username > user</Button>
		     </div>
        <Paper className={classes.root}>
            <Grid item className={classes.item} >
               <Typography variant="subtitle">Position</Typography>

            </Grid>
             <Divider/>
            <Grid item className={classes.padding}>
               <NavLink to='/AccountSummary' className={classes.link}> Account Summary</NavLink>
            </Grid>
            <Divider/>
            <Grid item  className={classes.item}>
                <Typography variant="subtitle">Performance</Typography>
            </Grid>
            <Divider/>
            <Grid item className={classes.padding} >
               <NavLink to='/BettingHistory' className={classes.link}> Betting History </NavLink>
            </Grid>
            <Divider/>
             <Grid item className={classes.padding}>
               <NavLink to='/ProfitandLoss' className={classes.link}>  Profit and Loss</NavLink>
            </Grid>
            <Divider/>
            <Grid item className={classes.padding}>
               <NavLink to='/TransactionHistory' className={classes.link}> Transaction History</NavLink>
            </Grid>
            <Divider/>
             <Grid item className={classes.padding}>
               <NavLink to='/ActivityLog' className={classes.link}> Activity Log</NavLink>
            </Grid>
         </Paper>
       </div>
		)
}
export default HorizontalPanel