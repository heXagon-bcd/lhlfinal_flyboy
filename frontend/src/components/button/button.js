import { react } from "react";
import { Button } from "react-bootstrap";
import "../../style/button.css";
// import "bootstrap/dist/css/bootstrap.min.css"; //delete to restore charlie's work
export const ReactButton = ({ name, onClick }) => {
  return (
    <div>
      <Button className="button" onClick={onClick}>
        {name}
      </Button>
    </div>
  );
};
