import Line from "../components/chart";

import { useEffect, useState, useRef, MouseEventHandler } from "react";

export default function Home() {
  const [apiCo2Data, setApiCo2Data] = useState<any>([]);
  const [apiHumidityData, setApiHumidityData] = useState<any>([]);
  const [apiLightData, setApiLightData] = useState<any>([]);
  const [apiPirData, setApiPirData] = useState<any>([]);
  const [apiTemperatureData, setApiTemperatureData] = useState<any>([]);
  const roomNumer: any = ["413", "415", "417", "419", "421"];

  // let clickRoomNum;
  const [clickRoomNum, setclickRoomNum] = useState<any>("");

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

  const clickE = (e: MouseEventHandler<HTMLButtonElement>) => {
    return () => {
      setclickRoomNum(e);
      // console.log(e);
    };
  };

  const fetchSensorData = () => {
    fetch(`/api/sensor`)
      .then((res) => res.json())
      .then((json) => {
        setApiCo2Data(json.co2Data);
        setApiHumidityData(json.humidityData);
        setApiLightData(json.lightData);
        setApiPirData(json.pirData);
        setApiTemperatureData(json.temperatureData);
      });
  };

  useInterval(() => {
    fetchSensorData();
    clickE;
  }, 5000);

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

  // 호수 별로 co2데이터를 넣음
  // 중첩삼항연산자를 사용하여 넣은 뒤 배열크기가 5이상이면 0번째 index를 삭제하여 배열생성
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

  // 호수 별로 Humidity데이터를 넣음
  // 중첩삼항연산자를 사용하여 넣은 뒤 배열크기가 5이상이면 0번째 index를 삭제하여 배열생성
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

  // 호수 별로 Light데이터를 넣음
  // 중첩삼항연산자를 사용하여 넣은 뒤 배열크기가 5이상이면 0번째 index를 삭제하여 배열생성
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

  // 호수 별로 Pir데이터를 넣음
  // 중첩삼항연산자를 사용하여 넣은 뒤 배열크기가 5이상이면 0번째 index를 삭제하여 배열생성
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

  // 호수 별로 Temperature데이터를 넣음
  // 중첩삼항연산자를 사용하여 넣은 뒤 배열크기가 5이상이면 0번째 index를 삭제하여 배열생성
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
  let allSensorData = {
    roomsCo2,
    roomsHumidity,
    roomsLight,
    roomsPir,
    roomsTemperature,
  };
  // console.log(allSensorData);

  return (
    <div className="bg-red-200 flex justify-center  ">
      <div className="bg-blue-200 w-[800px] h-[800px] flex items-center">
        {clickRoomNum ? (
          // (allSensorData == undefined) ?
          <Line
            // wait={6000}
            data={allSensorData}
            datasetsIdkey={clickRoomNum}
          ></Line>
        ) : (
          <div>방선택ㄱㄱ</div>
        )}
      </div>
      <div className="bg-purple-200 w-[800px] h-[800px]">
        {roomNumer.map((room: any) => (
          <button
            className="flex flex-col items-center p-2 bg-gray-300 w-[100px] text-lg hover:bg-green-300"
            onClick={clickE(room)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clip-rule="evenodd"
              />
            </svg>
            {room} 호
          </button>
        ))}
      </div>
    </div>
  );
}
