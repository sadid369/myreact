import ClockList from "./components/ClockList";

function App() {
  console.log("App component render");
  const quantities = [1, 2, 3];
  return (
    <div>
      <ClockList quantities={quantities} />
    </div>
  );
}

export default App;
