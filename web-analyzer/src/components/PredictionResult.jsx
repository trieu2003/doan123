// // import { Card } from "react-bootstrap";
// // import PredictionChart from "./PredictionChart";

// // const PredictionResult = ({ result }) => {
// //   return (
// //     <Card className="mt-4 p-3 shadow">
// //       <h3>Predicted Class: <span className="text-success">{result.predicted_class}</span></h3>
// //       <h5>Confidence: {(result.max_probability * 100).toFixed(2)}%</h5>
// //       <PredictionChart probabilities={result.probabilities} />
// //     </Card>
// //   );
// // };

// // export default PredictionResult;
// import { Card } from "react-bootstrap";
// import PredictionChart from "./PredictionChart";
// import { motion } from "framer-motion";

// const PredictionResult = ({ result }) => {
//   return (
//     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
//       <Card className="mt-4 p-4 shadow-lg border-0">
//         <h3 className="text-center">Predicted Class: <span className="text-success fw-bold">{result.predicted_class}</span></h3>
//         <h5 className="text-center">Confidence: {(result.max_probability * 100).toFixed(2)}%</h5>
//         <PredictionChart probabilities={result.probabilities} />
//       </Card>
//     </motion.div>
//   );
// };

// export default PredictionResult;
import { Card } from "react-bootstrap";
import PredictionChart from "./PredictionChart";
import { motion } from "framer-motion";

const PredictionResult = ({ result }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
    >
      <Card
        className="mt-4 p-4 shadow-lg border-0 text-white"
        style={{
          background: "linear-gradient(135deg, #1e3c72, #2a5298)",
          borderRadius: "15px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
          transition: "0.3s ease-in-out",
          position: "relative",
        }}
      >
        {/* Viền phát sáng */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "5px",
            background: "linear-gradient(90deg, #ff9a9e, #fad0c4, #fad0c4)",
            boxShadow: "0 0 10px rgba(255, 154, 158, 0.8)",
            borderRadius: "15px 15px 0 0",
          }}
        ></div>

        <h3 className="text-center fw-bold" style={{ letterSpacing: "1px" }}>
          Predicted Class:{" "}
          <span className="text-warning">{result.predicted_class}</span>
        </h3>

        <h5 className="text-center mt-2">
          Confidence:{" "}
          <span style={{ color: "#ffeb3b", fontWeight: "bold" }}>
            {(result.max_probability ).toFixed(2)}%
          </span>
        </h5>

        <div className="mt-4">
          <PredictionChart probabilities={result.probabilities} />
        </div>
      </Card>
    </motion.div>
  );
};

export default PredictionResult;
// import { Card } from "react-bootstrap";
// import PredictionChart from "./PredictionChart";

// const PredictionResult = ({ result }) => {
//   return (
//     <Card className="mt-4 p-3 shadow">
//       <h3>Predicted Class: <span className="text-success">{result.predicted_class}</span></h3>
//       <h5>Confidence: {(result.max_probability * 100).toFixed(2)}%</h5>
//       <PredictionChart probabilities={result.probabilities} />
//     </Card>
//   );
// };

// export default PredictionResult;