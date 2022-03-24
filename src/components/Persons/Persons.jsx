import classes from "./Persons.module.scss";
import { useSelector } from "react-redux";
import Svg from "../Svg/Svg";

function Persons() {
  const favorites = useSelector((state) => state.persons.favorites);
  const persons = useSelector((state) => state.persons.persons);
  const mainPage = useSelector((state) => state.persons.mainPage);

  const viewPersons = (arr) => {
    if (arr.length) {
      return arr.map((person) => {
        return (
          <div key={person.id} className={classes.personCart}>
            <div className={classes.img}>
              <img src={person.imageUrl} alt="" />
            </div>
            <h3>{person.fullName}</h3>
            <h3>{person.title}</h3>
            <h3>{person.family}</h3>
           <Svg person = {person}/>
          </div>
        );
      });
    } else {
      if (!mainPage) {
        return <h1>You have not added a persons.</h1>;
      }
    }
  };

  return <>{viewPersons(mainPage ? persons : favorites)}</>;
}

export default Persons;









