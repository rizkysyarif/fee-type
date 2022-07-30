import Breadcrumb from "react-bootstrap/Breadcrumb";
import { useTranslation } from "react-i18next";

function HeaderComponent(props) {
  const { t } = useTranslation();
  const menu = props.title.filter((item) => item !== "");
  return (
    <>
      <Breadcrumb style={{ fontSize: "12px" }}>
        {menu.map((item, index) => (
          <Breadcrumb.Item key={index} active>
            {t(item)}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
      <h5>{t(props.curNav)}</h5>
    </>
  );
}

export default HeaderComponent;
