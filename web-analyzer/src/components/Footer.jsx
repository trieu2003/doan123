
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-dark text-white text-center p-4 mt-4 shadow-lg position-relative"
      style={{
        borderTop: "4px solid #ff9a9e",
        boxShadow: "0 -4px 10px rgba(0, 0, 0, 0.3)",
        overflow: "hidden",
      }}
    >
      <Container>
        <div className="row">
          {/* Cột 1: Thông tin */}
          <div className="col-md-4 mb-3">
            <h5>Flower Predictor</h5>
            <p>2001216245	Huỳnh Thanh Triệu<br></br>
2001210290	Nguyễn Minh Tú<br></br>
2001210682	Phan Minh Khải<br></br>
2001210292	La Hoàng Phúc<br></br>
2001215897	Nguyễn Anh Kiệt<br></br>
2001215939	Nguyễn Thành Luân</p>
          </div>
          {/* Cột 2: Liên kết nhanh */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <div className="d-flex flex-column">
              <a href="#" className="text-white text-decoration-none fs-6">About</a>
              <a href="#" className="text-white text-decoration-none fs-6">Contact</a>
              <a href="#" className="text-white text-decoration-none fs-6">Privacy</a>
              <a href="#" className="text-white text-decoration-none fs-6">FAQs</a>
              <a href="#" className="text-white text-decoration-none fs-6">Support</a>
            </div>
          </div>
          {/* Cột 3: Liên hệ */}
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p>📧 Email: huynhthanhtrieu00@gmail.com</p>
            <p>📞 Phone: +84 362150064</p>
            <p>📍 Address: 140 Lê Trọng Tấn, Phường Tây Thạnh, Quận Tân Phú, Thành phố Hồ Chí Minh</p>
          </div>
        </div>
        {/* Mạng xã hội */}
        <div className="d-flex justify-content-center gap-3 mb-3">
          <i className="fab fa-facebook fs-4 hover-effect"></i>
          <i className="fab fa-twitter fs-4 hover-effect"></i>
          <i className="fab fa-instagram fs-4 hover-effect"></i>
        </div>
        {/* Google Map */}
        <div className="mt-3">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.4791569767963!2d106.62608531062097!3d10.806153889299985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752be27d8b4f4d%3A0x92dcba2950430867!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBUaMawxqFuZyBUUC4gSOG7kyBDaMOtIE1pbmggKEhVSVQp!5e1!3m2!1svi!2s!4v1742502550367!5m2!1svi!2s"
           title="Google Map"
        width="100%" 
         height="450" 
         sstyle="border:0;" 
         allowFullScreen="" 
        loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        
        </div>
        {/* Nút Back to Top */}
        <div className="mt-3">
          <motion.button
            className="btn btn-light"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
       
          </motion.button>
        </div>
  
        {/* Hiệu ứng sóng */}
        <div className="footer-wave position-absolute w-100 bottom-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            style={{ position: "absolute", bottom: 0, left: 0 }}
          >
            {/* <path
              fill="#ff9a9e"
              fillOpacity="1"
              d="M0,64L48,69.3C96,75,192,85,288,101.3C384,117,480,139,576,144C672,149,768,139,864,122.7C960,107,1056,85,1152,90.7C1248,96,1344,128,1392,144L1440,160V320H0Z"
            ></path> */}
          </svg>
        </div>
        <p className="mb-0 mt-3">© 2025 Flower Predictor. Đồ án Chuyên đề các vấn đề hiện đại trong CNTT.</p>
      </Container>
    </motion.footer>
  );
};

export default Footer;
