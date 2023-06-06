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
        time: "03:27",
      },
      {
        name: "Güneş",
        time: "05:25",
      },
      {
        name: "Öğle",
        time: "13:08",
      },
      {
        name: "İkindi",
        time: "17:07",
      },
      {
        name: "Akşam",
        time: "20:40",
      },
      {
        name: "Yatsı",
        time: "22:29",
      },
    ],
  });
}
