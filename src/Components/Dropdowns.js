import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './dropdowns.css';

function Dropdowns() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Master Data" className='main-container'>
      <Dropdown.Item href="#/action-1">Add User</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Add donner</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Genertae Batch Number</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Receipt Log</Dropdown.Item>
    </DropdownButton>
  );
}

export default Dropdowns;