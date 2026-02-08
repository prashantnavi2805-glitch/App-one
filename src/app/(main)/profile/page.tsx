import { User } from "lucide-react";

export default function ProfilePage() {
    return (
        <div className="container mx-auto px-4 py-6 text-center h-[80vh] flex flex-col items-center justify-center">
            <User className="w-16 h-16 text-muted-foreground mb-4" />
            <h1 className="text-4xl font-headline text-foreground">Profile</h1>
            <p className="text-muted-foreground mt-2">User profile information will be displayed here.</p>
        </div>
    );
}
