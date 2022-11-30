import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" about="">
      <Image fluid src="/src/assets/logo.png" className="m-0" alt="logo" />
    </Link>
  );
}
