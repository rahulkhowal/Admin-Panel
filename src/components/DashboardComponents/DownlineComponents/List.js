import React from 'react'
import {makeStyles} from '@material-ui/core/Styles'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button'
import CachedOutlinedIcon from '@material-ui/icons/CachedOutlined';
import ListItemIcon from '@material-ui/core/ListItemIcon'
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
//import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ChangeHistoryOutlinedIcon from '@material-ui/icons/ChangeHistoryOutlined';
import Grid from '@material-ui/core/Grid'
import {NavLink} from 'react-router-dom'
const STYLES= makeStyles(theme=>({
 root:{
 	backgroundColor: theme.palette.background.paper,
 	padding:'10px 67px',  
  overflow: 'auto',
  '@media(max-width:760px)':{
    padding:'0px 0px'
  }

 },
 marginLimit:{
  textAlign:'center'
 },
 fill:{
  fill:'black'
 },
 container:{
  '@media(max-width:760px)':{

  }
 },
 margin:{
  '@media(max-width:760px)':{
   marginLeft:'20px'
  }
 },
 margin2:{
  '@media(max-width:760px)':{
   marginLeft:'30px'
  }
},
padding:{
   '@media(max-width:760px)':{
   padding:'4px 0px 4px 0px'
  }
}
}))

const ListOfPlayers=({players,openModal2})=>{
	const classes=STYLES()
    const ListeItems=players.length ?(players.map(player=>{
    	return(
    		<div>
              <List dense className={classes.root}>
                 <ListItem key={player.id} button className={classes.padding}>
                   <Grid container  className={classes.container}>
                    <Grid item xs={2} className={classes.margin}>
                         <ListItemText primary={player.Username}/>
                     </Grid>
                     <Grid item xs={1} className={classes.margin}>  
                         <ListItemText primary={player.Credit}/>
                     </Grid>
                    <Grid item xs={1} className={classes.margin}>
                         <ListItemText primary={player.Balance}/>
                     </Grid>
                    <Grid item xs={1} className={classes.margin}>
                         <ListItemText primary={player.Exposure}/>
                    </Grid>
                    <Grid item xs={1} className={classes.margin}>
                         <ListItemText primary={player.Avail}/>
                     </Grid>
                      <Grid item xs={2} className={classes.margin}>
                         <ListItemText primary={player.Limit} className={classes.marginLimit}/>
                     </Grid>
                     <Grid item xs={2} className={classes.margin}>
                          <ListItemText primary=<Button variant="outlined" size="small" color="secondary" onClick={()=>{openModal2(player.id)}}>{player.Status}</Button>className={classes.marginLimit}/>
                     </Grid>
                      <Grid item xs={2} className={classes.marginLimit}>
                           <ListItemIcon className={classes.margin2} >
                              <NavLink to="/ProfitandLoss"><CachedOutlinedIcon  className={classes.fill}/></NavLink>
                              <NavLink to="/BettingHistory"><ChangeHistoryOutlinedIcon className={classes.fill}/></NavLink>
                              <NavLink to="/AccountSummary"><PermIdentityOutlinedIcon  className={classes.fill}/></NavLink>
                           </ListItemIcon>
                      </Grid>
                      </Grid>
                   </ListItem>
              </List>
             <Divider/>
            </div>
    		)
    })):(null)
	return(
          <div >
            {ListeItems}
           </div>
		)
}
export default ListOfPlayers