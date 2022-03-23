import classes from "./App.module.scss";
import Header from "../Header/Header";
import Container from "../Container/Container";
import Loading from "../Loading/Loading";
import { useSelector } from "react-redux";
import { getPersons } from "../../store/personsSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const loader = useSelector((state) => state.persons.loader);
  const persons = useSelector((state) => state.persons.persons);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!persons.length) {
      dispatch(getPersons());
    }
  }, []);

  return (
    <div className={classes.App}>
      <Header />
      <Container />
      {loader && <Loading />}
    </div>
  );
}

export default App;
