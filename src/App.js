import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    const App = () => {

      const cards = [
        {
          img: '/images/icon1.png',
          title: 'Declarative',
          text: 'React makes It painless to create interactive UIs.',
        },
        {
          img: '/images/icon2.png',
          title: 'Components',
          text: 'Build encapsulated components that manage their state.',
        },
        {
          img: '/images/icon3.png',
          title: 'Single-Way',
          text: 'A set of immutable values are passed to the component’s.',
        },
        {
          img: '/images/icon4.png',
          title: 'JSX',
          text: 'Statically-typed, designed to run on modern browsers.',
        },
      ];
    
      const drawCards = (array) => {
        return array.map((card, idx) => {
          return (
          <div key={`element-${idx}`} className="card">
            <img src={card.img} alt={`img-${idx + 1}`} / >
            <h2>{card.title}</h2>
            <p>{card.text}</p>
          </div>
          );
        });
      };
    <div className="App">
      <header className="App-header">
        <p>Say hello to ReactJS</p>
        <p className="">
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer.
        </p>
      </header>
      <div></div>
    </div>
  );
}

export default App;
