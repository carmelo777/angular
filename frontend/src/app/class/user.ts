import { UserInterface } from "../interfaces/user";

export class User implements UserInterface {
    id: number;
    name: string;
    lastname : string;
    fiscalcode: string;
    email:string;
    province: string;
    phone: string;
    age:number;

    constructor() {
        this.id=0;
        this.name = "" ;
        this.lastname = "" ;
        this.fiscalcode= "";
        this.email= "";
        this.province= "" ;
        this.phone= "" ;
        this.age= 17;
    }
}
