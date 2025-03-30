export class Author {
    forename: string;
    surname: string;
    picture?: string;
    bio?: string;

    constructor(forename: string, surname: string, picture?: string, bio?: string) {
        this.forename = forename;
        this.surname = surname;
        this.picture = picture;
        this.bio = bio;
    }
}

export class Quote {
    quote: string;
    language: string;
    author: string;
    tags?: string[];

    constructor(quote: string, language: string, author?: string, tags?: string[]) {
        this.author = author || "Unknown";
        this.quote = quote;
        this.tags = tags;
        this.language = language;
    }
}

export const loadQuotes = async (jsonPath: string): Promise<Quote[]> => {
    const response = await fetch(jsonPath);
    if (!response.ok) {
        throw new Error(`Failed to fetch quotes: ${response.statusText}`);
    }
    
    const data = await response.json();
    return data.map((quoteData: any) => {
        return new Quote(quoteData.quote, quoteData.language, quoteData.author, quoteData.tags);
    }); 
}