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

export default function chartlight(props: any) {
  const lightData = props.data;
  const labels = ["0", "0", "0", "0", "0"];
  const [ChartData, setChartData] = useState<
    ChartData<"line", Number[], String>
  >({
    labels: ["0", "0", "0", "0", "0"],
    datasets: [
      {
        label: "Dataset 1",
        data: [1, 2, 3, 4, 5],
        borderColor: "rgb(000, 255, 000)",
        backgroundColor: "rgba(000, 255, 000, 0.5)",
      },
      {
        label: "Dataset 2",
        data: [3, 4, 3, 4, 3],
        borderColor: "rgb(000, 255, 000)",
        backgroundColor: "rgba(000, 255, 000, 0.5)",
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
            lightData[0] ? lightData[0].lightRoom413[0].light : "0",
            lightData[0] ? lightData[0].lightRoom413[1].light : "0",
            lightData[0] ? lightData[0].lightRoom413[2].light : "0",
            lightData[0] ? lightData[0].lightRoom413[3].light : "0",
            lightData[0] ? lightData[0].lightRoom413[4].light : "0",
          ],
          datasets: [
            {
              label: "413호 light Data",
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
          ],
        });
        break;
      // 415호 차트
      case "415":
        console.log("415");
        setChartData({
          labels: [
            lightData[0] ? lightData[0].lightRoom415[0].light : "0",
            lightData[0] ? lightData[0].lightRoom415[1].light : "0",
            lightData[0] ? lightData[0].lightRoom415[2].light : "0",
            lightData[0] ? lightData[0].lightRoom415[3].light : "0",
            lightData[0] ? lightData[0].lightRoom415[4].light : "0",
          ],
          datasets: [
            {
              label: "415호 light Data",
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
          ],
        });
        break;
      //417호 차트
      case "417":
        console.log("417");
        setChartData({
          labels: [
            lightData[0] ? lightData[0].lightRoom417[0].light : "0",
            lightData[0] ? lightData[0].lightRoom417[1].light : "0",
            lightData[0] ? lightData[0].lightRoom417[2].light : "0",
            lightData[0] ? lightData[0].lightRoom417[3].light : "0",
            lightData[0] ? lightData[0].lightRoom417[4].light : "0",
          ],
          datasets: [
            {
              label: "417호 light Data",
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
          ],
        });
        break;
      //419호 차트
      case "419":
        console.log("419");
        setChartData({
          labels: [
            lightData[0] ? lightData[0].lightRoom419[0].light : "0",
            lightData[0] ? lightData[0].lightRoom419[1].light : "0",
            lightData[0] ? lightData[0].lightRoom419[2].light : "0",
            lightData[0] ? lightData[0].lightRoom419[3].light : "0",
            lightData[0] ? lightData[0].lightRoom419[4].light : "0",
          ],
          datasets: [
            {
              label: "419호 light Data",
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
          ],
        });
        break;
      //421호 차트
      case "421":
        console.log("421");
        setChartData({
          labels: [
            lightData[0] ? lightData[0].lightRoom421[0].light : "0",
            lightData[0] ? lightData[0].lightRoom421[1].light : "0",
            lightData[0] ? lightData[0].lightRoom421[2].light : "0",
            lightData[0] ? lightData[0].lightRoom421[3].light : "0",
            lightData[0] ? lightData[0].lightRoom421[4].light : "0",
          ],
          datasets: [
            {
              label: "421호 light Data",
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
          ],
        });
        break;
      //422호 차트
      case "422":
        console.log("422");
        setChartData({
          labels: [
            lightData[0] ? lightData[0].lightRoom422[0].light : "0",
            lightData[0] ? lightData[0].lightRoom422[1].light : "0",
            lightData[0] ? lightData[0].lightRoom422[2].light : "0",
            lightData[0] ? lightData[0].lightRoom422[3].light : "0",
            lightData[0] ? lightData[0].lightRoom422[4].light : "0",
          ],
          datasets: [
            {
              label: "422호 light Data",
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
          ],
        });
        break;
      //423호 차트
      case "423":
        console.log("423");
        setChartData({
          labels: [
            lightData[0] ? lightData[0].lightRoom423[0].light : "0",
            lightData[0] ? lightData[0].lightRoom423[1].light : "0",
            lightData[0] ? lightData[0].lightRoom423[2].light : "0",
            lightData[0] ? lightData[0].lightRoom423[3].light : "0",
            lightData[0] ? lightData[0].lightRoom423[4].light : "0",
          ],
          datasets: [
            {
              label: "423호 light Data",
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
          ],
        });
        break;
      //424호 차트
      case "424":
        console.log("424");
        setChartData({
          labels: [
            lightData[0] ? lightData[0].lightRoom424[0].light : "0",
            lightData[0] ? lightData[0].lightRoom424[1].light : "0",
            lightData[0] ? lightData[0].lightRoom424[2].light : "0",
            lightData[0] ? lightData[0].lightRoom424[3].light : "0",
            lightData[0] ? lightData[0].lightRoom424[4].light : "0",
          ],
          datasets: [
            {
              label: "424호 light Data",
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
          ],
        });
        break;
      //442호 차트
      case "442":
        console.log("442");
        setChartData({
          labels: [
            lightData[0] ? lightData[0].lightRoom442[0].light : "0",
            lightData[0] ? lightData[0].lightRoom442[1].light : "0",
            lightData[0] ? lightData[0].lightRoom442[2].light : "0",
            lightData[0] ? lightData[0].lightRoom442[3].light : "0",
            lightData[0] ? lightData[0].lightRoom442[4].light : "0",
          ],
          datasets: [
            {
              label: "442호 light Data",
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
          ],
        });
        break;
      //446호 차트
      case "446":
        console.log("446");
        setChartData({
          labels: [
            lightData[0] ? lightData[0].lightRoom446[0].light : "0",
            lightData[0] ? lightData[0].lightRoom446[1].light : "0",
            lightData[0] ? lightData[0].lightRoom446[2].light : "0",
            lightData[0] ? lightData[0].lightRoom446[3].light : "0",
            lightData[0] ? lightData[0].lightRoom446[4].light : "0",
          ],
          datasets: [
            {
              label: "446호 light Data",
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
          ],
        });
        break;
      //448호 차트
      case "448":
        console.log("448");
        setChartData({
          labels: [
            lightData[0] ? lightData[0].lightRoom448[0].light : "0",
            lightData[0] ? lightData[0].lightRoom448[1].light : "0",
            lightData[0] ? lightData[0].lightRoom448[2].light : "0",
            lightData[0] ? lightData[0].lightRoom448[3].light : "0",
            lightData[0] ? lightData[0].lightRoom448[4].light : "0",
          ],
          datasets: [
            {
              label: "448호 light Data",
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
          ],
        });
        break;
      //452호 차트
      case "452":
        console.log("452");
        setChartData({
          labels: [
            lightData[0] ? lightData[0].lightRoom452[0].light : "0",
            lightData[0] ? lightData[0].lightRoom452[1].light : "0",
            lightData[0] ? lightData[0].lightRoom452[2].light : "0",
            lightData[0] ? lightData[0].lightRoom452[3].light : "0",
            lightData[0] ? lightData[0].lightRoom452[4].light : "0",
          ],
          datasets: [
            {
              label: "452호 light Data",
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
          ],
        });
        break;
      //454호 차트
      case "454":
        console.log("454");
        setChartData({
          labels: [
            lightData[0] ? lightData[0].lightRoom454[0].light : "0",
            lightData[0] ? lightData[0].lightRoom454[1].light : "0",
            lightData[0] ? lightData[0].lightRoom454[2].light : "0",
            lightData[0] ? lightData[0].lightRoom454[3].light : "0",
            lightData[0] ? lightData[0].lightRoom454[4].light : "0",
          ],
          datasets: [
            {
              label: "454호 light Data",
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
