import "./ProductList.css";
import Product from "../product/Product";
import { products } from "../../data";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ProductList = () => {
  useEffect(() => {
    Aos.init({duration: 3000});
}, []);
  return (
    <div className="pl">
          <div className="pl-text" data-aos="fade-down">
              <h1 className="pl-title">Create & Inspire</h1>
              <p className="pl-desc">
                  This is my Portfolio Gallery, I have worked on lots of
                  creative Web Applications with attractive UI designs. I have also worked
                  on lots of Machine learning &amp; IOT based Hardware Projects.
              </p>
          </div>
      <div className="pl-list" data-aos="fade-right">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
