import { TOCMinimap } from "@/components/toc-minimap"

const toc = [
  {
    title: "Section One",
    url: "#section-1",
    depth: 2,
  },
  {
    title: "Section Two",
    url: "#section-2",
    depth: 2,
  },
  {
    title: "Section Three",
    url: "#section-3",
    depth: 2,
  },
  {
    title: "Section Four",
    url: "#section-4",
    depth: 2,
  },
  {
    title: "Section Five",
    url: "#section-5",
    depth: 2,
  },
  {
    title: "Section Six",
    url: "#section-6",
    depth: 2,
  },
]

export default function App() {
  return (
    <>
      <main>
        <section
          id="section-1"
          className="flex h-screen w-screen items-center justify-center border-2 border-gray-300"
        >
          <h2 className="text-4xl font-bold">Section One</h2>
        </section>

        <section
          id="section-2"
          className="flex h-screen w-screen items-center justify-center"
        >
          <h2 className="text-4xl font-bold">Section Two</h2>
        </section>

        <section
          id="section-3"
          className="flex h-screen w-screen items-center justify-center"
        >
          <h2 className="text-4xl font-bold">Section Three</h2>
        </section>

        <section
          id="section-4"
          className="flex h-screen w-screen items-center justify-center"
        >
          <h2 className="text-4xl font-bold">Section Four</h2>
        </section>

        <section
          id="section-5"
          className="flex h-screen w-screen items-center justify-center"
        >
          <h2 className="text-4xl font-bold">Section Five</h2>
        </section>

        <section
          id="section-6"
          className="flex h-screen w-screen items-center justify-center"
        >
          <h2 className="text-4xl font-bold">Section Six</h2>
        </section>
      </main>

      <div className="fixed right-6 top-1/2 -translate-y-1/2">
        <TOCMinimap items={toc} />
      </div>
    </>
  )
}