import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LayoutAdminComponent } from "./_components/layout-admin/layout-admin.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutAdminComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
