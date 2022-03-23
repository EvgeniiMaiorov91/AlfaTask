
import classes from "./Header.module.scss";
import {changePage} from "../../store/personsSlice"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";



function Header() {
    const dispatch = useDispatch();
    const mainPage = useSelector((state) => state.persons.mainPage);
  return (
    <div className={classes.Header}>
      <h1>Game of Thrones</h1>
      <button onClick={() => {dispatch(changePage(mainPage))}} >{mainPage ? "Favorites" : "Home Page"}</button>
    </div>
  );
}

export default Header;
