import { Component } from '@angular/core';
import { CommonModule} from "@angular/common";

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent {
  slots: any = [
    {hour: '10:00', meridiem: 'AM'},
    {hour: '11:30', meridiem: 'AM'},
    {hour: '2:00', meridiem: 'PM'},
    {hour: '2:30', meridiem: 'PM'},
    {hour: '3:30', meridiem: 'PM'},
    {hour: '4:00', meridiem: 'PM'},
    {hour: '10:00', meridiem: 'AM'},
    {hour: '11:30', meridiem: 'AM'},
    {hour: '2:00', meridiem: 'PM'},
    {hour: '2:30', meridiem: 'PM'},
    {hour: '3:30', meridiem: 'PM'},
    {hour: '4:00', meridiem: 'PM'},
  ]
}
