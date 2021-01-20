import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http:HttpClient) { }

  getImages(searchValue) {
    return this.http.get(`https://pixabay.com/api/?key=17777732-5881c8153fa2bdcd4d7384430&q=${searchValue}&image_type=photo`);
  }
}
