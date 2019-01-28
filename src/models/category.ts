export class Category {

    name: string;
    url: string;
    count: number;
    next: string;
    previous: string;
    results: any[];  

    constructor(name: string, url: string) {
        this.name = name;
        this.url = url;
    }
}