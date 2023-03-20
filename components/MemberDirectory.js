import matchSorter from "match-sorter";
import { useMemo } from "react";
import { useFilters, useTable } from "react-table";

function DefaultColumnFilter({ column, translations }) {
  const count = column.preFilteredRows.length;
  return (
    <input
      type="text"
      value={column.filterValue || ""}
      onChange={(e) => {
        column.setFilter(e.target.value || undefined);
      }}
      placeholder={`${translations.search} ${count} ${translations.records}...`}
      className="input input-sm mt-1 w-full"
    />
  );
}

function SelectColumnFilter({ column, translations }) {
  const options = useMemo(() => {
    const options = new Set();
    column.preFilteredRows.forEach((row) => {
      options.add(row.values[column.id]);
    });
    return [...options.values()];
  }, [column.id, column.preFilteredRows]);
  return (
    <select
      value={column.filterValue}
      onChange={(e) => {
        column.setFilter(e.target.value || undefined);
      }}
      className="select select-sm mt-1 w-full"
    >
      <option value="">{translations.all}</option>
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

function Table({ columns, data, translations }) {
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
        translations,
      },
      useFilters
    );
  return (
    <table {...getTableProps()} className="w-6xl table-zebra mx-auto table">
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

export const MemberDirectory = ({ primary, items }) => {
  const columns = useMemo(
    () => [
      {
        Header: primary.country_header,
        accessor: "country",
        Filter: SelectColumnFilter,
      },
      {
        Header: primary.institution_header,
        accessor: "institution",
      },
      {
        Header: primary.delegate_header,
        accessor: "delegate",
        Filter: SelectColumnFilter,
      },
      {
        Header: primary.name_header,
        accessor: "name",
      },
      {
        Header: primary.email_header,
        accessor: "email",
      },
    ],
    [primary]
  );
  const data = useMemo(() => items, [items]);
  const translations = useMemo(
    () => ({
      all: primary.all,
      search: primary.search,
      records: primary.records,
    }),
    [primary]
  );
  return (
    <div className="mt-3 overflow-x-auto">
      <Table columns={columns} data={data} translations={translations} />
    </div>
  );
};
