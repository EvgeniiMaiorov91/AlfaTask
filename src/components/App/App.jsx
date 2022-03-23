import classes from './App.module.scss';
import Header from '../Header/Header';
import Container from '../Container/Container';
import Loading from '../Loading/Loading'

function App() {
  return (
    <div className={classes.App}>
      <Header/>
      <Container/>
      <Loading/>
    </div>
  );
}

export default App;
