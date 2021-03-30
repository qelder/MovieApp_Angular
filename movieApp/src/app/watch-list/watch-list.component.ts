import { MovieService } from './../service/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css'],
})
export class WatchListComponent implements OnInit {
  watch: any[] = [];
  watchIds: number[] = [];
  showInfo: any;

  constructor(private service: MovieService) {}

  ngOnInit(): void {
    this.watch = this.service.getWatch();
    this.watchIds = this.service.getIds();
  }

  removeWatch(index: number) {
    this.watch.splice(index, 1);
    this.watchIds.splice(index, 1);
    this.service.setWatch(this.watch);
    this.service.setIds(this.watchIds);
  }

  ShowInfo(index: any) {
    this.showInfo = index;
  }

  removeShowInfo() {
    this.showInfo = null;
  }
}
