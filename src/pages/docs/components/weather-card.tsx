import { Link } from "react-router"
import WeatherCard from "@/components/overlayui/02.weather-card"
import DesktopPreview from "@/components/overlayui/showcase/desktop-preview"
import { CodePreview } from "@/components/overlayui/showcase/code-preview"
import { ComponentDocBar } from "@/components/layout/component-doc-bar"
import { PropsTable } from "@/components/props-table"
import { getAdjacentComponents } from "@/config/components"
import { ArrowLeft, ArrowRight } from "lucide-react"
import wcLogo from "@/assets/wc-logo.jpg"

const CODE_SAMPLE = `import WeatherCard from "@/components/overlayui/02.weather-card"
import wcLogo from "@/assets/wc-logo.jpg"

export default function WeatherCardDemo() {
  return (
    <WeatherCard
      weatherStatus="PARTLY_CLOUDY"
      temperature={31}
      humidity={73}
      windSpeed={19}
      tournamentLogo={wcLogo}
    />
  )
}`

const PROPS = [
  { name: "weatherStatus", type: "'SUNNY' | 'RAINY' | 'PARTLY_CLOUDY' | 'CLOUDY' | 'WINDY'", required: true, description: "Current matchday weather forecast condition." },
  { name: "temperature", type: "number", required: true, description: "Temperature value in Celsius." },
  { name: "humidity", type: "number", required: true, description: "Humidity percentage." },
  { name: "windSpeed", type: "number", required: true, description: "Wind speed in km/h." },
  { name: "tournamentLogo", type: "string", required: true, description: "Tournament or league logo image source." },
]

export default function WeatherCardDocsPage() {
  const { prev, next } = getAdjacentComponents("weather-card")

  return (
    <div className="space-y-10 max-w-4xl">
      <ComponentDocBar slug="weather-card" />
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Weather Card
        </h1>
        <p className="mt-2 text-base text-muted-foreground leading-relaxed">
          Matchday atmospheric conditions overlay showing live weather graphics, temperature, humidity, and wind readings.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-bold tracking-tight">Preview</h2>
        <DesktopPreview>
          <WeatherCard
            weatherStatus="PARTLY_CLOUDY"
            temperature={31}
            humidity={73}
            windSpeed={19}
            tournamentLogo={wcLogo}
          />
        </DesktopPreview>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-bold tracking-tight">Usage</h2>
        <CodePreview
          code={CODE_SAMPLE}
          filename="weather-card.tsx"
          language="tsx"
        />
      </div>

      <PropsTable props={PROPS} />

      <div className="pt-6 border-t border-border/40 flex items-center justify-between">
        {prev ? (
          <Link
            to={prev.href}
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-3.5" />
            <span>{prev.title}</span>
          </Link>
        ) : <div />}

        {next && (
          <Link
            to={next.href}
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground"
          >
            <span>{next.title}</span>
            <ArrowRight className="size-3.5" />
          </Link>
        )}
      </div>
    </div>
  )
}
