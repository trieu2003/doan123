// // import { useState } from "react";
// // import { Container, Card, Button, Form, Image, Spinner, Alert, Row, Col } from "react-bootstrap";
// // import { predictFlower } from "../services/api";
// // import PredictionResult from "./PredictionResult";

// // const UploadImage = () => {
// //   const [selectedFile, setSelectedFile] = useState(null);
// //   const [imagePreview, setImagePreview] = useState(null);
// //   const [prediction, setPrediction] = useState(null);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState("");

// //   const handleFileChange = (event) => {
// //     const file = event.target.files[0];
// //     if (file) {
// //       setSelectedFile(file);
// //       setImagePreview(URL.createObjectURL(file));
// //       setPrediction(null);
// //     }
// //   };

// //   const handleUpload = async () => {
// //     if (!selectedFile) {
// //       setError("Please select an image.");
// //       return;
// //     }
// //     setLoading(true);
// //     setError("");

// //     const result = await predictFlower(selectedFile);

// //     if (result) {
// //       setPrediction(result);
// //     } else {
// //       setError("Failed to predict. Try again.");
// //     }
// //     setLoading(false);
// //   };

// //   return (
// //     <Container className="d-flex justify-content-center align-items-center mt-5">
// //       <Card className="shadow-lg p-4" style={{ width: "900px" }}>
// //         <Card.Title className="mb-3 fs-3 text-center">🌸 Upload Image for Prediction 🌼</Card.Title>

// //         <Form.Group controlId="formFile" className="mb-3 text-center">
// //           <Form.Control type="file" accept="image/*" onChange={handleFileChange} className="fs-5 p-2" />
// //         </Form.Group>

// //         {error && <Alert variant="danger" className="mt-3 fs-5 text-center">{error}</Alert>}

// //         <Row>
// //           <Col md={5} className="text-center">
// //             {imagePreview && (
// //               <Image src={imagePreview} alt="Preview" fluid className="mb-3" style={{ borderRadius: "10px", maxHeight: "300px" }} />
// //             )}

// //             <Button variant="primary" size="lg" onClick={handleUpload} disabled={loading} className="px-4">
// //               {loading ? <Spinner animation="border" size="sm" /> : "Predict"}
// //             </Button>
// //           </Col>

// //           <Col md={7}>
// //             {prediction && <PredictionResult result={prediction} />}
// //           </Col>
// //         </Row>
// //       </Card>
// //     </Container>
// //   );
// // };

// // export default UploadImage;
// import { useState } from "react";
// import {
//   Container,
//   Card,
//   Button,
//   Form,
//   Image,
//   Spinner,
//   Alert,
//   Row,
//   Col,
// } from "react-bootstrap";
// import { motion } from "framer-motion";
// import { predictFlower } from "../services/api";
// import PredictionResult from "./PredictionResult";

// const UploadImage = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);
//   const [prediction, setPrediction] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setSelectedFile(file);
//       setImagePreview(URL.createObjectURL(file));
//       setPrediction(null);
//     }
//   };

//   const handleUpload = async () => {
//     if (!selectedFile) {
//       setError("🚨 Please select an image first!");
//       return;
//     }
//     setLoading(true);
//     setError("");

//     const result = await predictFlower(selectedFile);

//     if (result) {
//       setPrediction(result);
//     } else {
//       setError("❌ Prediction failed. Please try again.");
//     }
//     setLoading(false);
//   };

//   return (
//     <Container className="d-flex justify-content-center align-items-center mt-5 ">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Card
//           className="shadow-lg p-4 text-white"
//           style={{
//             width: "900px",
//             background: "linear-gradient(135deg,rgb(216, 186, 243),rgb(179, 213, 248))",
//             borderRadius: "15px",
//             boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
//             transition: "0.3s ease-in-out",
//           }}
//         >
//           <Card.Title className="mb-3 fs-3 text-center fw-bold">
//             🌸 Upload Image for Prediction 🌼
//           </Card.Title>

//           <Form.Group controlId="formFile" className="mb-3 text-center">
//             <Form.Control
//               type="file"
//               accept="image/*"
//               onChange={handleFileChange}
//               className="fs-5 p-2"
//               style={{
//                 backgroundColor: "#ffffff",
//                 borderRadius: "8px",
//                 padding: "10px",
//                 cursor: "pointer",
//               }}
//             />
//           </Form.Group>

//           {error && (
//             <motion.div
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//             >
//               <Alert variant="danger" className="mt-3 fs-5 text-center">
//                 {error}
//               </Alert>
//             </motion.div>
//           )}

//           <Row>
//             <Col md={5} className="text-center">
//               {imagePreview && (
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <Image
//                     src={imagePreview}
//                     alt="Preview"
//                     fluid
//                     className="mb-3"
//                     style={{
//                       borderRadius: "10px",
//                       maxHeight: "300px",
//                       border: "2px solid #ffeb3b",
//                       padding: "5px",
//                     }}
//                   />
//                 </motion.div>
//               )}

//               <motion.div whileHover={{ scale: 1.1 }}>
//                 <Button
//                   variant="warning"
//                   size="lg"
//                   onClick={handleUpload}
//                   disabled={loading}
//                   className="px-4 fw-bold text-dark"
//                   style={{
//                     borderRadius: "8px",
//                     boxShadow: "0 4px 10px rgba(255, 235, 59, 0.4)",
//                     transition: "0.3s",
//                   }}
//                 >
//                   {loading ? <Spinner animation="border" size="sm" /> : "🌟 Predict"}
//                 </Button>
//               </motion.div>
//             </Col>

