import {expect,test} from "vitest";
import { slug } from "./slug.js"

    test  ('it`s shoud be able to create a new slug from text')
        const Slug = slug.createFromText('Example question title')


        expect (slug.value).toEqual('example-question-title')