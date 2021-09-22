import { User } from "./user.model";

export class Ride {
  constructor(
    public user: User,
    public startPoint: string,
    public endPoint: string,
    public pickUp?: string[]
  ) {}
}
