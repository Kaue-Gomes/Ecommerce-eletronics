import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
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
    </>
  );
};

export default Navigation;