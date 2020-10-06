import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  private URL_TIMETRACKER = 'http://localhost:8085/timetracker'
  constructor(private http: HttpClient) { }

  public getAllClients() {
    return this.http.get(`${this.URL_TIMETRACKER}`);
  }

  public saveNewService(custemerData) {
    return this.http.post(`${this.URL_TIMETRACKER}/save`, custemerData)
  }
}
