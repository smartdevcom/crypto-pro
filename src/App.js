import React from 'react';
import Login from './containers/Login';
import Register from './containers/Register';
import RegisterDelegate from './containers/RegisterDelegate';
import SearchDelegate from './containers/SearchDelegate';
import Delegate from './containers/Delegate';
import ConfirmStake from './containers/ConfirmStake';
import ManageStake from './containers/ManageStake';
import RedeemStake from './containers/RedeemStake';

import DelegateRegistrationConfirmed from './containers/DelegateRegistrationConfirmed';

function App() {
   return (
      <div className='App'>
         // <Login></Login>
         // <Register></Register>
         // <RegisterDelegate></RegisterDelegate>
         // <SearchDelegate></SearchDelegate>
         // <Delegate></Delegate>
         // <ConfirmStake></ConfirmStake>
         // <ManageStake></ManageStake>
         // <RedeemStake></RedeemStake>
         <DelegateRegistrationConfirmed></DelegateRegistrationConfirmed>
      </div>
   );
}

export default App;
