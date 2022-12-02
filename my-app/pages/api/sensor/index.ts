import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { useEffect } from "react";

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
  let co2Data = await prisma.co2.findMany({
    orderBy: {
      time: "asc",
    },
  });

  let humidityData = await prisma.humidity.findMany({
    orderBy: {
      time: "asc",
    },
  });

  let lightData = await prisma.light.findMany({
    orderBy: {
      time: "asc",
    },
  });

  let pirData = await prisma.pir.findMany({
    orderBy: {
      time: "asc",
    },
  });

  let temperatureData = await prisma.temperature.findMany({
    orderBy: {
      time: "asc",
    },
  });

  res
    .status(200)
    .json({ co2Data, humidityData, lightData, pirData, temperatureData });
}
