'use client';

import tableDataDevelopment from '@/variables/data-tables/table-data-development';
import tableDataCheck from '@/variables/data-tables/table-data-check';
import CheckTable from '@/components/dashboard/default/check-table';
import tableDataColumns from '@/variables/data-tables/table-data-columns';
import tableDataComplex from '@/variables/data-tables/table-data-complex';
import DevelopmentTable from '@/components/dashboard/data-tables/development-table';
import ColumnsTable from '@/components/dashboard/data-tables/columns-table';
import ComplexTable from '@/components/dashboard/data-tables/complex-table';

export default function Tables () {
  return (
    <div>
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        <DevelopmentTable tableData={tableDataDevelopment} />
        <CheckTable tableData={tableDataCheck} />
      </div>

      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        <ColumnsTable tableData={tableDataColumns} />

        <ComplexTable tableData={tableDataComplex} />
      </div>
    </div>
  );
};