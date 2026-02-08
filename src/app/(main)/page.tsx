import { Input } from "@/components/ui/input";
import { Search as SearchIcon, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const recentSearches = [
  { name: 'Alice', username: 'alice_dev', avatar: 'https://picsum.photos/seed/alice/150/150' },
  { name: 'Bob', username: 'bob_codes', avatar: 'https://picsum.photos/seed/bob/150/150' },
  { name: 'Charlie', username: 'charlie_ux', avatar: 'https://picsum.photos/seed/charlie/150/150' },
];

export default function HomePage() {
    return (
        <div className="container mx-auto px-4 py-6 space-y-8">
            <h1 className="text-4xl font-headline text-foreground">Search</h1>
            <div className="relative">
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Search for users..."
                    className="w-full pl-12 text-lg py-7 rounded-full border-2 focus-visible:ring-primary"
                />
            </div>

            <div className="space-y-4">
                <h2 className="text-xl font-headline text-muted-foreground tracking-wide">Recent Searches</h2>
                {recentSearches.length > 0 ? (
                    <div className="grid grid-cols-1 gap-4">
                        {recentSearches.map((user) => (
                            <Card key={user.username} className="hover:shadow-md transition-shadow">
                                <CardContent className="p-4 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <Avatar className="w-12 h-12 border-2 border-primary/50">
                                            <AvatarImage src={user.avatar} alt={user.name} />
                                            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-bold text-base">{user.name}</p>
                                            <p className="text-sm text-muted-foreground">@{user.username}</p>
                                        </div>
                                    </div>
                                    <Link href={`/user/${user.username}`} className="text-primary hover:underline text-sm font-semibold">
                                        View
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 bg-muted/50 rounded-lg">
                         <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-foreground">No Recent Searches</h3>
                        <p className="text-muted-foreground mt-1">Your recent searches will appear here.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
