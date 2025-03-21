// // import { Bar } from "react-chartjs-2";
// // import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// // Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// // const PredictionChart = ({ probabilities }) => {
// //   const labels = Object.keys(probabilities);
// //   const dataValues = Object.values(probabilities).map(val => val * 100);

// //   const data = {
// //     labels,
// //     datasets: [
// //       {
// //         label: "Probability (%)",
// //         data: dataValues,
// //         backgroundColor: "rgba(75, 192, 192, 0.6)",
// //         borderColor: "rgba(75, 192, 192, 1)",
// //         borderWidth: 1,
// //       },
// //     ],
// //   };

// //   return <Bar data={data} />;
// // };

// // export default PredictionChart;
// import { Bar } from "react-chartjs-2";
// import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const PredictionChart = ({ probabilities }) => {
//   const labels = Object.keys(probabilities);
//   const dataValues = Object.values(probabilities).map(val => val * 100);

//   const data = {
//     labels,
//     datasets: [
//       {
//         label: "Probability (%)",
//         data: dataValues,
//         backgroundColor: dataValues.map((val) =>
//           val > 50 ? "rgba(255, 99, 132, 0.7)" : "rgba(54, 162, 235, 0.7)"
//         ),
//         borderColor: "rgba(255, 255, 255, 0.8)",
//         borderWidth: 2,
//         borderRadius: 10,
//         hoverBackgroundColor: "rgba(255, 206, 86, 0.8)",
//         hoverBorderColor: "#ff6384",
//         hoverBorderWidth: 3,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: true,
//         labels: {
//           color: "#fff",
//           font: {
//             size: 14,
//             weight: "bold",
//           },
//         },
//       },
//       tooltip: {
//         backgroundColor: "rgba(0,0,0,0.8)",
//         titleFont: { size: 16, weight: "bold" },
//         bodyFont: { size: 14 },
//         bodyColor: "#fff",
//         padding: 10,
//         borderColor: "#fff",
//         borderWidth: 1,
//       },
//     },
//     scales: {
//       x: {
//         ticks: {
//           color: "#fff",
//           font: { size: 14 },
//         },
//         grid: { display: false },
//       },
//       y: {
//         ticks: {
//           color: "#fff",
//           font: { size: 14 },
//           callback: (value) => `${value}%`,
//         },
//         grid: {
//           color: "rgba(255, 255, 255, 0.2)",
//         },
//       },
//     },
//   };

//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "400px",
//         background: "linear-gradient(135deg, #1e3c72, #2a5298)",
//         borderRadius: "15px",
//         padding: "20px",
//         boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
//       }}
//     >
//       <Bar data={data} options={options} />
//     </div>
//   );
// };

// export default PredictionChart;
// // import { Bar } from "react-chartjs-2";
// // import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// // Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// // const PredictionChart = ({ probabilities }) => {
// //   const labels = Object.keys(probabilities);
// //   const dataValues = Object.values(probabilities).map(val => val * 100);

// //   const data = {
// //     labels,
// //     datasets: [
// //       {
// //         label: "Probability (%)",
// //         data: dataValues,
// //         backgroundColor: "rgba(75, 192, 192, 0.6)",
// //         borderColor: "rgba(75, 192, 192, 1)",
// //         borderWidth: 1,
// //       },
// //     ],
// //   };

// //   return <Bar data={data} />;
// // };

// // export default PredictionChart;
import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PredictionChart = ({ probabilities }) => {
  const labels = Object.keys(probabilities);
  const dataValues = Object.values(probabilities).map(val => val);

  const data = {
    labels,
    datasets: [
      {
        label: "Xác suất dự đoán (%)",
        data: dataValues,
        backgroundColor: dataValues.map((val) =>
          val > 50 ? "rgba(255, 99, 132, 0.8)" : "rgba(54, 162, 235, 0.8)"
        ),
        borderColor: "#fff",
        borderWidth: 2,
        borderRadius: 8,
        hoverBackgroundColor: "rgba(255, 206, 86, 0.8)",
        hoverBorderColor: "#ff6384",
        hoverBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#fff",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
      tooltip: {
        backgroundColor: "rgba(0,0,0,0.9)",
        titleFont: { size: 16, weight: "bold" },
        bodyFont: { size: 14 },
        bodyColor: "#fff",
        padding: 12,
        borderColor: "#fff",
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#fff",
          font: { size: 14 },
        },
        grid: { display: false },
      },
      y: {
        ticks: {
          color: "#fff",
          font: { size: 14 },
          callback: (value) => `${value}%`,
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
        },
      },
    },
    animation: {
      duration: 1000,
      easing: "easeInOutQuart",
    },
  };

  return (
    <div
      style={{
        width: "100%",
        height: "420px",
        background: "linear-gradient(135deg, #1e3c72, #2a5298)",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 6px 15px rgba(0,0,0,0.3)",
      }}
    >
      <Bar data={data} options={options} />
    </div>
  );
};

export default PredictionChart;
