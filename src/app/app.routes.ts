import { Routes } from '@angular/router';
import { MenuComponent } from './views/menu/menu.component';
import { HomeComponent } from './views/home/home.component';


export const routes: Routes = [


    {   path: '', 
        component: HomeComponent,
        title:'Home'
    },



    {   path: 'menu', 
        component: MenuComponent,
        title:'Menu'
    },

];
