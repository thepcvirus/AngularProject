import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Header } from './componenet/header/header';
import { Hero } from "./hero/hero";
import { About } from "./about/about";
import { Projects } from "./projects/projects";
import { Skills } from "./skills/skills";
import { Footer } from "./footer/footer";
import { ProfileCard } from "./componenet/profile-card/profile-card";
import { TodoWrapper } from "./todo-wrapper/todo-wrapper";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileCard, TodoWrapper],
  template: `

    <router-outlet />
    <app-profile-card/>
    <app-todo-wrapper></app-todo-wrapper>
  `,
  styles: [],
})
export class App {
  protected title = 'AngLabLab1';
}
