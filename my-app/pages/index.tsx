import Line from "../components/chartCo2";
import Line1 from "../components/chartHumidity";
import Line2 from "../components/chartLight";
import Line3 from "../components/chartTemperature";

import { useEffect, useState, useRef, MouseEventHandler } from "react";

export default function Home() {
  const [apiCo2Data, setApiCo2Data] = useState<any>([]);
  const [apiHumidityData, setApiHumidityData] = useState<any>([]);
  const [apiLightData, setApiLightData] = useState<any>([]);
  const [apiPirData, setApiPirData] = useState<any>([]);
  const [apiTemperatureData, setApiTemperatureData] = useState<any>([]);
  const roomNumer: any = [
    "413",
    "415",
    "417",
    "419",
    "421",
    "422",
    "423",
    "424",
    "442",
    "446",
    "448",
    "452",
    "454",
  ];

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
  }, 7000);

  let co2Room413: any = [];
  let co2Room415: any = [];
  let co2Room417: any = [];
  let co2Room419: any = [];
  let co2Room421: any = [];
  let co2Room422: any = [];
  let co2Room423: any = [];
  let co2Room424: any = [];
  let co2Room442: any = [];
  let co2Room446: any = [];
  let co2Room448: any = [];
  let co2Room452: any = [];
  let co2Room454: any = [];

  let huRoom413: any = [];
  let huRoom415: any = [];
  let huRoom417: any = [];
  let huRoom419: any = [];
  let huRoom421: any = [];
  let huRoom422: any = [];
  let huRoom423: any = [];
  let huRoom424: any = [];
  let huRoom442: any = [];
  let huRoom446: any = [];
  let huRoom448: any = [];
  let huRoom452: any = [];
  let huRoom454: any = [];

  let lightRoom413: any = [];
  let lightRoom415: any = [];
  let lightRoom417: any = [];
  let lightRoom419: any = [];
  let lightRoom421: any = [];
  let lightRoom422: any = [];
  let lightRoom423: any = [];
  let lightRoom424: any = [];
  let lightRoom442: any = [];
  let lightRoom446: any = [];
  let lightRoom448: any = [];
  let lightRoom452: any = [];
  let lightRoom454: any = [];

  let temRoom413: any = [];
  let temRoom415: any = [];
  let temRoom417: any = [];
  let temRoom419: any = [];
  let temRoom421: any = [];
  let temRoom422: any = [];
  let temRoom423: any = [];
  let temRoom424: any = [];
  let temRoom442: any = [];
  let temRoom446: any = [];
  let temRoom448: any = [];
  let temRoom452: any = [];
  let temRoom454: any = [];

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
      : co2.roomNum == "422"
      ? co2Room422.push(co2)
      : co2.roomNum == "423"
      ? co2Room423.push(co2)
      : co2.roomNum == "424"
      ? co2Room424.push(co2)
      : co2.roomNum == "442"
      ? co2Room442.push(co2)
      : co2.roomNum == "446"
      ? co2Room446.push(co2)
      : co2.roomNum == "448"
      ? co2Room448.push(co2)
      : co2.roomNum == "452"
      ? co2Room452.push(co2)
      : co2.roomNum == "454"
      ? co2Room454.push(co2)
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
    if (co2Room422.length > 5) {
      co2Room422.splice(0, 1);
    }
    if (co2Room423.length > 5) {
      co2Room423.splice(0, 1);
    }
    if (co2Room424.length > 5) {
      co2Room424.splice(0, 1);
    }
    if (co2Room442.length > 5) {
      co2Room442.splice(0, 1);
    }
    if (co2Room446.length > 5) {
      co2Room446.splice(0, 1);
    }
    if (co2Room448.length > 5) {
      co2Room448.splice(0, 1);
    }
    if (co2Room452.length > 5) {
      co2Room452.splice(0, 1);
    }
    if (co2Room454.length > 5) {
      co2Room454.splice(0, 1);
    }
    let allCo2Data = {
      co2Room413,
      co2Room415,
      co2Room417,
      co2Room419,
      co2Room421,
      co2Room422,
      co2Room423,
      co2Room424,
      co2Room442,
      co2Room446,
      co2Room448,
      co2Room452,
      co2Room454,
      // ####방추가
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
      : hu.roomNum == "422"
      ? huRoom422.push(hu)
      : hu.roomNum == "423"
      ? huRoom423.push(hu)
      : hu.roomNum == "424"
      ? huRoom424.push(hu)
      : hu.roomNum == "442"
      ? huRoom442.push(hu)
      : hu.roomNum == "446"
      ? huRoom446.push(hu)
      : hu.roomNum == "448"
      ? huRoom448.push(hu)
      : hu.roomNum == "452"
      ? huRoom452.push(hu)
      : hu.roomNum == "454"
      ? huRoom454.push(hu)
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
    if (huRoom422.length > 5) {
      huRoom422.splice(0, 1);
    }
    if (huRoom423.length > 5) {
      huRoom423.splice(0, 1);
    }
    if (huRoom424.length > 5) {
      huRoom424.splice(0, 1);
    }
    if (huRoom442.length > 5) {
      huRoom442.splice(0, 1);
    }
    if (huRoom446.length > 5) {
      huRoom446.splice(0, 1);
    }
    if (huRoom448.length > 5) {
      huRoom448.splice(0, 1);
    }
    if (huRoom452.length > 5) {
      huRoom452.splice(0, 1);
    }
    if (huRoom454.length > 5) {
      huRoom454.splice(0, 1);
    }
    let allhuData = {
      huRoom413,
      huRoom415,
      huRoom417,
      huRoom419,
      huRoom421,
      huRoom422,
      huRoom423,
      huRoom424,
      huRoom442,
      huRoom446,
      huRoom448,
      huRoom452,
      huRoom454,
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
      : light.roomNum == "422"
      ? lightRoom422.push(light)
      : light.roomNum == "423"
      ? lightRoom423.push(light)
      : light.roomNum == "424"
      ? lightRoom424.push(light)
      : light.roomNum == "442"
      ? lightRoom442.push(light)
      : light.roomNum == "446"
      ? lightRoom446.push(light)
      : light.roomNum == "448"
      ? lightRoom448.push(light)
      : light.roomNum == "452"
      ? lightRoom452.push(light)
      : light.roomNum == "454"
      ? lightRoom454.push(light)
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
    if (lightRoom422.length > 5) {
      lightRoom422.splice(0, 1);
    }
    if (lightRoom423.length > 5) {
      lightRoom423.splice(0, 1);
    }
    if (lightRoom424.length > 5) {
      lightRoom424.splice(0, 1);
    }
    if (lightRoom442.length > 5) {
      lightRoom442.splice(0, 1);
    }
    if (lightRoom446.length > 5) {
      lightRoom446.splice(0, 1);
    }
    if (lightRoom448.length > 5) {
      lightRoom448.splice(0, 1);
    }
    if (lightRoom452.length > 5) {
      lightRoom452.splice(0, 1);
    }
    if (lightRoom454.length > 5) {
      lightRoom454.splice(0, 1);
    }
    let alllightData = {
      lightRoom413,
      lightRoom415,
      lightRoom417,
      lightRoom419,
      lightRoom421,
      lightRoom422,
      lightRoom423,
      lightRoom424,
      lightRoom442,
      lightRoom446,
      lightRoom448,
      lightRoom452,
      lightRoom454,
    };
    return alllightData;
  });
  if (roomsLight.length > 1) {
    roomsLight.splice(1);
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
      : tem.roomNum == "422"
      ? temRoom422.push(tem)
      : tem.roomNum == "423"
      ? temRoom423.push(tem)
      : tem.roomNum == "424"
      ? temRoom424.push(tem)
      : tem.roomNum == "442"
      ? temRoom442.push(tem)
      : tem.roomNum == "446"
      ? temRoom446.push(tem)
      : tem.roomNum == "448"
      ? temRoom448.push(tem)
      : tem.roomNum == "452"
      ? temRoom452.push(tem)
      : tem.roomNum == "454"
      ? temRoom454.push(tem)
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
    if (temRoom422.length > 5) {
      temRoom422.splice(0, 1);
    }
    if (temRoom423.length > 5) {
      temRoom423.splice(0, 1);
    }
    if (temRoom424.length > 5) {
      temRoom424.splice(0, 1);
    }
    if (temRoom442.length > 5) {
      temRoom442.splice(0, 1);
    }
    if (temRoom446.length > 5) {
      temRoom446.splice(0, 1);
    }
    if (temRoom448.length > 5) {
      temRoom448.splice(0, 1);
    }
    if (temRoom452.length > 5) {
      temRoom452.splice(0, 1);
    }
    if (temRoom454.length > 5) {
      temRoom454.splice(0, 1);
    }
    let allTemData = {
      temRoom413,
      temRoom415,
      temRoom417,
      temRoom419,
      temRoom421,
      temRoom422,
      temRoom423,
      temRoom424,
      temRoom442,
      temRoom446,
      temRoom448,
      temRoom452,
      temRoom454,
    };
    return allTemData;
  });
  if (roomsTemperature.length > 1) {
    roomsTemperature.splice(1);
  }
  // let allSensorData = {
  //   roomsCo2,
  //   roomsHumidity,
  //   roomsLight,
  //   roomsPir,
  //   roomsTemperature,
  // };
  // console.log(allSensorData);

  return (
    <div className="bg-firstBgcolor flex justify-center w-[100vw] h-[100vh] p-5">
      <div className=" bg-gray-300 w-[70%] ">
        <div className="bg-blue-200 w-[100%] h-[50%] flex justify-between">
          <div className="bg-thirdBgcolor flex items-center justify-center border w-[50%] ">
            {clickRoomNum ? (
              <Line data={roomsCo2} datasetsIdkey={clickRoomNum}></Line>
            ) : (
              <div>방선택ㄱㄱ</div>
            )}
          </div>
          <div className="bg-thirdBgcolor flex items-center justify-center border w-[50%]">
            {clickRoomNum ? (
              <Line1 data={roomsHumidity} datasetsIdkey={clickRoomNum}></Line1>
            ) : (
              <div>방선택ㄱㄱ</div>
            )}
          </div>
        </div>
        <div className="bg-purple-200-200 w-[100%] h-[50%] flex justify-between">
          <div className="bg-thirdBgcolor flex items-center justify-center border w-[50%]">
            {clickRoomNum ? (
              <Line2 data={roomsLight} datasetsIdkey={clickRoomNum}></Line2>
            ) : (
              <div>방선택ㄱㄱ</div>
            )}
          </div>
          <div className="bg-thirdBgcolor flex items-center justify-center border w-[50%]">
            {clickRoomNum ? (
              <Line3
                data={roomsTemperature}
                datasetsIdkey={clickRoomNum}
              ></Line3>
            ) : (
              <div>방선택ㄱㄱ</div>
            )}
          </div>
        </div>
      </div>
      <div className="bg-secondBgcolor border-x-2 w-[30%] flex flex-col ">
        <div className="bg-red-200 w-[100%] h-[50%] flex flex-wrap justify-center items-center">
          {roomNumer.map((room: any) => (
            <button
              className="rounded-2xl flex flex-col justify-center items-center p-2 w-[13%] h-[15%] bg-gray-300 border m-5 text-lg hover:bg-green-300"
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
              {room}호
            </button>
          ))}
        </div>
        <div>aaaaaaaaaaaaa</div>
      </div>
    </div>
  );
}
