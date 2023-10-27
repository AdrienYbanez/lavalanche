import {FormControl} from "@angular/forms";

export type TLoginForm = {
  email: FormControl<string>;
  password: FormControl<string>;
};
