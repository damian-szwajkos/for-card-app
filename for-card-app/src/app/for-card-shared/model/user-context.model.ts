import {Role} from './role.model';

export class UserContext {
  id: string;
  sub: string;
  firstName: string;
  lastName: string;
  roles: Role[];
  exp: Date;
  private _token?: string;

  constructor(id: string, sub: string, firstName: string,
              lastName: string, roles: Role[],
              exp: Date) {
    this.id = id;
    this.sub = sub;
    this.firstName = firstName;
    this.lastName = lastName;
    this.roles = roles;
    this.exp = exp;
  }

  get token() {
    if (!this.exp || new Date() > this.exp) {
      return null;
    }
    return this._token;
  }

  set token(newToken: string) {
    this._token = newToken;
  }
}
