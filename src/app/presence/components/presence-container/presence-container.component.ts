import {Component, OnInit} from '@angular/core';
import {PresenceService} from "../../services/presence.service";
import {PresencesStoreService} from "../../services/presences-store.service";
import {catchError, takeUntil, tap} from "rxjs";
import {BaseComponent} from "../../../shared/component/base/base.component";
import {TPresence} from "../../types/t-presence";

@Component({
  selector: 'app-presence-container',
  templateUrl: './presence-container.component.html',
  styleUrls: ['./presence-container.component.scss']
})
export class PresenceContainerComponent extends BaseComponent implements OnInit {
  public presences: TPresence[] = [];

  constructor(
    private readonly presenceService: PresenceService,
    private readonly presencesStoreService: PresencesStoreService
  ) {
    super();
  }

  ngOnInit() {
    this.getAllPresences();
    this.loadPresences();
  }

  private getAllPresences(): void {
    this.presencesStoreService.presences()
      .pipe(
        takeUntil(this.$_subcriptions),
        tap(presences => {
          this.presences = JSON.parse(JSON.stringify(presences));
          console.warn('presences dans le component : ', this.presences);
        })
      ).subscribe()
  }

  private loadPresences(): void {
    this.presenceService.loadPresences()
      .pipe(
        takeUntil(this.$_subcriptions),
        tap(presences => this.presencesStoreService.setPresences(presences as TPresence[])),
        catchError(err => {
          console.error('Une erreur est survenue lors de la recuperation des presences');
          return err;
        })
      ).subscribe();
  }

}
