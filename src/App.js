import React from 'react';
//import Login from './components/Login'
import THEME from './Resources/theme'
import {MuiThemeProvider,createMuiTheme} from '@material-ui/core/styles'
//import Panel from './components/DashboardComponents/panel'
import Dashboard from './components/Dashboard'
const theme=createMuiTheme({
  palette:{
    primary:{
      main:THEME.colors.primary,
    
    },
    secondary:{
      main:THEME.colors.secondary,
      
    }
  },
  Typography:{
    subtitle: {
      fontWeight: THEME.fonts.primary,
    },
    body1:{
      fontWeight:550,
      fontSize:'16px'
    }

  
  },
  MuiGrid:{
    item:{
      padding:'5px'
    }
  }
  

})


const  App=()=> {
  return (
    <MuiThemeProvider theme={theme}>
    <div className="App">
      
       <Dashboard/>
     </div>
    </MuiThemeProvider>  
    
  );
}

export default App;
