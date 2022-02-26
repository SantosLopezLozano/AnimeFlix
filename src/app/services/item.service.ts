import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(
    private storage: AngularFireStorage
  ) {}

  // Sube a firebase un archivo y devuelve ña url del archivo sibido
  uploadFile(file, path: string, name: string): Promise<string> {
    const filePath = `${path}/${name}`
    const storageRef = this.storage.ref(filePath)
    const task = storageRef.put(file)

    return new Promise((resolve, reject) => {
      task.snapshotChanges().subscribe({
        complete: () => storageRef.getDownloadURL().subscribe({next: resolve, error: reject})
      })
    })
  }
}
