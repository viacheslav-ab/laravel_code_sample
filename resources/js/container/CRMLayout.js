/**
 * Horizontal App
 */
import React, { useEffect, useState } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

// app default layout
import RctCRMLayout from '../components/RctCRMLayout';

// router service
import routerService from "../services/_routerService";

// redux
import { connect } from 'react-redux'

const CRMLayout = ({ match, location, history, roll }) => {

   const [isRedirect, setIsRedirect] = useState(false)

   useEffect(() => {
      // check admin when location changed
      console.log("location changed=========", roll)
      if (location.pathname.startsWith(`${match.url}/performance`) ||
         location.pathname.startsWith(`${match.url}/comprehensive`)) {
         if (roll === "user" && !isRedirect) {
            console.log("========== ohohoho =========")
            setIsRedirect(true)
         }
      }
   }, [location.pathname])

   if (isRedirect && (location.pathname.startsWith(`${match.url}/performance`) ||
      location.pathname.startsWith(`${match.url}/comprehensive`))) {
      console.log("========= isRedirect is true ============")
      return (<Redirect to={`${match.url}/plan`} />);
   }

   if (location.pathname === match.url) {
      console.log("========= /dashboard ============")
      return (<Redirect to={`${match.url}/plan`} />);
   }

   return (
      <RctCRMLayout >
         <Switch>
            {routerService && routerService.map((route, key) =>
               <Route key={key} path={`${match.url}/${route.path}`} component={route.component} />
            )}
         </Switch>
      </RctCRMLayout >
   );

}

const mapStateToProps = ({ authUser }) => {
   const { roll } = authUser
   return { roll }
}

export default connect(mapStateToProps)(withRouter(CRMLayout));
