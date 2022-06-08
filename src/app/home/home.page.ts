import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ItemService } from 'src/app/services/item.service';
import { Anime } from '../model/items';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  items: Observable<Anime[]>;

  constructor(
    public itemService: ItemService,
    private router: Router
  ) {
    this.items = this.itemService.getItems();
  }

  ngOnInit() { }

  addItem() {
    const item = {
      animeId: '1',
      name: 'Made In Abyss',
      imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.reddit.com%2Fr%2FMadeInAbyss%2F&psig=AOvVaw0nJJNBthm0zcTXxlnZFZlR&ust=1653066590106000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCODunomH7PcCFQAAAAAdAAAAABAD',
      ratings: 5,
      seasons: 2,
      films: 3,
      description: 'sdfjskdjgkdsfjghksjfd'
    }
    this.itemService.addItem(item);
  }
}