import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://xdfile.com/wp-content/uploads/2019/09/Free-ecommerce-XD-template-1014x487.jpg"
          alt="First slide"
          height="500"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://unbounce.com/photos/Blog_7CreativeLPideas_Header_1130x484.jpg"
          alt="Second slide"
          height="500"
        />

        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://bashooka.com/wp-content/uploads/2016/10/ecommerce-web-designs-2016-17.jpg"
          alt="Third slide"
          height="500"
        />

        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;