import { Fragment } from "react";
import { Coders } from "./styles";
import Link from "next/link";

const Footer = () => (
  <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img className="" src="#" />
          </div>
          <div className="col-md-8">
            <div className="footer-menu">
              <ul>
                <li>
                  <h4>Serviços</h4>
                </li>
                <li>
                  <a href="#">
                    Área do Cliente
                  </a>
                </li>
              </ul>

              <ul>
                <li>
                  <h4>Planos</h4>
                </li>
                <li>
                  <Link href="/planos/casa">
                    <a>Doméstico</a>
                  </Link>
                </li>
                <li>
                  <Link href="/planos/empresa">
                    <a>Empresarial</a>
                  </Link>
                </li>
                <li>
                  <Link href="/planos/gamer">
                    <a>Gamer</a>
                  </Link>
                </li>
              </ul>

              <ul>
                <li>
                  <h4>Mudar de Cidade</h4>
                </li>
                <li>
                  <Link href="/home">
                    <a>Araguaína - TO</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    <Coders>
      <div className="container developer-by">
        <span>Desenvolvido por sousaprogramador</span>
      </div>
    </Coders>
  </Fragment>
);

export default Footer;