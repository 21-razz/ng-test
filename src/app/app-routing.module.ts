import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Components
import { LoginComponent } from "./pages/login/login.component";
import { WelcomeComponent } from "./pages/welcome/welcome.component";

const routes: Routes = [
  {
    path: "", component: LoginComponent,
  }, {
    path: "welcome", component: WelcomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
