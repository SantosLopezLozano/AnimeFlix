import { Injectable } from '@angular/core';
import {
  Firestore, collectionData, deleteDoc, doc, addDoc, collection, docData, setDoc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Anime } from '../model/items';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private firestore: Firestore) { }

  public async addItem(item: Anime) {
    await addDoc(collection(this.firestore, 'animesPublicos'), item);
  }

  public getItems(): Observable<Anime[]> {
    return collectionData(
      collection(this.firestore, 'animesPublicos'), { idField: 'animeID' }
    ) as Observable<Anime[]>;
  }
}
