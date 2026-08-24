// full-ground.tsx

export default function FullGround() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-transparent">
      {/* Outer Boundary */}
      <div className="absolute inset-[4%] border-2 border-white/80">
        {/* Halfway Line */}
        <div className="absolute top-1/2 left-0 h-0 w-full -translate-y-1/2 border-t-2 border-white/80" />

        {/* Center Circle */}
        <div className="absolute top-1/2 left-1/2 h-[18%] w-[26%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/80" />

        {/* ================= TOP HALF ================= */}

        {/* Penalty Area */}
        <div className="absolute top-0 left-1/2 h-[16%] w-[55%] -translate-x-1/2 border-x-2 border-b-2 border-white/80" />

        {/* Goal Area */}
        <div className="absolute top-0 left-1/2 h-[8%] w-[22%] -translate-x-1/2 border-x-2 border-b-2 border-white/80" />

        {/* Penalty Arc */}
        <div className="absolute top-[16%] left-1/2 h-[14%] w-[20%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/80 [clip-path:inset(50%_0_0_0)]" />

        {/* ================= BOTTOM HALF ================= */}

        {/* Penalty Area */}
        <div className="absolute bottom-0 left-1/2 h-[16%] w-[55%] -translate-x-1/2 border-x-2 border-t-2 border-white/80" />

        {/* Goal Area */}
        <div className="absolute bottom-0 left-1/2 h-[8%] w-[22%] -translate-x-1/2 border-x-2 border-t-2 border-white/80" />

        {/* Penalty Arc */}
        <div className="absolute bottom-[16%] left-1/2 h-[14%] w-[20%] -translate-x-1/2 translate-y-1/2 rounded-full border-2 border-white/80 [clip-path:inset(0_0_50%_0)]" />
      </div>
    </div>
  )
}
