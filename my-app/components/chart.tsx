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
  console.log(typeof props.datasetsIdkey);
  // console.log(props.data.roomsCo2[0] ? props.data.roomsCo2[0] : 0);
  console.log(props);

  const co2Data = props.data.roomsCo2;
  const humidityData = props.data.roomsHumidity;
  const lightData = props.data.roomsLight;
  const pirData = props.data.roomsPir;
  const temperatureData = props.data.roomsTemperature;
  // #######일어나서 컴포넌트 딜레이걸기
  // console.log(co2Data[0] ? co2Data[0].co2Room421[0].time : "0");
  // console.log(co2Data[0] ? co2Data[0].co2Room419[0].time : "0");
  // const a = props.data.roomsCo2[0];
  // console.log(
  //   props.data.roomsCo2[0] ? Number(co2Data[0].co2Room413[0].co2) : 0
  // );

  // console.log(co2Data[0] ? Number(co2Data[0].co2Room413[0].co2) : 0);
  // console.log(
  //   humidityData[0] ? Number(humidityData[0].humidityRoom413[0].humidity) : 0
  // );
  // console.log(
  //   lightData[0] ? Number(lightData[0].lightRoom413[0].lightData) : 0
  // );
  // setTimeout(() => {
  //   props.data.roomsCo2[0] === undefined;
  // }, 3000);
  // if (undefined == a.co2Room413) {
  //   a.co2Room413 == 0;
  // }
  // console.log(props.data[0]);
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
    labels: ["co2", "humidity", "light", "pir", "temperature"],
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
      // 413호 차트
      case "413":
        console.log("413");
        setChartData({
          labels: [
            co2Data[0] ? co2Data[0].co2Room413[0].time : "0",
            co2Data[0] ? co2Data[0].co2Room413[1].time : "0",
            co2Data[0] ? co2Data[0].co2Room413[2].time : "0",
            co2Data[0] ? co2Data[0].co2Room413[3].time : "0",
            co2Data[0] ? co2Data[0].co2Room413[4].time : "0",
          ],
          datasets: [
            {
              label: "ROOMS 413 co2 Data",
              data: [
                co2Data[0] ? Number(co2Data[0].co2Room413[0].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room413[1].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room413[2].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room413[3].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room413[4].co2) : 0,
              ],
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
              label: "ROOMS 413 humidity Data",
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
            {
              label: "ROOMS 413 Light Data",
              data: [
                lightData[0] ? Number(lightData[0].lightRoom413[0].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom413[1].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom413[2].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom413[3].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom413[4].light) : 0,
              ],
              borderColor: "rgb(000, 255, 000)",
              backgroundColor: "rgba(000, 255, 000, 0.5)",
            },
            {
              label: "ROOMS 413 Pir Data",
              data: [
                pirData[0] ? Number(pirData[0].pirRoom413[0].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom413[1].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom413[2].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom413[3].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom413[4].pir) : 0,
              ],
              borderColor: "rgb(255, 153, 000)",
              backgroundColor: "rgba(255, 153, 000, 0.5)",
            },
            {
              label: "ROOMS 413 Temperature Data",
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
            co2Data[0] ? co2Data[0].co2Room415[0].time : "0",
            co2Data[0] ? co2Data[0].co2Room415[1].time : "0",
            co2Data[0] ? co2Data[0].co2Room415[2].time : "0",
            co2Data[0] ? co2Data[0].co2Room415[3].time : "0",
            co2Data[0] ? co2Data[0].co2Room415[4].time : "0",
          ],
          datasets: [
            {
              label: "ROOMS 415 co2 Data",
              data: [
                co2Data[0] ? Number(co2Data[0].co2Room415[0].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room415[1].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room415[2].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room415[3].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room415[4].co2) : 0,
              ],
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
              label: "ROOMS 415 humidity Data",
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
            {
              label: "ROOMS 415 Light Data",
              data: [
                lightData[0] ? Number(lightData[0].lightRoom415[0].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom415[1].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom415[2].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom415[3].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom415[4].light) : 0,
              ],
              borderColor: "rgb(000, 255, 000)",
              backgroundColor: "rgba(000, 255, 000, 0.5)",
            },
            {
              label: "ROOMS 415 Pir Data",
              data: [
                pirData[0] ? Number(pirData[0].pirRoom415[0].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom415[1].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom415[2].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom415[3].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom415[4].pir) : 0,
              ],
              borderColor: "rgb(255, 153, 000)",
              backgroundColor: "rgba(255, 153, 000, 0.5)",
            },
            {
              label: "ROOMS 415 Temperature Data",
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
            co2Data[0] ? co2Data[0].co2Room417[0].time : "0",
            co2Data[0] ? co2Data[0].co2Room417[1].time : "0",
            co2Data[0] ? co2Data[0].co2Room417[2].time : "0",
            co2Data[0] ? co2Data[0].co2Room417[3].time : "0",
            co2Data[0] ? co2Data[0].co2Room417[4].time : "0",
          ],
          datasets: [
            {
              label: "ROOMS 417 co2 Data",
              data: [
                co2Data[0] ? Number(co2Data[0].co2Room417[0].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room417[1].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room417[2].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room417[3].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room417[4].co2) : 0,
              ],
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
              label: "ROOMS 417 humidity Data",
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
            {
              label: "ROOMS 417 Light Data",
              data: [
                lightData[0] ? Number(lightData[0].lightRoom417[0].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom417[1].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom417[2].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom417[3].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom417[4].light) : 0,
              ],
              borderColor: "rgb(000, 255, 000)",
              backgroundColor: "rgba(000, 255, 000, 0.5)",
            },
            {
              label: "ROOMS 417 Pir Data",
              data: [
                pirData[0] ? Number(pirData[0].pirRoom417[0].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom417[1].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom417[2].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom417[3].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom417[4].pir) : 0,
              ],
              borderColor: "rgb(255, 153, 000)",
              backgroundColor: "rgba(255, 153, 000, 0.5)",
            },
            {
              label: "ROOMS 417 Temperature Data",
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
            co2Data[0] ? co2Data[0].co2Room419[0].time : "0",
            co2Data[0] ? co2Data[0].co2Room419[1].time : "0",
            co2Data[0] ? co2Data[0].co2Room419[2].time : "0",
            co2Data[0] ? co2Data[0].co2Room419[3].time : "0",
            co2Data[0] ? co2Data[0].co2Room419[4].time : "0",
          ],
          datasets: [
            {
              label: "ROOMS 419 co2 Data",
              data: [
                co2Data[0] ? Number(co2Data[0].co2Room419[0].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room419[1].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room419[2].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room419[3].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room419[4].co2) : 0,
              ],
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
              label: "ROOMS 419 humidity Data",
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
            {
              label: "ROOMS 419 Light Data",
              data: [
                lightData[0] ? Number(lightData[0].lightRoom419[0].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom419[1].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom419[2].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom419[3].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom419[4].light) : 0,
              ],
              borderColor: "rgb(000, 255, 000)",
              backgroundColor: "rgba(000, 255, 000, 0.5)",
            },
            {
              label: "ROOMS 419 Pir Data",
              data: [
                pirData[0] ? Number(pirData[0].pirRoom419[0].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom419[1].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom419[2].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom419[3].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom419[4].pir) : 0,
              ],
              borderColor: "rgb(255, 153, 000)",
              backgroundColor: "rgba(255, 153, 000, 0.5)",
            },
            {
              label: "ROOMS 419 Temperature Data",
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
            co2Data[0] ? co2Data[0].co2Room421[0].time : "0",
            co2Data[0] ? co2Data[0].co2Room421[1].time : "0",
            co2Data[0] ? co2Data[0].co2Room421[2].time : "0",
            co2Data[0] ? co2Data[0].co2Room421[3].time : "0",
            co2Data[0] ? co2Data[0].co2Room421[4].time : "0",
          ],
          datasets: [
            {
              label: "ROOMS 421 co2 Data",
              data: [
                co2Data[0] ? Number(co2Data[0].co2Room421[0].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room421[1].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room421[2].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room421[3].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room421[4].co2) : 0,
              ],
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
              label: "ROOMS 421 humidity Data",
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
            {
              label: "ROOMS 421 Light Data",
              data: [
                lightData[0] ? Number(lightData[0].lightRoom421[0].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom421[1].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom421[2].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom421[3].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom421[4].light) : 0,
              ],
              borderColor: "rgb(000, 255, 000)",
              backgroundColor: "rgba(000, 255, 000, 0.5)",
            },
            {
              label: "ROOMS 421 Pir Data",
              data: [
                pirData[0] ? Number(pirData[0].pirRoom421[0].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom421[1].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom421[2].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom421[3].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom421[4].pir) : 0,
              ],
              borderColor: "rgb(255, 153, 000)",
              backgroundColor: "rgba(255, 153, 000, 0.5)",
            },
            {
              label: "ROOMS 421 Temperature Data",
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
            co2Data[0] ? co2Data[0].co2Room422[0].time : "0",
            co2Data[0] ? co2Data[0].co2Room422[1].time : "0",
            co2Data[0] ? co2Data[0].co2Room422[2].time : "0",
            co2Data[0] ? co2Data[0].co2Room422[3].time : "0",
            co2Data[0] ? co2Data[0].co2Room422[4].time : "0",
          ],
          datasets: [
            {
              label: "ROOMS 422 co2 Data",
              data: [
                co2Data[0] ? Number(co2Data[0].co2Room422[0].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room422[1].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room422[2].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room422[3].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room422[4].co2) : 0,
              ],
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
              label: "ROOMS 422 humidity Data",
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
            {
              label: "ROOMS 422 Light Data",
              data: [
                lightData[0] ? Number(lightData[0].lightRoom422[0].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom422[1].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom422[2].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom422[3].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom422[4].light) : 0,
              ],
              borderColor: "rgb(000, 255, 000)",
              backgroundColor: "rgba(000, 255, 000, 0.5)",
            },
            {
              label: "ROOMS 422 Pir Data",
              data: [
                pirData[0] ? Number(pirData[0].pirRoom422[0].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom422[1].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom422[2].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom422[3].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom422[4].pir) : 0,
              ],
              borderColor: "rgb(255, 153, 000)",
              backgroundColor: "rgba(255, 153, 000, 0.5)",
            },
            {
              label: "ROOMS 422 Temperature Data",
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
            co2Data[0] ? co2Data[0].co2Room423[0].time : "0",
            co2Data[0] ? co2Data[0].co2Room423[1].time : "0",
            co2Data[0] ? co2Data[0].co2Room423[2].time : "0",
            co2Data[0] ? co2Data[0].co2Room423[3].time : "0",
            co2Data[0] ? co2Data[0].co2Room423[4].time : "0",
          ],
          datasets: [
            {
              label: "ROOMS 423 co2 Data",
              data: [
                co2Data[0] ? Number(co2Data[0].co2Room423[0].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room423[1].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room423[2].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room423[3].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room423[4].co2) : 0,
              ],
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
              label: "ROOMS 423 humidity Data",
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
            {
              label: "ROOMS 423 Light Data",
              data: [
                lightData[0] ? Number(lightData[0].lightRoom423[0].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom423[1].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom423[2].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom423[3].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom423[4].light) : 0,
              ],
              borderColor: "rgb(000, 255, 000)",
              backgroundColor: "rgba(000, 255, 000, 0.5)",
            },
            {
              label: "ROOMS 423 Pir Data",
              data: [
                pirData[0] ? Number(pirData[0].pirRoom423[0].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom423[1].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom423[2].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom423[3].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom423[4].pir) : 0,
              ],
              borderColor: "rgb(255, 153, 000)",
              backgroundColor: "rgba(255, 153, 000, 0.5)",
            },
            {
              label: "ROOMS 423 Temperature Data",
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
            co2Data[0] ? co2Data[0].co2Room424[0].time : "0",
            co2Data[0] ? co2Data[0].co2Room424[1].time : "0",
            co2Data[0] ? co2Data[0].co2Room424[2].time : "0",
            co2Data[0] ? co2Data[0].co2Room424[3].time : "0",
            co2Data[0] ? co2Data[0].co2Room424[4].time : "0",
          ],
          datasets: [
            {
              label: "ROOMS 424 co2 Data",
              data: [
                co2Data[0] ? Number(co2Data[0].co2Room424[0].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room424[1].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room424[2].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room424[3].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room424[4].co2) : 0,
              ],
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
              label: "ROOMS 424 humidity Data",
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
            {
              label: "ROOMS 424 Light Data",
              data: [
                lightData[0] ? Number(lightData[0].lightRoom424[0].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom424[1].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom424[2].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom424[3].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom424[4].light) : 0,
              ],
              borderColor: "rgb(000, 255, 000)",
              backgroundColor: "rgba(000, 255, 000, 0.5)",
            },
            {
              label: "ROOMS 424 Pir Data",
              data: [
                pirData[0] ? Number(pirData[0].pirRoom424[0].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom424[1].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom424[2].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom424[3].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom424[4].pir) : 0,
              ],
              borderColor: "rgb(255, 153, 000)",
              backgroundColor: "rgba(255, 153, 000, 0.5)",
            },
            {
              label: "ROOMS 424 Temperature Data",
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
            co2Data[0] ? co2Data[0].co2Room442[0].time : "0",
            co2Data[0] ? co2Data[0].co2Room442[1].time : "0",
            co2Data[0] ? co2Data[0].co2Room442[2].time : "0",
            co2Data[0] ? co2Data[0].co2Room442[3].time : "0",
            co2Data[0] ? co2Data[0].co2Room442[4].time : "0",
          ],
          datasets: [
            {
              label: "ROOMS 442 co2 Data",
              data: [
                co2Data[0] ? Number(co2Data[0].co2Room442[0].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room442[1].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room442[2].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room442[3].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room442[4].co2) : 0,
              ],
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
              label: "ROOMS 442 humidity Data",
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
            {
              label: "ROOMS 442 Light Data",
              data: [
                lightData[0] ? Number(lightData[0].lightRoom442[0].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom442[1].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom442[2].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom442[3].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom442[4].light) : 0,
              ],
              borderColor: "rgb(000, 255, 000)",
              backgroundColor: "rgba(000, 255, 000, 0.5)",
            },
            {
              label: "ROOMS 442 Pir Data",
              data: [
                pirData[0] ? Number(pirData[0].pirRoom442[0].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom442[1].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom442[2].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom442[3].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom442[4].pir) : 0,
              ],
              borderColor: "rgb(255, 153, 000)",
              backgroundColor: "rgba(255, 153, 000, 0.5)",
            },
            {
              label: "ROOMS 442 Temperature Data",
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
            co2Data[0] ? co2Data[0].co2Room446[0].time : "0",
            co2Data[0] ? co2Data[0].co2Room446[1].time : "0",
            co2Data[0] ? co2Data[0].co2Room446[2].time : "0",
            co2Data[0] ? co2Data[0].co2Room446[3].time : "0",
            co2Data[0] ? co2Data[0].co2Room446[4].time : "0",
          ],
          datasets: [
            {
              label: "ROOMS 446 co2 Data",
              data: [
                co2Data[0] ? Number(co2Data[0].co2Room446[0].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room446[1].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room446[2].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room446[3].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room446[4].co2) : 0,
              ],
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
              label: "ROOMS 446 humidity Data",
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
            {
              label: "ROOMS 446 Light Data",
              data: [
                lightData[0] ? Number(lightData[0].lightRoom446[0].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom446[1].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom446[2].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom446[3].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom446[4].light) : 0,
              ],
              borderColor: "rgb(000, 255, 000)",
              backgroundColor: "rgba(000, 255, 000, 0.5)",
            },
            {
              label: "ROOMS 446 Pir Data",
              data: [
                pirData[0] ? Number(pirData[0].pirRoom446[0].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom446[1].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom446[2].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom446[3].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom446[4].pir) : 0,
              ],
              borderColor: "rgb(255, 153, 000)",
              backgroundColor: "rgba(255, 153, 000, 0.5)",
            },
            {
              label: "ROOMS 446 Temperature Data",
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
            co2Data[0] ? co2Data[0].co2Room448[0].time : "0",
            co2Data[0] ? co2Data[0].co2Room448[1].time : "0",
            co2Data[0] ? co2Data[0].co2Room448[2].time : "0",
            co2Data[0] ? co2Data[0].co2Room448[3].time : "0",
            co2Data[0] ? co2Data[0].co2Room448[4].time : "0",
          ],
          datasets: [
            {
              label: "ROOMS 448 co2 Data",
              data: [
                co2Data[0] ? Number(co2Data[0].co2Room448[0].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room448[1].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room448[2].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room448[3].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room448[4].co2) : 0,
              ],
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
              label: "ROOMS 448 humidity Data",
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
            {
              label: "ROOMS 448 Light Data",
              data: [
                lightData[0] ? Number(lightData[0].lightRoom448[0].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom448[1].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom448[2].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom448[3].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom448[4].light) : 0,
              ],
              borderColor: "rgb(000, 255, 000)",
              backgroundColor: "rgba(000, 255, 000, 0.5)",
            },
            {
              label: "ROOMS 448 Pir Data",
              data: [
                pirData[0] ? Number(pirData[0].pirRoom448[0].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom448[1].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom448[2].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom448[3].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom448[4].pir) : 0,
              ],
              borderColor: "rgb(255, 153, 000)",
              backgroundColor: "rgba(255, 153, 000, 0.5)",
            },
            {
              label: "ROOMS 448 Temperature Data",
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
            co2Data[0] ? co2Data[0].co2Room452[0].time : "0",
            co2Data[0] ? co2Data[0].co2Room452[1].time : "0",
            co2Data[0] ? co2Data[0].co2Room452[2].time : "0",
            co2Data[0] ? co2Data[0].co2Room452[3].time : "0",
            co2Data[0] ? co2Data[0].co2Room452[4].time : "0",
          ],
          datasets: [
            {
              label: "ROOMS 452 co2 Data",
              data: [
                co2Data[0] ? Number(co2Data[0].co2Room452[0].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room452[1].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room452[2].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room452[3].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room452[4].co2) : 0,
              ],
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
              label: "ROOMS 452 humidity Data",
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
            {
              label: "ROOMS 452 Light Data",
              data: [
                lightData[0] ? Number(lightData[0].lightRoom452[0].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom452[1].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom452[2].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom452[3].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom452[4].light) : 0,
              ],
              borderColor: "rgb(000, 255, 000)",
              backgroundColor: "rgba(000, 255, 000, 0.5)",
            },
            {
              label: "ROOMS 452 Pir Data",
              data: [
                pirData[0] ? Number(pirData[0].pirRoom452[0].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom452[1].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom452[2].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom452[3].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom452[4].pir) : 0,
              ],
              borderColor: "rgb(255, 153, 000)",
              backgroundColor: "rgba(255, 153, 000, 0.5)",
            },
            {
              label: "ROOMS 452 Temperature Data",
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
            co2Data[0] ? co2Data[0].co2Room454[0].time : "0",
            co2Data[0] ? co2Data[0].co2Room454[1].time : "0",
            co2Data[0] ? co2Data[0].co2Room454[2].time : "0",
            co2Data[0] ? co2Data[0].co2Room454[3].time : "0",
            co2Data[0] ? co2Data[0].co2Room454[4].time : "0",
          ],
          datasets: [
            {
              label: "ROOMS 454 co2 Data",
              data: [
                co2Data[0] ? Number(co2Data[0].co2Room454[0].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room454[1].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room454[2].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room454[3].co2) : 0,
                co2Data[0] ? Number(co2Data[0].co2Room454[4].co2) : 0,
              ],
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
              label: "ROOMS 454 humidity Data",
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
            {
              label: "ROOMS 454 Light Data",
              data: [
                lightData[0] ? Number(lightData[0].lightRoom454[0].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom454[1].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom454[2].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom454[3].light) : 0,
                lightData[0] ? Number(lightData[0].lightRoom454[4].light) : 0,
              ],
              borderColor: "rgb(000, 255, 000)",
              backgroundColor: "rgba(000, 255, 000, 0.5)",
            },
            {
              label: "ROOMS 454 Pir Data",
              data: [
                pirData[0] ? Number(pirData[0].pirRoom454[0].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom454[1].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom454[2].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom454[3].pir) : 0,
                pirData[0] ? Number(pirData[0].pirRoom454[4].pir) : 0,
              ],
              borderColor: "rgb(255, 153, 000)",
              backgroundColor: "rgba(255, 153, 000, 0.5)",
            },
            {
              label: "ROOMS 454 Temperature Data",
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
