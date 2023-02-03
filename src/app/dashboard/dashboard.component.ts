import { Component, OnInit } from '@angular/core';
import { Hero } from '../data/hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroesService();
  }

  getHeroesService(): void {
    this.heroService.getHeroes()
      .subscribe(heroItem => this.heroes = heroItem.slice(1, 5));
  }

}