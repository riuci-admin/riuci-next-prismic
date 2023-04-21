import { Table } from "components/Table";
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
      },
      {
        Header: slice.primary.authors_header,
        accessor: "authors",
      },
      {
        Header: slice.primary.key_words_header,
        accessor: "key_words",
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
      search: slice.primary.search,
      records: slice.primary.records,
      row_title: slice.primary.row_title,
      open_document: slice.primary.open_document,
    }),
    [slice.primary]
  );
  return (
    <section className="bg-neutral-100">
      <div className="frame py">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-center">{slice.primary.title}</h1>
          <p className="pb-4">{slice.primary.text}</p>
        </div>
        <div className="mt-3 max-h-[calc(100vh-16rem)] overflow-x-auto overflow-y-scroll rounded-lg">
          <Table columns={columns} data={data} translations={translations} />
        </div>
      </div>
    </section>
  );
};

export default Repository;
