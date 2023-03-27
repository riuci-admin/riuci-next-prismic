import { SelectColumnFilter, Table } from "components/Table";
import React, { useMemo } from "react";

/**
 * @typedef {import("@prismicio/client").Content.RepositorySlice} RepositorySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<RepositorySlice>} RepositoryProps
 * @param { RepositoryProps }
 */
const Repository = ({ slice }) => {
  const columns = useMemo(
    () => [
      {
        Header: slice.primary.title_header,
        accessor: "title",
        Cell: (props) => (
          <a
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            href={props.row.original.link.url}
          >
            {props.row.original.title}
          </a>
        ),
      },
      {
        Header: slice.primary.authors_header,
        accessor: "authors",
      },
      {
        Header: slice.primary.description_header,
        accessor: "description",
      },
      {
        Header: slice.primary.year_header,
        accessor: "year",
        Filter: SelectColumnFilter,
      },
      {
        Header: slice.primary.published_header,
        accessor: "published",
      },
    ],
    [slice.primary]
  );
  const data = useMemo(() => slice.items, [slice.items]);
  const translations = useMemo(
    () => ({
      all: slice.primary.all,
      search: slice.primary.search,
      records: slice.primary.records,
    }),
    [slice.primary]
  );
  return (
    <section className="bg-neutral-100">
      <div className="frame py pb-24">
        <h1 className="mb-10 text-center">{slice.primary.title}</h1>
        <div className="mt-3 h-[63vh] overflow-x-auto overflow-y-scroll">
          <Table columns={columns} data={data} translations={translations} />
        </div>
      </div>
    </section>
  );
};

export default Repository;
