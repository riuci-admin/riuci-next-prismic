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
    <section className="bg-neutral-100">
      <div className="frame py pb-24">
        <h1 className="mb-10 text-center">{slice.primary.title}</h1>
        <div className="mt-3 overflow-x-auto rounded-lg">
          <Table columns={columns} data={data} translations={translations} />
        </div>
      </div>
    </section>
  );
};

export default NetworkMembers;
