import React from 'react'
import {makeStyles} from '@material-ui/core/Styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
const STYLES=makeStyles(theme=>({
	root:{
      position:'absolute',
      left:'230px',
      top:'210px',
      '@media(max-width:760px)':{
        display:'inherit',
        top:'auto',
        left:'auto'
      }
      
	},
	paper:{
	  width:'660%',
      height:'85px',
      display:'flex'
	},
	container:{
		width:'540px',
    '@media(max-width:760px)':{
        width:'371px',
        
      }
		
	},
  heading:{
    backgroundColor:'black',
    color:'white',
    padding:'5px'
  },
  font:{
    fontSize:'14px',
    fontWeight:500
  },
  container2:{
    position:'absolute',
    left:'102%',
    top:'14%',
    width:'100%',
  '@media(max-width:760px)':{
        width:'100%',
        height:'auto',
        position:'inherit',
        marginTop:'10px',
        top:'auto',
        left:'auto'

      }
  },
  padding:{
    padding:'5px'
  }
})
)
const Profile=()=>{
	const classes=STYLES()
	return (
		   <div className={classes.root}> 
		     <Typography variant="body1">Profile</Typography>
		     <Paper className={classes.container}>
          <Grid item className={classes.heading} >
            <Typography variant="body1" >About You</Typography>
          </Grid>
          <Divider/>
           <Grid item className={classes.padding}>
            <Typography variant="subtitle" classes={{root:classes.font}}>First Name</Typography>
          </Grid>
           <Divider/>
           <Grid item className={classes.padding}>
            <Typography variant="subtitle"classes={{root:classes.font}}>Last Name</Typography>
          </Grid>
           <Divider/>
           <Grid item className={classes.padding}>
            <Typography variant="subtitle" classes={{root:classes.font}}>Birthday</Typography>
          </Grid>
           <Divider/>
          <Grid item className={classes.padding}>
            <Typography variant="subtitle" classes={{root:classes.font}}>E-mail</Typography>
          </Grid>
           <Divider/>
          <Grid item className={classes.padding}>
            <Typography variant="subtitle" classes={{root:classes.font}}>Password</Typography>
          </Grid>
           <Divider/>
           <Grid item className={classes.padding}>
            <Typography variant="subtitle" classes={{root:classes.font}}>Time-Zone</Typography>
          </Grid>
          <Divider/>
         </Paper>
         <Paper className={classes.container2} >
          <Grid item className={classes.heading} >
            <Typography variant="body1" >About You</Typography>
          </Grid>
          <Divider/>
           <Grid item className={classes.padding}>
            <Typography variant="subtitle" classes={{root:classes.font}}>Primary Number</Typography>
          </Grid>
          <Divider/>
          </Paper>
          </div>
		)
}
export default Profile