import HeaderComponent from "../../../components/HeaderComponent";
import Button from "react-bootstrap/Button";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import Card from "react-bootstrap/Card";
import { fieldData } from "./FieldData";
import createYupSchema from "../../../helper/createYupSchema";
import { useTranslation } from "react-i18next";

const FormPage = () => {
  const { t } = useTranslation();
  const href = window.location.pathname.split("/");
  const curNav = href[href.length - 1];
  const nav = href[href.length - 2];
  let schemaField = {};
  fieldData.forEach((item) => {
    if (item.validationContent) {
      schemaField = { ...schemaField, ...createYupSchema({}, item) };
    }
  });
  const schema = yup.object().shape(schemaField);
  return (
    <>
      <div className="p-24">
        <HeaderComponent title={href} curNav={curNav} />
      </div>
      <div className="p-24">
        <Card style={{ width: "100%", height: "40rem", maxHeight: "50rem" }}>
          <Card.Title style={{ padding: "20px" }}>Form {t(nav)}</Card.Title>
          <Card.Body>
            <Formik
              initialValues={{}}
              validationSchema={schema}
              onSubmit={(values) => {
                alert(JSON.stringify(values, null, 2));
              }}
            >
              {(props) => (
                <Form>
                  <div className="row">
                    {fieldData.map((item, index) => (
                      <div className="col-6" key={index}>
                        <label>{item.title}</label>
                        <Field
                          className="form-control"
                          type={item.type}
                          placeholder={`Enter ${item.title}`}
                          name={item.data}
                          id={item.data}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          value={props.values.name}
                        />
                        {props.errors[item.data] && props.touched[item.data] && (
                          <span
                            style={{
                              color: "red",
                              fontSize: "12px",
                              marginLeft: "5px",
                            }}
                          >
                            {props.errors[item.data]}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="primary"
                    type="submit"
                    style={{ marginTop: "20px" }}
                    disabled={!props.isValid || !props.dirty}
                  >
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default FormPage;
