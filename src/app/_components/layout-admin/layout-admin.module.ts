import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SidebarModule } from "../_utils/sidebar/sidebar.module";
import { LayoutAdminComponent } from "./layout-admin.component";
import { ContentModule } from "../_utils/content/content.module";
import { TopbarModule } from "../_utils/topbar/topbar.module";

@NgModule({
  declarations: [LayoutAdminComponent],
  imports: [CommonModule, SidebarModule, ContentModule, TopbarModule],
})
export class LayoutAdminModule {}
