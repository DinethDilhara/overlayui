import type { ReactNode } from "react"
import {
  Sun,
  Cloudy,
  CloudSun,
  CloudLightning,
  CloudDrizzle,
  ThermometerSun,
  Droplets,
  Wind,
} from "lucide-react"

export type WeatherStatus =
  "SUNNY" | "CLOUDY" | "PARTLY_CLOUDY" | "THUNDERSTORM" | "DRIZZLE"

export interface WeatherCardProps {
  weatherStatus: WeatherStatus
  temperature: number | string
  humidity: number | string
  windSpeed: number | string
  title?: string
  tournamentLogo?: ReactNode | string
}

export default function WeatherCard({
  weatherStatus,
  temperature,
  humidity,
  windSpeed,
  title = "WEATHER",
  tournamentLogo,
}: WeatherCardProps) {
  const green = "#257723"
  const red = "#921E23"
  const yellow = "#D2A639"
  const darkGrey = "#3A3A3A"
  const logoBlack = "#0D0D0D"

  const renderWeatherIcon = (status: WeatherStatus) => {
    const iconClass = "h-[2.6vw] min-h-[32px] w-[2.6vw] min-w-[32px] text-white"

    switch (status) {
      case "SUNNY":
        return <Sun className={iconClass} />
      case "CLOUDY":
        return <Cloudy className={iconClass} />
      case "PARTLY_CLOUDY":
        return <CloudSun className={iconClass} />
      case "THUNDERSTORM":
        return <CloudLightning className={iconClass} />
      case "DRIZZLE":
        return <CloudDrizzle className={iconClass} />
      default:
        return <CloudSun className={iconClass} />
    }
  }

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-transparent">
      <div className="absolute bottom-12 left-24 flex items-center gap-[0.8vw] font-sans">
        {/* WEATHER CARD */}
        <div className="relative flex w-[24vw] max-w-180 min-w-120 flex-col overflow-hidden rounded-2xl p-[0.3vw] shadow-2xl">
          {/* BACKGROUND PATTERN */}
          <div
            className="absolute inset-0 z-0 overflow-hidden"
            style={{ backgroundColor: green }}
          >
            {/* Yellow Shape */}
            <div
              className="absolute h-full w-[55%]"
              style={{
                backgroundColor: yellow,
                transform: "skewX(-29deg)",
                left: "15%",
              }}
            />

            {/* Red Shape */}
            <div
              className="absolute h-full w-[30%]"
              style={{
                backgroundColor: red,
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                left: "62.4%",
              }}
            />
          </div>

          <div className="relative z-10 flex h-full w-full flex-col">
            {/* TITLE */}
            <div className="flex h-[1.4vw] max-h-16 min-h-10 w-full items-center justify-center">
              <span className="text-[1.6vw] font-bold tracking-wider text-white uppercase drop-shadow-md">
                {title}
              </span>
            </div>

            {/* DATA PANEL */}
            <div
              className="flex h-[3.8vw] max-h-30 min-h-20 w-full items-center justify-between rounded-br-2xl rounded-bl-2xl border border-white/40 px-[1.2vw] shadow-inner"
              style={{
                backgroundColor: darkGrey,
              }}
            >
              {/* Weather Status */}
              <div className="flex items-center justify-center">
                {renderWeatherIcon(weatherStatus)}
              </div>

              {/* Temperature */}
              <div className="flex items-center gap-[0.35vw]">
                <ThermometerSun className="h-[1.8vw] min-h-6 w-[1.8vw] min-w-6 text-white/90" />

                <span className="flex items-baseline gap-[0.15vw] text-white">
                  <span className="text-[1.6vw] leading-none font-semibold">
                    {temperature}
                  </span>
                  <span className="text-[0.8vw] font-bold text-white/80 uppercase">
                    °C
                  </span>
                </span>
              </div>

              {/* Humidity */}
              <div className="flex items-center gap-[0.35vw]">
                <Droplets className="h-[1.8vw] min-h-6 w-[1.8vw] min-w-6 text-white/90" />

                <span className="flex items-baseline gap-[0.15vw] text-white">
                  <span className="text-[1.6vw] leading-none font-semibold">
                    {humidity}
                  </span>
                  <span className="text-[0.8vw] font-bold text-white/80">
                    %
                  </span>
                </span>
              </div>

              {/* Wind Speed */}
              <div className="flex items-center gap-[0.35vw]">
                <Wind className="h-[1.8vw] min-h-6 w-[1.8vw] min-w-6 text-white/90" />

                <span className="flex items-baseline gap-[0.15vw] text-white">
                  <span className="text-[1.6vw] leading-none font-semibold">
                    {windSpeed}
                  </span>
                  <span className="text-[0.8vw] font-bold text-white/80 uppercase">
                    KM/H
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* TOURNAMENT LOGO */}
        <div
          className="flex h-[3.8vw] min-h-14 w-[3.8vw] min-w-14 items-center justify-center self-center overflow-hidden rounded-2xl shadow-xl"
          style={{
            backgroundColor: logoBlack,
          }}
        >
          {typeof tournamentLogo === "string" ? (
            <img
              src={tournamentLogo}
              alt="Tournament Logo"
              className="h-full w-full object-contain"
            />
          ) : (
            tournamentLogo
          )}
        </div>
      </div>
    </div>
  )
}
