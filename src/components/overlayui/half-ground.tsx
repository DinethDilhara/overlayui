export default function HalfGround() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="absolute inset-0 border-white/80">
        {/* Center Circle Half */}
        <div className="absolute -top-[20%] left-1/2 aspect-square w-[22%] -translate-x-1/2 rounded-full border-2 border-white/80" />

        {/* Penalty Area */}
        <div className="absolute bottom-0 left-1/2 h-[25%] w-[46%] -translate-x-1/2 border-x-2 border-t-2 border-white/80" />

        {/* Goal Area */}
        <div className="absolute bottom-0 left-1/2 h-[12%] w-[22%] -translate-x-1/2 border-x-2 border-t-2 border-white/80" />

        {/* Penalty Arc */}
        <div className="absolute bottom-[25%] left-1/2 aspect-square w-[14%] -translate-x-1/2 translate-y-1/2 rounded-full border-2 border-white/80 [clip-path:inset(0_0_50%_0)]" />
      </div>
    </div>
  )
}
