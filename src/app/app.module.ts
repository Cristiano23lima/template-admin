import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { InlineSVGModule } from "ng-inline-svg";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LayoutAdminModule } from "./_components/layout-admin/layout-admin.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutAdminModule,
    HttpClientModule,
    InlineSVGModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
