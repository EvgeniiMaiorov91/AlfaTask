import Persons from "../Persons/Persons";
import classes from "./Container.module.scss";
import { useSelector } from "react-redux";

function Container() {

    

  return (
    <div className={classes.Container}>
       <Persons/>
    </div>
  );
}

export default Container;
