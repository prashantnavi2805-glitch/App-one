import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

// Mock data, in a real app this would come from an API
const games = {
  aptitude: [
    { id: 1, title: "Number Series Duel", description: "Find the next number in the sequence. Fast." },
    { id: 2, title: "Speed & Time Trial", description: "Calculate speeds, distances, and times." },
  ],
  logical: [
    { id: 3, title: "Syllogism Sprints", description: "Deduce conclusions from given statements." },
    { id: 4, title: "Pattern Recognition", description: "Identify the visual pattern and pick the next." },
  ],
  data: [
    { id: 5, title: "Chart Challenge", description: "Interpret data from charts and graphs quickly." },
  ],
  classical: [
    { id: 6, title: "Classic Analogy Duel", description: "Find the relationship between pairs of words." },
  ],
};

type GameListProps = {
  category: string;
};

export function GameList({ category }: GameListProps) {
  const gameModes = games[category as keyof typeof games] || [];

  return (
    <div className="space-y-4 pt-6">
      {gameModes.map((game) => (
        <Card key={game.id}>
          <div className="flex items-center justify-between p-6">
            <div>
              <CardTitle className="font-headline text-xl">{game.title}</CardTitle>
              <CardDescription className="mt-1">{game.description}</CardDescription>
            </div>
            <Button asChild className="rounded-full">
              <Link href={`/duel/${game.id}/results`}>Find Match</Link>
            </Button>
          </div>
        </Card>
      ))}
      {gameModes.length === 0 && (
        <Card className="flex items-center justify-center h-32">
          <p className="text-muted-foreground">No games in this category yet.</p>
        </Card>
      )}
    </div>
  );
}
