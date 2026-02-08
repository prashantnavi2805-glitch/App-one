import { MoreHorizontal } from "lucide-react";

export default function MorePage() {
    return (
        <div className="container mx-auto px-4 py-6 text-center h-[80vh] flex flex-col items-center justify-center">
            <MoreHorizontal className="w-16 h-16 text-muted-foreground mb-4" />
            <h1 className="text-4xl font-headline text-foreground">More</h1>
            <p className="text-muted-foreground mt-2">Settings, profile, and other options will be here.</p>
        </div>
    );
}
