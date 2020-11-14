import React from 'react';

const Paginator = ({
  canPreviousPage,
  canNextPage,
  nextPage,
  previousPage,
  pageCount,
  setPageSize,
  pageIndex = 0,
  pageOptions,
  pageSize,
}) => {
  function gotoPage() {}
  return (
    <nav class="pagination is-centered" role="navigation" aria-label="pagination">
      <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
        {'<<'}
      </button>{' '}
      <button class="pagination-previous" onClick={() => previousPage()} disabled={!canPreviousPage}>
        {'<'}
      </button>{' '}
      <button class="pagination-next" onClick={() => nextPage()} disabled={!canNextPage}>
        {'>'}
      </button>{' '}
      <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
        {'>>'}
      </button>{' '}
      <span>
        Page{' '}
        <strong>
          {pageIndex + 1} of {3}
        </strong>{' '}
      </span>
      <span>
        | Go to page:{' '}
        <input
          type="number"
          defaultValue={pageIndex + 1}
          onChange={e => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(page);
          }}
          style={{ width: '100px' }}
        />
      </span>{' '}
      <select
        value={pageSize}
        onChange={e => {
          setPageSize(Number(e.target.value));
        }}
      >
        {[10, 20, 30, 40, 50].map(pageSize => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
    </nav>
  );
};
/*
<nav class="pagination is-centered" role="navigation" aria-label="pagination">
<button >Previous</button>
<div >Next page</div>
<ul class="pagination-list">
  <li>
    <a class="pagination-link" aria-label="Goto page 1">
      1
    </a>
  </li>
  <li>
    <span class="pagination-ellipsis">&hellip;</span>
  </li>
  <li>
    <a class="pagination-link" aria-label="Goto page 45">
      45
    </a>
  </li>
  <li>
    <a class="pagination-link is-current" aria-label="Page 46" aria-current="page">
      46
    </a>
  </li>
  <li>
    <a class="pagination-link" aria-label="Goto page 47">
      47
    </a>
  </li>
  <li>
    <span class="pagination-ellipsis">&hellip;</span>
  </li>
  <li>
    <a class="pagination-link" aria-label="Goto page 86">
      86
    </a>
  </li>
</ul>
</nav>
*/
export default Paginator;
