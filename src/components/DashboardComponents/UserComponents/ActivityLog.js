import React from 'react'
import {makeStyles} from '@material-ui/core/Styles'
//import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import HorizontalNavigation from './HorizontalNavigation'
const STYLES=makeStyles(theme=>({
	root:{
      position:'absolute',
      left:'230px',
      top:'210px',
      '@media(max-width:760px)':{
       position:'inherit',
       left:'auto',
       top:'auto',
       width:'96%'

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
      display:'contents'

      }
	},
  div:{
    backgroundColor:'#DCDCDC',
    display:'block',
    height:'-webkit-fill-available',
    width:'100%'
  }
})
)
const ActivityLog=()=>{
	const classes=STYLES()
	return (
     <div className={classes.div}>
        <HorizontalNavigation/>
		   <div className={classes.root}> 
		     <Typography variant="h6">Activity Log</Typography>
		     <Divider/>
                <Grid container className={classes.container}>
                   <Grid item xs={2}>
                        <Typography variant="subtitle">Login Date and Time</Typography>
                    </Grid>
                    <Grid item xs={2}>
                         <Typography variant="subtitle">Login Status</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="subtitle">IP Address</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="subtitle">ISP</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="subtitle">City/State/Country</Typography>
                    </Grid>
                   
                </Grid>
             <Divider/>
          </div>
        </div>
		)
}
export default ActivityLog