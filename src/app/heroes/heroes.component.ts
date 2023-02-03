import { Component, OnInit } from '@angular/core';

import { Hero } from '../data/hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

    heroes: Hero[] = [];

    // Constructor runs when class is created
    constructor(private heroService: HeroService, private messageService: MessageService) {}

    // ngOnInit runs automatically after the constructor, use this to call functions. Similar to UseEffect in React
    ngOnInit(): void {
        this.getHeroesService();
    };

    // .subscribe calls the GET method on getHeroes in the hero.services file
    getHeroesService(): void {
        this.heroService.getHeroes()
            .subscribe(heroItem => this.heroes = heroItem);
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.heroService.addHero({ name } as Hero)
          .subscribe(hero => {
            this.heroes.push(hero);
          });
    }

    delete(hero: Hero): void {
        this.heroes = this.heroes.filter(h => h !== hero);
        this.heroService.deleteHero(hero.id).subscribe();
    }
    
};
