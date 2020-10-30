import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function Shipping() {
    // render 
    return (
        <Form>
            <FormGroup>
                <Label>customer name</Label>
                <Input id='name' placeholder='full name'></Input>
            </FormGroup>
            <FormGroup>
                <Label>street address</Label>
                <Input id='address1' placeholder='address line 1' className='mb-2'></Input>
                <Input id='address2' placeholder='address line 2'></Input>
            </FormGroup>
            <FormGroup>
                <Label for="exampleSelect">State/Territory</Label>
                <Input type='select' name='select' id='state'>
                    <option></option>
                    <option>Alabama</option>
                    <option>Alaska</option>
                    <option>American Samoa</option>
                    <option>Arizona</option>
                    <option>Arkansas</option>
                    <option>California</option>
                    <option>Colorado</option>
                    <option>Connecticut</option>
                    <option>Delaware</option>
                    <option>District of Columbia</option>
                    <option>Florida</option>
                    <option>Georgia</option>
                    <option>Guam</option>
                    <option>Hawaii</option>
                    <option>Idaho</option>
                    <option>Illinois</option>
                    <option>Indiana</option>
                    <option>Iowa</option>
                    <option>Kansas</option>
                    <option>Kentucky</option>
                    <option>Louisiana</option>
                    <option>Maine</option>
                    <option>Maryland</option>
                    <option>Massachusetts</option>
                    <option>Michigan</option>
                    <option>Minnesota</option>
                    <option>Mississippi</option>
                    <option>Missouri</option>
                    <option>Montana</option>
                    <option>Nebraska</option>
                    <option>Nevada</option>
                    <option>New Hampshire</option>
                    <option>New Jersey</option>
                    <option>New Mexico</option>
                    <option>New York</option>
                    <option>North Carolina</option>
                    <option>North Dakota</option>
                    <option>Northern Mariana Islands</option>
                    <option>Ohio</option>
                    <option>Oklahoma</option>
                    <option>Oregon</option>
                    <option>Pennsylvania</option>
                    <option>Puerto Rico</option>
                    <option>Rhode Island</option>
                    <option>South Carolina</option>
                    <option>South Dakota</option>
                    <option>Tennessee</option>
                    <option>Texas</option>
                    <option>Utah</option>
                    <option>Vermont</option>
                    <option>Virgin Islands</option>
                    <option>Virginia</option>
                    <option>Washington</option>
                    <option>West Virginia</option>
                    <option>Wisconsin</option>
                    <option>Wyoming</option>
                </Input>
            </FormGroup>
        </Form>
    )
}

export default Shipping;