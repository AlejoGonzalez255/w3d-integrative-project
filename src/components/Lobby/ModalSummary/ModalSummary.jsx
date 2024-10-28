import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import useModalSummaryStore from '../../../stores/use-modalSummary-state';
import { useNavigate } from 'react-router-dom';

export default function ModalSummary({ show, onHide }) {
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
      <div style={{ border: '5px solid green', borderRadius: '8px', padding: '10px' }}>
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
          <Button 
            onClick={() => navigate(modalSummaryData.navigate)} 
            style={{ backgroundColor: '#4CAF50', color: 'white', border: 'none' }}
          >
            Ir al lugar
          </Button>
          <Button 
            onClick={onHide} 
            style={{ backgroundColor: '#f44336', color: 'white', border: 'none' }}
          >
            Cerrar
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
}
