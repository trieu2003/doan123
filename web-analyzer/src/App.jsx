// import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import UploadImage from "./components/UploadImage";

// function App() {

//   return (
//     <div id="root">
//       <Header />
//       <div className="main-content mt-4">
//         <UploadImage />
//       </div>
//       <Footer />
//     </div>
//   )
// }

// export default App
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UploadImage from "./components/UploadImage";

function App() {
  return (
    <div id="root">
      <Header />

      <div className="main-content mt-4"> 
        </div>  
      {/* Nội dung chính */}
      <div className="content-overlay">
        <UploadImage />
      </div>

      <Footer />
    </div>
  );
}

export default App;
