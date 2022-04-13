import {useContext} from "react";

import ChildContext from "../context/childContext"

const Product = () => {
  const a = useContext(ChildContext);
  return (
    <div>
      {a.map((e) => {
     return (<div>
       <p> {e.title} </p>
     </div>)
      })}
    </div>
  )
}

export default Product;