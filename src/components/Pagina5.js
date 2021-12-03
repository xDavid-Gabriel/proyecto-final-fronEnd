import { Carousel } from "react-bootstrap";

import { Link } from "react-router-dom";

import Pagina5CardsView from "../views/Pagina5CardsView"
//Aqui estan mis imagenes
import imagenes from "../assets/imagenes";

export default function Pagina5() {
  return (
    <section className="pagina5 d-flex align-items-center position-relative container">
      <div className="row">
        <div className=" position-relative  col-12 col-xxl-9">
          <div className="position-relative">
            <img
              className="img-fluid risas col-12"
              src={imagenes.img10_fondo_pagina_5}
            />
            <h3 className="mx-4 text-title display-5 col-7 col-sm-8 col-md-6 col-xl-5 fw-light">
              Alquila cocinas fantasma <span className="fw-bold">Aqui!!!</span>
            </h3>
          </div>

          <div className="buscador busca position-lg-absolute mx-lg-4">
            <input
              className="my-4"
              type="search"
              placeholder="Buscar por zonas Ejemplo: Miraflores"
            />

            <Link to="/pagina6" className="propietario btn btn-outline-info">
              Soy propietario
            </Link>
            <Link
              to="/pagina6"
              className="ingresar mx-2 btn btn-secondary text-white"
            >
              Ingresar
            </Link>
          </div>
        </div>

        <Carousel
          className="top-50 mt-4 position-xxl-absolute col-12 col-xxl-5 "
          style={{ maxHeight: "600px", overflow: "hidden" }}
        >
          <Carousel.Item>
            <img
              src={imagenes.img11_slider_1}
              alt="header1"
              className="w-100"
              style={{
                objectFit: "cover",
                height: "300px",
                objectPosition: "center",
              }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={imagenes.img12_slider_2}
              alt="header2"
              className="w-100"
              style={{
                objectFit: "cover",
                height: "300px",
                objectPosition: "center",
              }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={imagenes.img13_slider_3}
              alt="header3"
              className="w-100"
              style={{
                objectFit: "cover",
                height: "300px",
                objectPosition: "center",
              }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={imagenes.img14_slider_4}
              alt="header3"
              className="w-100"
              style={{
                objectFit: "cover",
                height: "300px",
                objectPosition: "center",
              }}
            />
          </Carousel.Item>
        </Carousel>
        
        <Pagina5CardsView />
        
      </div>
    </section>
  );
}
