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
      className="input input-sm mt-1 min-w-[9rem]"
    />
  );
}

export const SelectColumnFilter = ({ column, translations }) => {
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
      className="select select-sm mt-1 min-w-[3rem]"
    >
      <option value="">{translations.all}</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

function fuzzyTextFilterFn(rows, id, filterValue) {
  return matchSorter(rows, filterValue, { keys: [(row) => row.values[id]] });
}
fuzzyTextFilterFn.autoRemove = (val) => !val;

export const Table = ({ columns, data, translations }) => {
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
    <table {...getTableProps()} className="table-zebra mx-auto table w-full">
      <thead className="sticky top-0">
        {headerGroups.map((headerGroup, i) => (
          <tr key={i} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, i) => {
              return (
                <th key={i} {...column.getHeaderProps()}>
                  {column.render("Header")}
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          const clickableRow = {};
          if (row.original.link) {
            clickableRow.onClick = () => {
              window.open(row.original.link.url, "_blank");
            };
            clickableRow.className = "hover cursor-pointer";
            clickableRow.title = translations.row_title;
          }
          return (
            <tr key={i} {...row.getRowProps()} {...clickableRow}>
              {row.cells.map((cell, i) => {
                return (
                  <td
                    key={i}
                    {...cell.getCellProps()}
                    className="whitespace-normal align-text-top"
                  >
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
};
