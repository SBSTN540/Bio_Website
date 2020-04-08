import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LinksComponent } from './links/links.component';
import { AboutComponent } from './about/about.component';
// import { HttpClientModule } from '@angular/common/http';
// import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'links', component: LinksComponent },
    { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    // HttpClientModule,
    // ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
