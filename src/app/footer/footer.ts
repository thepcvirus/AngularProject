import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
email = 'thepcvirus@gmail.com';
  phone = '+20 1155394113';
  git = 'https://github.com/thepcvirus';
  linked = 'https://www.linkedin.com/in/thepcvirus/';
  
  currentYear = new Date().getFullYear();
}

