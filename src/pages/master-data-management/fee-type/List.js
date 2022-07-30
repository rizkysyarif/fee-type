import React, { useState } from "react";
import HeaderComponent from "../../../components/HeaderComponent";
import TableComponent from "../../../components/TableComponent";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaDownload, FaPlus, FaPrint, FaSearch } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { fieldData, dataDummy } from "./FieldData";

const List = () => {
  const [keyword, setKeyword] = useState("");
  const href = window.location.pathname.split("/");
  const curNav = href[href.length - 1];
  const dataSet = dataDummy;
  const columns = [
    ...fieldData,
    {
      title: "Action",
      render: function () {
        return `<button class='btn btn-info btn-sm text-white'>Edit</button><button class='btn btn-danger btn-sm' style="margin-left:5px">Delete</button>`;
      },
      searchable: false,
      orderable: false,
    },
  ];

  return (
    <>
      <div className="p-24">
        <HeaderComponent title={href} curNav={curNav} />
      </div>
      <div className="p-24">
        <div className="row">
          <div className="col-6">
            <InputGroup className="mb-3" style={{ width: "50%" }}>
              <Form.Control
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon2"
                onChange={(event) => setKeyword(event.target.value)}
              />
              <Button variant="outline-secondary" disabled id="button-addon2">
                <FaSearch />
              </Button>
            </InputGroup>
          </div>
          <div className="col-6 justify-content-end d-flex">
            <div>
              <Button className="btn btn-default">
                <FaDownload />
              </Button>
              <Button
                className="btn btn-default"
                style={{ marginLeft: "3px", marginRight: "3px" }}
              >
                <FaPrint />
              </Button>
              <Link className="btn btn-success" to={curNav + "/form"}>
                <FaPlus /> Create New
              </Link>
            </div>
          </div>
        </div>
        <TableComponent data={dataSet} columns={columns} keyword={keyword} />
      </div>
    </>
  );
};

export default List;
