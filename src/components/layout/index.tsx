import Footer from './Footer';
import SideMenu from './sideMenu';

interface ILayout {
  children: JSX.Element;
}

export default function Layout({ children }: ILayout) {
  return (
    <div className="d-flex flex-column">
      <div className="d-flex">
        <SideMenu />
        <main className="col-10">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
