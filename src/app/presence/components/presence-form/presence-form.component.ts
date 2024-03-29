import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TCreationPresenceForm} from "./types/t-creation-presence-form";
import {PresenceService} from "../../services/presence.service";

@Component({
  selector: 'app-presence-form',
  templateUrl: './presence-form.component.html',
  styleUrls: ['./presence-form.component.scss']
})
export class PresenceFormComponent implements OnInit{
  public creationPresenceForm: FormGroup = new FormGroup<TCreationPresenceForm>({
    authorId: new FormControl('Adrien', Validators.required),
    comment: new FormControl('', Validators.required),
    dateEnd: new FormControl(null, Validators.required),
    dateStart: new FormControl(null, Validators.required),
    eventId: new FormControl(-1),
    nbrAdults: new FormControl(null, Validators.required),
    nbrChildren: new FormControl(null, Validators.required)
  })

  constructor(
    private readonly presenceService: PresenceService
  ) {
  }

  public get dateStart() {
    return this.creationPresenceForm.get('dateStart') as FormControl;
  }
  public get dateEnd() {
    return this.creationPresenceForm.get('dateEnd') as FormControl;
  }
  public get nbrAdults() {
    return this.creationPresenceForm.get('nbrAdults') as FormControl;
  }
  public get nbrChildren() {
    return this.creationPresenceForm.get('nbrChildren') as FormControl;
  }
  public get comment() {
    return this.creationPresenceForm.get('comment') as FormControl;
  }

  public cancel(){
    this.creationPresenceForm.reset();
  }

  public submitForm() {
    console.warn('le form : ', this.creationPresenceForm);
    if(this.creationPresenceForm.valid) {
      this.presenceService.createPresence(this.creationPresenceForm.value)
    } else {
      console.warn('B')
      this.creationPresenceForm.markAllAsTouched();
      this.creationPresenceForm.updateValueAndValidity();
    }
  }

  ngOnInit() {
  }



}
