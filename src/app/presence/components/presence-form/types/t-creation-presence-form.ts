import {FormControl} from "@angular/forms";

export type TCreationPresenceForm = {
  dateStart: FormControl<Date | null>;
  dateEnd: FormControl<Date | null>;
  nbrAdults: FormControl<number | null>;
  nbrChildren: FormControl<number | null>;
  authorId: FormControl<string | null>;
  comment: FormControl<string | null>;
  eventId: FormControl<number | null>;
}
