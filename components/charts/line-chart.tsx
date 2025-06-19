'use client';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

interface LineChartProps {
    chartData: ApexAxisChartSeries;
    chartOptions: ApexCharts.ApexOptions;
}

export default function LineChart (props: LineChartProps) {
    const { chartData, chartOptions } = props;

    return (
        <Chart
            options={chartOptions}
            type="line"
            width="100%"
            height="100%"
            series={chartData}
        />
    );
};