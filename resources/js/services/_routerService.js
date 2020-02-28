// routes
import {
   AsyncRsuteTableComponent,
   AsyncDataTableComponent,
   AsyncResponsiveTableComponent,
   AsyncProfileComponent
} from 'Components/AsyncComponent/AsyncComponent';

export default [
   {
      path: 'plan',
      component: AsyncRsuteTableComponent
   },
   {
      path: 'performance',
      component: AsyncDataTableComponent
   },
   {
      path: 'comprehensive',
      component: AsyncResponsiveTableComponent
   },   
   {
      path: 'profile',
      component: AsyncProfileComponent
   }
]