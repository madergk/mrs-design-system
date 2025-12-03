import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ButtonComponent,
  AlertComponent,
  BadgeComponent,
  SpinnerComponent,
  ProgressComponent,
  InputComponent,
  PasswordInputComponent,
  TextareaComponent,
  SearchBoxComponent,
  AccordionComponent,
  BreadcrumbComponent,
  ButtonGroupComponent,
  DropdownComponent,
  ListGroupComponent,
  ModalComponent,
  NavbarComponent,
  PaginationComponent,
  ToastComponent
} from '@madergk/bio-ds';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    ButtonComponent,
    AlertComponent,
    BadgeComponent,
    SpinnerComponent,
    ProgressComponent,
    InputComponent,
    PasswordInputComponent,
    TextareaComponent,
    SearchBoxComponent,
    AccordionComponent,
    BreadcrumbComponent,
    ButtonGroupComponent,
    DropdownComponent,
    ListGroupComponent,
    ModalComponent,
    NavbarComponent,
    PaginationComponent,
    ToastComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Bio Design System - Demo';
  showModal = false;
  searchValue = '';
  inputValue = '';
  passwordValue = '';
  textareaValue = '';
  progressValue = 65;

  breadcrumbItems = [
    { label: 'Home' },
    { label: 'Library' },
    { label: 'Data' }
  ];

  onButtonClick(type: string) {
    console.log(`${type} button clicked`);
  }

  onSearch(value: string) {
    console.log('Search:', value);
    this.searchValue = value;
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
