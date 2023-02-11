export class Post {
    title: string;
    time: string;
    people: string;
    description: string;

    constructor(title: string, time: string, people: string, description: string){
        this.title = title;
        this.time = time;
        this.people = people;
        this.description = description;
    }
    
}