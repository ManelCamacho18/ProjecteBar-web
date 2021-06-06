import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl: string;
  postUrl: string;
  usersUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://134.122.51.190:8080/Project_Bar/productes/';
    this.postUrl = 'http://134.122.51.190:8080/Project_Bar/comanda/';
    this.usersUrl = 'http://134.122.51.190:8080/Project_Bar/usuari/';
  }

  getAll(): Promise<any[]>{
    return this.http.get<any[]>(this.baseUrl).toPromise();
  }

  getUsers(): Promise<any[]>{
    return this.http.get<any[]>(this.usersUrl).toPromise();
  }

  postCommand(data: string){
    const values = {
      "comanda":{
          "productes":"," + data
      }
    };

    axios
    .post(
      this.postUrl,
      values
    )
    .then(async (res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  };
}

