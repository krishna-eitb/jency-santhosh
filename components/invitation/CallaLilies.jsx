/** Small spray of white calla lilies, decorative */
function Lily() {
  return (
    <g>
      <path d="M60 150C58 118 62 96 60 74" stroke="#8EB7B1" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path
        d="M36 18C30 46 36 70 60 80C86 70 92 44 84 14C72 26 50 26 36 18Z"
        fill="#FFFFFF"
        stroke="#E3D8C6"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d="M60 80C48 66 44 44 50 26C54 44 56 62 60 80Z" fill="#F1ECE2" opacity=".7" />
      <rect x="55.5" y="30" width="9" height="30" rx="4.5" fill="#C6A777" />
    </g>
  );
}

export default function CallaLilies({ className = "" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 220 170" className={className} fill="none">
      <path d="M10 160C30 112 70 98 108 116C72 112 44 128 10 160Z" fill="#8EB7B1" opacity=".5" />
      <path d="M96 160C108 120 140 106 176 118C146 118 122 134 96 160Z" fill="#8EB7B1" opacity=".4" />
      <g transform="translate(-6 8) rotate(-24 60 150)"><Lily /></g>
      <g transform="translate(86 -6) rotate(14 60 150) scale(.92)"><Lily /></g>
    </svg>
  );
}
