import { Profile } from "./profile";

export class Post {
    op: Profile;
    title: string;
    time: string;
    people: string;
    description: string;

    constructor(op: Profile, title: string, time: string, people: string, description: string){
        this.op = op;
        this.title = title;
        this.time = time;
        this.people = people;
        this.description = description;
    }
    
}