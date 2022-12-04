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

export default function chart(props: any) {
  console.log(props.datasetsIdkey);
  console.log(props.data.roomsCo2[0]);
  console.log(props);

  const co2Data = props.data.roomsCo2;
  const humidityData = props.data.roomsHumidity;
  const lightData = props.data.roomsLight;
  const pirData = props.data.roomsPir;
  const temperatureData = props.data.roomsTemperature;
  // #######일어나서 컴포넌트 딜레이걸기
  const a = props.data;
  setTimeout(() => {
    props.data.roomsCo2[0] == undefined;
  }, 3000);
  // if (undefined == a.co2Room413) {
  //   a.co2Room413 == 0;
  // }
  // console.log(props.data[0][0]);
  // console.log(a.co2Room413);
  // console.log(a);
  // const aa = [a.roomsCo2[0]];
  // console.log(aa[0]);
  // let aaa = null;

  // if (aa.co2Room413[0] == undefined) {
  //   aa.co2Room413[0] = null;
  // }
  // aaa = aa.co2Room413[0];
  // console.log(aaa);

  // console.log(key);
  // console.log(props.data[3][4]);
  // console.log(props.data[2][4]);

  const labels = ["co2", "humidity", "light", "pir", "temperature"];

  const [ChartData, setChartData] = useState<
    ChartData<"line", Number[], String>
  >({
    labels,
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
        position: "bottom" as const,
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
      case "413":
        setChartData({
          labels,
          datasets: [
            {
              label: "ROOMS 413 co2 Data",
              data: [
                co2Data.co2Room413[0],
                co2Data.co2Room413[1],
                co2Data.co2Room413[2],
                co2Data.co2Room413[3],
                co2Data.co2Room413[4],
              ],
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
              label: "ROOMS 413 humidity Data",
              data: [
                humidityData.humidityRoom413[0],
                humidityData.humidityRoom413[1],
                humidityData.humidityRoom413[2],
                humidityData.humidityRoom413[3],
                humidityData.humidityRoom413[4],
              ],
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
              label: "ROOMS 413 Light Data",
              data: [
                lightData.lightRoom413[0],
                lightData.lightRoom413[1],
                lightData.lightRoom413[2],
                lightData.lightRoom413[3],
                lightData.lightRoom413[4],
              ],
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
              label: "ROOMS 413 Pir Data",
              data: [
                pirData.pirRoom413[0],
                pirData.pirRoom413[1],
                pirData.pirRoom413[2],
                pirData.pirRoom413[3],
                pirData.pirRoom413[4],
              ],
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
              label: "ROOMS 413 Temperature Data",
              data: [
                temperatureData.temperatureRoom413[0],
                temperatureData.temperatureRoom413[1],
                temperatureData.temperatureRoom413[2],
                temperatureData.temperatureRoom413[3],
                temperatureData.temperatureRoom413[4],
              ],
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
          ],
        });
    }
  }

  useEffect(() => {
    chartAttribute();
    // router.reload();
  }, [props.data.roomsCo2[0]]);

  return <Line data={ChartData} options={configs}></Line>;
}
