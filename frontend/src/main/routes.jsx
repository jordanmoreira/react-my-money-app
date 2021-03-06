import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import App from './app'
import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Dashboard} />
            <Route path='billingCycles' component={BillingCycle} />
        </Route>
        <Redirect from='*' to='/' />
    </Router>
)



// Older version maintaned for study purposes only

// import React from 'react'
// import { Router, Route, Redirect, hashHistory } from 'react-router'

// import Dashboard from '../dashboard/dashboard'
// import BillingCycle from '../billingCycle/billingCycle'

// export default props => (
//     <Router history={hashHistory}>
//         <Route path='/' component={Dashboard} />
//         <Route path='/billingCycles' component={BillingCycle} />
//         <Redirect from='*' to='/' />
//     </Router>
// )