import { useMemo } from "react";
import { useTable, useSortBy, Column } from "react-table";
import clsx from "clsx";
import TabHeaderRow from "./TabHeaderRow";

// Define your row data type
type RowData = {
  task: string;
  submitDate: string;
  status: string;
  submitter: string;
  url: string;
  assigned: string;
  priority: string;
  dueDate: string;
  value: string;
};

// Sample data
const data: RowData[] = [
  {
    task: "Launch social media campaign for pre...",
    submitDate: "15-11-2024",
    status: "In Progress",
    submitter: "Asha Patel",
    url: "ashahead.com",
    assigned: "Sophie Choudhury",
    priority: "Medium",
    dueDate: "20-11-2024",
    value: "8,250.00"
  },
  {
    task: "Update posts to be company settings",
    submitDate: "28-10-2024",
    status: "Need to start",
    submitter: "Irfan Khan",
    url: "irfankhan.io",
    assigned: "Raja Pandey",
    priority: "High",
    dueDate: "30-10-2024",
    value: "3,200.00"
  },
  {
    task: "Finalize user catalog feedback for age...",
    submitDate: "06-10-2024",
    status: "In Progress",
    submitter: "Mark Johnson",
    url: "reachapp.com",
    assigned: "Rachel Lee",
    priority: "Medium",
    dueDate: "10-10-2024",
    value: "4,750.00"
  },
  {
    task: "Design new features for the website",
    submitDate: "19-10-2025",
    status: "Complete",
    submitter: "Emily Green",
    url: "emilyblog.net",
    assigned: "Tom Wright",
    priority: "Low",
    dueDate: "16-05-2025",
    value: "6,000.00"
  },
  {
    task: "Prepare financial report for Q4",
    submitDate: "25-09-2025",
    status: "Blocked",
    submitter: "Jessica Brown",
    url: "posidata.tech",
    assigned: "Kevin Smith",
    priority: "Low",
    dueDate: "30-09-2025",
    value: "2,600.00"
  },
  {
    task: "Submit...",
    submitDate: "01-10-2025",
    status: "In Progress",
    submitter: "Alex Turner",
    url: "alexdev.com",
    assigned: "Sam Wilson",
    priority: "Medium",
    dueDate: "05-10-2025",
    value: "5,500.00"
  },
  // Add 19 empty rows
  ...Array.from({ length: 19 }, () => ({
    task: "",
    submitDate: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    dueDate: "",
    value: ""
  }))
];

const ROW_SCROLL_THRESHOLD = 25;

const SpreadsheetTable = () => {
  const columns: Column<RowData>[] = useMemo(() => [
    {
      Header: "#",
      id: "rowNumber",
      Cell: ({ row }) => <span className="text-gray-600">{row.index + 1}</span>,
      width: 40
    },
    {
      Header: "Task Request",
      accessor: "task",
      Cell: ({ value }) => (
        <span className="text-sm text-gray-800 truncate max-w-xs block">{value}</span>
      ),
      width: 250
    },
    {
      Header: "Submit Date",
      accessor: "submitDate",
      Cell: ({ value }) => <span className="text-sm text-gray-700">{value}</span>,
      width: 100
    },
    {
      Header: "Status",
      accessor: "status",
      Cell: ({ value }) => {
        const base = "px-2 py-0.5 text-xs rounded-full font-medium whitespace-nowrap";
        const color = clsx({
          "bg-yellow-100 text-yellow-800": value === "In Progress",
          "bg-green-100 text-green-800": value === "Complete",
          "bg-orange-100 text-orange-800": value === "Need to start",
          "bg-red-100 text-red-800": value === "Blocked"
        });
        return <span className={`${base} ${color}`}>{value}</span>;
      },
      width: 120
    },
    {
      Header: "Submitter",
      accessor: "submitter",
      Cell: ({ value }) => (
        <span className="text-sm text-gray-800 whitespace-nowrap">{value}</span>
      ),
      width: 150
    },
    {
      Header: "URL",
      accessor: "url",
      Cell: ({ value }) => (
        <span className="text-sm text-black whitespace-nowrap">{value}</span>
      ),
      width: 120
    },
    {
      Header: "Assigned",
      accessor: "assigned",
      Cell: ({ value }) => (
        <span className="text-sm text-gray-800 whitespace-nowrap">{value}</span>
      ),
      width: 150
    },
    {
      Header: "Priority",
      accessor: "priority",
      Cell: ({ value }) => {
        const color = clsx({
          "bg-red-100 text-red-700": value === "High",
          "bg-yellow-100 text-yellow-800": value === "Medium",
          "bg-blue-100 text-blue-700": value === "Low"
        });
        return (
          <span className={`px-2 py-0.5 text-xs rounded-full font-medium whitespace-nowrap ${color}`}>
            {value}
          </span>
        );
      },
      width: 100
    },
    {
      Header: "Due Date",
      accessor: "dueDate",
      Cell: ({ value }) => <span className="text-sm text-gray-700">{value}</span>,
      width: 100
    },
    {
      Header: "Est. Value",
      accessor: "value",
      Cell: ({ value }) => <span className="text-sm text-gray-700">{value}</span>,
      width: 100
    },
    {
      Header: "",
      id: "blank",
      Cell: () => null,
      width: 100,
      minWidth: 100,
      maxWidth: 200
    }
  ], []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable<RowData>({ columns, data }, useSortBy);

  const needsVertScroll = rows.length > ROW_SCROLL_THRESHOLD;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div
        className={clsx(
          "border border-gray-200 bg-white shadow-xs",
          "overflow-x-auto",
          needsVertScroll ? "overflow-y-auto" : "overflow-y-visible"
        )}
        style={needsVertScroll ? { maxHeight: "660px" } : undefined}
      >
        <div className="min-w-[1150px]">
          <TabHeaderRow />
        </div>

        <table {...getTableProps()} className="min-w-full text-sm text-left">
          <thead className="bg-gray-50 border-b border-gray-200">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                {headerGroup.headers.map((column, colIndex, arr) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={column.id}
                    className={clsx(
                      "px-4 py-3 font-medium text-gray-500 whitespace-nowrap",
                      colIndex !== arr.length - 1 && "border-r border-gray-200"
                    )}
                    style={{
                      width: column.width ?? undefined,
                      minWidth: column.minWidth,
                      maxWidth: column.maxWidth
                    }}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={row.id} className="border-b border-gray-300 hover:bg-gray-50">
                  {row.cells.map((cell, cellIndex, arr) => (
                    <td
                      key={cell.column.id}
                      {...cell.getCellProps()}
                      className={clsx(
                        "px-2 py-3",
                        cellIndex !== arr.length - 1 && "border-r border-gray-200"
                      )}
                      style={{
                        width: cell.column.width ?? undefined,
                        minWidth: cell.column.minWidth,
                        maxWidth: cell.column.maxWidth
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>

      {/* Bottom Tabs */}
      <div className="flex items-center mt-4 border-b border-gray-200 text-sm font-medium text-gray-500">
        {["All Orders", "Pending", "Reviewed", "Arrived"].map((tab, i) => (
          <button
            key={i}
            className={clsx(
              "px-4 py-2 -mb-px border-b-2",
              i === 0
                ? "border-green-900 text-green-900 font-semibold"
                : "border-transparent hover:text-gray-700"
            )}
          >
            {tab}
          </button>
        ))}
        <button className="ml-2 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700">
          <span className="text-lg font-semibold">+</span>
        </button>
      </div>
       </div>
    </div>
  );
};


export default SpreadsheetTable;

