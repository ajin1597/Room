import Line from "../components/chart";

import { useEffect, useState } from "react";

export default function Home() {
  const [room413, setRoom413] = useState<any>("");
  const [room415, setRoom415] = useState<any>("");
  const [room417, setRoom417] = useState<any>("");
  const [room419, setRoom419] = useState<any>("");
  const [room421, setroom421] = useState<any>("");

  const temp = [room413, room415, room417, room419, room421];
  console.log(temp);

  // const [members, setMembers] = useState<Array<string>>([]);

  // const deleteMember = (index: number) => {
  //   // member 삭제
  //   const tmp = [...co2];
  //   tmp.splice(index, 1);
  //   console.log(Object.is(tmp, co2)); // false
  //   setCo2(tmp); // rerendering o
  // };
  const a = temp.map((temp: any, index: number) => `${temp} ${index}`);
  // console.log(a);

  useEffect(() => {
    fetch(`/api/sensor`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json.data413);

        // let co2abc = json.data413[0].map();

        // setTimeout(() => {
        // let co2A = json.data413[0].map((ele: any, idx: number) => {
        // let co2A = ele.co2;

        // return co2A;
        // return co2A;
        // });
        // return co2A;
        // }, 5000);
        // console.log(co2A);

        let co2A = json.data413[0][0].co2;
        let humidityA = json.data413[1][0].humidity;
        let lightA = json.data413[2][0].light;
        let pirA = json.data413[3][0].pir;
        let temperatureA = json.data413[4][0].temperature;

        let co2B = json.data415[0][0].co2;
        let humidityB = json.data415[1][0].humidity;
        let lightB = json.data415[2][0].light;
        let pirB = json.data415[3][0].pir;
        let temperatureB = json.data415[4][0].temperature;

        let co2C = json.data417[0][0].co2;
        let humidityC = json.data417[1][0].humidity;
        let lightC = json.data417[2][0].light;
        let pirC = json.data417[3][0].pir;
        let temperatureC = json.data417[4][0].temperature;

        let co2D = json.data419[0][0].co2;
        let humidityD = json.data419[1][0].humidity;
        let lightD = json.data419[2][0].light;
        let pirD = json.data419[3][0].pir;
        let temperatureD = json.data419[4][0].temperature;

        let co2E = json.data421[0][0].co2;
        let humidityE = json.data421[1][0].humidity;
        let lightE = json.data421[2][0].light;
        let pirE = json.data421[3][0].pir;
        let temperatureE = json.data421[4][0].temperature;

        // let co2A = json.data413[0][0].co2;
        // let co2B = json.data415[0][0].co2;
        // let co2C = json.data417[0][0].co2;
        // let co2D = json.data419[0][0].co2;
        // let co2E = json.data421[0][0].co2;

        // let humidityA = json.data413[1][0].humidity;
        // let humidityB = json.data415[1][0].humidity;
        // let humidityC = json.data417[1][0].humidity;
        // let humidityD = json.data419[1][0].humidity;
        // let humidityE = json.data421[1][0].humidity;

        // let lightA = json.data413[2][0].light;
        // let lightB = json.data415[2][0].light;
        // let lightC = json.data417[2][0].light;
        // let lightD = json.data419[2][0].light;
        // let lightE = json.data421[2][0].light;

        // let pirA = json.data413[3][0].pir;
        // let pirB = json.data415[3][0].pir;
        // let pirC = json.data417[3][0].pir;
        // let pirD = json.data419[3][0].pir;
        // let pirE = json.data421[3][0].pir;

        // let temperatureA = json.data413[4][0].temperature;
        // let temperatureB = json.data415[4][0].temperature;
        // let temperatureC = json.data417[4][0].temperature;
        // let temperatureD = json.data419[4][0].temperature;
        // let temperatureE = json.data421[4][0].temperature;

        let data413 = [co2A, humidityA, lightA, pirA, temperatureA];
        let data415 = [co2B, humidityB, lightB, pirB, temperatureB];
        let data417 = [co2C, humidityC, lightC, pirC, temperatureC];
        let data419 = [co2D, humidityD, lightD, pirD, temperatureD];
        let data421 = [co2E, humidityE, lightE, pirE, temperatureE];

        data413.map((ele, idx) => {});
        // console.log(String(Number(a[0].co2)));
        // setCo2([co2Data.concat(co2Data)]);
        console.log(data413);
        setRoom413(data413);
        setRoom415(data415);
        setRoom417(data417);
        setRoom419(data419);
        setroom421(data421);
      });
  }, []);

  return (
    <div className="bg-red-200 flex justify-center  ">
      <div className="bg-blue-200 w-[800px] h-[800px] flex items-center">
        {/* {co2.map((co2: string, index: number) => ( */}
        <Line data={temp}></Line>
        {/* <Line data={temp}></Line> */}
        {/* ))} */}
      </div>
      {/* <div className="bg-purple-200 w-[800px] h-[800px]"></div> */}
    </div>
  );
}
