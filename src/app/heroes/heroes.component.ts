import { Component } from '@angular/core';
import { Hero } from '../data/hero';
import { HEROES } from '../data/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent {

    heroes = HEROES;
    selectedHero?: Hero;

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    };
    
};
