import { SelectColumnFilter, Table } from "components/Table";
import React, { useMemo } from "react";

/**
 * @typedef {import("@prismicio/client").Content.NetworkMembersSlice} NetworkMembersSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NetworkMembersSlice>} NetworkMembersProps
 * @param { NetworkMembersProps }
 */
const NetworkMembers = ({ slice }) => {
  const columns = useMemo(
    () => [
      {
        Header: slice.primary.country_header,
        accessor: "country",
        Filter: SelectColumnFilter,
      },
      {
        Header: slice.primary.institution_header,
        accessor: "institution",
      },
      {
        Header: slice.primary.delegate_header,
        accessor: "delegate",
        Filter: SelectColumnFilter,
      },
      {
        Header: slice.primary.name_header,
        accessor: "name",
      },
      {
        Header: slice.primary.email_header,
        accessor: "email",
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
    <section className="min-h-[calc(100vh-33.5rem)] bg-neutral-100">
      <div className="frame py">
        <h1 className="text-center">{slice.primary.title}</h1>
        <p className="mx-auto mb-7 max-w-xl text-center">{slice.primary.description}</p>
        <div className="overflow-x-auto rounded-lg">
          <Table columns={columns} data={data} translations={translations} />
        </div>
      </div>
    </section>
  );
};

export default NetworkMembers;
