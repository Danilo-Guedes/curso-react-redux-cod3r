import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
    return (
        <div className='App'>
            <h1>Exercício React-Redux (Simples)</h1>
            <div className='linha'>
                <Card red title="Card 1">Contet 1</Card>
                <Card green title="Card 2">Contet 2</Card>
            </div>
            <div className='linha'>
                <Card blue title="Card 3">Contet 3</Card>
                <Card purple title="Card 4">Contet 4</Card>
            </div>
        </div>
    );
}

export default App;
