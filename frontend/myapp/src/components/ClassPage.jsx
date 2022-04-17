import axios from 'axios';
import '../App.css';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TableRows } from './Classes';
import { Buttons } from './Buttons';
export const ClassPage = () => {
  const [classes, setClasses] = useState([]);
  function handleSort(term) {
    if (term === 'ti') {
      let x = classes.sort((a, b) => a.id - b.id);
      console.log(x);
      setClasses([...x]);
    }
    if (term === 'tg') {
      let x = classes.sort((a, b) => b.id - a.id);
      console.log(x);
      setClasses([...x]);
    }
    if (term === 'td') {
      let x = classes.sort((a, b) => {
        if (a.section > b.section) return -1;
        if (a.section < b.section) return 1;
        return 0;
      });
      console.log(x);
      setClasses([...x]);
    }
    if (term === 'ta') {
      let x = classes.sort((a, b) => {
        if (a.subject > b.subject) return 1;
        if (a.subject < b.subject) return -1;

        return 0;
      });
      console.log(x);
      setClasses([...x]);
    }
  }
  useEffect(() => getData(), []);

  const getData = () => {
    axios.get(`http://localhost:8080/class`).then((res) => {
      console.log('res data', res.data);
      setClasses(res.data.classessData);
    });
  };

  const MainDiv = styled.div`
    margin: auto;
    text-align: center;
    border: 1px solid green;
    background-color: rgb(14, 157, 50);
    width: 80%;
    .subDiv {
      border: 1px solid black;
      width: 80%;
      justify-content: center;
      margin: auto;
    }
    table {
      border: 1px solid black;
      margin: auto;
    }
    th {
      border: 1px solid black;
      padding: 10px;
    }
    td {
      border: 1px solid black;
    }
  `;
  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: 'center', backgroundColor: '#cecece' }}>Home</h2>
      <div id="btns">
        {' '}
        <Buttons handleSort={handleSort} />
      </div>
      <MainDiv>
        <h2 style={{ color: 'white' }}>List of Classes</h2>
        <div className="subDiv">
          <table>
            <tr>
              <th>id</th>
              <th>Grade</th>
              <th>Section</th>
              <th>Subject</th>
            </tr>
            {classes.map((el) => (
              <TableRows key={el.id} data={el} />
            ))}
          </table>
        </div>
      </MainDiv>
    </div>
  );
};
