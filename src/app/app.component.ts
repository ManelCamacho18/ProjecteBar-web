import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;
  loading: boolean;
  arrUsers: any[];

  title = 'projectbar';

  constructor(private postsService: PostsService, private fb: FormBuilder, private _snackBar: MatSnackBar) {
    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
    this.arrUsers = [];
    this.loading = false;
  }

  async ngOnInit() {
    await this.postsService.getUsers()
    .then(async (posts)  => await this.arrUsers.push(...posts))
    .catch(error => console.log(error));
  }

  accedir(){
    let valid = false;
    const username = this.form.value.username;
    const password = this.form.value.password;
    for(let i = 0; i < this.arrUsers.length; i++){
      if(this.arrUsers[i].username == username && this.arrUsers[i].password == password)
      valid=true;
    }

    if(valid){
      this.fakeLoading();
    }else{
      this.error();
      this.form.reset();
    }
  }

  error(){
    this._snackBar.open('Usuari o contrasenya incorrectes', '',{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  fakeLoading(){
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }
}
