import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function Store(props) {
    // render 
    return(
        <div>{props.data[0].item}</div>
    )
}

export default Store;