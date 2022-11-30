import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { useEffect } from "react";

const prisma = new PrismaClient();

type Data = {
  room413Co2?: any;
  room413Humidity?: any;
  room413Light?: any;
  room413Pir?: any;
  room413Temperature?: any;

  room415Co2?: any;
  room415Humidity?: any;
  room415Light?: any;
  room415Pir?: any;
  room415Temperature?: any;

  room419Co2?: any;
  room419Humidity?: any;
  room419Light?: any;
  room419Pir?: any;
  room419Temperature?: any;

  room421Co2?: any;
  room421Humidity?: any;
  room421Light?: any;
  room421Pir?: any;
  room421Temperature?: any;

  message?: any;
  data413?: any;
  data415?: any;
  data417?: any;
  data419?: any;
  data421?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let room413Co2;
  let room413Humidity;
  let room413Light;
  let room413Pir;
  let room413Temperature;

  let room415Co2;
  let room415Humidity;
  let room415Light;
  let room415Pir;
  let room415Temperature;

  let room417Co2;
  let room417Humidity;
  let room417Light;
  let room417Pir;
  let room417Temperature;

  let room419Co2;
  let room419Humidity;
  let room419Light;
  let room419Pir;
  let room419Temperature;

  let room421Co2;
  let room421Humidity;
  let room421Light;
  let room421Pir;
  let room421Temperature;

  room413Co2 = await prisma.co2.findMany({
    where: {
      roomNum: "413",
    },
    orderBy: {
      time: "asc",
    },
  });

  // 415호 데이터
  room413Humidity = await prisma.humidity.findMany({
    where: {
      roomNum: "413",
    },
    orderBy: {
      time: "asc",
    },
  });
  room413Light = await prisma.light.findMany({
    where: {
      roomNum: "413",
    },
    orderBy: {
      time: "asc",
    },
  });
  room413Pir = await prisma.pir.findMany({
    where: {
      roomNum: "413",
    },
    orderBy: {
      time: "asc",
    },
  });
  room413Temperature = await prisma.temperature.findMany({
    where: {
      roomNum: "413",
    },
    orderBy: {
      time: "asc",
    },
  });
  // 415호 데이터
  room415Co2 = await prisma.co2.findMany({
    where: {
      roomNum: "415",
    },
    orderBy: {
      time: "asc",
    },
  });

  room415Humidity = await prisma.humidity.findMany({
    where: {
      roomNum: "415",
    },
    orderBy: {
      time: "asc",
    },
  });
  room415Light = await prisma.light.findMany({
    where: {
      roomNum: "415",
    },
    orderBy: {
      time: "asc",
    },
  });
  room415Pir = await prisma.pir.findMany({
    where: {
      roomNum: "415",
    },
    orderBy: {
      time: "asc",
    },
  });
  room415Temperature = await prisma.temperature.findMany({
    where: {
      roomNum: "415",
    },
    orderBy: {
      time: "asc",
    },
  });
  // 417호 데이터
  room417Co2 = await prisma.co2.findMany({
    where: {
      roomNum: "417",
    },
    orderBy: {
      time: "asc",
    },
  });

  room417Humidity = await prisma.humidity.findMany({
    where: {
      roomNum: "417",
    },
    orderBy: {
      time: "asc",
    },
  });
  room417Light = await prisma.light.findMany({
    where: {
      roomNum: "417",
    },
    orderBy: {
      time: "asc",
    },
  });
  room417Pir = await prisma.pir.findMany({
    where: {
      roomNum: "417",
    },
    orderBy: {
      time: "asc",
    },
  });
  room417Temperature = await prisma.temperature.findMany({
    where: {
      roomNum: "417",
    },
    orderBy: {
      time: "asc",
    },
  });
  // 419데이터
  room419Co2 = await prisma.co2.findMany({
    where: {
      roomNum: "419",
    },
    orderBy: {
      time: "asc",
    },
  });

  room419Humidity = await prisma.humidity.findMany({
    where: {
      roomNum: "419",
    },
    orderBy: {
      time: "asc",
    },
  });
  room419Light = await prisma.light.findMany({
    where: {
      roomNum: "419",
    },
    orderBy: {
      time: "asc",
    },
  });
  room419Pir = await prisma.pir.findMany({
    where: {
      roomNum: "419",
    },
    orderBy: {
      time: "asc",
    },
  });
  room419Temperature = await prisma.temperature.findMany({
    where: {
      roomNum: "419",
    },
    orderBy: {
      time: "asc",
    },
  });
  // 421데이터
  room421Co2 = await prisma.co2.findMany({
    where: {
      roomNum: "421",
    },
    orderBy: {
      time: "asc",
    },
  });

  room421Humidity = await prisma.humidity.findMany({
    where: {
      roomNum: "421",
    },
    orderBy: {
      time: "asc",
    },
  });
  room421Light = await prisma.light.findMany({
    where: {
      roomNum: "421",
    },
    orderBy: {
      time: "asc",
    },
  });
  room421Pir = await prisma.pir.findMany({
    where: {
      roomNum: "421",
    },
    orderBy: {
      time: "asc",
    },
  });
  room421Temperature = await prisma.temperature.findMany({
    where: {
      roomNum: "421",
    },
    orderBy: {
      time: "asc",
    },
  });

  let data413 = [
    room413Co2,
    room413Humidity,
    room413Light,
    room413Pir,
    room413Temperature,
  ];

  let data415 = [
    room415Co2,
    room415Humidity,
    room415Light,
    room415Pir,
    room415Temperature,
  ];

  let data417 = [
    room417Co2,
    room417Humidity,
    room417Light,
    room417Pir,
    room417Temperature,
  ];

  let data419 = [
    room419Co2,
    room419Humidity,
    room419Light,
    room419Pir,
    room419Temperature,
  ];

  let data421 = [
    room421Co2,
    room421Humidity,
    room421Light,
    room421Pir,
    room421Temperature,
  ];

  // console.log(room413Co2.length);
  // console.log(data413[]);

  // let data413 = [
  //   room413Co2,
  //   room413Humidity,
  //   room413Light,
  //   room413Pir,
  //   room413Temperature,
  //   room415Co2,
  //   room415Humidity,
  //   room415Light,
  //   room415Pir,
  //   room415Temperature,
  //   room417Co2,
  //   room417Humidity,
  //   room417Light,
  //   room417Pir,
  //   room417Temperature,
  //   room419Co2,
  //   room419Humidity,
  //   room419Light,
  //   room419Pir,
  //   room419Temperature,
  //   room421Co2,
  //   room421Humidity,
  //   room421Light,
  //   room421Pir,
  //   room421Temperature,
  // ];

  res.status(200).json({ data413, data415, data417, data419, data421 });
}
