import React from 'react'
import Form from 'react-bootstrap/Form'

function FormGroup(props){
    const {label,type,register, placeholder, helpText} = props


    return (
        <div className='FormGroup'>
       
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className='Label'>{label} </Form.Label>
            <Form.Control type={type || "text"} {...register} placeholder={placeholder || ""} />
            <Form.Text className="text-muted">
                {helpText || ""}
            </Form.Text>
        </Form.Group>
       
        </div>
    );

}
export default FormGroup