import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent {
  @Input () label?: string;
  @Input () type: "button" | "submit" = "button";
  @Input () class: string | "custom-button" = "custom-button";
  @Input () disabled: boolean = false;
  @Input () color: string = "primary";
  @Input () icon?: string;
}
