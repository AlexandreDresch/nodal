"use client";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface PieChartProps {
  chartData: number[];
  chartOptions: object;
}

export default function PieChart(props: PieChartProps) {
  const { chartData, chartOptions } = props;

  return (
    <Chart
      options={chartOptions}
      type="pie"
      width="100%"
      height="100%"
      series={chartData}
    />
  );
}
