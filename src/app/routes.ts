import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { MenuComponent } from './pages/menu/menu.component';
import { GiftsComponent } from './pages/gifts/gifts.component';
import { RewardsComponent } from './pages/rewards/rewards.component';
import { AccountComponent } from './pages/account/account.component';
import { CategoriesComponent } from './categories/categories.component';

const routeConfig: Routes = [
    {
        path: '',
        component: MainComponent,
    },
    {
        path: 'main',
        component: MainComponent,
    },
    {
        path: 'about',
        component: MainComponent,
    },
    {
        path: 'menu',
        component: MenuComponent,
    },
    {
        path: 'menu/:category',
        component: CategoriesComponent,
    },
    {
        path: 'gifts',
        component: GiftsComponent,
    },
    {
        path: 'rewards',
        component: RewardsComponent,
    },
    {
        path: 'account',
        component: AccountComponent,
    },
];
export default routeConfig;