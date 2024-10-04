import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {}

  configUrl = 'assets/data.json';
  getConfig() {
    return this.http.get(this.configUrl);
  }
}
