import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../data/hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

    clickedHero: Hero | undefined;

    constructor(
        private route: ActivatedRoute, // Contains info from the current URL
        private heroService: HeroService,
        private location: Location // Lets you navigate back to prev view
    ) {}

    // @Input() - allows data to be passed between components. Similar to props in React
    // @Input() clickedHero?: Hero;

    ngOnInit(): void {
        this.getSelectedHero();
    };
      
    getSelectedHero(): void {
        // Number converts the id captured from URL into a number
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.heroService.getHero(id)
        .subscribe(hero => this.clickedHero = hero);
    };

    goBack(): void {
        this.location.back();
    };

}
