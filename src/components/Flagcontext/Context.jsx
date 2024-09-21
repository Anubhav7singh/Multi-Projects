import Github from "../Github";
import Qrcode from "../Qrcodegenerator";
import Starrating from "../Starrating";
import Tictactoe from "../TictacToe";
import Modaltest from "../Modalpopup/Modaltest";
import { useContext } from "react";
import { flag } from ".";
export default function Featuresflags() {
  const { loading, enable } = useContext(flag);
  const componentss = [
    {
      key: "github",
      component: <Github />,
    },
    {
      key: "imageslider",
      component: <Qrcode />,
    },
    {
      key: "star",
      component: <Starrating />,
    },
    {
      key: "Tictac",
      component: <Tictactoe />,
    },
    {
      key: "modal",
      component: <Modaltest />,
    },
  ];
  function check(id) {
    console.log(enable[id]);
    return enable[id];
  }
  if (loading) return <h1> Loading data please wait!</h1>;
  return (
    <div>
      <h1>features</h1>
      {componentss.map((item) =>
        check(item.key) ? componentss.component : null
      )}
    </div>
  );
}
