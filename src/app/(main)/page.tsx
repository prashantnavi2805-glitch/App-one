import { DashboardHeader } from "@/components/dashboard/header";
import { TodayChallenge } from "@/components/dashboard/today-challenge";
import { DuelCategories } from "@/components/dashboard/duel-categories";

export default function ArenaPage() {
  return (
    <div className="container mx-auto px-4 py-6 space-y-8">
      <DashboardHeader />
      <TodayChallenge />
      <DuelCategories />
    </div>
  );
}
