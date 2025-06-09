import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  imports: [],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.scss'
})
export class ProfileCard {
  users: UserData[] = [
    {
      name: 'john_doe',
      email: 'john@example.com',
      phone: '+1234567890',
      verified: true,
    },
    {
      name: 'jane_smith',
      email: 'jane@example.com',
      phone: '+1987654321',
      verified: false,
    },
    {
      name: 'john_doe',
      email: 'john@example.com',
      phone: '+1234567890',
      verified: true,
    },
    {
      name: 'jane_smith',
      email: 'jane@example.com',
      phone: '+1987654321',
      verified: false,
    },
    // Add more users as needed
  ];
}

export interface UserData{
name:string,
email:string,
phone:string,
verified:boolean
}
