export const MemberDirectory = ({
  directory_title,
  country_header,
  institution_header,
  delegate_header,
  name_header,
  email_header,
  items,
}) => (
  <div className="mb-14 mt-7">
    <h3 className="mb-7 text-center">{directory_title}</h3>
    <div className="mt-3 overflow-x-auto">
      <table className="table-zebra mx-auto table max-w-6xl">
        <thead>
          <tr>
            <th>{country_header}</th>
            <th>{institution_header}</th>
            <th>{delegate_header}</th>
            <th>{name_header}</th>
            <th>{email_header}</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={i}>
              <td>{item.country}</td>
              <td>{item.institution}</td>
              <td>{item.delegate}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
