import { BrowserRouter, Route, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Produtos</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
          <li>
            <Link to="/account">Conta</Link>
          </li>
        </ul>
      </nav>
    </BrowserRouter>
  );
};

export default Navigation;
