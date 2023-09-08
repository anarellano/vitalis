// FileUpload.js
import React from 'react';
import { FormGroup, Label, Input, FormText } from 'reactstrap';

function FileUpload({ label, id, color, text}) {
  return (
    <FormGroup>
      <Label for={id}>{label}</Label>
      <Input type="file" name={id} id={id}/>
      <FormText color={color} style={{fontSize: '1em'}} >
       {text}
      </FormText>
    </FormGroup>
  );
}

export default FileUpload;
