import "./Display.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Display(props) {
    let navigate=useNavigate();
  const data = {
    labels: props.lebel,
    datasets: [
      {
        label: "1 USD",
        data: props.lebeldata,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const data2 = {
    labels: props.lebel2,
    datasets: [
      {
        label: "1 USD",
        data: props.lebeldata2,
        backgroundColor: "#add8e6",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  return (
    <div>
        <div className="topbar">
            <span className="title">Exchange rate dashboard</span>
            <button className="topbarbutton" onClick={()=>navigate(-1)}>Logout</button>
            </div>        
      <h1 className="heading">
        Exchange rate of UAE, India, Japan, Mexico and Nepal currency to 1 USD{" "}
      </h1>
      <div style={{ width: "1200px", margin: "auto auto" }}>
        <Bar data={data} options={options} />
      </div>
      <h1 className="heading">
        Currency value greater than USD
      </h1>
      <div style={{ width: "1000px", margin: "auto auto" }}>
        <Bar data={data2} options={options} />
      </div>
    </div>
  );
}
