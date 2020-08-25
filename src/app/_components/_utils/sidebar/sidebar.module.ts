import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SidebarComponent } from "./sidebar.component";
import { InlineSVGModule } from "ng-inline-svg";

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, InlineSVGModule.forRoot()],
  exports: [SidebarComponent],
})
export class SidebarModule {}
