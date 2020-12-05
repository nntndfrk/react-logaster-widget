import "./App.css";

function App() {
  return (
    <div className="App">
      <lg-widget dev="1" lang="en" type="3">
        <div className="container">
          <h4>Lorem ipsum dolor sit amet, consectetur.</h4>
          <div>
            <input type="text" data-target="create-input" />
            <button type="button" data-target="create-button">
              Create
            </button>
          </div>
        </div>
      </lg-widget>
    </div>
  );
}

export default App;
