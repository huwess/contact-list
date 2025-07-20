import { Component, EventEmitter, Output } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule, MatDialogActions, MatDialogContent, MatDialogClose, MatDialogRef,} from '@angular/material/dialog';
@Component({
  selector: 'app-form-modal',
  imports: [MatFormFieldModule, MatButtonModule, MatInputModule, MatDialogModule],
  templateUrl: './form-modal.component.html',
  styleUrl: './form-modal.component.scss'
})
export class FormModalComponent {

}
