import '../App.css';

export const SortAndFilterButtons = ({ handleSort }) => {
  return (
    <div className="sortButtons ">
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
        className="sortByTitleAsc btn btn-outline-secondary"
        onClick={() => {
          handleSort('ta');
        }}>
        sort Gender in Asc order
      </button>
      <button
        id="button"
        className="sortByTitleDesc btn btn-outline-secondary"
        onClick={() => {
          handleSort('td');
        }}>
        {' '}
        sort Gender in Desc order
      </button>
      <button
        id="button"
        className="sortByPriceAsc btn btn-outline-secondary"
        onClick={() => {
          handleSort('pa');
        }}>
        {' '}
        sort Age asc order{' '}
      </button>
      <button
        id="button"
        className="sortByPriceDesc btn btn-outline-secondary"
        onClick={() => {
          handleSort('pd');
        }}>
        {' '}
        sort Age desc order{' '}
      </button>
    </div>
  );
};
