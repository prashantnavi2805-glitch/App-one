import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle2, XCircle } from "lucide-react";

type Stats = {
    avgTime: number;
    fastest: number;
    slowest: number;
}

type StatsTableProps = {
  yourStats: Stats;
  opponentStats: Stats;
};

function StatRow({ label, yourValue, opponentValue, unit, lowerIsBetter }: { label: string, yourValue: number, opponentValue: number, unit: string, lowerIsBetter?: boolean }) {
    const yourIsBetter = lowerIsBetter ? yourValue < opponentValue : yourValue > opponentValue;
    return (
        <TableRow>
            <TableHead className="font-semibold text-base">{label}</TableHead>
            <TableCell className="text-center font-medium text-lg">
                <div className="flex items-center justify-center gap-2">
                    {yourIsBetter ? <CheckCircle2 className="h-5 w-5 text-accent" /> : <XCircle className="h-5 w-5 text-destructive" />}
                    <span>{yourValue}{unit}</span>
                </div>
            </TableCell>
            <TableCell className="text-center font-medium text-lg">
                <div className="flex items-center justify-center gap-2">
                    {!yourIsBetter ? <CheckCircle2 className="h-5 w-5 text-accent" /> : <XCircle className="h-5 w-5 text-destructive" />}
                    <span>{opponentValue}{unit}</span>
                </div>
            </TableCell>
        </TableRow>
    )
}

export function StatsTable({ yourStats, opponentStats }: StatsTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-muted-foreground">Metric</TableHead>
          <TableHead className="text-center text-muted-foreground">You</TableHead>
          <TableHead className="text-center text-muted-foreground">Opponent</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <StatRow label="Average Time" yourValue={yourStats.avgTime} opponentValue={opponentStats.avgTime} unit="s" lowerIsBetter />
        <StatRow label="Fastest Answer" yourValue={yourStats.fastest} opponentValue={opponentStats.fastest} unit="s" lowerIsBetter />
        <StatRow label="Slowest Answer" yourValue={yourStats.slowest} opponentValue={opponentStats.slowest} unit="s" lowerIsBetter />
      </TableBody>
    </Table>
  );
}