//             <Col md={7}>
//               {prediction && <PredictionResult result={prediction} />}
//             </Col>
//           </Row>
//         </Card>
//       </motion.div>
//     </Container>
//   );
// };

// export default UploadImage;
// // import { useState } from "react";
// // import { Container, Card, Button, Form, Image, Spinner, Alert, Row, Col } from "react-bootstrap";
// // import { predictFlower } from "../services/api";
// // import PredictionResult from "./PredictionResult";

// // const UploadImage = () => {
// //   const [selectedFile, setSelectedFile] = useState(null);
// //   const [imagePreview, setImagePreview] = useState(null);
// //   const [prediction, setPrediction] = useState(null);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState("");

// //   const handleFileChange = (event) => {
// //     const file = event.target.files[0];
// //     if (file) {
// //       setSelectedFile(file);
// //       setImagePreview(URL.createObjectURL(file));
// //       setPrediction(null);
// //     }
// //   };

// //   const handleUpload = async () => {
// //     if (!selectedFile) {
// //       setError("Please select an image.");
// //       return;
// //     }
// //     setLoading(true);
// //     setError("");

// //     const result = await predictFlower(selectedFile);

// //     if (result) {
// //       setPrediction(result);
// //     } else {
// //       setError("Failed to predict. Try again.");
// //     }
// //     setLoading(false);
// //   };

// //   return (
// //     <Container className="d-flex justify-content-center align-items-center mt-5">
// //       <Card className="shadow-lg p-4" style={{ width: "900px" }}>
// //         <Card.Title className="mb-3 fs-3 text-center">🌸 Upload Image for Prediction 🌼</Card.Title>

// //         <Form.Group controlId="formFile" className="mb-3 text-center">
// //           <Form.Control type="file" accept="image/*" onChange={handleFileChange} className="fs-5 p-2" />
// //         </Form.Group>

// //         {error && <Alert variant="danger" className="mt-3 fs-5 text-center">{error}</Alert>}

// //         <Row>
// //           <Col md={5} className="text-center">
// //             {imagePreview && (
// //               <Image src={imagePreview} alt="Preview" fluid className="mb-3" style={{ borderRadius: "10px", maxHeight: "300px" }} />
// //             )}

// //             <Button variant="primary" size="lg" onClick={handleUpload} disabled={loading} className="px-4">
// //               {loading ? <Spinner animation="border" size="sm" /> : "Predict"}
// //             </Button>
// //           </Col>

// //           <Col md={7}>
// //             {prediction && <PredictionResult result={prediction} />}
// //           </Col>
// //         </Row>
// //       </Card>
// //     </Container>
// //   );
// // };

// // export default UploadImage;
import { useState } from "react";
import {
  Container,
  Card,
  Button,
  Form,
  Image,
  Spinner,
  Alert,
  Row,
  Col,
} from "react-bootstrap";
import { motion } from "framer-motion";
import { predictFlower } from "../services/api";
import PredictionResult from "./PredictionResult";

const UploadImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setImagePreview(URL.createObjectURL(file));
      setPrediction(null);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError("🚨 Please select an image first!");
      return;
    }
    setLoading(true);
    setError("");

    const result = await predictFlower(selectedFile);

    if (result) {
      setPrediction(result);
    } else {
      setError("❌ Prediction failed. Please try again.");
    }
    setLoading(false);
  };

  return (
    <Container className="d-flex justify-content-center align-items-start mt-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card
          className="shadow-lg p-4 text-white"
          style={{
            width: "600px",
            hight: "560px",
            background: "linear-gradient(135deg, rgb(216, 186, 243), rgb(179, 213, 248))",
            borderRadius: "15px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
            transition: "0.3s ease-in-out",
          }}
        >
          <Card.Title className="mb-3 fs-3 text-center fw-bold">
            🌸 Upload Image for Prediction 🌼
          </Card.Title>

          <Form.Group controlId="formFile" className="mb-3 text-center">
            <Form.Control
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="fs-5 p-2"
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                padding: "10px",
                cursor: "pointer",
              }}
            />
          </Form.Group>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Alert variant="danger" className="mt-3 fs-5 text-center">
                {error}
              </Alert>
            </motion.div>
          )}

          <Row>
            <Col md={12} className="text-center">
              {imagePreview && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={imagePreview}
                    alt="Preview"
                    fluid
                    className="mb-3"
                    style={{
                      borderRadius: "10px",
                      maxHeight: "300px",
                      border: "2px solid #ffeb3b",
                      padding: "5px",
                    }}
                  />
                </motion.div>
              )}

              <motion.div whileHover={{ scale: 1.1 }}>
                <Button
                  variant="warning"
                  size="lg"
                  onClick={handleUpload}
                  disabled={loading}
                  className="px-4 fw-bold text-dark"
                  style={{
                    borderRadius: "8px",
                    boxShadow: "0 4px 10px rgba(255, 235, 59, 0.4)",
                    transition: "0.3s",
                  }}
                >
                  {loading ? <Spinner animation="border" size="sm" /> : "🌟 Predict"}
                </Button>
              </motion.div>
            </Col>
          </Row>
        </Card>
      </motion.div>

      {/* Vùng kết quả cố định */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="position-sticky"
        style={{
          top: "100px", // Điều chỉnh vị trí cố định
          right: "20px",
          width: "560px",
          minHeight: "300px",
          background: "rgba(255, 255, 255, 0.9)",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
          padding: "20px",
          textAlign: "center",
        }}
      >
        {prediction ? (
          <PredictionResult result={prediction} />
        ) : (
          <p className="fs-5 text-muted">🔍 Prediction will appear here.</p>
        )}
      </motion.div>
    </Container>
  );
};

export default UploadImage;
