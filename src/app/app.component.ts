import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ReactiveFormsModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-task';


  user = {
    username: '',
    email: '',
    address: '',
    date: '',
    phoneNumber: '',
    password: ''
  };

  onSubmit(userForm: any) {
    // Handle form submission logic here
    console.log('Form submitted:', this.user);
    alert("Successfully Registered");
    userForm.resetForm();
    
  }
}
