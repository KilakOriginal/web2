import { useState, useEffect } from "react"
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import {
    Quote,
    loadQuotes,
} from "@/components/data/quote"
import "@/pages/quotes.css"

function QuoteCard({ quote, author }: { quote: string; author: string }) {
    return (
        <Card className="quote-card">
            <CardContent className="quote-card-text">
                {quote}
            </CardContent>
            <CardFooter className="quote-card-footer">
                {author}
            </CardFooter>
        </Card>
    );
}

export function QuoteCards({ filePath }: { filePath: string }) {
    const [quotes, setQuotes] = useState<Quote[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadQuotes(filePath)
            .then((data) => {
                setQuotes(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error loading quotes:", error);
                setIsLoading(false);
            });
    }, [filePath]);

    return (
        <div className="quote-cards-container">
            {isLoading
                ?
                  Array.from({ length: 3 }).map((_, index) => (
                      <Skeleton key={index} className="w-full h-32 rounded-md my-2" />
                  ))
                : quotes.map((quote, index) => (
                      <QuoteCard key={index} quote={quote.quote} author={quote.author} />
                  ))}
        </div>
    );
}
