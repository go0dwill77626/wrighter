import 'bootstrap/dist/css/bootstrap.min.css';
import './services.css';
import Accordion from './Accordion';
import { ServicesCard } from '../../constant/constant';

const Services = () => {
  return (
    <>
      <div className="container" style={{ marginTop: '100px' }}>
        <div className="row g-4">
          {
            ServicesCard && ServicesCard.map((item, index) => (
              <Cards key={index} item={item} />
            ))
          }
        </div>
      </div>
      <div>
        <Accordion />
      </div>
    </>
  );
};

const Cards = ({ item }) => {
  return (
    <div className="col-md-4 d-flex align-items-stretch">
      <div className="service-card card text-center text-white d-flex flex-column justify-content-between border-0 shadow-lg h-100">
        <div className="card-body d-flex flex-column align-items-center h-100">
          <h3 className="card-title mb-3">{item.title}</h3>
          <img
            src={item.imgSrc}
            alt="Service"
            className="img-fluid mb-3"
            style={{
              borderRadius: '5px',
              maxWidth: '100px',
              height: item.size.height,
              width: item.size.width,
            }} 
          />
          <p className="card-text mt-auto text-justify">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Services;