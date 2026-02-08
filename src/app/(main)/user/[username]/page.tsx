'use client';

import { useParams } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, Swords, Trophy, ShieldAlert } from "lucide-react";
import Link from "next/link";

// Mock data for user profiles - in a real app this would be fetched from a database
const userProfiles: { [key: string]: any } = {
    'alice_dev': { name: 'Alice', username: 'alice_dev', avatar: 'https://picsum.photos/seed/alice/150/150', elo: 1450, wins: 52, losses: 18, streak: 5 },
    'bob_codes': { name: 'Bob', username: 'bob_codes', avatar: 'https://picsum.photos/seed/bob/150/150', elo: 1320, wins: 41, losses: 25, streak: 0 },
    'charlie_ux': { name: 'Charlie', username: 'charlie_ux', avatar: 'https://picsum.photos/seed/charlie/150/150', elo: 1280, wins: 35, losses: 30, streak: 2 },
    'alex_g': { name: 'Alex_G', username: 'alex_g', avatar: 'https://picsum.photos/seed/opponent/150/150', elo: 1195, wins: 30, losses: 40, streak: 0 },
};

// Mock data for recent matches
const recentMatches = [
    { opponent: 'You', result: 'loss', score: '17-20', eloChange: -15, game: 'Number Series Duel' },
    { opponent: 'Bob', result: 'win', score: '25-15', eloChange: 22, game: 'Syllogism Sprints' },
    { opponent: 'You', result: 'win', score: '21-19', eloChange: 18, game: 'Pattern Recognition' },
];


export default function UserProfilePage() {
    const params = useParams();
    const username = params.username as string;
    const user = userProfiles[username];

    if (!user) {
        return (
            <div className="container mx-auto px-4 py-6 text-center h-[80vh] flex flex-col items-center justify-center">
                <h1 className="text-4xl font-headline text-foreground">User not found</h1>
                <p className="text-muted-foreground mt-2">Could not find a profile for @{username}</p>
                <Button asChild className="mt-6">
                    <Link href="/search">Back to Connect</Link>
                </Button>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-6 space-y-8 max-w-2xl">
            {/* Profile Header */}
            <Card className="overflow-hidden">
                <div className="bg-muted h-24" />
                <CardContent className="p-6 pt-0">
                    <div className="flex items-end -mt-16">
                        <Avatar className="w-32 h-32 border-4 border-card">
                            <AvatarImage src={user.avatar} alt={user.name} />
                            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="ml-4 mb-2">
                             <h1 className="text-3xl font-headline text-foreground">{user.name}</h1>
                             <p className="text-muted-foreground">@{user.username}</p>
                        </div>
                    </div>
                     <div className="mt-6 flex justify-end">
                        <Button size="lg"><Swords className="mr-2"/> Duel</Button>
                    </div>
                </CardContent>
            </Card>

            {/* Stats */}
            <Card>
                <CardHeader>
                    <CardTitle>Stats</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="p-4 bg-muted/50 rounded-lg">
                        <p className="text-sm font-medium text-muted-foreground">ELO Rating</p>
                        <p className="text-2xl font-bold text-primary">{user.elo}</p>
                    </div>
                     <div className="p-4 bg-muted/50 rounded-lg">
                        <p className="text-sm font-medium text-muted-foreground">Wins</p>
                        <p className="text-2xl font-bold text-accent">{user.wins}</p>
                    </div>
                     <div className="p-4 bg-muted/50 rounded-lg">
                        <p className="text-sm font-medium text-muted-foreground">Losses</p>
                        <p className="text-2xl font-bold text-destructive">{user.losses}</p>
                    </div>
                     <div className="p-4 bg-muted/50 rounded-lg">
                        <p className="text-sm font-medium text-muted-foreground">Win Streak</p>
                        <p className="text-2xl font-bold flex items-center justify-center gap-1">
                            <Flame className="text-destructive"/>
                            {user.streak}
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Recent Matches */}
            <Card>
                <CardHeader>
                    <CardTitle>Recent Duels</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {recentMatches.map((match, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-md">
                            <div>
                                <p className="font-semibold">vs {match.opponent}</p>
                                <p className="text-sm text-muted-foreground">{match.game}</p>
                            </div>
                            <div className="text-right">
                                <p className={`font-bold ${match.result === 'win' ? 'text-accent' : 'text-destructive'}`}>{match.result === 'win' ? <Trophy className="inline-block w-4 h-4 mr-1"/> : <ShieldAlert className="inline-block w-4 h-4 mr-1"/>}{match.score}</p>
                                <p className={`text-sm font-semibold ${match.eloChange > 0 ? 'text-accent' : 'text-destructive'}`}>
                                    ELO {match.eloChange > 0 ? '+' : ''}{match.eloChange}
                                </p>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
}
