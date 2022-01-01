import { Component, OnInit } from '@angular/core';
import { HttpClientService } from "../../services/http-client.service";
import { Post } from "../../models/post";
import { Observable } from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts$: Observable<Post[]> | undefined;

  constructor( private httpClient: HttpClientService ) { }

  ngOnInit(): void {
    this.posts$ = this.getPosts();
  }

  getPosts(): Observable<Post[]> {
    return this.httpClient.getPosts();
  }

}
