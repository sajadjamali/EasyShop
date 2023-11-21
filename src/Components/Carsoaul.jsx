import '../CSS/carsoaul.css'
import a from '../assets/imgs/a.jpg'
import b from '../assets/imgs/b.webp'
import c from '../assets/imgs/c.jpg'
import d from '../assets/imgs/d.jpg'
import e from '../assets/imgs/e.avif'
import f from '../assets/imgs/f.webp'

const Carsoaul = () => {
  return (
    <>
      <div className="carousel">
        <ul className="slides">
          <input type="radio" name="radio-buttons" id="img-1" defaultChecked />
          <li className="slide-container">
            <div className="slide-image">
              <img src={a} />
            </div>
            <div className="carousel-controls">
              <label htmlFor="img-3" className="prev-slide">
                <span>&lsaquo;</span>
              </label>
              <label htmlFor="img-2" className="next-slide">
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>

          <input type="radio" name="radio-buttons" id="img-2" />
          <li className="slide-container">
            <div className="slide-image">
              <img src={b} />
            </div>
            <div className="carousel-controls">
              <label htmlFor="img-1" className="prev-slide">
                <span>&lsaquo;</span>
              </label>
              <label htmlFor="img-3" className="next-slide">
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>

          <input type="radio" name="radio-buttons" id="img-3" />
          <li className="slide-container">
            <div className="slide-image">
              <img src={c} />
            </div>
            <div className="carousel-controls">
              <label htmlFor="img-2" className="prev-slide">
                <span>&lsaquo;</span>
              </label>
              <label htmlFor="img-1" className="next-slide">
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>

          <input type="radio" name="radio-buttons" id="img-4" />
          <li className="slide-container">
            <div className="slide-image">
              <img src={d} />
            </div>
            <div className="carousel-controls">
              <label htmlFor="img-2" className="prev-slide">
                <span>&lsaquo;</span>
              </label>
              <label htmlFor="img-3" className="next-slide">
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>

          <input type="radio" name="radio-buttons" id="img-5" />
          <li className="slide-container">
            <div className="slide-image">
              <img src={e} />
            </div>
            <div className="carousel-controls">
              <label htmlFor="img-3" className="prev-slide">
                <span>&lsaquo;</span>
              </label>
              <label htmlFor="img-4" className="next-slide">
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>

          <input type="radio" name="radio-buttons" id="img-6" />
          <li className="slide-container">
            <div className="slide-image">
              <img src={f} />
            </div>
            <div className="carousel-controls">
              <label htmlFor="img-4" className="prev-slide">
                <span>&lsaquo;</span>
              </label>
              <label htmlFor="img-5" className="next-slide">
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>

          <div className="carousel-dots">
            <label htmlFor="img-1" className="carousel-dot" id="img-dot-1"></label>
            <label htmlFor="img-2" className="carousel-dot" id="img-dot-2"></label>
            <label htmlFor="img-3" className="carousel-dot" id="img-dot-3"></label>
            <label htmlFor="img-4" className="carousel-dot" id="img-dot-4"></label>
            <label htmlFor="img-5" className="carousel-dot" id="img-dot-5"></label>
            <label htmlFor="img-6" className="carousel-dot" id="img-dot-6"></label>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Carsoaul;