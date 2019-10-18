import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { TodoComponent } from './todo/todo.component';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    CreateComponent,
    ListComponent,
    TodoComponent,
  ],
})
export class PagesModule {
}
