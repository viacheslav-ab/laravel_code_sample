/**
 * AsyncComponent
 * Code Splitting Component / Server Side Rendering
 */
import React from 'react';
import Loadable from 'react-loadable';

// rct page loader
import RctPageLoader from 'Components/RctPageLoader/RctPageLoader';

const AsyncRsuteTableComponent = Loadable({
   loader: () => import("Routes/Plan/RsuteTable"),
   loading: () => <RctPageLoader />
})

// Basic Table
const AsyncDataTableComponent = Loadable({
   loader: () => import("Routes/tables/data-table"),
   loading: () => <RctPageLoader />,
});

// Responsive Table
const AsyncResponsiveTableComponent = Loadable({
   loader: () => import("Routes/tables/responsive"),
   loading: () => <RctPageLoader />,
});

// Responsive Table
const AsyncProfileComponent = Loadable({
   loader: () => import("Routes/Profile/Profile"),
   loading: () => <RctPageLoader />,
});

export {
   //============================//
   AsyncRsuteTableComponent,
   AsyncDataTableComponent,
   AsyncResponsiveTableComponent,
   AsyncProfileComponent
};
