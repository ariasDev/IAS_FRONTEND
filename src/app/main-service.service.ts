import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  private URL_TIMETRACKER = 'http://localhost:8085/timetracker'
  constructor(private http: HttpClient) { }

  public consultService(id_tecnico, semana) {
    return this.http.get(`${this.URL_TIMETRACKER}/consultService?id=${id_tecnico}&week=${semana}`);
  }

  public saveNewService(custemerData) {
    return this.http.post(`${this.URL_TIMETRACKER}/save`, custemerData)
  }
}
