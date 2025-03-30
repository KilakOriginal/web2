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

export async function loadQuotes(filePath: string): Promise<Quote[]> {
    try {
        console.log("Fetching quotes from:", filePath);
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Failed to fetch quotes: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error loading quotes:", error);
        throw error;
    }
}