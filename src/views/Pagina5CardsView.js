import imagenes from "../assets/imagenes";



export default function Pagina5CardsView() {
    return (
        <div className="mt-4  mt-xxl-0 col-xxl-3 ">
        <div className="row ">
          <div className="col-md-6 col-xxl-12">
            <div className="remodelada d-flex justify-content-center h-100 bg-white">
              <div className="p-2 col-12 col-sm-10 col-md-12">
                <h4 className="fs-6">Cocina recien remodelada</h4>

                <p className="precio">S/ 100</p>
                <p>Listed in la Victoria. Lima</p>

                <div className="contenido__botones">
                  <button className="btn btn-primary me-2 me-sm-3">
                    Contactar{" "}
                    <img src={imagenes.img15_mensaje} alt="mensaje" />
                  </button>
                  <button className="btn btn-warning me-1 me-sm-2">
                    <img src={imagenes.img16_guardar} alt="guardar" />
                  </button>
                  <button className="btn btn-warning me-1 me-sm-2">
                    <img src={imagenes.img17_compartir} alt="compartir" />
                  </button>
                  <button className="btn btn-warning me-1 me-sm-2">
                    <img src={imagenes.img18_tres_puntos} alt="puntos" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 mt-md-0 mt-xxl-4  col-md-6 col-xxl-12">
            <div className="d-flex justify-content-center bg-white h-100">
              <div className="p-2 col-12 col-sm-10 col-md-12">
                <h4 className="fs-6">Details</h4>
                <div className="d-flex justify-content-between">
                  <p>
                    <span>Area:</span>6m2
                  </p>
                  <p>
                    <span>Implentado:</span>Si
                  </p>
                </div>
                <p>
                  La cocina está implementada, recién remodelada, ubicada en
                  primer piso
                </p>
              </div>
            </div>
          </div>

          <div className="mapa mt-4 col-md-6 col-xxl-12">
            <div className="d-flex justify-content-center h-100 bg-white">
              <div className="p-2 col-12 col-sm-10 col-md-12">
                <h4 className="fs-6">Publicado en</h4>
                <p>La Victoria. Lima</p>
                <img
                  className="img-fluid"
                  src={imagenes.img19_mapa}
                  alt="Mapa"
                />
              </div>
            </div>
          </div>

          <div className="calificacion mt-4  col-md-6 col-xxl-12">
            <div className="d-flex justify-content-center h-100 bg-white">
              <div className="p-2 col-12 col-sm-10 col-md-12">
                <h4 className="fs-6">Calificaciones del arrendador</h4>
                <img
                  className="img-fluid my-2 "
                  src={imagenes.img20_calificacion}
                  alt="calificacion"
                />
                <p>Calificacion de 10 personas Mienbro desde Octubre 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
