import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
})
export class PostCreateComponent {
  newPost = 'No Content';
  enteredValue = '';

  onAddPost(postInput: HTMLTextAreaElement) {
    this.newPost = this.enteredValue;
  }

}
