import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LayoutAdminModule } from "./_components/layout-admin/layout-admin.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutAdminModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
