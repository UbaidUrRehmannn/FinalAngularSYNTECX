import { LoginGuard } from './shared/service/loginGuard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'employee',
    canActivate: [LoginGuard],
    loadChildren: () =>
      import('./teacher/teacher.module').then((m) => m.TeacherModule),
  },
  {
    path: 'students',
    canActivate: [LoginGuard],
    loadChildren: () =>
      import('./students/students.module').then((m) => m.StudentsModule),
  },
  {
    path: 'others',
    canActivate: [LoginGuard],
    loadChildren: () =>
      import('./parents/parents.module').then((m) => m.ParentsModule),
  },
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./homepage/homepage.module').then((m) => m.HomepageModule),
  // },
  {
    path: 'forms',
    canActivate: [LoginGuard],
    loadChildren: () =>
      import('./forms/forms.module').then((m) => m.FormssModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'pages',
    canActivate: [LoginGuard],
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
