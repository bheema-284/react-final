import { Link } from 'react-router-dom';
import axios from 'axios';
export const TableRow = ({ data }) => {
  return (
    <>
      <tr>
        <td>{data.id}</td>
        <td>
          <Link to={`/class/${data.id}`}>{data.name}</Link>
        </td>
        <td>{data.age}</td>
        <td>{data.gender}</td>
      </tr>
    </>
  );
};
