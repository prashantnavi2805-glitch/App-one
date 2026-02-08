"use client";

import { useEffect, useState } from 'react';
import { performanceAnalyticsInsights, PerformanceAnalyticsInput } from '@/ai/flows/performance-analytics-insights';
import { Skeleton } from '@/components/ui/skeleton';
import { Sparkles } from 'lucide-react';

export default function AiInsights({ analyticsInput }: { analyticsInput: PerformanceAnalyticsInput }) {
  const [insights, setInsights] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getInsights() {
      try {
        setLoading(true);
        setError(null);
        const result = await performanceAnalyticsInsights(analyticsInput);
        setInsights(result.insights);
      } catch (e) {
        console.error(e);
        setError('Could not generate AI insights at this time.');
      } finally {
        setLoading(false);
      }
    }
    getInsights();
  }, [analyticsInput]);

  if (loading) {
    return (
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    );
  }

  if (error) {
    return <p className="text-destructive text-center">{error}</p>;
  }

  return (
    <div className="flex items-start gap-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
      <Sparkles className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
      <p className="text-foreground/90">{insights}</p>
    </div>
  );
}
