import classes from "./Persons.module.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeLike, changeFavorites } from "../../store/personsSlice";




function Persons() {
  const favorites = useSelector((state) => state.persons.favorites);
  const persons = useSelector((state) => state.persons.persons);
  const mainPage = useSelector((state) => state.persons.mainPage);
  const dispatch = useDispatch();
 

  const likeHandler = (person) => {
      dispatch(changeLike(person));
      dispatch(changeFavorites());
  }

  const viewPersons = (arr) => {
    if (arr.length) {
      return arr.map((person, index) => {
        return (
          <div key={person.id} className={classes.personCart}>
            <div className={classes.img}>
              <img src={person.imageUrl} alt="" />
            </div>
            <h3>{person.fullName}</h3>
            <h3>{person.title}</h3>
            <h3>{person.family}</h3>
            {!person.like ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#FFFFFF"
                onClick={() => {
                  likeHandler(person);
                }}
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#FFFFFF"
                onClick={() => {
                  likeHandler(person);
                }}
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            )}
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
