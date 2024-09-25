import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent {

  constructor() { }

  @Input() title: string = '';  // Title of the modal
  @Input() isVisible: boolean = false;  // To control the visibility of the modal
  @Output() closeModal = new EventEmitter<void>(); // Event emitted when the modal is closed
  @Output() confirmModal = new EventEmitter<void>(); // Event emitted when the modal is confirmed

  close() {
    this.isVisible = false;
    this.closeModal.emit(); // Emit the close event
  }

  confirm() {
    this.confirmModal.emit(); // Emit the confirm event
  }

}
