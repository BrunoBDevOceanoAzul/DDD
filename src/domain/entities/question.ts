import { randomUUID } from "node:crypto";
import {slug} from "./value-objects/slug.js"

interface QuestionsProps {
    title: string;
    content: string;
    slug: slug;
    authorId: string;
}

export class Question {

    public id:  string;
    public title:  string;
    public slug:  slug;
    public content:  string;
    public authorId:  string; 

    
constructor (props : QuestionsProps, id?: string ) {
    Object.assign(this, props); 
    this.title = props.title;
    this.content = props.content;
    this.slug = props.slug;
    this.authorId = props.authorId;
    this.id = id ?? randomUUID(); 
    };
}