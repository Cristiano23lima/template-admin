import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { InlineSVGModule } from "ng-inline-svg";

import { TopbarComponent } from "./topbar.component";

@NgModule({
  declarations: [TopbarComponent],
  imports: [CommonModule, InlineSVGModule.forRoot()],
  exports: [TopbarComponent],
})
export class TopbarModule {}
