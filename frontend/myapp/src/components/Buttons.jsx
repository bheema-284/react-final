import '../App.css';

export const Buttons = ({ handleSort }) => {
  return (
    <div className="sortButtons ">
      <div id="bt">
        <button
          id="button"
          className="sortByTitleAsc btn btn-outline-secondary"
          onClick={() => {
            handleSort('ti');
          }}>
          sort id in Asc order
        </button>
        <button
          id="button"
          className="sortByTitleDesc btn btn-outline-secondary"
          onClick={() => {
            handleSort('tg');
          }}>
          {' '}
          sort id in Desc order
        </button>
        <button
          id="button"
          className="sortByTitleAsc btn btn-outline-secondary"
          onClick={() => {
            handleSort('ta');
          }}>
          sort Subject in Asc order
        </button>
        <button
          id="button"
          className="sortByTitleDesc btn btn-outline-secondary"
          onClick={() => {
            handleSort('td');
          }}>
          {' '}
          sort Subject in Desc order
        </button>
      </div>
    </div>
  );
};
