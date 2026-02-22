// SVG-Illustrationen: Bär an 5 Berner Orten
const SLIDES = [
  {
    titleBe: 'Am Aarebord', titleDe: 'An der Aare',
    svg: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sky1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1a1a2e"/><stop offset="100%" stop-color="#2d1b00"/>
        </linearGradient>
        <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0a3d5c"/><stop offset="100%" stop-color="#051a2e"/>
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill="url(#sky1)"/>
      <!-- Stars -->
      <circle cx="50" cy="30" r="1.2" fill="#fff" opacity=".7"/>
      <circle cx="120" cy="20" r="1" fill="#fff" opacity=".6"/>
      <circle cx="200" cy="15" r="1.5" fill="#fff" opacity=".8"/>
      <circle cx="300" cy="25" r="1" fill="#fff" opacity=".6"/>
      <circle cx="360" cy="40" r="1.2" fill="#fff" opacity=".7"/>
      <circle cx="80" cy="55" r="0.8" fill="#fff" opacity=".5"/>
      <!-- Moon -->
      <circle cx="340" cy="45" r="18" fill="#F0A500" opacity=".9"/>
      <circle cx="348" cy="40" r="14" fill="#1a1a2e"/>
      <!-- Hills -->
      <ellipse cx="100" cy="200" rx="160" ry="80" fill="#0d0d0d"/>
      <ellipse cx="320" cy="210" rx="140" ry="70" fill="#111"/>
      <!-- Water -->
      <rect x="0" y="200" width="400" height="60" fill="url(#water)"/>
      <path d="M0 210 Q50 205 100 210 Q150 215 200 210 Q250 205 300 210 Q350 215 400 210" stroke="#1a6a9a" stroke-width="1.5" fill="none" opacity=".6"/>
      <path d="M0 222 Q60 217 120 222 Q180 227 240 222 Q300 217 360 222 Q380 224 400 222" stroke="#1a6a9a" stroke-width="1" fill="none" opacity=".4"/>
      <!-- Reflection -->
      <path d="M160 200 Q200 220 240 200" stroke="#F0A500" stroke-width="1" fill="none" opacity=".3"/>
      <!-- Bridge -->
      <rect x="100" y="175" width="200" height="8" rx="2" fill="#2a2a2a"/>
      <rect x="120" y="155" width="8" height="28" fill="#222"/>
      <rect x="270" y="155" width="8" height="28" fill="#222"/>
      <path d="M120 162 Q200 140 278 162" stroke="#333" stroke-width="4" fill="none"/>
      <!-- Bear sitting on bridge -->
      <!-- Body -->
      <ellipse cx="200" cy="168" rx="16" ry="14" fill="#1a0a00"/>
      <!-- Head -->
      <circle cx="200" cy="148" r="13" fill="#1a0a00"/>
      <!-- Ears -->
      <circle cx="190" cy="137" r="5" fill="#1a0a00"/>
      <circle cx="210" cy="137" r="5" fill="#1a0a00"/>
      <circle cx="190" cy="137" r="2.5" fill="#2d1500"/>
      <circle cx="210" cy="137" r="2.5" fill="#2d1500"/>
      <!-- Eyes -->
      <circle cx="195" cy="146" r="2.5" fill="#F0A500"/>
      <circle cx="205" cy="146" r="2.5" fill="#F0A500"/>
      <circle cx="196" cy="146" r="1.2" fill="#000"/>
      <circle cx="206" cy="146" r="1.2" fill="#000"/>
      <!-- Snout -->
      <ellipse cx="200" cy="153" rx="5" ry="3.5" fill="#2d1500"/>
      <circle cx="200" cy="152" r="1.5" fill="#0d0d0d"/>
      <!-- Legs dangling -->
      <rect x="189" y="178" width="7" height="12" rx="3" fill="#1a0a00"/>
      <rect x="204" y="178" width="7" height="12" rx="3" fill="#1a0a00"/>
      <!-- Scarf -->
      <path d="M188 155 Q200 160 212 155" stroke="#DC0B17" stroke-width="3" fill="none"/>
      <rect x="203" y="154" width="4" height="8" rx="1" fill="#DC0B17"/>
    </svg>`
  },
  {
    titleBe: 'Bim Bundeshuus', titleDe: 'Beim Bundeshaus',
    svg: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sky2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0d0d1a"/><stop offset="100%" stop-color="#1a0d00"/>
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill="url(#sky2)"/>
      <!-- Stars -->
      <circle cx="40" cy="25" r="1" fill="#fff" opacity=".6"/>
      <circle cx="90" cy="15" r="1.3" fill="#fff" opacity=".7"/>
      <circle cx="320" cy="20" r="1" fill="#fff" opacity=".5"/>
      <circle cx="370" cy="35" r="1.2" fill="#fff" opacity=".7"/>
      <!-- Ground -->
      <rect x="0" y="200" width="400" height="60" fill="#0d0d0d"/>
      <!-- Bundeshaus main building -->
      <rect x="60" y="110" width="280" height="100" fill="#1a1a1a"/>
      <!-- Dome -->
      <ellipse cx="200" cy="110" rx="55" ry="20" fill="#222"/>
      <path d="M145 110 Q200 55 255 110" fill="#1e1e1e" stroke="#333" stroke-width="1"/>
      <!-- Dome lantern -->
      <rect x="192" y="55" width="16" height="20" rx="2" fill="#2a2a2a"/>
      <circle cx="200" cy="52" r="5" fill="#F0A500" opacity=".9"/>
      <!-- Dome windows -->
      <ellipse cx="170" cy="90" rx="6" ry="9" fill="#F0A500" opacity=".3"/>
      <ellipse cx="200" cy="82" rx="6" ry="9" fill="#F0A500" opacity=".3"/>
      <ellipse cx="230" cy="90" rx="6" ry="9" fill="#F0A500" opacity=".3"/>
      <!-- Columns -->
      <rect x="90" y="130" width="10" height="80" fill="#222"/>
      <rect x="120" y="130" width="10" height="80" fill="#222"/>
      <rect x="150" y="130" width="10" height="80" fill="#222"/>
      <rect x="240" y="130" width="10" height="80" fill="#222"/>
      <rect x="270" y="130" width="10" height="80" fill="#222"/>
      <rect x="300" y="130" width="10" height="80" fill="#222"/>
      <!-- Windows -->
      <rect x="175" y="145" width="20" height="30" rx="2" fill="#F0A500" opacity=".25"/>
      <rect x="205" y="145" width="20" height="30" rx="2" fill="#F0A500" opacity=".25"/>
      <!-- Steps -->
      <rect x="50" y="205" width="300" height="8" rx="1" fill="#1e1e1e"/>
      <rect x="40" y="213" width="320" height="8" rx="1" fill="#181818"/>
      <!-- Flags -->
      <rect x="125" y="95" width="2" height="20" fill="#555"/>
      <rect x="127" y="95" width="12" height="8" fill="#DC0B17"/>
      <rect x="273" y="95" width="2" height="20" fill="#555"/>
      <rect x="275" y="95" width="12" height="8" fill="#DC0B17"/>
      <!-- Bear standing in front -->
      <ellipse cx="200" cy="198" rx="18" ry="16" fill="#1a0a00"/>
      <circle cx="200" cy="178" r="15" fill="#1a0a00"/>
      <circle cx="191" cy="165" r="6" fill="#1a0a00"/>
      <circle cx="209" cy="165" r="6" fill="#1a0a00"/>
      <circle cx="191" cy="165" r="3" fill="#2d1500"/>
      <circle cx="209" cy="165" r="3" fill="#2d1500"/>
      <circle cx="196" cy="176" r="3" fill="#F0A500"/>
      <circle cx="204" cy="176" r="3" fill="#F0A500"/>
      <circle cx="196.5" cy="176" r="1.5" fill="#000"/>
      <circle cx="204.5" cy="176" r="1.5" fill="#000"/>
      <ellipse cx="200" cy="183" rx="6" ry="4" fill="#2d1500"/>
      <circle cx="200" cy="181" r="2" fill="#0d0d0d"/>
      <!-- Arms raised -->
      <ellipse cx="178" cy="190" rx="6" ry="12" fill="#1a0a00" transform="rotate(-25 178 190)"/>
      <ellipse cx="222" cy="190" rx="6" ry="12" fill="#1a0a00" transform="rotate(25 222 190)"/>
      <!-- Bow tie -->
      <path d="M194 188 L198 191 L194 194 Z" fill="#F0A500"/>
      <path d="M206 188 L202 191 L206 194 Z" fill="#F0A500"/>
      <circle cx="200" cy="191" r="2" fill="#F0A500"/>
    </svg>`
  },
  {
    titleBe: 'Vor em Münster', titleDe: 'Vor dem Münster',
    svg: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sky3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#050510"/><stop offset="100%" stop-color="#0d0a00"/>
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill="url(#sky3)"/>
      <!-- Stars -->
      <circle cx="60" cy="20" r="1.2" fill="#fff" opacity=".7"/>
      <circle cx="150" cy="10" r="1" fill="#fff" opacity=".6"/>
      <circle cx="350" cy="15" r="1.3" fill="#fff" opacity=".8"/>
      <circle cx="30" cy="50" r="0.9" fill="#fff" opacity=".5"/>
      <!-- Ground -->
      <rect x="0" y="210" width="400" height="50" fill="#0a0a0a"/>
      <!-- Cobblestones -->
      <rect x="0" y="210" width="400" height="50" fill="#0d0d0d"/>
      <line x1="50" y1="215" x2="50" y2="260" stroke="#111" stroke-width="1"/>
      <line x1="100" y1="215" x2="100" y2="260" stroke="#111" stroke-width="1"/>
      <line x1="150" y1="215" x2="150" y2="260" stroke="#111" stroke-width="1"/>
      <line x1="200" y1="215" x2="200" y2="260" stroke="#111" stroke-width="1"/>
      <line x1="250" y1="215" x2="250" y2="260" stroke="#111" stroke-width="1"/>
      <line x1="300" y1="215" x2="300" y2="260" stroke="#111" stroke-width="1"/>
      <line x1="350" y1="215" x2="350" y2="260" stroke="#111" stroke-width="1"/>
      <line x1="0" y1="230" x2="400" y2="230" stroke="#111" stroke-width="1"/>
      <line x1="0" y1="245" x2="400" y2="245" stroke="#111" stroke-width="1"/>
      <!-- Münster tower -->
      <rect x="165" y="20" width="70" height="200" fill="#151515"/>
      <!-- Tower spire -->
      <polygon points="200,0 155,20 245,20" fill="#1a1a1a"/>
      <!-- Gothic windows on tower -->
      <path d="M183 60 L183 85 Q192 90 200 85 Q208 90 217 85 L217 60 Q208 50 200 48 Q192 50 183 60Z" fill="#F0A500" opacity=".2"/>
      <path d="M183 110 L183 135 Q192 140 200 135 Q208 140 217 135 L217 110 Q208 100 200 98 Q192 100 183 110Z" fill="#F0A500" opacity=".2"/>
      <path d="M183 160 L183 185 Q192 190 200 185 Q208 190 217 185 L217 160 Q208 150 200 148 Q192 150 183 160Z" fill="#F0A500" opacity=".15"/>
      <!-- Side naves -->
      <rect x="90" y="100" width="75" height="120" fill="#111"/>
      <rect x="235" y="100" width="75" height="120" fill="#111"/>
      <!-- Gothic arches on naves -->
      <path d="M100 150 Q127 130 154 150" stroke="#F0A500" stroke-width="1" fill="none" opacity=".3"/>
      <path d="M246 150 Q263 130 300 150" stroke="#F0A500" stroke-width="1" fill="none" opacity=".3"/>
      <!-- Rose window glow -->
      <circle cx="200" cy="45" r="8" fill="none" stroke="#F0A500" stroke-width="1.5" opacity=".4"/>
      <circle cx="200" cy="45" r="4" fill="#F0A500" opacity=".2"/>
      <!-- Bear sitting at base -->
      <ellipse cx="200" cy="210" rx="20" ry="16" fill="#1a0a00"/>
      <circle cx="200" cy="190" r="16" fill="#1a0a00"/>
      <circle cx="189" cy="176" r="7" fill="#1a0a00"/>
      <circle cx="211" cy="176" r="7" fill="#1a0a00"/>
      <circle cx="189" cy="176" r="3.5" fill="#2d1500"/>
      <circle cx="211" cy="176" r="3.5" fill="#2d1500"/>
      <circle cx="195" cy="188" r="3.2" fill="#F0A500"/>
      <circle cx="205" cy="188" r="3.2" fill="#F0A500"/>
      <circle cx="195.5" cy="188" r="1.6" fill="#000"/>
      <circle cx="205.5" cy="188" r="1.6" fill="#000"/>
      <ellipse cx="200" cy="196" rx="7" ry="4.5" fill="#2d1500"/>
      <circle cx="200" cy="194" r="2.2" fill="#0d0d0d"/>
      <!-- Paws -->
      <ellipse cx="180" cy="210" rx="9" ry="7" fill="#1a0a00" transform="rotate(-20 180 210)"/>
      <ellipse cx="220" cy="210" rx="9" ry="7" fill="#1a0a00" transform="rotate(20 220 210)"/>
      <!-- Little candle -->
      <rect x="198" y="200" width="4" height="10" fill="#F0A500" opacity=".8"/>
      <ellipse cx="200" cy="199" rx="3" ry="2" fill="#F0A500"/>
      <path d="M200 195 Q202 191 200 188 Q198 191 200 195Z" fill="#DC0B17" opacity=".9"/>
    </svg>`
  },
  {
    titleBe: 'Im Bäregrabe', titleDe: 'Im Bärengraben',
    svg: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sky4" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0a1a0a"/><stop offset="100%" stop-color="#1a1000"/>
        </linearGradient>
        <linearGradient id="grass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0d2b0d"/><stop offset="100%" stop-color="#0a1a0a"/>
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill="url(#sky4)"/>
      <!-- Stars -->
      <circle cx="70" cy="18" r="1.1" fill="#fff" opacity=".6"/>
      <circle cx="180" cy="12" r="1.3" fill="#fff" opacity=".7"/>
      <circle cx="330" cy="22" r="1" fill="#fff" opacity=".6"/>
      <!-- Full moon -->
      <circle cx="60" cy="55" r="28" fill="#F0A500" opacity=".85"/>
      <circle cx="55" cy="48" r="8" fill="#cc8800" opacity=".3"/>
      <circle cx="68" cy="60" r="5" fill="#cc8800" opacity=".2"/>
      <!-- Trees -->
      <rect x="20" y="120" width="10" height="80" fill="#0d1a0d"/>
      <ellipse cx="25" cy="105" rx="22" ry="30" fill="#0a1a0a"/>
      <ellipse cx="25" cy="95" rx="16" ry="22" fill="#0d2000"/>
      <rect x="355" y="130" width="10" height="70" fill="#0d1a0d"/>
      <ellipse cx="360" cy="115" rx="22" ry="28" fill="#0a1a0a"/>
      <ellipse cx="360" cy="106" rx="16" ry="20" fill="#0d2000"/>
      <rect x="300" y="140" width="8" height="60" fill="#0d1a0d"/>
      <ellipse cx="304" cy="128" rx="18" ry="22" fill="#0d1a0d"/>
      <rect x="60" y="140" width="8" height="60" fill="#0d1a0d"/>
      <ellipse cx="64" cy="128" rx="18" ry="22" fill="#0d1a0d"/>
      <!-- Pit walls -->
      <rect x="80" y="160" width="240" height="100" rx="8" fill="#111"/>
      <rect x="90" y="170" width="220" height="90" rx="6" fill="#0d0d0d"/>
      <!-- Ground of pit -->
      <ellipse cx="200" cy="245" rx="105" ry="20" fill="url(#grass)"/>
      <!-- Rock -->
      <ellipse cx="240" cy="240" rx="30" ry="12" fill="#111"/>
      <ellipse cx="160" cy="242" rx="20" ry="8" fill="#111"/>
      <!-- Pit walls detail -->
      <path d="M90 170 Q200 165 310 170" stroke="#1a1a1a" stroke-width="2" fill="none"/>
      <!-- Wall top -->
      <rect x="75" y="150" width="250" height="15" rx="4" fill="#1a1a1a"/>
      <!-- Fence posts -->
      <rect x="100" y="140" width="5" height="25" fill="#222"/>
      <rect x="130" y="140" width="5" height="25" fill="#222"/>
      <rect x="160" y="140" width="5" height="25" fill="#222"/>
      <rect x="190" y="140" width="5" height="25" fill="#222"/>
      <rect x="220" y="140" width="5" height="25" fill="#222"/>
      <rect x="250" y="140" width="5" height="25" fill="#222"/>
      <rect x="280" y="140" width="5" height="25" fill="#222"/>
      <line x1="100" y1="145" x2="285" y2="145" stroke="#333" stroke-width="2"/>
      <!-- Big bear in pit -->
      <ellipse cx="195" cy="238" rx="28" ry="22" fill="#1a0a00"/>
      <circle cx="195" cy="210" r="22" fill="#1a0a00"/>
      <circle cx="180" cy="192" r="10" fill="#1a0a00"/>
      <circle cx="210" cy="192" r="10" fill="#1a0a00"/>
      <circle cx="180" cy="192" r="5" fill="#2d1500"/>
      <circle cx="210" cy="192" r="5" fill="#2d1500"/>
      <circle cx="187" cy="208" r="4.5" fill="#F0A500"/>
      <circle cx="203" cy="208" r="4.5" fill="#F0A500"/>
      <circle cx="187.5" cy="208" r="2.2" fill="#000"/>
      <circle cx="203.5" cy="208" r="2.2" fill="#000"/>
      <ellipse cx="195" cy="218" rx="9" ry="6" fill="#2d1500"/>
      <circle cx="195" cy="216" r="3" fill="#0d0d0d"/>
      <!-- Small bear waving (onlooker from edge) -->
      <circle cx="340" cy="147" r="10" fill="#1a0a00"/>
      <circle cx="334" cy="138" r="4" fill="#1a0a00"/>
      <circle cx="346" cy="138" r="4" fill="#1a0a00"/>
      <circle cx="337" cy="146" r="2" fill="#F0A500"/>
      <circle cx="343" cy="146" r="2" fill="#F0A500"/>
      <ellipse cx="340" cy="154" rx="8" ry="7" fill="#1a0a00"/>
      <!-- Waving arm -->
      <ellipse cx="325" cy="148" rx="4" ry="8" fill="#1a0a00" transform="rotate(-30 325 148)"/>
    </svg>`
  },
  {
    titleBe: 'A dr Zytglogge', titleDe: 'An der Zytglogge',
    svg: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sky5" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0d0a1a"/><stop offset="100%" stop-color="#1a0d0d"/>
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill="url(#sky5)"/>
      <!-- Stars -->
      <circle cx="50" cy="20" r="1.2" fill="#fff" opacity=".7"/>
      <circle cx="130" cy="10" r="1" fill="#fff" opacity=".6"/>
      <circle cx="340" cy="18" r="1.3" fill="#fff" opacity=".8"/>
      <circle cx="380" cy="40" r="1" fill="#fff" opacity=".5"/>
      <!-- Ground / street -->
      <rect x="0" y="210" width="400" height="50" fill="#0a0a0a"/>
      <rect x="0" y="210" width="400" height="3" fill="#151515"/>
      <!-- Arcade buildings left -->
      <rect x="0" y="130" width="130" height="90" fill="#111"/>
      <rect x="0" y="130" width="130" height="10" fill="#161616"/>
      <rect x="10" y="145" width="25" height="35" rx="2" fill="#F0A500" opacity=".15"/>
      <rect x="45" y="145" width="25" height="35" rx="2" fill="#F0A500" opacity=".1"/>
      <rect x="80" y="145" width="25" height="35" rx="2" fill="#F0A500" opacity=".15"/>
      <!-- Arcade buildings right -->
      <rect x="270" y="130" width="130" height="90" fill="#111"/>
      <rect x="270" y="130" width="130" height="10" fill="#161616"/>
      <rect x="280" y="145" width="25" height="35" rx="2" fill="#F0A500" opacity=".1"/>
      <rect x="315" y="145" width="25" height="35" rx="2" fill="#F0A500" opacity=".15"/>
      <rect x="350" y="145" width="25" height="35" rx="2" fill="#F0A500" opacity=".1"/>
      <!-- Zytglogge tower -->
      <rect x="155" y="60" width="90" height="160" fill="#141414"/>
      <!-- Tower top -->
      <rect x="148" y="50" width="104" height="18" rx="2" fill="#1a1a1a"/>
      <!-- Conical roof -->
      <polygon points="200,18 148,50 252,50" fill="#1c1c1c"/>
      <!-- Clock face - the highlight! -->
      <circle cx="200" cy="90" r="32" fill="#0d0d0d" stroke="#F0A500" stroke-width="2"/>
      <circle cx="200" cy="90" r="28" fill="#111"/>
      <!-- Clock details -->
      <circle cx="200" cy="90" r="3" fill="#F0A500"/>
      <!-- Hour markers -->
      <line x1="200" y1="65" x2="200" y2="70" stroke="#F0A500" stroke-width="2"/>
      <line x1="200" y1="110" x2="200" y2="115" stroke="#F0A500" stroke-width="2"/>
      <line x1="175" y1="90" x2="180" y2="90" stroke="#F0A500" stroke-width="2"/>
      <line x1="220" y1="90" x2="225" y2="90" stroke="#F0A500" stroke-width="2"/>
      <line x1="183" y1="73" x2="186" y2="77" stroke="#F0A500" stroke-width="1.5"/>
      <line x1="214" y1="103" x2="217" y2="107" stroke="#F0A500" stroke-width="1.5"/>
      <line x1="183" y1="107" x2="186" y2="103" stroke="#F0A500" stroke-width="1.5"/>
      <line x1="214" y1="77" x2="217" y2="73" stroke="#F0A500" stroke-width="1.5"/>
      <!-- Clock hands (showing ~10:10) -->
      <line x1="200" y1="90" x2="190" y2="73" stroke="#DC0B17" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="200" y1="90" x2="214" y2="73" stroke="#F0A500" stroke-width="2" stroke-linecap="round"/>
      <!-- Glow around clock -->
      <circle cx="200" cy="90" r="34" fill="none" stroke="#F0A500" stroke-width="0.5" opacity=".4"/>
      <!-- Tower windows -->
      <rect x="185" y="130" width="14" height="20" rx="2" fill="#F0A500" opacity=".2"/>
      <rect x="185" y="160" width="14" height="18" rx="2" fill="#F0A500" opacity=".15"/>
      <rect x="175" y="185" width="10" height="15" rx="1" fill="#F0A500" opacity=".1"/>
      <rect x="215" y="185" width="10" height="15" rx="1" fill="#F0A500" opacity=".1"/>
      <!-- Bear with a watch -->
      <ellipse cx="200" cy="210" rx="20" ry="15" fill="#1a0a00"/>
      <circle cx="200" cy="192" r="16" fill="#1a0a00"/>
      <circle cx="190" cy="179" r="7" fill="#1a0a00"/>
      <circle cx="210" cy="179" r="7" fill="#1a0a00"/>
      <circle cx="190" cy="179" r="3.5" fill="#2d1500"/>
      <circle cx="210" cy="179" r="3.5" fill="#2d1500"/>
      <circle cx="195" cy="190" r="3.2" fill="#F0A500"/>
      <circle cx="205" cy="190" r="3.2" fill="#F0A500"/>
      <circle cx="195.5" cy="190" r="1.6" fill="#000"/>
      <circle cx="205.5" cy="190" r="1.6" fill="#000"/>
      <ellipse cx="200" cy="198" rx="7" ry="4.5" fill="#2d1500"/>
      <circle cx="200" cy="196" r="2.2" fill="#0d0d0d"/>
      <!-- Arms looking at watch -->
      <ellipse cx="220" cy="198" rx="8" ry="6" fill="#1a0a00" transform="rotate(20 220 198)"/>
      <ellipse cx="180" cy="202" rx="7" ry="5" fill="#1a0a00" transform="rotate(-15 180 202)"/>
      <!-- Watch on wrist -->
      <rect x="217" y="200" width="8" height="6" rx="1" fill="#F0A500" opacity=".8"/>
      <circle cx="221" cy="203" r="2.5" fill="#0d0d0d"/>
      <circle cx="221" cy="203" r="0.8" fill="#F0A500"/>
    </svg>`
  }
];

const HTML = `<!DOCTYPE html>
<html lang="de-CH" data-theme="auto">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Äuä – Das Bärner Wort</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap" rel="stylesheet">
  <style>
    /* ===== RESET ===== */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      background: var(--bg); color: var(--text);
      transition: background 0.4s, color 0.4s;
      min-height: 100vh; overflow-x: hidden;
    }

    /* ===== THEME – Schwarz / Gold / Rot ===== */
    :root {
      --bg:        #F5F0E8;
      --bg2:       #EDE7D9;
      --bg3:       #E0D8C8;
      --text:      #0D0D0D;
      --text2:     #3D3020;
      --accent:    #DC0B17;
      --gold:      #C8860A;
      --gold-lt:   #F0A500;
      --card:      #FFFFFF;
      --border:    rgba(0,0,0,0.10);
      --shadow:    0 4px 24px rgba(0,0,0,0.09);
      --shadow-lg: 0 20px 60px rgba(0,0,0,0.14);
      --hero-bg:   linear-gradient(160deg,#1a1a1a 0%,#2a1800 50%,#1a0a00 100%);
    }
    [data-theme="dark"] {
      --bg:        #0A0804;
      --bg2:       #140E04;
      --bg3:       #1C1508;
      --text:      #F5EDD8;
      --text2:     #B8A070;
      --accent:    #FF2233;
      --gold:      #F0A500;
      --gold-lt:   #FFD060;
      --card:      #140E04;
      --border:    rgba(240,165,0,0.12);
      --shadow:    0 4px 24px rgba(0,0,0,0.4);
      --shadow-lg: 0 20px 60px rgba(0,0,0,0.6);
      --hero-bg:   linear-gradient(160deg,#000000 0%,#0D0800 50%,#050000 100%);
    }

    /* ===== HEADER ===== */
    header {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      display: flex; align-items: center; justify-content: space-between;
      padding: 0.8rem 2rem;
      background: color-mix(in srgb, var(--bg) 88%, transparent);
      backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
      border-bottom: 1px solid var(--border);
    }
    .logo { font-size: 1.5rem; font-weight: 900; color: var(--gold); letter-spacing: -0.03em; }
    .controls { display: flex; gap: 0.6rem; }
    .btn {
      background: var(--bg2); border: 1px solid var(--border);
      border-radius: 100px; padding: 0.38rem 0.95rem;
      cursor: pointer; font-size: 0.76rem; font-weight: 700;
      color: var(--text); transition: all 0.2s; font-family: inherit;
      letter-spacing: 0.02em;
    }
    .btn:hover { background: var(--gold); color: #000; border-color: var(--gold); transform: scale(1.04); }

    /* ===== PARTICLES ===== */
    .particles { position: fixed; inset: 0; pointer-events: none; overflow: hidden; z-index: 0; }
    .particle { position: absolute; animation: floatUp linear infinite; opacity: 0; }

    /* ===== HERO ===== */
    .hero {
      min-height: 100vh; display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      text-align: center; padding: 7rem 2rem 5rem;
      background: var(--hero-bg);
      position: relative; overflow: hidden; z-index: 1;
    }
    /* Diagonal gold stripe */
    .hero::before {
      content: ''; position: absolute; inset: 0;
      background: linear-gradient(135deg, transparent 40%, rgba(200,134,10,0.06) 50%, transparent 60%);
      pointer-events: none;
    }
    /* Red bottom accent */
    .hero::after {
      content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 4px;
      background: var(--accent);
    }
    .hero-eyebrow {
      font-size: 0.7rem; font-weight: 700; letter-spacing: 0.25em;
      text-transform: uppercase; color: var(--gold-lt);
      margin-bottom: 1.5rem;
      opacity: 0; animation: fadeUp 0.7s ease 0.2s forwards;
    }
    .hero-word {
      font-size: clamp(5.5rem, 22vw, 18rem);
      font-weight: 900; line-height: 0.88;
      letter-spacing: -0.04em; margin-bottom: 2rem;
      filter: drop-shadow(0 0 60px rgba(200,134,10,0.25));
    }
    .hero-word .letter {
      display: inline-block; color: #F5EDD8;
      opacity: 0; animation: letterPop 0.7s cubic-bezier(0.34,1.56,0.64,1) forwards;
    }
    .hero-word .letter.red { color: var(--accent); }
    .hero-word .letter:nth-child(1) { animation-delay: 0.35s; }
    .hero-word .letter:nth-child(2) { animation-delay: 0.5s; color: var(--gold-lt); }
    .hero-word .letter:nth-child(3) { animation-delay: 0.65s; }
    .hero-sub {
      font-size: clamp(0.95rem, 2.5vw, 1.25rem); color: rgba(245,237,216,0.55);
      font-weight: 300; max-width: 440px; line-height: 1.75;
      opacity: 0; animation: fadeUp 0.7s ease 1s forwards;
    }
    .scroll-hint {
      position: absolute; bottom: 2.5rem;
      display: flex; flex-direction: column; align-items: center; gap: 0.4rem;
      color: rgba(245,237,216,0.35); font-size: 0.68rem;
      letter-spacing: 0.15em; text-transform: uppercase;
      opacity: 0; animation: fadeIn 1s ease 1.6s forwards;
    }
    .scroll-chevron { width: 20px; height: 20px; animation: bounce 2s ease infinite; }

    /* ===== SECTIONS ===== */
    .content { padding: 4rem 1.5rem 6rem; max-width: 960px; margin: 0 auto; position: relative; z-index: 1; }
    .card {
      background: var(--card); border-radius: 20px;
      padding: 2.5rem; margin-bottom: 1.5rem;
      border: 1px solid var(--border); box-shadow: var(--shadow);
      opacity: 0; transform: translateY(28px);
      transition: opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s;
    }
    .card.visible { opacity: 1; transform: translateY(0); }
    .card:hover { box-shadow: var(--shadow-lg); }
    /* Gold left border accent */
    .card { border-left: 4px solid var(--gold); }
    .card-num {
      font-size: 0.68rem; font-weight: 800; letter-spacing: 0.2em;
      text-transform: uppercase; color: var(--accent); margin-bottom: 0.4rem;
    }
    .card-title {
      font-size: clamp(1.4rem, 3.5vw, 2.1rem);
      font-weight: 900; letter-spacing: -0.02em; margin-bottom: 1rem;
      color: var(--text);
    }
    .card-text { font-size: 1rem; line-height: 1.85; color: var(--text2); }

    /* Pronunciation */
    .pron-box {
      background: var(--bg2); border-radius: 14px;
      padding: 1.4rem 1.6rem; margin-top: 1.5rem;
      border: 1px solid var(--border);
      display: grid; grid-template-columns: auto 1fr; gap: 1.5rem; align-items: center;
    }
    .ipa { font-size: 2.4rem; font-weight: 900; color: var(--gold); font-family: serif; }
    .ipa-desc { font-size: 0.87rem; color: var(--text2); line-height: 1.8; }
    .ipa-desc strong { color: var(--text); }

    /* Meaning chips */
    .chips { display: grid; grid-template-columns: repeat(auto-fill, minmax(155px,1fr)); gap: 0.7rem; margin-top: 1.5rem; }
    .chip {
      background: var(--bg2); border-radius: 12px; padding: 1rem;
      border: 1px solid var(--border); text-align: center;
      font-weight: 700; font-size: 0.82rem; transition: all 0.2s; cursor: default;
      color: var(--text);
    }
    .chip:hover { background: var(--gold); color: #000; transform: translateY(-3px); box-shadow: 0 8px 20px rgba(200,134,10,0.25); border-color: var(--gold); }
    .chip .ch-icon { font-size: 1.6rem; display: block; margin-bottom: 0.4rem; }

    /* Examples */
    .examples { display: flex; flex-direction: column; gap: 1rem; margin-top: 1.5rem; }
    .ex {
      background: var(--bg2); border-radius: 12px;
      padding: 1.2rem 1.4rem;
      border-left: 3px solid var(--accent);
    }
    .ex-q { font-size: 1.05rem; font-weight: 800; font-style: italic; margin-bottom: 0.25rem; }
    .ex-t { font-size: 0.81rem; color: var(--text2); }

    /* ===== BÄREN SECTION ===== */
    .bear-wrap {
      text-align: center; padding: 4rem 2rem;
      background: var(--bg2);
      border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
      position: relative; z-index: 1;
    }
    .bear { font-size: 4rem; cursor: pointer; display: inline-block; transition: transform 0.2s; user-select: none; }
    .bear:hover { transform: scale(1.12) rotate(-6deg); }
    .bear.shake { animation: shake 0.45s ease; }
    .bear-hint { font-size: 0.78rem; color: var(--text2); margin-top: 0.5rem; }

    /* ===== FOOTER ===== */
    footer {
      text-align: center; padding: 2.5rem 1rem;
      color: var(--text2); font-size: 0.8rem;
      border-top: 4px solid var(--gold);
      position: relative; z-index: 1;
    }

    /* ===== OVERLAYS ===== */
    .overlay {
      position: fixed; inset: 0; z-index: 500;
      background: rgba(0,0,0,0.92);
      backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
      display: flex; align-items: center; justify-content: center;
      opacity: 0; pointer-events: none; transition: opacity 0.3s;
    }
    .overlay.on { opacity: 1; pointer-events: all; }

    /* Konami */
    .konami-box {
      text-align: center; color: #F5EDD8; padding: 3rem;
      animation: zoomIn 0.5s cubic-bezier(0.34,1.56,0.64,1);
    }
    .konami-emoji { font-size: 4rem; margin-bottom: 0.5rem; }
    .konami-title { font-size: clamp(2rem,6vw,3.5rem); font-weight: 900; color: #F0A500; margin-bottom: 0.4rem; }
    .konami-sub { color: rgba(245,237,216,0.5); font-size: 0.88rem; margin-bottom: 2.5rem; }
    .bars { display: flex; align-items: flex-end; justify-content: center; gap: 5px; height: 48px; }
    .bar {
      border-radius: 4px; animation: musicBar 0.7s ease infinite alternate;
    }
    .bar:nth-child(1) { width: 9px; height: 14px; background: #DC0B17; animation-delay: 0s; }
    .bar:nth-child(2) { width: 9px; height: 26px; background: #F0A500; animation-delay: 0.12s; }
    .bar:nth-child(3) { width: 9px; height: 40px; background: #DC0B17; animation-delay: 0.24s; }
    .bar:nth-child(4) { width: 9px; height: 26px; background: #F0A500; animation-delay: 0.36s; }
    .bar:nth-child(5) { width: 9px; height: 14px; background: #DC0B17; animation-delay: 0.48s; }
    .esc-hint { margin-top: 2rem; font-size: 0.7rem; color: rgba(245,237,216,0.2); letter-spacing: 0.1em; }

    /* Slideshow */
    .ss-modal {
      background: var(--card); border-radius: 22px;
      max-width: 580px; width: 93%; overflow: hidden;
      animation: zoomIn 0.5s cubic-bezier(0.34,1.56,0.64,1);
      box-shadow: 0 40px 80px rgba(0,0,0,0.7);
      border-top: 4px solid var(--gold-lt);
    }
    .ss-head {
      padding: 1.2rem 1.5rem;
      display: flex; align-items: center; justify-content: space-between;
      border-bottom: 1px solid var(--border);
    }
    .ss-head-title { font-weight: 900; font-size: 1rem; color: var(--text); }
    .ss-close {
      width: 30px; height: 30px; border-radius: 50%;
      background: var(--bg2); border: none; cursor: pointer;
      font-size: 0.9rem; color: var(--text); display: flex;
      align-items: center; justify-content: center; transition: all 0.2s; font-family: inherit;
    }
    .ss-close:hover { background: var(--accent); color: #fff; }
    .ss-stage { position: relative; aspect-ratio: 16/9; overflow: hidden; background: #0A0804; }
    .slide {
      position: absolute; inset: 0;
      opacity: 0; transition: opacity 0.5s;
    }
    .slide.on { opacity: 1; }
    .slide svg { width: 100%; height: 100%; }
    .slide-caption {
      position: absolute; bottom: 0; left: 0; right: 0;
      background: linear-gradient(transparent, rgba(0,0,0,0.75));
      padding: 1.5rem 1rem 0.75rem;
      font-size: 0.85rem; font-weight: 700; color: #F5EDD8;
      text-align: center;
    }
    .ss-foot {
      padding: 0.9rem 1.4rem;
      display: flex; align-items: center; justify-content: space-between;
      border-top: 1px solid var(--border);
    }
    .ss-btn {
      background: var(--bg2); border: 1px solid var(--border);
      border-radius: 8px; padding: 0.4rem 0.9rem;
      cursor: pointer; font-size: 0.78rem; font-weight: 700;
      color: var(--text); transition: all 0.2s; font-family: inherit;
    }
    .ss-btn:hover { background: var(--gold); color: #000; border-color: var(--gold); }
    .ss-count { font-size: 0.78rem; color: var(--text2); font-weight: 600; }

    /* ===== KEYFRAMES ===== */
    @keyframes letterPop {
      from { opacity: 0; transform: translateY(24px) scale(0.75); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(18px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes bounce {
      0%,100% { transform: translateY(0); }
      50%     { transform: translateY(7px); }
    }
    @keyframes floatUp {
      0%  { transform: translateY(100vh) rotate(0deg); opacity: 0; }
      8%  { opacity: 0.1; }
      92% { opacity: 0.1; }
      100%{ transform: translateY(-80px) rotate(360deg); opacity: 0; }
    }
    @keyframes shake {
      0%,100% { transform: rotate(0); }
      20%     { transform: rotate(-18deg) scale(1.18); }
      45%     { transform: rotate(18deg) scale(1.28); }
      65%     { transform: rotate(-10deg) scale(1.12); }
      85%     { transform: rotate(8deg); }
    }
    @keyframes zoomIn {
      from { opacity: 0; transform: scale(0.82); }
      to   { opacity: 1; transform: scale(1); }
    }
    @keyframes musicBar {
      from { transform: scaleY(0.2); }
      to   { transform: scaleY(1); }
    }

    /* ===== RESPONSIVE ===== */
    @media (max-width: 600px) {
      header { padding: 0.65rem 1rem; }
      .content { padding: 3rem 0.9rem 4rem; }
      .card { padding: 1.6rem 1.1rem; }
      .pron-box { grid-template-columns: 1fr; text-align: center; }
      .chips { grid-template-columns: repeat(2,1fr); }
    }
  </style>
</head>
<body>

<!-- HEADER -->
<header>
  <div class="logo">Äuä</div>
  <div class="controls">
    <button class="btn" id="langBtn">
      <span data-bärn>DE</span><span data-hochd style="display:none">BE</span>
    </button>
    <button class="btn" id="themeBtn"><span id="themeIcon">☀️</span></button>
  </div>
</header>

<!-- PARTICLES -->
<div class="particles" id="pts"></div>

<!-- HERO -->
<section class="hero">
  <div class="hero-eyebrow">
    <span data-bärn>Bärndütschs Wort</span>
    <span data-hochd style="display:none">Berndeutsches Wort</span>
  </div>
  <div class="hero-word" aria-label="Äuä">
    <span class="letter red">Ä</span><span class="letter">u</span><span class="letter red">ä</span>
  </div>
  <p class="hero-sub">
    <span data-bärn>Es Wort, wo alles und nüt seit.</span>
    <span data-hochd style="display:none">Ein Wort, das alles und nichts sagt.</span>
  </p>
  <div class="scroll-hint">
    <svg class="scroll-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
      <path d="M6 9l6 6 6-6"/>
    </svg>
    <span data-bärn>Witer use</span>
    <span data-hochd style="display:none">Weiter</span>
  </div>
</section>

<!-- SECTIONS -->
<main class="content">

  <article class="card" id="c1">
    <div class="card-num"><span data-bärn>01 — Herkuft</span><span data-hochd style="display:none">01 — Herkunft</span></div>
    <h2 class="card-title"><span data-bärn>Woher chunts «Äuä»?</span><span data-hochd style="display:none">Woher kommt «Äuä»?</span></h2>
    <p class="card-text">
      <span data-bärn>«Äuä» isch es ächts Bärndütschs Wort, wo sit Generatione im Kanton Bärn brüchlich isch. Es isch verwandt mit em alttüütsche Usruf «oh weh» und het si über d Johrhunderte zur typisch bärnerische Kürzigsform entwicklet. Es isch es Wort, wo d Bärner Seel widerspieglet: ruehig, direkt und mit emne Schuss Fatalismus.</span>
      <span data-hochd style="display:none">«Äuä» ist ein echtes Berndeutsches Wort, das seit Generationen im Kanton Bern gebräuchlich ist. Es ist verwandt mit dem althochdeutschen Ausruf «oh weh» und hat sich über die Jahrhunderte zur typisch bernerischen Kurzform entwickelt. Es ist ein Wort, das die Berner Seele widerspiegelt: ruhig, direkt und mit einer Prise Fatalismus.</span>
    </p>
  </article>

  <article class="card" id="c2">
    <div class="card-num"><span data-bärn>02 — Ussprach</span><span data-hochd style="display:none">02 — Aussprache</span></div>
    <h2 class="card-title"><span data-bärn>Wie sprichts me us?</span><span data-hochd style="display:none">Wie spricht man es aus?</span></h2>
    <p class="card-text">
      <span data-bärn>D Ussprach isch eifach, sobald me s Prinzip begriffe hät. Beidi «ä» wärde offe usgsprochen — ähnlich wie im Hochdüütsche «Bär». Dä churze «u»-Lut dazwüsche verbindet s zu emne fliessende Klang.</span>
      <span data-hochd style="display:none">Die Aussprache ist einfach, sobald man das Prinzip begriffen hat. Beide «ä» werden offen ausgesprochen — ähnlich wie im Hochdeutschen «Bär». Der kurze «u»-Laut dazwischen verbindet alles zu einem fliessenden Klang.</span>
    </p>
    <div class="pron-box">
      <div class="ipa">/ɛu̯ɛ/</div>
      <div class="ipa-desc">
        <strong>Ä</strong> — <span data-bärn>Offe «ä» wie i «Bär»</span><span data-hochd style="display:none">Offenes «ä» wie in «Bär»</span><br>
        <strong>U</strong> — <span data-bärn>Churze Übergangs-Vokal</span><span data-hochd style="display:none">Kurzer Übergangsvokal</span><br>
        <strong>Ä</strong> — <span data-bärn>Wieder offe «ä», en Töne tiefer</span><span data-hochd style="display:none">Wieder offenes «ä», einen Ton tiefer</span>
      </div>
    </div>
  </article>

  <article class="card" id="c3">
    <div class="card-num"><span data-bärn>03 — Bedütig</span><span data-hochd style="display:none">03 — Bedeutung</span></div>
    <h2 class="card-title"><span data-bärn>Was bedeutets?</span><span data-hochd style="display:none">Was bedeutet es?</span></h2>
    <p class="card-text">
      <span data-bärn>«Äuä» isch vielsiitig — es chan Resignatio, Bedure oder eifach Akzeptanz usdrücke. Je nach Tonfall cha s völlig verschiedeni Nüancene ha.</span>
      <span data-hochd style="display:none">«Äuä» ist vielseitig — es kann Resignation, Bedauern oder einfach Akzeptanz ausdrücken. Je nach Tonlage kann es völlig verschiedene Nuancen haben.</span>
    </p>
    <div class="chips">
      <div class="chip"><span class="ch-icon">😔</span><span data-bärn>Resignatio</span><span data-hochd style="display:none">Resignation</span></div>
      <div class="chip"><span class="ch-icon">🤷</span><span data-bärn>So isch es halt</span><span data-hochd style="display:none">So ist es halt</span></div>
      <div class="chip"><span class="ch-icon">💔</span><span data-bärn>Bedure</span><span data-hochd style="display:none">Bedauern</span></div>
      <div class="chip"><span class="ch-icon">🙄</span><span data-bärn>Mild Kritik</span><span data-hochd style="display:none">Milde Kritik</span></div>
      <div class="chip"><span class="ch-icon">✌️</span><span data-bärn>Akzeptanz</span><span data-hochd style="display:none">Akzeptanz</span></div>
      <div class="chip"><span class="ch-icon">😤</span><span data-bärn>Sälber schuld</span><span data-hochd style="display:none">Selber schuld</span></div>
    </div>
  </article>

  <article class="card" id="c4">
    <div class="card-num"><span data-bärn>04 — Bispiel</span><span data-hochd style="display:none">04 — Beispiele</span></div>
    <h2 class="card-title"><span data-bärn>Wie brucht me s?</span><span data-hochd style="display:none">Wie verwendet man es?</span></h2>
    <div class="examples">
      <div class="ex">
        <div class="ex-q">«Hät s nid klappet? — Äuä.»</div>
        <div class="ex-t"><span data-bärn>Hat's nicht geklappt? — So isch das Läbe halt.</span><span data-hochd style="display:none">Hat es nicht geklappt? — So ist das Leben halt.</span></div>
      </div>
      <div class="ex">
        <div class="ex-q">«I ha mys Znacht vergässe. — Äuä!»</div>
        <div class="ex-t"><span data-bärn>Ich ha mys Abigässe vergässe. — Sälber schuld!</span><span data-hochd style="display:none">Ich habe mein Abendessen vergessen. — Selber schuld!</span></div>
      </div>
      <div class="ex">
        <div class="ex-q">«Es rägnet scho wieder. — Äuä…»</div>
        <div class="ex-t"><span data-bärn>Es rägnet scho wieder. — Jo, was cha me mache…</span><span data-hochd style="display:none">Es regnet schon wieder. — Ach ja, was soll man machen…</span></div>
      </div>
    </div>
  </article>

</main>

<!-- BÄREN-BEREICH -->
<div class="bear-wrap">
  <div id="bearBtn" class="bear">🐻</div>
  <p class="bear-hint">
    <span data-bärn>Dr Bärner Bär grüsst di</span>
    <span data-hochd style="display:none">Der Berner Bär grüsst dich</span>
  </p>
</div>

<!-- FOOTER -->
<footer>
  <p><span data-bärn>Gmacht mit ❤️ für d Bärner Sprach — Äuä.</span><span data-hochd style="display:none">Gemacht mit ❤️ für die Berner Sprache — Äuä.</span></p>
</footer>

<!-- EE1: KONAMI -->
<div class="overlay" id="konamiOverlay">
  <div class="konami-box">
    <div class="konami-emoji">🐻</div>
    <div class="konami-title">Äuä!</div>
    <p class="konami-sub">
      <span data-bärn>Du häsch de Geheimcode gfunde! 🎉</span>
      <span data-hochd style="display:none">Du hast den Geheimcode gefunden! 🎉</span>
    </p>
    <div class="bars"><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div></div>
    <p class="esc-hint">ESC</p>
  </div>
</div>

<!-- EE2: SLIDESHOW -->
<div class="overlay" id="ssOverlay">
  <div class="ss-modal">
    <div class="ss-head">
      <span class="ss-head-title">
        <span data-bärn>🐻 Bärn bi Nacht</span>
        <span data-hochd style="display:none">🐻 Bern bei Nacht</span>
      </span>
      <button class="ss-close" id="ssClose">✕</button>
    </div>
    <div class="ss-stage" id="ssStage">
      <!-- Slides injected by JS -->
    </div>
    <div class="ss-foot">
      <button class="ss-btn" id="ssPrev">←</button>
      <span class="ss-count" id="ssCnt">1 / 5</span>
      <button class="ss-btn" id="ssNext">→</button>
    </div>
  </div>
</div>

<script>
// ── SLIDE DATA ────────────────────────────────────────────────
const SLIDES = ${JSON.stringify(SLIDES)};

// Inject slides into DOM
const stage = document.getElementById('ssStage');
SLIDES.forEach((s, i) => {
  const div = document.createElement('div');
  div.className = 'slide' + (i === 0 ? ' on' : '');
  div.innerHTML = s.svg +
    '<div class="slide-caption"><span data-bärn>' + s.titleBe + '</span><span data-hochd style="display:none">' + s.titleDe + '</span></div>';
  stage.appendChild(div);
});

// ── THEME ─────────────────────────────────────────────────────
const root = document.documentElement;
let theme = localStorage.getItem('theme') || 'auto';
function applyTheme(t) {
  const r = t === 'auto' ? (window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light') : t;
  root.setAttribute('data-theme', r);
  document.getElementById('themeIcon').textContent = r === 'dark' ? '🌙' : '☀️';
}
applyTheme(theme);
document.getElementById('themeBtn').addEventListener('click', () => {
  theme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', theme); applyTheme(theme);
});
window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change', () => { if (theme === 'auto') applyTheme('auto'); });

// ── LANGUAGE ──────────────────────────────────────────────────
let lang = localStorage.getItem('lang') || 'bärn';
function applyLang(l) {
  lang = l; localStorage.setItem('lang', l);
  document.querySelectorAll('[data-bärn]').forEach(el => el.style.display = l === 'bärn' ? '' : 'none');
  document.querySelectorAll('[data-hochd]').forEach(el => el.style.display = l === 'hochd' ? '' : 'none');
}
applyLang(lang);
document.getElementById('langBtn').addEventListener('click', () => applyLang(lang === 'bärn' ? 'hochd' : 'bärn'));

// ── PARTICLES ─────────────────────────────────────────────────
const ptc = document.getElementById('pts');
['🐻','⛰️','❄️','🌿','⬛','🟨'].forEach(sym => {
  for (let j = 0; j < 2; j++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.textContent = sym;
    p.style.left = Math.random() * 100 + '%';
    p.style.fontSize = (0.6 + Math.random() * 0.8) + 'rem';
    p.style.animationDuration = (20 + Math.random() * 25) + 's';
    p.style.animationDelay = (Math.random() * 20) + 's';
    ptc.appendChild(p);
  }
});

// ── SCROLL ANIMATIONS ─────────────────────────────────────────
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), { threshold: 0.12 });
document.querySelectorAll('.card').forEach(c => io.observe(c));

// ── KONAMI CODE ───────────────────────────────────────────────
const SEQ = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
let ki = 0;
document.addEventListener('keydown', e => {
  ki = e.key === SEQ[ki] ? ki + 1 : (e.key === SEQ[0] ? 1 : 0);
  if (ki === SEQ.length) { ki = 0; showKonami(); }
});

function playMelody() {
  try {
    const ac = new (window.AudioContext || window.webkitAudioContext)();
    const master = ac.createGain(); master.gain.value = 0.5; master.connect(ac.destination);
    const mel = [
      {f:392,t:0},{f:523.25,t:.2},{f:659.25,t:.4},{f:783.99,t:.6},
      {f:1046.5,t:.85,d:.3},{f:783.99,t:1.2},{f:659.25,t:1.4},
      {f:523.25,t:1.65,d:.4},{f:392,t:2.1},{f:523.25,t:2.35,d:.55}
    ];
    mel.forEach(({f,t,d=0.18}) => {
      const o = ac.createOscillator(), g = ac.createGain();
      o.type = 'triangle'; o.frequency.value = f;
      const now = ac.currentTime;
      g.gain.setValueAtTime(0, now+t);
      g.gain.linearRampToValueAtTime(0.4, now+t+0.03);
      g.gain.exponentialRampToValueAtTime(0.001, now+t+d);
      o.connect(g); g.connect(master);
      o.start(now+t); o.stop(now+t+d+0.05);
    });
    // Also play the MP3 from the repo
    const audio = new Audio('/song.mp3');
    audio.volume = 0.5;
    audio.play().catch(() => {});
  } catch(e) {}
}

function showKonami() {
  document.getElementById('konamiOverlay').classList.add('on');
  playMelody();
}

// ── BEAR EASTER EGG ───────────────────────────────────────────
let taps = 0, tapTimer;
document.getElementById('bearBtn').addEventListener('click', function() {
  taps++;
  this.classList.remove('shake'); void this.offsetWidth; this.classList.add('shake');
  clearTimeout(tapTimer); tapTimer = setTimeout(() => taps = 0, 1500);
  if (taps >= 5) { taps = 0; showSlideshow(); }
});

// ── SLIDESHOW ─────────────────────────────────────────────────
let cur = 0, ssInt;
const allSlides = () => document.querySelectorAll('.slide');
const ssCnt = document.getElementById('ssCnt');

function goSlide(i) {
  const sl = allSlides();
  sl.forEach(s => s.classList.remove('on'));
  cur = (i + sl.length) % sl.length;
  sl[cur].classList.add('on');
  ssCnt.textContent = (cur + 1) + ' / ' + sl.length;
  // Re-apply lang to newly visible slide captions
  applyLang(lang);
}
function showSlideshow() {
  document.getElementById('ssOverlay').classList.add('on');
  goSlide(0);
  ssInt = setInterval(() => goSlide(cur + 1), 2800);
}
function closeSlideshow() {
  document.getElementById('ssOverlay').classList.remove('on');
  clearInterval(ssInt);
}
document.getElementById('ssClose').addEventListener('click', closeSlideshow);
document.getElementById('ssNext').addEventListener('click', () => { clearInterval(ssInt); goSlide(cur+1); });
document.getElementById('ssPrev').addEventListener('click', () => { clearInterval(ssInt); goSlide(cur-1); });

// ── CLOSE ─────────────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { document.getElementById('konamiOverlay').classList.remove('on'); closeSlideshow(); }
});
['konamiOverlay','ssOverlay'].forEach(id => {
  document.getElementById(id).addEventListener('click', function(e) {
    if (e.target === this) { this.classList.remove('on'); if (id === 'ssOverlay') closeSlideshow(); }
  });
});
</script>
</body>
</html>`;

export default {
  async fetch(request, env, ctx) {
    return new Response(HTML, {
      headers: {
        'Content-Type': 'text/html;charset=UTF-8',
        'Cache-Control': 'public, max-age=3600',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  },
};
