/* 
 * SEARCH MODEL
 */

export default class Search {
    constructor(query) {
        this.query = query;
    };

    async getResults() {
        try {
            const res = await fetch(`https://itunes.apple.com/search?term="${this.query}&limit=30`);
            const result = await res.json();
            this.results = result.results;
        } catch (error) {
            alert(error);
        }
    };

};