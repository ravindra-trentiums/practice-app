import React from "react";
import { Modal } from "react-bootstrap";
import * as auth from "../../src/app/modules/Auth/_redux/authRedux";
import { connect } from "react-redux";

const Handler401 = (props) => {
  const logoutHandler = () => {
    props.logout();
  };

  return (
    <Modal show={true} aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Unexpected Event Occur
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        You're going to be logged out due to invalid session
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            className="btn btn-primary btn-elevate"
            onClick={logoutHandler}
          >
            Ok
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};
export default connect(null, auth.actions)(Handler401);
