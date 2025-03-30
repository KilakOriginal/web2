import { QuoteCards } from "@/components/ui/quote-cards";

export function Quotes() {
    return (
        <div className="p-10">
            <QuoteCards filePath="data/quotes.json" />
        </div>
    );
}