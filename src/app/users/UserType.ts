import { Role } from '../role/role';
export interface UserType{
    enabled: Boolean;
    id: Number;
    email: String;
    phone: Number;
    username: String;
    company: Number;
    department: Number;
    roles: Role[];
}