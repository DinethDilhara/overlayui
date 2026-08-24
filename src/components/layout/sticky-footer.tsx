import { Link } from "react-router"

const StickyFooter = () => {
  return (
    <footer className="sticky bottom-0 left-0 z-0 h-80 w-full bg-background">
      <div className="relative flex size-full items-start justify-end overflow-hidden px-8 py-12 text-right text-primary sm:px-16 md:px-20 lg:px-28 xl:px-36">
        <div className="flex flex-row space-x-12 text-sm sm:space-x-16 sm:text-lg md:space-x-24 md:text-xl">
          <ul>
            <li>
              <Link to="/" className="cursor-pointer hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/docs/introduction"
                className="cursor-pointer hover:underline"
              >
                Docs
              </Link>
            </li>
            <li>
              <Link to="/preview" className="cursor-pointer hover:underline">
                Preview
              </Link>
            </li>
          </ul>

          <ul>
            <li>
              <a
                href="https://github.com/DinethDilhara"
                className="cursor-pointer hover:underline"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://x.com/Dineth_Dilhara"
                className="cursor-pointer hover:underline"
              >
                X (Twitter)
              </a>
            </li>
          </ul>
        </div>

        <h2 className="pointer-events-none absolute bottom-12 left-32 translate-y-1/3 whitespace-nowrap text-[80px] font-semibold tracking-tight text-primary sm:text-[192px]">
          OverlayUI
        </h2>
      </div>
    </footer>
  )
}

export default StickyFooter