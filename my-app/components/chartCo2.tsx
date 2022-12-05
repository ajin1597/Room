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

export default function chartCo2(props: any) {
  const co2Data = props.data;
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
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
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
        text: "Co2 Sensor Datas",
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
            co2Data[0] ? co2Data[0].co2Room413[0].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room413[1].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room413[2].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room413[3].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room413[4].co2 : "0",
          ],
          datasets: [
            {
              label: "413호 co2 Data",
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
          ],
        });
        break;
      // 415호 차트
      case "415":
        console.log("415");
        setChartData({
          labels: [
            co2Data[0] ? co2Data[0].co2Room415[0].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room415[1].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room415[2].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room415[3].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room415[4].co2 : "0",
          ],
          datasets: [
            {
              label: "415호 co2 Data",
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
          ],
        });
        break;
      //417호 차트
      case "417":
        console.log("417");
        setChartData({
          labels: [
            co2Data[0] ? co2Data[0].co2Room417[0].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room417[1].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room417[2].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room417[3].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room417[4].co2 : "0",
          ],
          datasets: [
            {
              label: "417호 co2 Data",
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
          ],
        });
        break;
      //419호 차트
      case "419":
        console.log("419");
        setChartData({
          labels: [
            co2Data[0] ? co2Data[0].co2Room419[0].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room419[1].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room419[2].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room419[3].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room419[4].co2 : "0",
          ],
          datasets: [
            {
              label: "419호 co2 Data",
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
          ],
        });
        break;
      //421호 차트
      case "421":
        console.log("421");
        setChartData({
          labels: [
            co2Data[0] ? co2Data[0].co2Room421[0].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room421[1].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room421[2].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room421[3].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room421[4].co2 : "0",
          ],
          datasets: [
            {
              label: "421호 co2 Data",
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
          ],
        });
        break;
      //422호 차트
      case "422":
        console.log("422");
        setChartData({
          labels: [
            co2Data[0] ? co2Data[0].co2Room422[0].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room422[1].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room422[2].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room422[3].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room422[4].co2 : "0",
          ],
          datasets: [
            {
              label: "422호 co2 Data",
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
          ],
        });
        break;
      //423호 차트
      case "423":
        console.log("423");
        setChartData({
          labels: [
            co2Data[0] ? co2Data[0].co2Room423[0].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room423[1].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room423[2].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room423[3].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room423[4].co2 : "0",
          ],
          datasets: [
            {
              label: "423호 co2 Data",
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
          ],
        });
        break;
      //424호 차트
      case "424":
        console.log("424");
        setChartData({
          labels: [
            co2Data[0] ? co2Data[0].co2Room424[0].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room424[1].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room424[2].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room424[3].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room424[4].co2 : "0",
          ],
          datasets: [
            {
              label: "424호 co2 Data",
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
          ],
        });
        break;
      //442호 차트
      case "442":
        console.log("442");
        setChartData({
          labels: [
            co2Data[0] ? co2Data[0].co2Room442[0].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room442[1].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room442[2].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room442[3].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room442[4].co2 : "0",
          ],
          datasets: [
            {
              label: "442호 co2 Data",
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
          ],
        });
        break;
      //446호 차트
      case "446":
        console.log("446");
        setChartData({
          labels: [
            co2Data[0] ? co2Data[0].co2Room446[0].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room446[1].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room446[2].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room446[3].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room446[4].co2 : "0",
          ],
          datasets: [
            {
              label: "446호 co2 Data",
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
          ],
        });
        break;
      //448호 차트
      case "448":
        console.log("448");
        setChartData({
          labels: [
            co2Data[0] ? co2Data[0].co2Room448[0].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room448[1].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room448[2].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room448[3].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room448[4].co2 : "0",
          ],
          datasets: [
            {
              label: "448호 co2 Data",
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
          ],
        });
        break;
      //452호 차트
      case "452":
        console.log("452");
        setChartData({
          labels: [
            co2Data[0] ? co2Data[0].co2Room452[0].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room452[1].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room452[2].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room452[3].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room452[4].co2 : "0",
          ],
          datasets: [
            {
              label: "452호 co2 Data",
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
          ],
        });
        break;
      //454호 차트
      case "454":
        console.log("454");
        setChartData({
          labels: [
            co2Data[0] ? co2Data[0].co2Room454[0].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room454[1].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room454[2].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room454[3].co2 : "0",
            co2Data[0] ? co2Data[0].co2Room454[4].co2 : "0",
          ],
          datasets: [
            {
              label: "454호 co2 Data",
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
          ],
        });
        break;
    }
  }

  useEffect(() => {
    chartAttribute();
    // router.reload();
  }, [props]);

  ChartJS.defaults.color = "#ffffff";
  // ######색까지 바꿈
  return props && <Line data={ChartData} options={configs}></Line>;
}
