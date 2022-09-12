import { useOutletContext } from "react-router-dom";

const AllRecords = () => {
  const { records } = useOutletContext();

  return (
    <fieldset>
      <legend>All Records</legend>
      <ul>
        {records &&
          records.map(record => {
            return (
              <li key={record._id}>{record.title}</li>
            )
          })
        }
      </ul>
    </fieldset>
  )
}

export default AllRecords;