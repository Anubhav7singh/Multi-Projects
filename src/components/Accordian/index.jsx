import { useState } from "react";
import data from "./data";
import "./style.css";
export default function Accordian() {
  const [selected, setselected] = useState(null);
  const [enable, setenable] = useState(false);
  const [multiid, setmultiid] = useState([]);
  function handlesingle(getcurrentid) {
    setselected(getcurrentid === selected ? null : getcurrentid);
  }
  function multiseklection(currentid) {
    let cpymulti = [...multiid];
    const findindex = cpymulti.indexOf(currentid);
    if (findindex === -1) cpymulti.push(currentid);
    else cpymulti.splice(findindex, 1);
    setmultiid(cpymulti);
  }
  return (
    <div className="wrapper">
      <button onClick={() => setenable(!enable)}>Enable multiselection</button>
      <div className="accordain">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item" key={item.id}>
              <div
                className="title"
                onClick={
                  enable
                    ? () => multiseklection(item.id)
                    : () => handlesingle(item.id)
                }
              >
                <h3>{item.question}</h3>
                <span>+</span>
                <div>
                  {enable
                    ? multiid.indexOf(item.id) !== -1 && (
                        <div className="content">{item.answer}</div>
                      )
                    : selected === item.id && (
                        <div className="content">{item.answer}</div>
                      )}
                  {/* {selected === item.id ? (
                    <div className="content">{item.answer}</div>
                  ) : null} */}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div> No Data found !</div>
        )}
      </div>
    </div>
  );
}
