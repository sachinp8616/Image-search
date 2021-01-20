import { Component, OnInit } from '@angular/core';
import { ImageService } from "src/app/services/image.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private service:ImageService) { }

  images: any;
  searchValue: '';

  ngOnInit(): void {
  }

  getImages() {
    this.service.getImages(this.searchValue)
      .subscribe(response => this.images = response)
  }

}
