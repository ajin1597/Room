import Line from "../components/chart";

import { useEffect, useState } from "react";

export default function Home() {
  const [apiCo2Data, setApiCo2Data] = useState<any>([]);
  const [apiHumidityData, setApiHumidityData] = useState<any>([]);
  const [apiLightData, setApiLightData] = useState<any>([]);
  const [apiPirData, setApiPirData] = useState<any>([]);
  const [apiTemperatureData, setApiTemperatureData] = useState<any>([]);

  const a = () => {
    fetch(`/api/sensor`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        console.log(json.co2Data);

        setApiCo2Data(json.co2Data);
        setApiHumidityData(json.humidityData);
        setApiLightData(json.lightData);
        setApiPirData(json.pitData);
        setApiTemperatureData(json.temperatureData);
      });
  };
  useEffect(() => {
    a();
  }, []);

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
  let aaa: any = [];

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
    // ##############여기서부터 하면됩니다. 5개씩 넘기세요
    // console.log(co2Room413.length);

    return co2Room413;
  });
  console.log(roomsCo2);

  // const temp = [room413, room415, room417, room419, room421];
  // console.log(temp);

  // const [members, setMembers] = useState<Array<string>>([]);

  // const deleteMember = (index: number) => {
  //   // member 삭제
  //   const tmp = [...co2];
  //   tmp.splice(index, 1);
  //   console.log(Object.is(tmp, co2)); // false
  //   setCo2(tmp); // rerendering o
  // };
  // const a = temp.map((temp: any, index: number) => `${temp} ${index}`);
  // console.log(a);

  // const apiData = () => {

  // };

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
