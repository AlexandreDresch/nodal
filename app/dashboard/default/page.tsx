"use client";

import MiniCalendar from "@/components/calendar/mini-calendar";
import WeeklyRevenue from "@/components/dashboard/default/weekly-revenue";
import TotalSpent from "@/components/dashboard/default/total-spent";
import PieChartCard from "@/components/dashboard/default/pie-chart-card";
import {
  HomeIcon,
  FileTextIcon,
  BarChartIcon,
  ComponentIcon,
} from "lucide-react";

import Widget from "@/components/widget";
import CheckTable from "@/components/dashboard/default/check-table";
import ComplexTable from "@/components/dashboard/default/complex-table";
import DailyTraffic from "@/components/dashboard/default/daily-traffic";
import TaskCard from "@/components/dashboard/default/task-card";
import tableDataCheck from "@/variables/data-tables/table-data-check";
import tableDataComplex from "@/variables/data-tables/table-data-complex";

const Dashboard = () => {
  return (
    <div>
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 min-3xl:grid-cols-6">
        <Widget
          icon={<BarChartIcon className="h-7 w-7" />}
          title={"Earnings"}
          subtitle={"$340.5"}
        />
        <Widget
          icon={<FileTextIcon className="h-6 w-6" />}
          title={"Spend this month"}
          subtitle={"$642.39"}
        />
        <Widget
          icon={<BarChartIcon className="h-7 w-7" />}
          title={"Sales"}
          subtitle={"$574.34"}
        />
        <Widget
          icon={<ComponentIcon className="h-6 w-6" />}
          title={"Your Balance"}
          subtitle={"$1,000"}
        />
        <Widget
          icon={<BarChartIcon className="h-7 w-7" />}
          title={"New Tasks"}
          subtitle={"145"}
        />
        <Widget
          icon={<HomeIcon className="h-6 w-6" />}
          title={"Total Projects"}
          subtitle={"$2433"}
        />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TotalSpent />
        <WeeklyRevenue />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        <div>
          <CheckTable tableData={tableDataCheck} />
        </div>

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <DailyTraffic />
          <PieChartCard />
        </div>

        <ComplexTable tableData={tableDataComplex} />

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <TaskCard />
          <div className="grid grid-cols-1 rounded-[20px]">
            <MiniCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
