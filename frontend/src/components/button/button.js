import { react } from "react";
import { Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css"; //delete to restore charlie's work
export const ReactButton = (props) => {
  return (
    <div>
      <Button as="a" variant="primary">
        Button as link
      </Button>
    </div>
  );
};
