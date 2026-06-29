export class slug
{
    public value: string
    static value: any;
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
            .replace(/\s+/g, '')
            .replace(/[ˆ\w-]+/g, '-')
            .replace(/_/g, '-')
            .replace(/--+/g, '-')
            .replace(/-$/g, '')

        return new slug(slugText)
        }

}


