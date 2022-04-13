import { useContext, useEffect } from "react";
import noteContext from "../context/noteContext";
const About = () => {
  const a = useContext(noteContext);
  useEffect(() => {
    a.update();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h1> About</h1>
      <p>
        {" "}
        This is About {a.state.name} and he is in class {a.state.class}{" "}
      </p>
    </div>
  );
};

export default About;
