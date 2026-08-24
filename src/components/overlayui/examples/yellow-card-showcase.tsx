import { useState } from "react"

import YellowCardOverlay, {
  type YellowCardOverlayProps,
} from "@/components/overlayui/20.yellow-card"

import { ComponentShowcase } from "@/components/overlayui/showcase/component-showcase"
import type { PropDefinition } from "@/components/overlayui/showcase/props-editor"

import wcLogo from "@/assets/wc-logo.jpg"
import teamLogo from "@/assets/team-01-logo.png"

const INITIAL_PROPS: Required<YellowCardOverlayProps> = {
  tournamentLogo: wcLogo,
  teamLogo,
  playerName: "MOHAMED HASAN",
  playerNumber: 10,
}

const PROP_DEFINITIONS: PropDefinition[] = [
  {
    name: "tournamentLogo",
    label: "Tournament Logo",
    type: "image",
    description: "Logo displayed next to the yellow card overlay.",
  },
  {
    name: "teamLogo",
    label: "Team Logo",
    type: "image",
    description: "Logo displayed next to the player information.",
  },
  {
    name: "playerName",
    label: "Player Name",
    type: "text",
    description: "Name of the player receiving the yellow card.",
  },
  {
    name: "playerNumber",
    label: "Player Number",
    type: "text",
    description: "Jersey number of the player.",
  },
]

export default function YellowCardShowcase() {
  const [props, setProps] =
    useState<Required<YellowCardOverlayProps>>(INITIAL_PROPS)

  const updateProp = <K extends keyof YellowCardOverlayProps>(
    key: K,
    value: YellowCardOverlayProps[K],
  ) => {
    setProps((current) => ({
      ...current,
      [key]: value,
    }))
  }

  const code = `<YellowCardOverlay
  tournamentLogo={wcLogo}
  teamLogo={teamLogo}
  playerName=${JSON.stringify(props.playerName)}
  playerNumber={${JSON.stringify(props.playerNumber)}}
/>`

  return (
    <ComponentShowcase
      title="Yellow Card"
      description="Displays a yellow card event with player, team, and tournament information."
      propDefinitions={PROP_DEFINITIONS}
      values={props}
      onChange={(key, value) =>
        updateProp(
          key as keyof YellowCardOverlayProps,
          value as never,
        )
      }
      preview={<YellowCardOverlay {...props} />}
      code={code}
      language="tsx"
      filename="yellow-card-overlay.tsx"
    />
  )
}
