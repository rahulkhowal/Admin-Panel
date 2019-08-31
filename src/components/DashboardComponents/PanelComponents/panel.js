import React from 'react'
//import Grid from '@material-ui/core/Grid';
import {Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
//import THEME from '.../Resources/theme'
import {NavLink} from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles(theme => ({
  root:{
		flexGrow: 1,
		height:'85px'

		
	},
	toolbar:{
  justifyContent:'space-between'
	
  },
  
	text:{
       width:"5%"
	},
  root2:{
    minHeight:'0px',
    padding:'2px'
  },
  margin:{
    marginRight:'35%',
    textDecoration:'none',
    color:'white',
    fontWeight:'500'
  },
  btn:{
    textDecoration:'none',
    color:'white',
    fontWeight:'500'
  },
  AppBar2:{
   '@media (max-width:780px)':{
    display:'none'
  }
  },
  IconButton:{
    display:'none',
    '@media (max-width:780px)':{
    display:'block'
  },
    
  },
  username:{
    '@media(max-width:780px)':{
      marginLeft:'123px'
      
    }
  },
  menuIcon:{
    top:'35px',
    left:'182px',
    position:'absolute',
    
  },
  Link:{
    textDecoration:'none',
    color:'black'
  }
 	
}));
const Tab=()=>{
     const classes = useStyles()
     const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(false);
  }
     return(
          <div>
             <AppBar position="static" color="primary" className={classes.root}>
                <Toolbar className={classes.toolbar}>
                  <Typography variant="h6" className={classes.logo}>Logo</Typography>                                
                  <Typography variant="h6" className={classes.username}>Username</Typography>
                  <IconButton edge='end'   color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={classes.IconButton}>
                              <MenuIcon />
                  </IconButton>
                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      >
                        <NavLink to="/" className={classes.Link}><MenuItem  onClick={handleClose}>Downline</MenuItem></NavLink><Divider/>
                        <NavLink to="/MyAccount" className={classes.Link} ><MenuItem onClick={handleClose} >My account</MenuItem></NavLink><Divider/>
                        <NavLink to="/ProfitLossByMarket" className={classes.Link}><MenuItem onClick={handleClose}>My Report</MenuItem></NavLink><Divider/>
                        <NavLink to="/BetList"  className={classes.Link}><MenuItem onClick={handleClose}>BetList</MenuItem></NavLink><Divider/>
                        <MenuItem>Risk Managment</MenuItem><Divider/>
                        <NavLink to="/Banking"  className={classes.Link}><MenuItem onClick={handleClose}>Banking</MenuItem></NavLink><Divider/>
                   </Menu>                      
                </Toolbar>
              </AppBar> 
               <AppBar color="secondary" position="static" className={classes.AppBar2} >
                <Toolbar className={classes.root2}>

                        <NavLink to="/" className={classes.btn}><Button color="inherit" >Downline List</Button></NavLink>
                        <NavLink to="/MyAccount" className={classes.btn}><Button color="inherit">My account</Button></NavLink>
                        <NavLink to="/ProfitLossByMarket" className={classes.btn}><Button color="inherit">My Report</Button></NavLink>
                        <NavLink to="/BetList" className={classes.btn}><Button color="inherit" >BetList</Button></NavLink>
                        <Button color="inherit" >Risk Managment</Button>
                        <NavLink to="/Banking" className={classes.margin}><Button color="inherit">Banking</Button></NavLink> 
                        <Typography variant="subtitle1">Time:GMT+5:30</Typography>
                        <Button color="inherit" >Logout</Button>

                </Toolbar>
              </AppBar>
             
             
</div>
     	)
	}
export default Tab