import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Data = {
  co2Data?: any;
  humidityData?: any;
  lightData?: any;
  pirData?: any;
  temperatureData?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // try {
  //   let co2Data = await prisma.co2.findMany({
  //     orderBy: {
  //       time: "asc",
  //     },
  //   });

  //   // let humidityData = await prisma.humidity.findMany({
  //   //   orderBy: {
  //   //     time: "asc",
  //   //   },
  //   // });

  //   // let lightData = await prisma.light.findMany({
  //   //   orderBy: {
  //   //     time: "asc",
  //   //   },
  //   // });

  //   // let pirData = await prisma.pir.findMany({
  //   //   orderBy: {
  //   //     time: "asc",
  //   //   },
  //   // });

  //   // let temperatureData = await prisma.temperature.findMany({
  //   //   orderBy: {
  //   //     time: "asc",
  //   //   },
  //   // });

  //   res.status(200).json({ co2Data });
  // } catch (e) {
  //   res.status(400);
  // } finally {
  //   prisma.$disconnect();
  // }
  console.log("11111111111111111111111111111");
  const co2Data = await prisma.co2.findMany({
    orderBy: {
      time: "asc",
    },
  });
  console.log("2222222222222222222222222222222222222222222222");
  res.status(200).json({ co2Data });
  console.log("33333333333333333333333333333333333333333333333333");
}
