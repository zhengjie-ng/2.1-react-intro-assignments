import "./App.css";
import image from "./assets/Ng_Zheng_Jie.JPG";

function App() {
  return (
    <div className="App">
      <img src={image} alt="a photo of Ng Zheng Jie" />
      <h1>Ng Zheng Jie</h1>
      <h2>Computer Graphics Generalist</h2>
      <div className="card">
        <h3>About me</h3>
        <hr></hr>
        <p>
          I have been doing Computer Graphics for more than 10 years, I am now
          looking to transit to be a Software Developer.
        </p>
      </div>

      <div className="card">
        <h3>Contact me</h3>
        <hr></hr>
        <p>
          Email: zhengjie.zjie@gmail.com | LinkedIn:
          https://www.linkedin.com/in/ngzhengjie/
        </p>
      </div>
    </div>
  );
}

export default App;
