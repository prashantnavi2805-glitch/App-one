"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from 'recharts';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";

type SpeedChartProps = {
  yourData: number[];
  opponentData: number[];
};

export function SpeedChart({ yourData, opponentData }: SpeedChartProps) {
  const chartData = Array.from({ length: 60 }, (_, i) => ({
    second: i + 1,
    you: yourData[i],
    opponent: opponentData[i],
  }));

  const chartConfig = {
    you: {
      label: "Your Speed",
      color: "hsl(var(--primary))",
    },
    opponent: {
      label: "Opponent Speed",
      color: "hsl(var(--destructive))",
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer config={chartConfig} className="h-[300px] w-full">
      <AreaChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
          top: 10,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="second"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => `${value}s`}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => `${value}`}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" />}
        />
        <Legend content={<ChartLegendContent />} />
        <Area
          dataKey="you"
          type="natural"
          fill={chartConfig.you.color}
          fillOpacity={0.3}
          stroke={chartConfig.you.color}
          stackId="a"
        />
        <Area
          dataKey="opponent"
          type="natural"
          fill={chartConfig.opponent.color}
          fillOpacity={0.3}
          stroke={chartConfig.opponent.color}
          stackId="b"
        />
      </AreaChart>
    </ChartContainer>
  );
}
