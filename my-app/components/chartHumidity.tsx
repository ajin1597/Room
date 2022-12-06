import React from "react";
import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartData,
  ChartOptions,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import faker from "faker";

export default function chartHumidity(props: any) {
  const humidityData = props.data;
  const labels = ["0", "0", "0", "0", "0"];
  const [ChartData, setChartData] = useState<
    ChartData<"line", Number[], String>
  >({
    labels: ["0", "0", "0", "0", "0"],
    datasets: [
      {
        label: "Dataset 1",
        data: [1, 2, 3, 4, 5],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: [3, 4, 3, 4, 3],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  });
  const configs: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Rooms Sensor Datas",
      },
    },
  };

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  function chartAttribute() {
    switch (props.datasetsIdkey) {
      // 413호 차트
      case "413":
        console.log("413");
        setChartData({
          labels: [
            humidityData[0] ? humidityData[0].huRoom413[0].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom413[1].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom413[2].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom413[3].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom413[4].humidity : "0",
          ],
          datasets: [
            {
              label: "413호 humidity Data",
              data: [
                humidityData[0]
                  ? Number(humidityData[0].huRoom413[0].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom413[1].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom413[2].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom413[3].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom413[4].humidity)
                  : 0,
              ],
              borderColor: "rgb(000, 000, 255)",
              backgroundColor: "rgba(000, 000, 255, 0.5)",
            },
          ],
        });
        break;
      // 415호 차트
      case "415":
        console.log("415");
        setChartData({
          labels: [
            humidityData[0] ? humidityData[0].huRoom415[0].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom415[1].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom415[2].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom415[3].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom415[4].humidity : "0",
          ],
          datasets: [
            {
              label: "415호 humidity Data",
              data: [
                humidityData[0]
                  ? Number(humidityData[0].huRoom415[0].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom415[1].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom415[2].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom415[3].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom415[4].humidity)
                  : 0,
              ],
              borderColor: "rgb(000, 000, 255)",
              backgroundColor: "rgba(000, 000, 255, 0.5)",
            },
          ],
        });
        break;
      //417호 차트
      case "417":
        console.log("417");
        setChartData({
          labels: [
            humidityData[0] ? humidityData[0].huRoom417[0].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom417[1].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom417[2].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom417[3].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom417[4].humidity : "0",
          ],
          datasets: [
            {
              label: "417호 humidity Data",
              data: [
                humidityData[0]
                  ? Number(humidityData[0].huRoom417[0].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom417[1].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom417[2].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom417[3].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom417[4].humidity)
                  : 0,
              ],
              borderColor: "rgb(000, 000, 255)",
              backgroundColor: "rgba(000, 000, 255, 0.5)",
            },
          ],
        });
        break;
      //419호 차트
      case "419":
        console.log("419");
        setChartData({
          labels: [
            humidityData[0] ? humidityData[0].huRoom419[0].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom419[1].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom419[2].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom419[3].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom419[4].humidity : "0",
          ],
          datasets: [
            {
              label: "419호 humidity Data",
              data: [
                humidityData[0]
                  ? Number(humidityData[0].huRoom419[0].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom419[1].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom419[2].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom419[3].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom419[4].humidity)
                  : 0,
              ],
              borderColor: "rgb(000, 000, 255)",
              backgroundColor: "rgba(000, 000, 255, 0.5)",
            },
          ],
        });
        break;
      //421호 차트
      case "421":
        console.log("421");
        setChartData({
          labels: [
            humidityData[0] ? humidityData[0].huRoom421[0].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom421[1].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom421[2].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom421[3].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom421[4].humidity : "0",
          ],
          datasets: [
            {
              label: "421호 humidity Data",
              data: [
                humidityData[0]
                  ? Number(humidityData[0].huRoom421[0].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom421[1].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom421[2].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom421[3].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom421[4].humidity)
                  : 0,
              ],
              borderColor: "rgb(000, 000, 255)",
              backgroundColor: "rgba(000, 000, 255, 0.5)",
            },
          ],
        });
        break;
      //422호 차트
      case "422":
        console.log("422");
        setChartData({
          labels: [
            humidityData[0] ? humidityData[0].huRoom422[0].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom422[1].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom422[2].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom422[3].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom422[4].humidity : "0",
          ],
          datasets: [
            {
              label: "422호 humidity Data",
              data: [
                humidityData[0]
                  ? Number(humidityData[0].huRoom422[0].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom422[1].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom422[2].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom422[3].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom422[4].humidity)
                  : 0,
              ],
              borderColor: "rgb(000, 000, 255)",
              backgroundColor: "rgba(000, 000, 255, 0.5)",
            },
          ],
        });
        break;
      //423호 차트
      case "423":
        console.log("423");
        setChartData({
          labels: [
            humidityData[0] ? humidityData[0].huRoom423[0].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom423[1].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom423[2].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom423[3].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom423[4].humidity : "0",
          ],
          datasets: [
            {
              label: "423호 humidity Data",
              data: [
                humidityData[0]
                  ? Number(humidityData[0].huRoom423[0].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom423[1].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom423[2].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom423[3].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom423[4].humidity)
                  : 0,
              ],
              borderColor: "rgb(000, 000, 255)",
              backgroundColor: "rgba(000, 000, 255, 0.5)",
            },
          ],
        });
        break;
      //424호 차트
      case "424":
        console.log("424");
        setChartData({
          labels: [
            humidityData[0] ? humidityData[0].huRoom424[0].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom424[1].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom424[2].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom424[3].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom424[4].humidity : "0",
          ],
          datasets: [
            {
              label: "424호 humidity Data",
              data: [
                humidityData[0]
                  ? Number(humidityData[0].huRoom424[0].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom424[1].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom424[2].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom424[3].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom424[4].humidity)
                  : 0,
              ],
              borderColor: "rgb(000, 000, 255)",
              backgroundColor: "rgba(000, 000, 255, 0.5)",
            },
          ],
        });
        break;
      //442호 차트
      case "442":
        console.log("442");
        setChartData({
          labels: [
            humidityData[0] ? humidityData[0].huRoom442[0].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom442[1].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom442[2].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom442[3].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom442[4].humidity : "0",
          ],
          datasets: [
            {
              label: "442호 humidity Data",
              data: [
                humidityData[0]
                  ? Number(humidityData[0].huRoom442[0].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom442[1].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom442[2].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom442[3].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom442[4].humidity)
                  : 0,
              ],
              borderColor: "rgb(000, 000, 255)",
              backgroundColor: "rgba(000, 000, 255, 0.5)",
            },
          ],
        });
        break;
      //446호 차트
      case "446":
        console.log("446");
        setChartData({
          labels: [
            humidityData[0] ? humidityData[0].huRoom446[0].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom446[1].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom446[2].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom446[3].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom446[4].humidity : "0",
          ],
          datasets: [
            {
              label: "446호 humidity Data",
              data: [
                humidityData[0]
                  ? Number(humidityData[0].huRoom446[0].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom446[1].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom446[2].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom446[3].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom446[4].humidity)
                  : 0,
              ],
              borderColor: "rgb(000, 000, 255)",
              backgroundColor: "rgba(000, 000, 255, 0.5)",
            },
          ],
        });
        break;
      //448호 차트
      case "448":
        console.log("448");
        setChartData({
          labels: [
            humidityData[0] ? humidityData[0].huRoom448[0].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom448[1].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom448[2].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom448[3].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom448[4].humidity : "0",
          ],
          datasets: [
            {
              label: "448호 humidity Data",
              data: [
                humidityData[0]
                  ? Number(humidityData[0].huRoom448[0].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom448[1].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom448[2].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom448[3].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom448[4].humidity)
                  : 0,
              ],
              borderColor: "rgb(000, 000, 255)",
              backgroundColor: "rgba(000, 000, 255, 0.5)",
            },
          ],
        });
        break;
      //452호 차트
      case "452":
        console.log("452");
        setChartData({
          labels: [
            humidityData[0] ? humidityData[0].huRoom452[0].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom452[1].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom452[2].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom452[3].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom452[4].humidity : "0",
          ],
          datasets: [
            {
              label: "452호 humidity Data",
              data: [
                humidityData[0]
                  ? Number(humidityData[0].huRoom452[0].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom452[1].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom452[2].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom452[3].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom452[4].humidity)
                  : 0,
              ],
              borderColor: "rgb(000, 000, 255)",
              backgroundColor: "rgba(000, 000, 255, 0.5)",
            },
          ],
        });
        break;
      //454호 차트
      case "454":
        console.log("454");
        setChartData({
          labels: [
            humidityData[0] ? humidityData[0].huRoom454[0].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom454[1].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom454[2].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom454[3].humidity : "0",
            humidityData[0] ? humidityData[0].huRoom454[4].humidity : "0",
          ],
          datasets: [
            {
              label: "454호 humidity Data",
              data: [
                humidityData[0]
                  ? Number(humidityData[0].huRoom454[0].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom454[1].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom454[2].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom454[3].humidity)
                  : 0,
                humidityData[0]
                  ? Number(humidityData[0].huRoom454[4].humidity)
                  : 0,
              ],
              borderColor: "rgb(000, 000, 255)",
              backgroundColor: "rgba(000, 000, 255, 0.5)",
            },
          ],
        });
        break;
    }
  }

  useEffect(() => {
    chartAttribute();
    // router.reload();
  }, [props]);

  return props && <Line data={ChartData} options={configs}></Line>;
}
