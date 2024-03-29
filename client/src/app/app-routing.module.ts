import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AnalyseComponent } from './analyse/analyse.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HomeComponent } from './home/home.component';
import { NoContentComponent } from './no-content/no-content.component';


export const routes: Routes =
  [
    {
      path: 'analyse',
      loadChildren: () => import('./analyse/analyse.module').then(m=>m.AnalyseModule)

    },
    {
      path: 'file-upload',
      loadChildren: () => import('./file-upload/file-upload.module').then(m=>m.FileUploadModule)

    },
    {
      path: 'home',
      loadChildren: () => import('./home/home.module').then(m=>m.HomeModule)
    },
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'home'
    },
    {
      path: '**',
      component: NoContentComponent
    }
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
