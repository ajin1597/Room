import Line from "../components/chart";

import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [apiCo2Data, setApiCo2Data] = useState<any>([]);
  const [apiHumidityData, setApiHumidityData] = useState<any>([]);
  const [apiLightData, setApiLightData] = useState<any>([]);
  const [apiPirData, setApiPirData] = useState<any>([]);
  const [apiTemperatureData, setApiTemperatureData] = useState<any>([]);

  function useInterval(callback: any, delay: any) {
    const savedCallback: any = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  const a = () => {
    fetch(`/api/sensor`)
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        // console.log(json.co2Data);

        setApiCo2Data(json.co2Data);
        setApiHumidityData(json.humidityData);
        setApiLightData(json.lightData);
        setApiPirData(json.pitData);
        setApiTemperatureData(json.temperatureData);
      });
  };

  useInterval(() => {
    a();
  }, 5000);
  // useEffect(() => {
  // a();
  // setTimeout(a, 5000);
  // fetch(`/api/sensor`)
  //   .then((res) => res.json())
  //   .then((json) => {
  //     console.log(json);
  //     console.log(json.co2Data);

  //     setApiCo2Data(json.co2Data);
  //     setApiHumidityData(json.humidityData);
  //     setApiLightData(json.lightData);
  //     setApiPirData(json.pitData);
  //     setApiTemperatureData(json.temperatureData);
  //   });
  // }, []);

  // console.log(apiCo2Data[0].roomNum == "415" ? "성공" : "실패");

  // console.log(
  //   apiCo2Data[0].roomNum == "417"
  //     ? "성공"
  //     : apiCo2Data[0].roomNum == "419"
  //     ? "성공"
  //     : apiCo2Data[0].roomNum == "421"
  //     ? "성공"
  //     : apiCo2Data[0].roomNum == "415"
  //     ? "123313123213"
  //     : "실패"
  // );

  // console.log(apiCo2Data[0].rommNum);
  // console.log(417 ? apiCo2Data[0].roomNum : "null");

  let co2Room413: any = [];
  let co2Room415: any = [];
  let co2Room417: any = [];
  let co2Room419: any = [];
  let co2Room421: any = [];

  const roomsCo2 = apiCo2Data.map((co2: any, idx: any) => {
    co2.roomNum == "413"
      ? co2Room413.push(co2)
      : co2.roomNum == "415"
      ? co2Room415.push(co2)
      : co2.roomNum == "417"
      ? co2Room417.push(co2)
      : co2.roomNum == "419"
      ? co2Room419.push(co2)
      : co2.roomNum == "421"
      ? co2Room421.push(co2)
      : null;
    // console.log(co2Room413.length);
    if (co2Room413.length > 5) {
      co2Room413.splice(0, 1);
    }
    if (co2Room415.length > 5) {
      co2Room415.splice(0, 1);
    }
    if (co2Room417.length > 5) {
      co2Room417.splice(0, 1);
    }
    if (co2Room419.length > 5) {
      co2Room419.splice(0, 1);
    }
    if (co2Room421.length > 5) {
      co2Room421.splice(0, 1);
    }
    let allCo2Data = {
      co2Room413,
      co2Room415,
      co2Room417,
      co2Room419,
      co2Room421,
    };
    return allCo2Data;
  });
  if (roomsCo2.length > 1) {
    roomsCo2.splice(1);
  }
  console.log(roomsCo2);

  return (
    <div className="bg-red-200 flex justify-center  ">
      <div className="bg-blue-200 w-[800px] h-[800px] flex items-center">
        {/* {co2.map((co2: string, index: number) => ( */}
        {/* <Line data={temp}></Line> */}
        {/* <Line data={temp}></Line> */}
        {/* ))} */}
      </div>
      {/* <div className="bg-purple-200 w-[800px] h-[800px]"></div> */}
    </div>
  );
}
