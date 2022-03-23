import { useDispatch } from "react-redux";
import classes from "./Header.module.scss";
import {getPersons} from "../../store/personsSlice"

function Header() {
    const dispatch = useDispatch();
  return (
    <div className={classes.Header}>
      <h1>Game of Thrones</h1>
      <button onClick={() => {dispatch(getPersons())}} >Favorites</button>
    </div>
  );
}

export default Header;
