import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import useModalSummaryStore from '../../../stores/use-modalSummary-state';
import { useNavigate } from 'react-router-dom';

export default function ModalSummary({show, onHide}) {

  const { modalSummaryData } = useModalSummaryStore();

  const navigate = useNavigate();

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {modalSummaryData.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          {modalSummaryData.description}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => navigate(modalSummaryData.navigate)}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}