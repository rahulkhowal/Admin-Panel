import React from 'react'
import Button from '@material-ui/core/Button'
import {makeStyles} from'@material-ui/core/Styles'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'

const STYLES=makeStyles(theme=>({
 root:{
    backgroundColor:'#DCDCDC',
    display:'block',
    height:'-webkit-fill-available',
    width:'100%'
      
  },
  paper:{
    width:'98%',
      height:'50px',
      display:'flex',
      padding:'10px',
      '@media (max-width:780px)':{
        width:'auto',
        height:'auto',

  }
  },
  list:{
    padding:'10px',
    marginTop:'5px'
  },
  container:{
    padding:'15px',
     '@media (max-width:780px)':{
        display:'inline',
        height:'auto',

  },

  },
  item:{
    '@media (max-width:780px)':{
        display:'contents',
      

    },
  },
   item2:{
    '@media (max-width:780px)':{
        display:'table-column',
      

    },
  },
  allign:{
    textAlign:'center'
  },
  div:{
   justifyContent:'center',
   padding:'20px',
    display:'flex',
    '@media (max-width:780px)':{
        display:'inline-block',
      

    }
  },
  margin:{
    marginLeft:'10px',
    marginRight:'10px'
  },
  btn:{
    '@media (max-width:780px)':{
        marginTop:'15px',
        marginLeft:'45px'
      

    },
  }
})
)
const Banking =()=>{
	const classes =STYLES()

  return (
    <div className={classes.root}>
      <Typography variant="h6">Banking </Typography>
       <Paper className={classes.paper}>
                <Grid item xs={6}>
                   <Typography variant="subtitle">Your Balances</Typography>
                    <Typography variant="h6"> 0.00</Typography>
                </Grid>
                <Divider/>
        </Paper>
        
        <div className={classes.list}>
        <Divider/>
              
                <Grid container className={classes.container}>
                   <Grid item xs={2}>
                        <Typography variant="subtitle">UID</Typography>
                    </Grid>
                    <Grid item xs={1}>
                         <Typography variant="subtitle">Balance</Typography>
                    </Grid>
                    <Divider component="vr"/>
                    <Grid item xs={1} className={classes.item}>
                        <Typography variant="subtitle">Avialable D/W</Typography>
                    </Grid>
                    <Grid item xs={1} className={classes.allign}>
                        <Typography variant="subtitle">Exposure</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="subtitle">Deposite/Withdraw</Typography>
                    </Grid>
                    <Grid item xs={2} className={classes.item}>
                        <Typography variant="subtitle">Credit Refrences</Typography>
                    </Grid>
                     <Grid item xs={1} className={classes.item2} >
                        <Typography variant="subtitle">Refrence PL</Typography>
                    </Grid>
                     <Grid item xs={1}>
                        <Typography variant="subtitle">Remark</Typography>
                    </Grid>
                     <Grid item xs={1} className={classes.item}>
                        <Typography variant="subtitle" >All Logs</Typography>
                    </Grid>
                </Grid>
            <Divider/>  
            <div className={classes.div}>
                <Button variant="contained" size="large" color="default">Clear All</Button> 
                <Button variant="contained" size="large" color="default" className={classes.margin}>Password</Button>
                <Button variant="contained" size="large" color="secondary" className={classes.btn}>Submit Payment</Button> 
            </div>
        </div>
        
      </div>

		)
}
export default Banking