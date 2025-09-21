import { Component, OnInit } from '@angular/core';
import { PostLikes } from './postLikes';

@Component({
    selector: 'facebook-likes',
    templateUrl: './facebookLike.component.html',
    standalone: false
})
export class FacebookLikeComponent implements OnInit {
  ngOnInit(): void {}

  pageTitle = 'My Facebook Likes Component';

  postLikes: PostLikes;

  constructor() {
    this.postLikes = new PostLikes(12);
  }

  numberOfLikes: number = 0;

  onClickLikeButton(): void {
    this.postLikes.incrementLikes();
    // console.info(
    //   `The Like button was clicked... Likes: ${this.postLikes.numberOfLikes}`
    // );
  }

  onClickDislikeButton(): void {
    this.postLikes.decrementLikes();
    // console.info(
    //   `The Like button was clicked... Likes: ${this.postLikes.numberOfLikes}`
    // );
  }
}
