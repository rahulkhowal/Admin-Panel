import React from 'react'
//import Button from '@material-ui/core/Button'
import {Route, BrowserRouter,Switch } from 'react-router-dom'
///import HorzontalPanel from './HorizontalPanel'
import AccountStatment from './AccountStatment'
import AccountSummary from './AccountSummary'
import Profile from './Profile'
import ActivityLog from './ActivityLog'
import {makeStyles} from'@material-ui/core/Styles'
import HorizontalPanel from './HorizontalPanel'
const STYLES=makeStyles(theme=>({
  root:{
  	backgroundColor:'#DCDCDC',
  	display:'block',
    height:'-webkit-fill-available',
    width:'100%'

  },
  })
)
const MyAccount =()=>{
	const classes =STYLES()
	return(
         <BrowserRouter>
              <div className={classes.root}>
                   <HorizontalPanel/>
                   <Switch>
                      <Route exact path='/MyAccount' component={AccountSummary}/>
                      <Route exact path='/AccountStatment' component={AccountStatment}/>
                      <Route exact path='/Profile' component={Profile}/>
                      <Route exact path='/ActivityLog' component={ActivityLog}/>
                    </Switch>
               </div>
           </BrowserRouter>

		)
}
export default MyAccount