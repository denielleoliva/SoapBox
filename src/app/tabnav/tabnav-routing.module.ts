import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabnavPage } from './tabnav.page';

const routes: Routes = [   {
  path: '',
  component: TabnavPage,
  children: [
    {
      path: 'profile',
      loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
    },
    {
      path: 'feed',
      loadChildren: () => import('../feed/feed.module').then(m => m.FeedPageModule)
    },
    {
      path: '',
      redirectTo: '/tabnav/feed',
      pathMatch: 'full'
    }
  ]   }, ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabnavPageRoutingModule {}
