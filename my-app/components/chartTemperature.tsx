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

export default function charttemperature(props: any) {
  const temperatureData = props.data;
  const labels = ["co2", "temperature", "temperature", "pir", "temperature"];
  const [ChartData, setChartData] = useState<
    ChartData<"line", Number[], String>
  >({
    labels: ["0", "0", "0", "0", "0"],
    datasets: [
      {
        label: "Dataset 1",
        data: [1, 2, 3, 4, 5],
        borderColor: "rgb(153, 051, 255)",
        backgroundColor: "rgba(153, 051, 255, 0.5)",
      },
      {
        label: "Dataset 2",
        data: [3, 4, 3, 4, 3],
        borderColor: "rgb(153, 051, 255)",
        backgroundColor: "rgba(153, 051, 255, 0.5)",
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
    // scales: {
    //     xAxes: [{
    //         ticks:{
    //             fontColor : 'rgba(12, 13, 13, 1)',
    //             fontSize : 14
    //         },
    //         gridLines:{
    //             color: "rgba(87, 152, 23, 1)",
    //             lineWidth: 3
    //         }
    //     }]
    // }
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
            temperatureData[0]
              ? temperatureData[0].temRoom413[0].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom413[1].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom413[2].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom413[3].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom413[4].temperature
              : "0",
          ],
          datasets: [
            {
              label: "413호 temperature Data",
              data: [
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom413[0].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom413[1].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom413[2].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom413[3].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom413[4].temperature)
                  : 0,
              ],
              borderColor: "rgb(153, 051, 255)",
              backgroundColor: "rgba(153, 051, 255, 0.5)",
            },
          ],
        });
        break;
      // 415호 차트
      case "415":
        console.log("415");
        setChartData({
          labels: [
            temperatureData[0]
              ? temperatureData[0].temRoom415[0].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom415[1].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom415[2].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom415[3].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom415[4].temperature
              : "0",
          ],
          datasets: [
            {
              label: "415호 temperature Data",
              data: [
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom415[0].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom415[1].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom415[2].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom415[3].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom415[4].temperature)
                  : 0,
              ],
              borderColor: "rgb(153, 051, 255)",
              backgroundColor: "rgba(153, 051, 255, 0.5)",
            },
          ],
        });
        break;
      //417호 차트
      case "417":
        console.log("417");
        setChartData({
          labels: [
            temperatureData[0]
              ? temperatureData[0].temRoom417[0].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom417[1].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom417[2].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom417[3].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom417[4].temperature
              : "0",
          ],
          datasets: [
            {
              label: "417호 temperature Data",
              data: [
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom417[0].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom417[1].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom417[2].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom417[3].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom417[4].temperature)
                  : 0,
              ],
              borderColor: "rgb(153, 051, 255)",
              backgroundColor: "rgba(153, 051, 255, 0.5)",
            },
          ],
        });
        break;
      //419호 차트
      case "419":
        console.log("419");
        setChartData({
          labels: [
            temperatureData[0]
              ? temperatureData[0].temRoom419[0].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom419[1].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom419[2].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom419[3].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom419[4].temperature
              : "0",
          ],
          datasets: [
            {
              label: "419호 temperature Data",
              data: [
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom419[0].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom419[1].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom419[2].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom419[3].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom419[4].temperature)
                  : 0,
              ],
              borderColor: "rgb(153, 051, 255)",
              backgroundColor: "rgba(153, 051, 255, 0.5)",
            },
          ],
        });
        break;
      //421호 차트
      case "421":
        console.log("421");
        setChartData({
          labels: [
            temperatureData[0]
              ? temperatureData[0].temRoom421[0].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom421[1].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom421[2].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom421[3].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom421[4].temperature
              : "0",
          ],
          datasets: [
            {
              label: "421호 temperature Data",
              data: [
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom421[0].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom421[1].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom421[2].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom421[3].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom421[4].temperature)
                  : 0,
              ],
              borderColor: "rgb(153, 051, 255)",
              backgroundColor: "rgba(153, 051, 255, 0.5)",
            },
          ],
        });
        break;
      //422호 차트
      case "422":
        console.log("422");
        setChartData({
          labels: [
            temperatureData[0]
              ? temperatureData[0].temRoom422[0].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom422[1].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom422[2].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom422[3].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom422[4].temperature
              : "0",
          ],
          datasets: [
            {
              label: "422호 temperature Data",
              data: [
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom422[0].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom422[1].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom422[2].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom422[3].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom422[4].temperature)
                  : 0,
              ],
              borderColor: "rgb(153, 051, 255)",
              backgroundColor: "rgba(153, 051, 255, 0.5)",
            },
          ],
        });
        break;
      //423호 차트
      case "423":
        console.log("423");
        setChartData({
          labels: [
            temperatureData[0]
              ? temperatureData[0].temRoom423[0].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom423[1].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom423[2].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom423[3].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom423[4].temperature
              : "0",
          ],
          datasets: [
            {
              label: "423호 temperature Data",
              data: [
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom423[0].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom423[1].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom423[2].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom423[3].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom423[4].temperature)
                  : 0,
              ],
              borderColor: "rgb(153, 051, 255)",
              backgroundColor: "rgba(153, 051, 255, 0.5)",
            },
          ],
        });
        break;
      //424호 차트
      case "424":
        console.log("424");
        setChartData({
          labels: [
            temperatureData[0]
              ? temperatureData[0].temRoom424[0].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom424[1].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom424[2].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom424[3].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom424[4].temperature
              : "0",
          ],
          datasets: [
            {
              label: "424호 temperature Data",
              data: [
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom424[0].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom424[1].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom424[2].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom424[3].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom424[4].temperature)
                  : 0,
              ],
              borderColor: "rgb(153, 051, 255)",
              backgroundColor: "rgba(153, 051, 255, 0.5)",
            },
          ],
        });
        break;
      //442호 차트
      case "442":
        console.log("442");
        setChartData({
          labels: [
            temperatureData[0]
              ? temperatureData[0].temRoom442[0].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom442[1].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom442[2].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom442[3].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom442[4].temperature
              : "0",
          ],
          datasets: [
            {
              label: "442호 temperature Data",
              data: [
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom442[0].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom442[1].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom442[2].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom442[3].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom442[4].temperature)
                  : 0,
              ],
              borderColor: "rgb(153, 051, 255)",
              backgroundColor: "rgba(153, 051, 255, 0.5)",
            },
          ],
        });
        break;
      //446호 차트
      case "446":
        console.log("446");
        setChartData({
          labels: [
            temperatureData[0]
              ? temperatureData[0].temRoom446[0].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom446[1].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom446[2].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom446[3].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom446[4].temperature
              : "0",
          ],
          datasets: [
            {
              label: "446호 temperature Data",
              data: [
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom446[0].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom446[1].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom446[2].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom446[3].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom446[4].temperature)
                  : 0,
              ],
              borderColor: "rgb(153, 051, 255)",
              backgroundColor: "rgba(153, 051, 255, 0.5)",
            },
          ],
        });
        break;
      //448호 차트
      case "448":
        console.log("448");
        setChartData({
          labels: [
            temperatureData[0]
              ? temperatureData[0].temRoom448[0].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom448[1].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom448[2].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom448[3].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom448[4].temperature
              : "0",
          ],
          datasets: [
            {
              label: "448호 temperature Data",
              data: [
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom448[0].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom448[1].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom448[2].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom448[3].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom448[4].temperature)
                  : 0,
              ],
              borderColor: "rgb(153, 051, 255)",
              backgroundColor: "rgba(153, 051, 255, 0.5)",
            },
          ],
        });
        break;
      //452호 차트
      case "452":
        console.log("452");
        setChartData({
          labels: [
            temperatureData[0]
              ? temperatureData[0].temRoom452[0].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom452[1].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom452[2].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom452[3].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom452[4].temperature
              : "0",
          ],
          datasets: [
            {
              label: "452호 temperature Data",
              data: [
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom452[0].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom452[1].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom452[2].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom452[3].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom452[4].temperature)
                  : 0,
              ],
              borderColor: "rgb(153, 051, 255)",
              backgroundColor: "rgba(153, 051, 255, 0.5)",
            },
          ],
        });
        break;
      //454호 차트
      case "454":
        console.log("454");
        setChartData({
          labels: [
            temperatureData[0]
              ? temperatureData[0].temRoom454[0].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom454[1].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom454[2].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom454[3].temperature
              : "0",
            temperatureData[0]
              ? temperatureData[0].temRoom454[4].temperature
              : "0",
          ],
          datasets: [
            {
              label: "454호 temperature Data",
              data: [
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom454[0].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom454[1].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom454[2].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom454[3].temperature)
                  : 0,
                temperatureData[0]
                  ? Number(temperatureData[0].temRoom454[4].temperature)
                  : 0,
              ],
              borderColor: "rgb(153, 051, 255)",
              backgroundColor: "rgba(153, 051, 255, 0.5)",
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
