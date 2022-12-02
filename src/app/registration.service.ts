import { Host, Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor( private _http : HttpClient) { }

  public loginUserFromRemote(user : Host):Observable<any>{
    return this._http.post("http://localhost:9090/login",user, {responseType:'text'})
  }

  public registerUserFromRemote(user : Host):Observable<any>{
    return this._http.post<any>("http://localhost:9090/register",user)
  }
  public getUserList(): Observable<Host[]>{
    return this._http.get<Host[]>("http://localhost:9090/all/users")
  }
}
//  private baseURL = "http://localhost:9090/"
//   constructor(private httpClient: HttpClient ) { }
 
//   getFeedBackList(): Observable<Feedback[]>{
//     return this.httpClient.get<Feedback[]>(`${this.baseURL}allfeedback`)
//   }