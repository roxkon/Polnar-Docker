import * as React from 'react';

import {  Button, Modal } from 'react-bootstrap';


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
          aria-labelledby="contained-modal-title-sm"
        >
          <Modal.Header closeButton={true}>
            <Modal.Title id="contained-modal-title-sm">Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Wrapped Text</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </p>
            
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
    
  }

  export default SignUpModal;