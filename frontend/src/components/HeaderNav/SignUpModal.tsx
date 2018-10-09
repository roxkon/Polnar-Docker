import * as React from 'react';
import {  Button, Modal } from 'react-bootstrap';
import SignupForm from './SignupForm';

interface IProps  {
    onHide: (() => void);  
    show?: boolean;
    closeButton?: boolean;

}


class SignUpModal extends React.Component<IProps, {}, any> {
public constructor(props: IProps) {
super(props);
}
   public render() {
      return (
        <Modal
          {...this.props}
          bsSize="small"
          dialogClassName='custom-dialog'
          aria-labelledby="contained-modal-title-sm"
        >
          <Modal.Header closeButton={true}>
            <Modal.Title id="contained-modal-title-sm">Rejestracja</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <SignupForm />
            
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
    
  }

  export default SignUpModal;