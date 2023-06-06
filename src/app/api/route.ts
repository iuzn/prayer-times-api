import { NextResponse } from "next/server";

export async function GET() {
  const today = new Date()

  //today: day(number) mount(string) year(number)
  const todayString = `${today.getDate()} ${today.toLocaleString('default', { month: 'long' })} ${today.getFullYear()}`
  return NextResponse.json({
    city: "Istanbul",
    country: "Turkey",
    timezone: "Europe/Istanbul",
    date:todayString,
    prayer_times: [
      {
        name: "Imsak",
        time: "04:21",
      },
      {
        name: "Güneş",
        time: "05:52",
      },
      {
        name: "Öğle",
        time: "13:11",
      },
      {
        name: "İkindi",
        time: "17:00",
      },
      {
        name: "Akşam",
        time: "20:19",
      },
      {
        name: "Yatsı",
        time: "21:48",
      },
    ],
  });
}
