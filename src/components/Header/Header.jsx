import classes from "./Header.module.scss";

function Header() {
  return (
    <div className={classes.Header}>
      <h1>Game of Thrones</h1>
      <button>Favorites</button>
    </div>
  );
}

export default Header;
