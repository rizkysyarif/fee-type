import React, { useEffect, useRef } from "react";
import Table from "react-bootstrap/Table";
import $ from "jquery";
import PaginationComponent from "./PaginationComponent";

export function TableComponent(props) {
  $.DataTable = require("datatables.net");
  const tableRef = useRef();
  const tableName = "table1";

  useEffect(() => {
    const table = $(`#${tableName}`).DataTable({
      data: props.data,
      columns: props.columns,
      searching: true,
      ordering: true,
      paging: false,
      destroy: true,
    });
    // if (props.keyword !== "") {
    //   table.search(props.keyword).draw();
    // }
    return table.destroy();
  }, [props.data, props.columns]);
  return (
    <>
      <div>
        <Table
          striped
          bordered
          hover
          className="display"
          width="100%"
          id={tableName}
          ref={tableRef}
        ></Table>
      </div>
      <PaginationComponent count={props.data.length} perPage={10} />
    </>
  );
}

export default TableComponent;
