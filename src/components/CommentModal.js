import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { Modal } from 'react-bootstrap';

const CommentModal = () => {
    const [show, setShow] = React.useState(false);

    return (
      <>
        <FaIcons.FaComment size={18} className="pt-1 ml-2" color='#00b761' onClick={() => setShow(true)}>
        </FaIcons.FaComment>
  
        <Modal
          size='lg'
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Comments
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
              commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            </p>
          </Modal.Body>
        </Modal>
      </>
    );
}

export default CommentModal;