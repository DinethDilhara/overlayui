import { useState } from "react"

import TeamPlayersCard, {
  type Player,
  type TeamPlayersCardProps,
} from "@/components/overlayui/08.team-players-card"

import { ComponentShowcase } from "@/components/overlayui/showcase/component-showcase"
import type { PropDefinition } from "@/components/overlayui/showcase/props-editor"

import wcLogo from "@/assets/wc-logo.jpg"
import team01Logo from "@/assets/team-01-logo.png"
import playerImgOne from "@/assets/player-1-img.png"

const DEFAULT_PLAYERS: Player[] = [
  { number: 1, name: "MOHAMED HASAN" },
  { number: 4, name: "MOHAMED RIZNI" },
  { number: 5, name: "MOHAMED MUSHFIR" },
  { number: 6, name: "FAREEQ AHAMED" },
  { number: 7, name: "MOHAMED ASHATH" },
  { number: 8, name: "AMAN FAIZER" },
  { number: 12, name: "ABDULLA RASHEED" },
  { number: 14, name: "MOHAMED MUJEEB" },
  { number: 18, name: "ABDELFATTAH AHMED" },
  { number: 23, name: "KAMEEL HAKEEM" },
  { number: 66, name: "NADEEM AHMAD" },
]

const INITIAL_PROPS: Required<TeamPlayersCardProps> = {
  tournamentLogo: wcLogo,
  teamLogo: team01Logo,
  teamName: "RENOWN FC",
  headCoachName: "FAZLUR RAHUMAN",
  captainImage: playerImgOne,
  players: DEFAULT_PLAYERS,
}

const PROP_DEFINITIONS: PropDefinition[] = [
  {
    name: "tournamentLogo",
    label: "Tournament Logo",
    type: "image",
    description: "Logo displayed in the tournament section.",
  },
  {
    name: "teamLogo",
    label: "Team Logo",
    type: "image",
    description: "Logo displayed next to the team name.",
  },
  {
    name: "teamName",
    label: "Team Name",
    type: "text",
    description: "Name displayed in the team header.",
  },
  {
    name: "headCoachName",
    label: "Head Coach",
    type: "text",
    description: "Name displayed below the football ground.",
  },
  {
    name: "captainImage",
    label: "Captain Image",
    type: "image",
    description: "Player image displayed on the right side.",
  },
  {
    name: "players",
    label: "Players",
    type: "players",
    description: "Players displayed in the player list.",
  },
]

export default function TeamPlayersCardShowcase() {
  const [props, setProps] =
    useState<Required<TeamPlayersCardProps>>(INITIAL_PROPS)

  const updateProp = <K extends keyof TeamPlayersCardProps>(
    key: K,
    value: TeamPlayersCardProps[K],
  ) => {
    setProps((current) => ({
      ...current,
      [key]: value,
    }))
  }

  const code = `<TeamPlayersCard
  tournamentLogo={wcLogo}
  teamLogo={team01Logo}
  teamName="${props.teamName}"
  headCoachName="${props.headCoachName}"
  captainImage={playerImgOne}
  players={[
${props.players
  .map(
    (player) =>
      `    { number: ${JSON.stringify(player.number)}, name: ${JSON.stringify(player.name)} },`,
  )
  .join("\n")}
  ]}
/>`

  return (
    <ComponentShowcase
      title="Team Players Card"
      description="Displays a team's tournament information, players, head coach, team logo, and captain."
      propDefinitions={PROP_DEFINITIONS}
      values={props}
      onChange={(key, value) =>
        updateProp(key as keyof TeamPlayersCardProps, value as never)
      }
      preview={<TeamPlayersCard {...props} />}
      code={code}
      language="tsx"
      filename="team-players-card.tsx"
    />
  )
}
