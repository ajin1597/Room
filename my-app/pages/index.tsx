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
        setApiPirData(json.pirData);
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

  let huRoom413: any = [];
  let huRoom415: any = [];
  let huRoom417: any = [];
  let huRoom419: any = [];
  let huRoom421: any = [];

  let lightRoom413: any = [];
  let lightRoom415: any = [];
  let lightRoom417: any = [];
  let lightRoom419: any = [];
  let lightRoom421: any = [];

  let pirRoom413: any = [];
  let pirRoom415: any = [];
  let pirRoom417: any = [];
  let pirRoom419: any = [];
  let pirRoom421: any = [];

  let temRoom413: any = [];
  let temRoom415: any = [];
  let temRoom417: any = [];
  let temRoom419: any = [];
  let temRoom421: any = [];

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

  const roomsHumidity = apiHumidityData.map((hu: any, idx: any) => {
    hu.roomNum == "413"
      ? huRoom413.push(hu)
      : hu.roomNum == "415"
      ? huRoom415.push(hu)
      : hu.roomNum == "417"
      ? huRoom417.push(hu)
      : hu.roomNum == "419"
      ? huRoom419.push(hu)
      : hu.roomNum == "421"
      ? huRoom421.push(hu)
      : null;
    if (huRoom413.length > 5) {
      huRoom413.splice(0, 1);
    }
    if (huRoom415.length > 5) {
      huRoom415.splice(0, 1);
    }
    if (huRoom417.length > 5) {
      huRoom417.splice(0, 1);
    }
    if (huRoom419.length > 5) {
      huRoom419.splice(0, 1);
    }
    if (huRoom421.length > 5) {
      huRoom421.splice(0, 1);
    }
    let allhuData = {
      huRoom413,
      huRoom415,
      huRoom417,
      huRoom419,
      huRoom421,
    };
    return allhuData;
  });
  if (roomsHumidity.length > 1) {
    roomsHumidity.splice(1);
  }

  const roomsLight = apiLightData.map((light: any, idx: any) => {
    light.roomNum == "413"
      ? lightRoom413.push(light)
      : light.roomNum == "415"
      ? lightRoom415.push(light)
      : light.roomNum == "417"
      ? lightRoom417.push(light)
      : light.roomNum == "419"
      ? lightRoom419.push(light)
      : light.roomNum == "421"
      ? lightRoom421.push(light)
      : null;
    if (lightRoom413.length > 5) {
      lightRoom413.splice(0, 1);
    }
    if (lightRoom415.length > 5) {
      lightRoom415.splice(0, 1);
    }
    if (lightRoom417.length > 5) {
      lightRoom417.splice(0, 1);
    }
    if (lightRoom419.length > 5) {
      lightRoom419.splice(0, 1);
    }
    if (lightRoom421.length > 5) {
      lightRoom421.splice(0, 1);
    }
    let alllightData = {
      lightRoom413,
      lightRoom415,
      lightRoom417,
      lightRoom419,
      lightRoom421,
    };
    return alllightData;
  });
  if (roomsLight.length > 1) {
    roomsLight.splice(1);
  }

  const roomsPir = apiPirData.map((pir: any, idx: any) => {
    pir.roomNum == "413"
      ? pirRoom413.push(pir)
      : pir.roomNum == "415"
      ? pirRoom415.push(pir)
      : pir.roomNum == "417"
      ? pirRoom417.push(pir)
      : pir.roomNum == "419"
      ? pirRoom419.push(pir)
      : pir.roomNum == "421"
      ? pirRoom421.push(pir)
      : null;
    if (pirRoom413.length > 5) {
      pirRoom413.splice(0, 1);
    }
    if (pirRoom415.length > 5) {
      pirRoom415.splice(0, 1);
    }
    if (pirRoom417.length > 5) {
      pirRoom417.splice(0, 1);
    }
    if (pirRoom419.length > 5) {
      pirRoom419.splice(0, 1);
    }
    if (pirRoom421.length > 5) {
      pirRoom421.splice(0, 1);
    }
    let allPirData = {
      pirRoom413,
      pirRoom415,
      pirRoom417,
      pirRoom419,
      pirRoom421,
    };
    return allPirData;
  });
  if (roomsPir.length > 1) {
    roomsPir.splice(1);
  }

  const roomsTemperature = apiTemperatureData.map((tem: any, idx: any) => {
    tem.roomNum == "413"
      ? temRoom413.push(tem)
      : tem.roomNum == "415"
      ? temRoom415.push(tem)
      : tem.roomNum == "417"
      ? temRoom417.push(tem)
      : tem.roomNum == "419"
      ? temRoom419.push(tem)
      : tem.roomNum == "421"
      ? temRoom421.push(tem)
      : null;
    if (temRoom413.length > 5) {
      temRoom413.splice(0, 1);
    }
    if (temRoom415.length > 5) {
      temRoom415.splice(0, 1);
    }
    if (temRoom417.length > 5) {
      temRoom417.splice(0, 1);
    }
    if (temRoom419.length > 5) {
      temRoom419.splice(0, 1);
    }
    if (temRoom421.length > 5) {
      temRoom421.splice(0, 1);
    }
    let allTemData = {
      temRoom413,
      temRoom415,
      temRoom417,
      temRoom419,
      temRoom421,
    };
    return allTemData;
  });
  if (roomsTemperature.length > 1) {
    roomsTemperature.splice(1);
  }

  console.log(roomsTemperature);

  return (
    <div className="bg-red-200 flex justify-center  ">
      <div className="bg-blue-200 w-[800px] h-[800px] flex items-center">
        {/* {co2.map((co2: string, index: number) => ( */}
        {/* <Line data={temp}></Line> */}
        {/* <Line data={temp}></Line> */}
        {/* ))} */}
      </div>
      <div className="bg-purple-200 w-[800px] h-[800px]"></div>
    </div>
  );
}
