
import { MDBInput } from 'mdbreact';
export function TodoInputs({titleChanged,bodyChanged}) {
  return (
  <div className="grey-text">
    <MDBInput required label="Todo Title" onChange={titleChanged} icon="list-alt"  type="text" />
    <MDBInput required rows="4" onChange={bodyChanged} label="Todo Detail" icon="align-left"  type="textarea"/>
</div>);
}
