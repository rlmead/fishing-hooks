import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function Shop(props) {
    return(
        <div>{props.data.merch[0].item}</div>
    )
}

export default Shop;