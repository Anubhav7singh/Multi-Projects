import Chart from "react-apexcharts";
const options = {
  labels: ["Income", "Expense"],
  colors: ["rgb(255, 165, 0)", "rgb(64, 0, 192)"],
  chart: {
    width: "50px",
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: false,
  },
  hover: {
    mode: null,
  },
  plotOptions: {
    donut: {
      labels: {
        show: false,
      },
    },
  },
  fill: {
    colors: ["rgb(255, 165, 0)", "RGB(64,0,192)"],
  },
  toottip: {
    enabled: true,
    theme: "dark",
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000",
    },
  },
};
export default function Chartt({ expense = 100, income = 100 }) {
  return (
    <Chart
      options={options}
      series={[income, expense]}
      type="pie"
      width={"100%"}
      height={"100%"}
    />
  );
}
