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

  pathToItems = `users/${this.auth.getCurrentUser().uid}/items`;

  constructor(
    private firestore: Firestore,
    private auth: AuthService
  ) { }

  public async addItem(item: Anime) {
    await addDoc(collection(this.firestore, this.pathToItems), item);
  }

  getItems(): Observable<Anime[]> {
    const collectionRef = collection(this.firestore, this.pathToItems);
    return collectionData(collectionRef, {idField: 'itemId'}) as Observable<Anime[]>;
  }

  getItem(id: string): Observable<Anime> {
    const docRef = doc(this.firestore, `${this.pathToItems}/${id}`);
    return docData(docRef, { idField: 'itemId' }) as Observable<Anime>;
  }

  async deleteItem(id: string) {
    await deleteDoc(doc(this.firestore, `${this.pathToItems}/${id}`));
  }

  async updateItem(item: Anime) {
    await setDoc(doc(this.firestore, `${this.pathToItems}/${item.animeId}`), item);
  }
}
