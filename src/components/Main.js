import Cat from "./cat/Cat";
import Logic from "./logic/Logic";
import classes from "./Main.module.css"

const Main = () => {
  return (
    <div className={classes.ma} >
      <Logic/>
        <Cat/>
    </div>
  );
};

export default Main;
