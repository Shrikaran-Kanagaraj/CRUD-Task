
import React,{useState} from "react";
import  { Button } from "bootstrap";

import ModalPop from "./Modal";


function EditPop() {
    const [modalShow, setModalShow] = useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
  
        <ModalPop
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }

export default EditPop;