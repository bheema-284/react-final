import { Link } from 'react-router-dom';
import axios from 'axios';
export const TableRows = ({ data }) => {
  return (
    <>
      <tr>
        <td>{data.id}</td>
        <td>{data.grade}</td>
        <td>{data.section}</td>
        <td>{data.subject}</td>
      </tr>
    </>
  );
};
