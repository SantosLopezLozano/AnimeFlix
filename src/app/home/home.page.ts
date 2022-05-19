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

  item: Observable<Anime[]>;

  constructor(
    public itemService: ItemService,
    private router: Router
  ) {
    this.item = this.itemService.getItems();
  }

  ngOnInit() { }

  addItem() {
    this.router.navigateByUrl('/create-item');
  }

  goEditItem(id: string) {
    this.router.navigateByUrl(`edit-item/${id}`);
  }

}
