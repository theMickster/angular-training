export class PostLikes {
  postId: number;

  constructor(private _numberOfLikes: number) {}

  get numberOfLikes(): number {
    return this._numberOfLikes;
  }

  decrementLikes(): void {
    if (this._numberOfLikes > 0) {
      this._numberOfLikes--;
    }
  }

  incrementLikes(): void {
    this._numberOfLikes++;
  }
}
