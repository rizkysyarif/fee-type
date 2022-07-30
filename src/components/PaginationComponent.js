import Pagination from "react-bootstrap/Pagination";

function PaginationComponent(props) {
  const count = props.count / props.perPage + 1;
  let items = [];
  let active = 1;
  for (let number = 1; number <= count; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <Pagination className="justify-content-end">
      <Pagination.Prev />
      {items}
      <Pagination.Next />
    </Pagination>
  );
}

export default PaginationComponent;
