import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { UserInfo } from '../models/b-club-user-info';

@Injectable({
  providedIn: 'root'
})

export class BClubUserInfoService {

  currentUser: Subject<UserInfo> = new BehaviorSubject<UserInfo>(null);
  constructor() { }

  public setCurrentUser(newUser: UserInfo): void {
    this.currentUser.next(newUser);
  }
}
