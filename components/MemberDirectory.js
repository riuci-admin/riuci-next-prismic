import matchSorter from "match-sorter";
import { useMemo } from "react";
import { useFilters, useTable } from "react-table";

function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length;
  return (
    <input
      type="text"
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
      placeholder={`Search ${count} records...`}
      className="input input-sm mt-1 w-full"
    />
  );
}

function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  const options = useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);
  return (
    <select
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
      className="select select-sm mt-1 w-full"
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

function fuzzyTextFilterFn(rows, id, filterValue) {
  return matchSorter(rows, filterValue, { keys: [(row) => row.values[id]] });
}
fuzzyTextFilterFn.autoRemove = (val) => !val;

function Table({ columns, data }) {
  const filterTypes = useMemo(
    () => ({
      fuzzyText: fuzzyTextFilterFn,
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    []
  );
  const defaultColumn = useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
        defaultColumn,
        filterTypes,
      },
      useFilters
    );
  return (
    <table {...getTableProps()} className="table-zebra mx-auto table max-w-6xl">
      <thead>
        {headerGroups.map((headerGroup, i) => (
          <tr key={i} {...headerGroup.getHeaderGroupProps()}>
            <th></th>
            {headerGroup.headers.map((column, i) => (
              <th key={i} {...column.getHeaderProps()}>
                {column.render("Header")}
                <div>{column.canFilter ? column.render("Filter") : null}</div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr key={i} {...row.getRowProps()}>
              <th>{i + 1}</th>
              {row.cells.map((cell, i) => {
                return (
                  <td key={i} {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export const MemberDirectory = ({
  country_header,
  institution_header,
  delegate_header,
  name_header,
  email_header,
  items,
}) => {
  const columns = useMemo(
    () => [
      {
        Header: country_header,
        accessor: "country",
        Filter: SelectColumnFilter,
        filter: "includes",
      },
      {
        Header: institution_header,
        accessor: "institution",
      },
      {
        Header: delegate_header,
        accessor: "delegate",
        Filter: SelectColumnFilter,
        filter: "includes",
      },
      {
        Header: name_header,
        accessor: "name",
      },
      {
        Header: email_header,
        accessor: "email",
      },
    ],
    [
      country_header,
      institution_header,
      delegate_header,
      name_header,
      email_header,
    ]
  );
  const data = useMemo(() => items, [items]);
  return (
    <div className="mb-14 mt-7">
      <div className="mt-3 overflow-x-auto">
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
};
