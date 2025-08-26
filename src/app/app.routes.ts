import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component'
import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', component: NavbarComponent},
    {path: '', component: SidebarComponent},
    {path: '', component: FooterComponent},
];
