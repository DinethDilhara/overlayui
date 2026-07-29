import OverlayLayout from "@/components/overlayui/ui/full-screen-card"

import team01Logo from "@/assets/team-01-logo.png"
import team02Logo from "@/assets/team-02-logo.webp"
import wcLogo from "@/assets/wc-logo.jpg"

export default function Test() {
  return (
    <OverlayLayout>
      <div className="flex h-full w-full flex-col gap-3 px-6 pt-6 pb-2">
        {/* Team Names */}
        <div className="grid h-24 grid-cols-2 gap-2">
          <div className="flex items-center justify-center rounded-3xl bg-[#232323] text-6xl font-bold text-white shadow-2xl">
            RENOWN FC
          </div>

          <div className="flex items-center justify-center rounded-3xl bg-[#232323] text-6xl font-bold text-white shadow-2xl">
            RATNAM SC
          </div>
        </div>

        {/* Main Content */}
        <div className="grid flex-1 grid-cols-[1fr_0.8fr_1fr] gap-6 rounded-3xl bg-[#232323] shadow-2xl">
          {/* Home Team Logo */}
          <div className="flex items-center justify-center">
            <div className="flex h-[60%] w-[75%] items-center justify-center rounded-tr-[90px] rounded-bl-[90px] bg-white">
              <img
                src={team01Logo}
                alt="Home Team"
                className="h-64 object-contain"
              />
            </div>
          </div>

          {/* Tournament */}
          <div className="flex flex-col">
            <div className="flex flex-1 items-start justify-center">
              <img
                src={wcLogo}
                alt="Tournament"
                className="h-100 object-contain"
              />
            </div>

            <div className="flex flex-col items-center justify-end p-6 text-white">
              <p className="mt-6 text-5xl font-semibold">Week 05</p>
              <p className="text-5xl font-semibold">Match 12</p>
            </div>
          </div>

          {/* Away Team Logo */}
          <div className="flex items-center justify-center">
            <div className="flex h-[60%] w-[75%] items-center justify-center rounded-tr-[90px] rounded-bl-[90px] bg-white">
              <img
                src={team02Logo}
                alt="Away Team"
                className="h-48 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Organisation Name */}
        <div className="flex h-8 items-center justify-end">
          <div className="px-24 text-2xl font-semibold text-white">
            ORGANISATION NAME
          </div>
        </div>
      </div>
    </OverlayLayout>
  )
}


// import OverlayLayout from "@/components/overlayui/ui/full-screen-card"

// import team01Logo from "@/assets/team-01-logo.png"
// import team02Logo from "@/assets/team-02-logo.webp"
// import wcLogo from "@/assets/wc-logo.jpg"

// export default function Test() {
//   return (
//     <OverlayLayout>
//       <div className="flex h-full w-full flex-col gap-6 p-6">
//         <div className="grid h-24 grid-cols-2 gap-2 ">
//           <div className="flex items-center justify-center rounded-3xl bg-[#232323] text-6xl font-bold text-white shadow-2xl">
//             RENOWN FC
//           </div>

//           <div className="flex items-center justify-center rounded-3xl bg-[#232323] text-6xl font-bold text-white shadow-2xl">
//             RATNAM SC
//           </div>
//         </div>

//         <div className="grid flex-1 grid-cols-[1fr_0.8fr_1fr] gap-6 rounded-3xl bg-[#232323] shadow-2xl">
//           {/* Home Team Logo */}
//           <div className="flex items-center justify-center rounded-3xl bg-[#232323]">
//             <div className="flex h-[60%] w-[75%] items-center justify-center rounded-tr-[90px] rounded-bl-[90px] bg-white">
//               <img
//                 src={team01Logo}
//                 alt="Home Team"
//                 className="h-64 object-contain"
//               />
//             </div>
//           </div>

//           {/* Tournament */}
//           <div className="flex flex-col rounded-3xl bg-[#232323]">
//             {/* Logo */}
//             <div className="flex flex-1 items-start justify-center">
//               <img
//                 src={wcLogo}
//                 alt="Tournament"
//                 className="h-100 object-contain"
//               />
//             </div>

//             {/* Text */}
//             <div className="flex flex-col items-center justify-end p-6 text-white">
//               <p className="mt-6 text-5xl font-semibold">Week 05</p>
//               <p className="text-5xl font-semibold">Match 12</p>
//             </div>
//           </div>

//           {/* Away Team Logo */}
//           <div className="flex items-center justify-center rounded-3xl bg-[#232323]">
//             <div className="flex h-[60%] w-[75%] items-center justify-center rounded-tr-[90px] rounded-bl-[90px] bg-white">
//               <img
//                 src={team02Logo}
//                 alt="Away Team"
//                 className="h-48 object-contain"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="flex justify-end">
//           <div className="px-8 text-2xl font-semibold text-white">
//             ORGANISATION NAME
//           </div>
//         </div>
//       </div>
//     </OverlayLayout>
//   )
// }