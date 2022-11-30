import { Button, Nav } from 'react-bootstrap';

import Logo from './Logo';

export default function SideMenu() {
  return (
    <aside className="d-flex flex-column col-2 bg-light text-dark p-2">
      <Logo />
      <Nav defaultActiveKey="/" className="flex-column">
        <Button className="mb-2">
          <Nav.Link href="/" className="link-light">
            Register
          </Nav.Link>
        </Button>
        <Button>
          <Nav.Link href="/" className="link-light">
            Search
          </Nav.Link>
        </Button>
      </Nav>
    </aside>
  );
}
