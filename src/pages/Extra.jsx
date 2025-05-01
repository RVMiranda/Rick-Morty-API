import { FaArrowLeft } from "react-icons/fa";
import { FaFacebookF, FaXTwitter, FaEnvelope, FaLink, FaInstagram  } from 'react-icons/fa6';
import "../styles/Extra.css";

export default function ExtraPage() {
    return (
      <div className="landing">

        <section className="principal-image">
          <img src="/images/Rick2.webp" alt="Rick" />
          <div className="principal-image-text">
            <div className="principal-image-text-title">
              <a href="/" className="btn btn-primary">
                <FaArrowLeft /> Volver
              </a>
              <p>INFORMACIÓN SOBRE LA SERIE DE RICK Y MORTY</p>
            </div>
          </div>
        </section>
  

        <section className="landing-text">
          <div className="landing-text-title">
            <p className="landing-base-text">
            Rick y Morty (Rick and Morty en Estados Unidos) es una serie de televisión animada estadounidense creada por Justin Roiland y Dan Harmon que se estrenó el 2 de diciembre de 2013 en el bloque de programación Adult Swim de Cartoon Network. 
            La serie sigue las desventuras del cínico científico loco Rick Sánchez y su inquieto y fácilmente influyente nieto Morty Smith, que dividió su tiempo entre la vida doméstica y las aventuras interdimensionales. 
            </p>
  
            <img
              src="/images/Personajes.webp"
              alt="Personajes"
              className="landing-image"
            />
  
            <ul className="landing-list">
              <li>
              Richard Rick Sánchez (Con la voz por Justin Roiland): Es un científico alcohólico de 60 años que acostumbra a hablar de manera vulgar y entre eructos. Es padre de Beth Smith, suegro de Jerry Smith y el abuelo materno de Summer y Morty. Es un hombre que ha pasado gran parte de su vida viajando a través de diversas dimensiones, en el tiempo y por diversas regiones del universo. Para él, la Tierra se llama Planeta Tierra de la Dimensión C-137. Es irresponsable, chiflado, ambicioso y desconsiderado ante su propia familia.
              </li>
              <li>
              Mortimer Morty Smith (Con la voz por Justin Roiland): Es un chico de 14 años, es nieto de Rick Sánchez, hijo de Beth Smith y Jerry Smith y hermano menor de Summer Smith; viaja frecuentemente a múltiples lugares del universo junto a su abuelo Rick, estos viajes, lo ha hecho enormemente paranoico, incluso ante situaciones cotidianas.
              </li>
              <li>
              Jerry Smith (Con la voz de Chris Parnell): Es el yerno de 35 años de Rick Sánchez, esposo de Beth Smith y padre de Morty y Summer. Trabaja como publicista en una compañía, en la cual él cree hacer bien su trabajo. Es bastante inepto, siendo para la familia una molestia, ya que Rick lo odia, no sabe cortejar a su mujer y ante sus hijos, es incapaz de admitir que está equivocado. A pesar de eso, hace lo que puede para ayudar ante los problemas cotidianos y sobrenaturales.
              </li>
              <li>
              Beth Smith Sánchez (Con la voz de Sarah Chalke): Es la hija de 34 años de Rick Sánchez, esposa de Jerry Smith y madre de Morty y Summer. Al igual que su padre es muy inteligente, pero a diferencia de él, es muy responsable ante las diversas situaciones que se le presentan. Trabaja en un hospital de caballos como cirujana, pero muchas veces se reprocha no haber sido médica. Usualmente tiene discusiones con su esposo, viendo una incompatibilidad en ambos.
              </li>
              <li>
              Summer Smith (Con la voz de Spencer Grammer): Es la nieta mayor de 17 años de Rick Sánchez, hija de Beth Smith y Jerry Smith y hermana mayor de Morty Smith. En ocasiones acompaña a Rick en sus aventuras. Está completamente obsesionada con ser popular, dispuesta a hacer cualquier cosa para conseguirlo. También muestra celos hacia Morty por el hecho de que Rick le presta más atención a él que hacia ella.
              </li>
            </ul>
  
            <img
              src="/images/Residencia.webp"
              alt="Casa"
              className="landing-image"
            />
  
            <p className="landing-base-text">
            Después de desaparecer durante casi 20 años, Rick Sánchez llega repentinamente a la puerta de su hija Beth en busca de mudarse con ella y su familia. Beth lo recibe con los brazos abiertos, pero su marido, Jerry, no está muy emocionado por la reunión llorosa, ya que la llegada de Rick sirve para sacudir las cosas en la casa. Rick convierte el garaje en su laboratorio personal y se pone a trabajar en todo tipo de artilugios de ciencia ficción peligrosos. Eso no sería tan malo si no fuera por el hecho de que Rick continúa involucrando a sus nietos Morty y Summer en sus locas aventuras.
            </p>
  
            <img src="/images/Rick2.webp" alt="Rick" className="landing-image" />
          </div>
        </section>
  

        <section className="landing-social-media">
          <div className="info-bar">
            <p className="info-text">
              SIGUE LAS NOVEDADES RELACIONADAS CON LA SERIE
            </p>
            <div className="info-icons">
              <FaFacebookF />
              <FaXTwitter />
              <FaEnvelope />
              <FaLink />
            </div>
          </div>
        </section>
  

        <footer className="landing-footer">
          <div className="footer-text">
            <div className="footer-top">
              <div className="footer-columns">
                <div className="footer-column">
                  <h4>Nuestros Sitios Web</h4>
                  <ul>
                    <li>Palace Resorts</li>
                    <li>Moon Palace Resorts</li>
                    <li>Baglioni Hotels & Resorts</li>
                    <li>Palace Elite</li>
                    <li>Bodas</li>
                    <li>Convenciones</li>
                    <li>Agencias de Viajes</li>
                    <li>The Palace Company</li>
                    <li>Transportación</li>
                  </ul>
                </div>
  
                <div className="footer-column">
                  <h4>Recursos</h4>
                  <ul>
                    <li>Blog Tips Viajeros</li>
                    <li>Sala de Prensa</li>
                    <li>Contacto</li>
                    <li>Mejor Tarifa Garantizada</li>
                    <li>Le Blanc App</li>
                    <li>Centro de Ayuda</li>
                    <li>Políticas y Avisos de Privacidad</li>
                    <li>Política de Sustentabilidad</li>
                    <li>Política de Huracán</li>
                    <li>Términos y Condiciones</li>
                    <li>Mapa del Sitio</li>
                  </ul>
                </div>
  
                <div className="footer-column">
                  <h4>Acerca de Le Blanc</h4>
                  <ul>
                    <li>Earth Inclusive</li>
                    <li>Servicio de Mayordomo</li>
                    <li>Fundación Palace</li>
                  </ul>
                </div>
  
                <div className="footer-column form">
                  <h4>Suscríbete y recibe nuestras ofertas</h4>
                  <div className="form-grid">
                    <input type="text" placeholder="Nombre*" />
                    <input type="text" placeholder="Apellido*" />
                    <input type="email" placeholder="Correo*" />
                    <select>
                      <option>País</option>
                    </select>
                  </div>
                  <label className="privacy">
                    <input type="checkbox" />
                    He leído y estoy de acuerdo con los{" "}
                    <span>Términos de Uso</span> y el{" "}
                    <span>Aviso de Privacidad Integral</span>.
                  </label>
                  <button className="submit-btn">Enviar</button>
                </div>
              </div>
            </div>
  
            <div className="footer-bottom">
              <div className="social">
                <FaFacebookF />
                <FaXTwitter />
                <FaInstagram />
              </div>
              <div className="footer-text">
                Este sitio web es propiedad de PR Global Reservations, LLC.
              </div>
              <div className="footer-langs">
                <span>English</span>
                <span className="active">Español</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }