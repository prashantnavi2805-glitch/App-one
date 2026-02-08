import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GameList } from "@/components/dashboard/game-list";

const categories = [
  { value: "aptitude", label: "Aptitude" },
  { value: "logical", label: "Logical Reasoning" },
  { value: "data", label: "Data Interpretation" },
  { value: "classical", label: "Classical" },
];

export function DuelCategories() {
  return (
    <section>
      <Tabs defaultValue="aptitude" className="w-full">
        <div className="flex justify-center">
            <TabsList className="grid w-full max-w-lg grid-cols-2 md:grid-cols-4 bg-card border h-12">
            {categories.map((cat) => (
                <TabsTrigger key={cat.value} value={cat.value} className="text-sm">
                {cat.label}
                </TabsTrigger>
            ))}
            </TabsList>
        </div>
        {categories.map((cat) => (
          <TabsContent key={cat.value} value={cat.value}>
            <GameList category={cat.value} />
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
