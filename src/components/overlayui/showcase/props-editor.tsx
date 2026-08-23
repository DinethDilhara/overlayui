export type PropType = "text" | "image" | "players"

export interface PropDefinition {
  name: string
  label: string
  type: PropType
  description?: string
}

interface PropsEditorProps {
  definitions: PropDefinition[]
  values: Record<string, unknown>
  onChange: (name: string, value: unknown) => void
}

interface Player {
  number: number | string
  name: string
}

export function PropsEditor({
  definitions,
  values,
  onChange,
}: PropsEditorProps) {
  return (
    <div className="overflow-hidden rounded-xl border">
      <div className="border-b px-5 py-4">
        <h2 className="font-semibold">Props</h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Change the properties below to update the preview.
        </p>
      </div>

      <div className="divide-y">
        {definitions.map((definition) => {
          const value = values[definition.name]

          return (
            <div
              key={definition.name}
              className="grid gap-4 px-5 py-5 md:grid-cols-[220px_1fr]"
            >
              {/* Prop name */}
              <div>
                <div className="font-mono text-sm font-medium">
                  {definition.name}
                </div>

                <div className="mt-1 text-xs text-muted-foreground">
                  {definition.description}
                </div>
              </div>

              {/* Control */}
              <div>
                {definition.type === "text" && (
                  <input
                    type="text"
                    value={String(value ?? "")}
                    onChange={(event) =>
                      onChange(definition.name, event.target.value)
                    }
                    className="h-10 w-full rounded-md border bg-background px-3 text-sm transition outline-none focus:border-ring focus:ring-2 focus:ring-ring/20"
                  />
                )}

                {definition.type === "image" && (
                  <input
                    type="text"
                    value={String(value ?? "")}
                    onChange={(event) =>
                      onChange(definition.name, event.target.value)
                    }
                    className="h-10 w-full rounded-md border bg-background px-3 text-sm transition outline-none focus:border-ring focus:ring-2 focus:ring-ring/20"
                  />
                )}

                {definition.type === "players" && (
                  <PlayersEditor
                    players={value as Player[]}
                    onChange={(players) => onChange(definition.name, players)}
                  />
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function PlayersEditor({
  players,
  onChange,
}: {
  players: Player[]
  onChange: (players: Player[]) => void
}) {
  function updatePlayer(index: number, key: keyof Player, value: string) {
    const next = [...players]

    next[index] = {
      ...next[index],
      [key]: key === "number" ? value : value,
    }

    onChange(next)
  }

  function addPlayer() {
    onChange([
      ...players,
      {
        number: players.length + 1,
        name: "NEW PLAYER",
      },
    ])
  }

  function removePlayer(index: number) {
    onChange(players.filter((_, playerIndex) => playerIndex !== index))
  }

  return (
    <div className="space-y-3">
      {players.map((player, index) => (
        <div key={`${index}-${player.number}`} className="flex gap-2">
          <input
            type="text"
            value={player.number}
            onChange={(event) =>
              updatePlayer(index, "number", event.target.value)
            }
            className="h-10 w-20 rounded-md border bg-background px-3 text-sm"
            placeholder="#"
          />

          <input
            type="text"
            value={player.name}
            onChange={(event) =>
              updatePlayer(index, "name", event.target.value)
            }
            className="h-10 min-w-0 flex-1 rounded-md border bg-background px-3 text-sm"
            placeholder="Player name"
          />

          <button
            type="button"
            onClick={() => removePlayer(index)}
            className="h-10 rounded-md border px-3 text-sm text-destructive hover:bg-destructive/10"
          >
            Remove
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={addPlayer}
        className="rounded-md border px-3 py-2 text-sm hover:bg-muted"
      >
        Add player
      </button>
    </div>
  )
}
