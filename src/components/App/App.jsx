import classes from './App.module.scss';
import Header from '../Header/Header';
import Container from '../Container/Container';
import Loading from '../Loading/Loading'
import { useSelector } from 'react-redux';


function App() {

  const loader = useSelector((state) => state.persons.loader )

  return (
    <div className={classes.App}>
      <Header/>
      <Container/>
      { loader && <Loading/>}
    </div>
  );
}

export default App;
