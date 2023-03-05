import {RouterModule, ROUTES} from "@angular/router";
import {PresenceContainerComponent} from "./components/presence-container/presence-container.component";
import {PresenceFormComponent} from "./components/presence-form/presence-form.component";
import {PresenceDetailComponent} from "./components/presence-detail/presence-detail.component";
import {NgModule} from "@angular/core";

const routes = [
  {
    path: '',
    component: PresenceContainerComponent,
    children: [
      {
        path: 'creation',
        component: PresenceFormComponent
      },
      {
        path: 'detail',
        component: PresenceDetailComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresenceRoutingModule {}
