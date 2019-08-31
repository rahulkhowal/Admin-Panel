import React from 'react'
import {Route,BrowserRouter,Switch} from 'react-router-dom'
import Panel from './DashboardComponents/PanelComponents/panel'
import Downline from './DashboardComponents/DownlineComponents/Downline'
//import AddPlayer from './DashboardComponents/AddPlayer'
import MyAccount from './DashboardComponents/MyAccountComponents/MyAccount'
import BetList from './DashboardComponents/BetlistComponent/BetList'
import ProfitLossByDownline from './DashboardComponents/MyreportComponent/ProfitLossByDownline'
import ProfitLossByMarket from './DashboardComponents/MyreportComponent/Profit-LossByMarket'
import Banking from './DashboardComponents/BankingComponents/Banking'
import AccountSummary from './DashboardComponents/UserComponents/AccountSummary'
import BettingHistory from './DashboardComponents/UserComponents/BettingHistory'
import ProfitandLoss from './DashboardComponents/UserComponents/ProfitandLoss'
import TransactionHistory from './DashboardComponents/UserComponents/TransactionHistory'
import ActivityLog from './DashboardComponents/UserComponents/ActivityLog'

const Dashboard=()=>{
	return(
         <div>
              <BrowserRouter>
                     <Panel/>
                     <Switch>
                           <Route exact path="/" component={Downline} />
                           <Route path="/MyAccount" component={MyAccount}/>
                           <Route path="/BetList" component={BetList}/>
                           <Route path="/ProfitLossByDownline" component={ProfitLossByDownline}/>
                           <Route path="/ProfitLossByMarket" component={ProfitLossByMarket}/>
                           <Route path="/Banking" component={Banking}/>
                           <Route path="/ProfitandLoss" component={ProfitandLoss}/>
                           <Route path="/BettingHistory" component={BettingHistory}/>
                           <Route path="/AccountSummary" component={AccountSummary}/>
                           <Route path="/TransactionHistory" component={TransactionHistory}/>
                           <Route path="/ActivityLog" component={ActivityLog}/>
                     </Switch>

              </BrowserRouter>
         </div>


		)
}
export default Dashboard