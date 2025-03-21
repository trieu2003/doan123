// import { Navbar, Nav, Container } from "react-bootstrap";
// import { motion } from "framer-motion";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Header = () => {
//   return (
//     <motion.nav
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <Navbar
//         expand="lg"
//         className="shadow-lg p-3"
//         style={{
//           background: "linear-gradient(90deg, #6a11cb, #2575fc)",
//           borderRadius: "10px",
//           boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
//           transition: "0.3s ease-in-out",
//           position: "relative",
//           overflow: "hidden",
//         }}
//         onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
//         onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//       >
//         <div
//           style={{
//             position: "absolute",
//             width: "100%",
//             height: "5px",
//             background: "linear-gradient(90deg, #ff9a9e, #fad0c4, #fad0c4)",
//             top: 0,
//             left: 0,
//             boxShadow: "0 0 10px rgba(255, 154, 158, 0.8)",
//           }}
//         ></div>
//         <Container>
//           <Navbar.Brand
//             href="/"
//             className="fw-bold fs-4 text-light"
//             style={{
//               textShadow: "2px 2px 10px rgba(0,0,0,0.4)",
//               letterSpacing: "1.5px",
//               display: "flex",
//               alignItems: "center",
//               gap: "10px",
//             }}
//           >
//             <motion.span
//               initial={{ rotate: -10, scale: 1 }}
//               animate={{ rotate: 10, scale: 1.1 }}
//               transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
//             >
//               🌸
//             </motion.span>
//             Flower Predictor
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto">
//               <Nav.Link
//                 href="/"
//                 className="text-light fs-5 mx-3"
//                 style={{
//                   transition: "0.3s ease-in-out",
//                   position: "relative",
//                   paddingBottom: "5px",
//                   fontWeight: "bold",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.color = "#ffeb3b";
//                   e.target.style.textDecoration = "underline";
//                   e.target.style.transform = "scale(1.1)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.color = "white";
//                   e.target.style.textDecoration = "none";
//                   e.target.style.transform = "scale(1)";
//                 }}
//               >
//                 Home
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </motion.nav>
//   );
// };

// export default Header;
import { Navbar, Nav, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000, // Đảm bảo Header nằm trên tất cả các phần khác
      }}
    >
      <Navbar
        expand="lg"
        className="shadow-lg p-3"
        style={{
          background: "linear-gradient(90deg, #6a11cb, #2575fc)",
          borderRadius: "10px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
          transition: "0.3s ease-in-out",
          overflow: "hidden",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "5px",
            background: "linear-gradient(90deg, #ff9a9e, #fad0c4, #fad0c4)",
            top: 0,
            left: 0,
            boxShadow: "0 0 10px rgba(255, 154, 158, 0.8)",
          }}
        ></div>
        <Container>
          <Navbar.Brand
            href="/"
            className="fw-bold fs-4 text-light"
            style={{
              textShadow: "2px 2px 10px rgba(0,0,0,0.4)",
              letterSpacing: "1.5px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <motion.span
              initial={{ rotate: -10, scale: 1 }}
              animate={{ rotate: 10, scale: 1.1 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              🌸
            </motion.span>
            Flower Predictor
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="/"
                className="text-light fs-5 mx-3"
                style={{
                  transition: "0.3s ease-in-out",
                  position: "relative",
                  paddingBottom: "5px",
                  fontWeight: "bold",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#ffeb3b";
                  e.target.style.textDecoration = "underline";
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "white";
                  e.target.style.textDecoration = "none";
                  e.target.style.transform = "scale(1)";
                }}
              >
                Home
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.nav>
  );
};

export default Header;
