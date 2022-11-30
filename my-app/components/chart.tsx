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
  // console.log(props);
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
    setChartData({
      labels,
      datasets: [
        {
          label: "ROOMS 413",
          data: [
            props.data[0][0],
            props.data[0][1],
            props.data[0][2],
            props.data[0][3],
            props.data[0][4],
          ],
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        {
          label: "ROOMS 415",
          data: [
            props.data[1][0],
            props.data[1][1],
            props.data[1][2],
            props.data[1][3],
            props.data[1][4],
          ],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
        {
          label: "ROOMS 417",
          data: [
            props.data[2][0],
            props.data[2][1],
            props.data[2][2],
            props.data[2][3],
            props.data[2][4],
          ],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
        {
          label: "ROOMS 419",
          data: [
            props.data[3][0],
            props.data[3][1],
            props.data[3][2],
            props.data[3][3],
            props.data[3][4],
          ],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
        {
          label: "ROOMS 421",
          data: [
            props.data[4][0],
            props.data[4][1],
            props.data[4][2],
            props.data[4][3],
            props.data[4][4],
          ],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    });
  }

  useEffect(() => {
    chartAttribute();
    // router.reload();
  }, [props]);

  return <Line data={ChartData} options={configs}></Line>;
}
