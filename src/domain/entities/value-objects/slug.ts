export class Slug
{
    public value: string
        constructor( value: string){
        this.value = value;
        }

    /**
     * Receives a string and nomalize it as a slug
     *
     * Exemple "An example title " => "an-example-title":
     *
     *
     * @param text
     */
    static createFromText (text: string){
        const slugText = text
            .normalize("NFKD")
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '-')
            .replace(/--+/g, '-')
            .replace(/-$/g, '')

        return new Slug(slugText)
        }

}


