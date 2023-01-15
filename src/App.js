import Container from 'react-bootstrap/Container';

import CreateAThing from './containers/CreateAThing';
import DeleteAThing from './containers/DeleteAThing';
import GetAllTheThings from './containers/GetAllTheThings';
import GetAThing from './containers/GetAThing';
import UpdateAThing from './containers/UpdateAThing';

import './App.css';

const App = () => (
  <Container>
    <h1>Do Things!</h1>
    <CreateAThing />
    <GetAllTheThings />
    <GetAThing />
    <UpdateAThing />
    <DeleteAThing />
  </Container>
);

export default App;
