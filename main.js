const app = document.getElementById('app');
const searchInput = document.getElementById('searchInput');
const searchSuggestions = document.getElementById('searchSuggestions');

// Dados simulados de jogos para demonstração
const games = [
  {
id: "moto-x3m",
title: "Moto X3M",
category: "acao",
thumbnail: "https://img.gamedistribution.com/35523c39cf544b4d9e06eb7fcdb1a196-512x384.jpeg",
url: "https://html5.gamemonetize.com/8h2gdp5h5t69uq3wzwvlt7z5zspkk9vh"},
  {
id: "stickman-fighter",
title: "Stickman Fighter",
category: "acao",
thumbnail: "https://img.gamedistribution.com/88a0d62bc06248b4a6d960a6e6d9965b-512x384.jpeg",
url: "https://html5.gamemonetize.com/x3m8csmnmfnyv88t7gr8os7wfhtk7nt5"},
  {
id: "sniper-clash-3d",
title: "Sniper Clash 3D",
category: "acao",
thumbnail: "https://img.gamedistribution.com/4d194eb1491240d99a2f7a3535a57a41-512x384.jpeg",
url: "https://html5.gamemonetize.com/3h2dku5gh9lfwjru4r4sl2ek2azfrtck"},
  {
id: "mad-day-2",
title: "Mad Day 2",
category: "acao",
thumbnail: "https://img.gamedistribution.com/4dc0ee1ad3e3473cb2f6d929f90a86f1-512x384.jpeg",
url: "https://html5.gamemonetize.com/qztlg3anws33xqfhnp9knd8et35r20sa"},
  {
id: "ragdoll-duel",
title: "Ragdoll Duel",
category: "acao",
thumbnail: "https://img.gamedistribution.com/fb0a7ea2bc4b4b6788b5a11fd6ce5d3e-512x384.jpeg",
url: "https://html5.gamemonetize.com/j0tvuvtj2ns1t3c3jhk7gwsr7gj3qg3r"},
  {
id: "stickman-armed-assassin",
title: "Stickman Armed Assassin",
category: "acao",
thumbnail: "https://img.gamedistribution.com/fad594bc2017495b8517f0e3ed8b5291-512x384.jpeg",
url: "https://html5.gamemonetize.com/ovf6hz3dkd1pi48hoj8ueegfvddo8a8d"},
  {
id: "soldier-legend",
title: "Soldier Legend",
category: "acao",
thumbnail: "https://img.gamedistribution.com/7c94f8e5a231493aa6bd5b32eb45b6e2-512x384.jpeg",
url: "https://html5.gamemonetize.com/p3vw94lhkmt1mfvu2bkq4d8vfsb0p5ep"},
  {
id: "gunblood-remastered",
title: "Gunblood Remastered",
category: "acao",
thumbnail: "https://img.gamedistribution.com/09a8a5b9437e43578d96764dbd8de994-512x384.jpeg",
url: "https://html5.gamemonetize.com/gbohv3uk8f7vm93wcuxpsifzlbpkz4c5"},
  {
id: "city-siege",
title: "City Siege",
category: "acao",
thumbnail: "https://img.gamedistribution.com/cf68e8960b784e2e92b3a4715cd3d7f3-512x384.jpeg",
url: "https://html5.gamemonetize.com/az7jjw0zgd0yckro20l2s4sbn29rk5ep"},
  {
id: "super-buddy-kick",
title: "Super Buddy Kick",
category: "acao",
thumbnail: "https://img.gamedistribution.com/731de4f4293b4f91b6d44124b3dcb32f-512x384.jpeg",
url: "https://html5.gamemonetize.com/iqtdxkh1xfk4db1r4gmy2smz8pgoddbk"},
  {
id: "zombie-mission-4",
title: "Zombie Mission 4",
category: "acao",
thumbnail: "https://img.gamedistribution.com/fd44d3255b31495bb50cc45a276f8b96-512x384.jpeg",
url: "https://html5.gamemonetize.com/r21acjywyk8z8apcb9mp5g0ehqxw3z1v"},
  {
id: "cyber-rage:-retribution",
title: "Cyber Rage: Retribution",
category: "acao",
thumbnail: "https://img.gamedistribution.com/ca27882b6611407ba6ab177fef8c4ca6-512x384.jpeg",
url: "https://html5.gamemonetize.com/qwe5rj3hn1b9fn5s80i77e3cg9m94ojm"},
  {
id: "fireboy-and-watergirl",
title: "Fireboy and Watergirl",
category: "acao",
thumbnail: "https://img.gamedistribution.com/f1d13a62a9284ee3a568002f122f2b32-512x384.jpeg",
url: "https://html5.gamemonetize.com/gqhdmbv8en7fe20il3mmt7flzll0qzy1"},
  {
id: "temple-run-2",
title: "Temple Run 2",
category: "acao",
thumbnail: "https://img.gamedistribution.com/8717d285a02d4635b1aa3e1f12d682d5-512x384.jpeg",
url: "https://html5.gamemonetize.com/zsfwdm0a3sq9nm4hl9llot6v7z2iwmiv"},
  {
id: "vex-6",
title: "Vex 6",
category: "acao",
thumbnail: "https://img.gamedistribution.com/abbe1c5945dc4b1a9634917720b1dc13-512x384.jpeg",
url: "https://html5.gamemonetize.com/bc99jxqv6txmq2lfv46y0fhhy8vt52uo"},
  {
id: "dino-squad-adventure",
title: "Dino Squad Adventure",
category: "acao",
thumbnail: "https://img.gamedistribution.com/70cc92ef35c9442486e20f85b22e2d33-512x384.jpeg",
url: "https://html5.gamemonetize.com/qmkx8jj02vj6fpg0dknyg2elspw4ok27"},
  {
id: "jetpack-joyride",
title: "Jetpack Joyride",
category: "acao",
thumbnail: "https://img.gamedistribution.com/3477bfc1121f4dfb8788d50f24f84e6a-512x384.jpeg",
url: "https://html5.gamemonetize.com/vv6k6ow8a4u5smmqhvgs9ds5z9nkxx42"},
  {
id: "hobo-prison-brawl",
title: "Hobo Prison Brawl",
category: "acao",
thumbnail: "https://img.gamedistribution.com/750b3e02b7e849a3b38bc01ae6b4012f-512x384.jpeg",
url: "https://html5.gamemonetize.com/jv4i8p75osxh6kqj20n51q1nltb0izv5"},
  {
id: "combat-strike-2",
title: "Combat Strike 2",
category: "acao",
thumbnail: "https://img.gamedistribution.com/26f7a9a6efca4993a83d53cc79a83596-512x384.jpeg",
url: "https://html5.gamemonetize.com/f2y0ds7t6z2gf6qr1nhqxuhhszr6amij"},
  {
id: "iron-snout",
title: "Iron Snout",
category: "acao",
thumbnail: "https://img.gamedistribution.com/14e9b4f1a10540f28e86044520634ba4-512x384.jpeg",
url: "https://html5.gamemonetize.com/c9q26zdd37lxnlzfw7rdv9yq2p54pzb0"},
  {
id: "super-crime-steel-war-hero",
title: "Super Crime Steel War Hero",
category: "acao",
thumbnail: "https://img.gamedistribution.com/af1a02b3fcf04813a32c3946e4ea7268-512x384.jpeg",
url: "https://html5.gamemonetize.com/fjxywh1r7h07ot7d4nl1fgj2p2qdvlnv"},
  {
id: "street-fight-match",
title: "Street Fight Match",
category: "acao",
thumbnail: "https://img.gamedistribution.com/7c0193326df8497994b6e42889a5df50-512x384.jpeg",
url: "https://html5.gamemonetize.com/v5s1rnlw2jhe69qb7pc4b23spxgmhwpi"},
  {
id: "mortal-cage-fighter",
title: "Mortal Cage Fighter",
category: "acao",
thumbnail: "https://img.gamedistribution.com/ea7cb126d2bb48a78e34b48e7fa17f4f-512x384.jpeg",
url: "https://html5.gamemonetize.com/l9hy1mz5xzt1hd4n3wh75bwmd2js5gxv"},
  {
id: "dragon-simulator",
title: "Dragon Simulator",
category: "acao",
thumbnail: "https://img.gamedistribution.com/8ecb7edda35e4cbdb33762e82e887c7d-512x384.jpeg",
url: "https://html5.gamemonetize.com/f8l6kcnrco3d5dmu8p7tlgmldphbtb40"},
  {
id: "gladiator-combat-arena",
title: "Gladiator Combat Arena",
category: "acao",
thumbnail: "https://img.gamedistribution.com/f9d63d6fd94d4ccba43d197b0933c3e7-512x384.jpeg",
url: "https://html5.gamemonetize.com/o9hyq6rc42r7a5qrmd37xvw9k0rbcv13"},
  {
id: "zombie-derby-2",
title: "Zombie Derby 2",
category: "acao",
thumbnail: "https://img.gamedistribution.com/f73dd1fce8804995979d6ae20ae740f0-512x384.jpeg",
url: "https://html5.gamemonetize.com/j0bf8q5lz46a5bka7nphznh5ey5xnl4p"},
  {
id: "ninja-clash-heroes",
title: "Ninja Clash Heroes",
category: "acao",
thumbnail: "https://img.gamedistribution.com/c5bb0cf6370646f28cf1a7dfdb84752a-512x384.jpeg",
url: "https://html5.gamemonetize.com/j4dk9v9ag9p6dnqzmh4se2z3u3aymkln"},
  {
id: "masked-forces",
title: "Masked Forces",
category: "acao",
thumbnail: "https://img.gamedistribution.com/2453c013c09e432998f8e2527cb8867d-512x384.jpeg",
url: "https://html5.gamemonetize.com/62gj2sgqn9y8xh7g0z1izofzfq8zn0kn"},
  {
id: "pixel-gun-apocalypse-6",
title: "Pixel Gun Apocalypse 6",
category: "acao",
thumbnail: "https://img.gamedistribution.com/2dc5e77425d14867800391a032b8f6d7-512x384.jpeg",
url: "https://html5.gamemonetize.com/c7cn8ubpz2axuwqr9ikfszmku6hlu6zx"},
  {
id: "arena-shooter",
title: "Arena Shooter",
category: "acao",
thumbnail: "https://img.gamedistribution.com/8e47653b5a134f55b80a9a8e2d169f20-512x384.jpeg",
url: "https://html5.gamemonetize.com/lby69a81jrk9leplk0vm3b8y5vmp3y9x"},
  {
id: "zombies-can"t-jump-2",
title: "Zombies Can"t Jump 2",
category: "acao",
thumbnail: "https://img.gamedistribution.com/3ac18a28d21b4b80b7b8b8414b3386cb-512x384.jpeg",
url: "https://html5.gamemonetize.com/x8m0keph9kwh79a8v3lzzm1ihr7l0u3s"},
  {
id: "battle-arena",
title: "Battle Arena",
category: "acao",
thumbnail: "https://img.gamedistribution.com/32d9303e55a04e34838f25e9e6886a70-512x384.jpeg",
url: "https://html5.gamemonetize.com/bm0u4v8ivfpqlhglkw1z48y5m4zkb69g"},
  {
id: "airport-clash-3d",
title: "Airport Clash 3D",
category: "acao",
thumbnail: "https://img.gamedistribution.com/7ab47b41a2574b2d8bbdbdf77e6b216f-512x384.jpeg",
url: "https://html5.gamemonetize.com/50m6yzqz71ss4u2hzl11gcmwdcv7fq1e"},
  {
id: "combat-pixel-arena-3d",
title: "Combat Pixel Arena 3D",
category: "acao",
thumbnail: "https://img.gamedistribution.com/b1014c384d5b44bb9a29a9c40b1b4cc6-512x384.jpeg",
url: "https://html5.gamemonetize.com/v6wpk5o06dgn7v77qqaq7o0xzw7gy9h1"},
  {
id: "wild-west-clash",
title: "Wild West Clash",
category: "acao",
thumbnail: "https://img.gamedistribution.com/9eae30be296b41d6b1ff8a5931299c1e-512x384.jpeg",
url: "https://html5.gamemonetize.com/q10mcsuzt9ub1f5h2jkakvu3chb4vnpq"},
  {
id: "tank-defender",
title: "Tank Defender",
category: "acao",
thumbnail: "https://img.gamedistribution.com/92f3f5b6c3e64b96b31ddf7c630f7b7d-512x384.jpeg",
url: "https://html5.gamemonetize.com/v81z8d2fd5ft1k1m6dnpit7s3hftyy5o"},
  {
id: "pixel-warfare-4",
title: "Pixel Warfare 4",
category: "acao",
thumbnail: "https://img.gamedistribution.com/5f3032adfa024b9297df8f60f7db5bc0-512x384.jpeg",
url: "https://html5.gamemonetize.com/l9q3kgflqwsveuz6xv1x5obzp8c9y41b"},
  {
id: "stickman-shooter-2",
title: "Stickman Shooter 2",
category: "acao",
thumbnail: "https://img.gamedistribution.com/94d0b88f3c7249ffad7f25d32c41a48e-512x384.jpeg",
url: "https://html5.gamemonetize.com/p6p6taz8fr3bgufbfw0k0n7ul8qsrbz7"},
  {
id: "deads-on-the-road",
title: "Deads on the Road",
category: "acao",
thumbnail: "https://img.gamedistribution.com/e6c6b72073a84fa0b3121550e927fdd0-512x384.jpeg",
url: "https://html5.gamemonetize.com/wk20sq9i3v9ukzhw2a9ie45f6szkmdhf/
/"},
  {
id: "gun-battle-arena",
title: "Gun Battle Arena",
category: "acao",
thumbnail: "https://img.gamedistribution.com/84f71849f70646489e8032606b8cbb43-512x384.jpeg",
url: "https://html5.gamemonetize.com/c8s5t2kmzx24h0hjtc3kb3kkd4p5lzso/
/"},
  {
id: "zombie-hunter-survival",
title: "Zombie Hunter Survival",
category: "acao",
thumbnail: "https://img.gamedistribution.com/8b2c06670df54f06b3cf56e1c89c310c-512x384.jpeg",
url: "https://html5.gamemonetize.com/7h2jcd56j3e7j91qtxpjz44ft7zv6ikm/
/"},
  {
id: "ninja-run",
title: "Ninja Run",
category: "acao",
thumbnail: "https://img.gamedistribution.com/1a8fc9a7e0e64c268bd9d53dcad05896-512x384.jpeg",
url: "https://html5.gamemonetize.com/5nky3q7e0t9cdt1pzxkq93bw13c6suk3/
/"},
  {
id: "rogue-soul-2",
title: "Rogue Soul 2",
category: "acao",
thumbnail: "https://img.gamedistribution.com/173a68a7dc334d47b2eaf6d185a64090-512x384.jpeg",
url: "https://html5.gamemonetize.com/y0xktzun8b5rkdy53z6lr9h51zzs6nuq/
/"},
  {
id: "pixel-smash-duel",
title: "Pixel Smash Duel",
category: "acao",
thumbnail: "https://img.gamedistribution.com/6c988bf0f9f34c04a8071a0c9cc28f8e-512x384.jpeg",
url: "https://html5.gamemonetize.com/5zqgnz6mdp0aqeped5y7rmbbdotmgwzn/
/"},
  {
id: "slashville-3d",
title: "Slashville 3D",
category: "acao",
thumbnail: "https://img.gamedistribution.com/b2f91f2d3b814bc88cbeec3182a489c2-512x384.jpeg",
url: "https://html5.gamemonetize.com/t7n0zzm9a1zx0cqj5mwsk5yynll17b28/
/"},
  {
id: "killer-city",
title: "Killer City",
category: "acao",
thumbnail: "https://img.gamedistribution.com/3f50968f52b2482aaad4b1c58eb9d17a-512x384.jpeg",
url: "https://html5.gamemonetize.com/yhcsuvklyccuh15amc9wt00d29t0bn6i/
/"},
  {
id: "pixel-combat-2",
title: "Pixel Combat 2",
category: "acao",
thumbnail: "https://img.gamedistribution.com/4353687df670418b8ed8dd19ce5f5164-512x384.jpeg",
url: "https://html5.gamemonetize.com/0hjaj1i38f0yc8zk8wni4l5shn4cmx95/
/"},
  {
id: "stickman-destruction-3-heroes",
title: "Stickman Destruction 3 Heroes",
category: "acao",
thumbnail: "https://img.gamedistribution.com/39e03d1092ae4ee99453aa5c0bce4a33-512x384.jpeg",
url: "https://html5.gamemonetize.com/ahjiz3aksk8c2gr7s3cevv04ctucopfi/
/"},
  {
id: "robot-police-iron-panther",
title: "Robot Police Iron Panther",
category: "acao",
thumbnail: "https://img.gamedistribution.com/e937d3fc78dc4a5fa01633d235478f31-512x384.jpeg",
url: "https://html5.gamemonetize.com/45gqjbsivnre1jkmro7r97qv6by5drce/
/"},
  {
id: "lethal-sniper-3d:-army-soldier",
title: "Lethal Sniper 3D: Army Soldier",
category: "acao",
thumbnail: "https://img.gamedistribution.com/8a9621ccca5348cfb1f0ad708c3b0545-512x384.jpeg",
url: "https://html5.gamemonetize.com/qsnssazvst43k6qoi0jmu2csat5g6j44/
/"},
  {
id: "cyberpunk-ninja-runner",
title: "Cyberpunk Ninja Runner",
category: "acao",
thumbnail: "https://img.gamedistribution.com/7ff5dcb91e1a4e87ae3e8a122a1213b4-512x384.jpeg",
url: "https://html5.gamemonetize.com/h4vby0k1zby5ofugbpny9gp4eg3krqnk/
/"},
  {
id: "killer-assassin",
title: "Killer Assassin",
category: "acao",
thumbnail: "https://img.gamedistribution.com/d6d4e7c369054fe7b7b6173280ee95eb-512x384.jpeg",
url: "https://html5.gamemonetize.com/xk98bqv6kng94yl6tw7il7j1vn9y8l20/
/"},
  {
id: "tower-defense-clash",
title: "Tower Defense Clash",
category: "acao",
thumbnail: "https://img.gamedistribution.com/0b6bbde29e3f4bb9a1fc254e1a1be713-512x384.jpeg",
url: "https://html5.gamemonetize.com/sm0bn19klii8l5ixpdui79m5x0il6p6x/
/"},
  {
id: "sniper-shot:-bullet-time",
title: "Sniper Shot: Bullet Time",
category: "acao",
thumbnail: "https://img.gamedistribution.com/57c9a229d8cd48d5aa91c14ebc62e010-512x384.jpeg",
url: "https://html5.gamemonetize.com/ssqpq93qznhnp8ogpnbx7mn80h7hojvp/
/"},
  {
id: "stick-war-infinity-duel",
title: "Stick War Infinity Duel",
category: "acao",
thumbnail: "https://img.gamedistribution.com/65033d3ec1ef4c9b9968e9ed4b10be4f-512x384.jpeg",
url: "https://html5.gamemonetize.com/fj3g1sdv9f4uhkk7z6wt5w8ny8arv9bs/
/"},
  {
id: "zombie-crowd",
title: "Zombie Crowd",
category: "acao",
thumbnail: "https://img.gamedistribution.com/39ec27449d1040b4b205a9b2433a3be7-512x384.jpeg",
url: "https://html5.gamemonetize.com/pe8yk8z03qfr2qt4h3z53vnlz2oeuf9u/
/"},
  {
id: "angry-sharks",
title: "Angry Sharks",
category: "acao",
thumbnail: "https://img.gamedistribution.com/74c53b9ed3dc4fa6bb12d7be48ed8992-512x384.jpeg",
url: "https://html5.gamemonetize.com/91htwluczhw3g3ef53w2n7j7o9keo4sz/
/"},
  {
id: "soldier-bridge",
title: "Soldier Bridge",
category: "acao",
thumbnail: "https://img.gamedistribution.com/80345a5e65a14c689935fc9fc84ab44c-512x384.jpeg",
url: "https://html5.gamemonetize.com/d5mtb5y5yvg9agxq3yx7v5zj8dfujpyq/
/"},
  {
id: "run-ninja",
title: "Run Ninja",
category: "acao",
thumbnail: "https://img.gamedistribution.com/c3cb9a7a84944a0f9f8b9ae5b7ff2e3e-512x384.jpeg",
url: "https://html5.gamemonetize.com/g4z2qkq4b9bf23tsdphfbqve0zrh12t4/
/"},
  {
id: "mad-warrior",
title: "Mad Warrior",
category: "acao",
thumbnail: "https://img.gamedistribution.com/628f785d5bca4d34b8a97cb4b39908d4-512x384.jpeg",
url: "https://html5.gamemonetize.com/dgyu85j3q5nd1ut95jsqelwp19klkhrh/
/"},
  {
id: "castle-defense",
title: "Castle Defense",
category: "acao",
thumbnail: "https://img.gamedistribution.com/2cdd30092ab343ea8c68d8d7d642f465-512x384.jpeg",
url: "https://html5.gamemonetize.com/4wvk1shtqcf59bk9mv3m9fdcdjq11n8m/
/"},
  {
id: "superhero-race.io",
title: "Superhero Race.IO",
category: "acao",
thumbnail: "https://img.gamedistribution.com/6a0fa4a7c51e4c6e89b57c73bb4b9b18-512x384.jpeg",
url: "https://html5.gamemonetize.com/jbxuf1m1sq3vgrl1yb4jcz8cqr3r7k0z/
/"},
  {
id: "city-siege-3-jungle-siege",
title: "City Siege 3 Jungle Siege",
category: "acao",
thumbnail: "https://img.gamedistribution.com/2e9315cc57654a9da95dc1d3959b08ae-512x384.jpeg",
url: "https://html5.gamemonetize.com/w62fn37juhv5l7cgydugctmx05cvbd6k/
/"},
  {
id: "vex-6",
title: "Vex 6",
category: "acao",
thumbnail: "https://img.gamedistribution.com/ff34720b12e04c3f90aee93ac0e205a5-512x384.jpeg",
url: "https://html5.gamemonetize.com/v6v2jep3db5jc70jv13z2pg0qf9z68ex/
/"},
  {
id: "wild-animal-hunter",
title: "Wild Animal Hunter",
category: "acao",
thumbnail: "https://img.gamedistribution.com/2e3efee1825c474ba2cc80e6b2eaa253-512x384.jpeg",
url: "https://html5.gamemonetize.com/c6v43n41x9o50k4ihf98a1en6ueagvnd/
/"},
  {
id: "robot-hero-city-simulator",
title: "Robot Hero City Simulator",
category: "acao",
thumbnail: "https://img.gamedistribution.com/4b60dc9289d34242a56ec7dce8b82ae5-512x384.jpeg",
url: "https://html5.gamemonetize.com/z3noy7vsoykwsxqoyb9bqfvgvlfzkg9l/
/"},
  {
id: "flying-car-game-police",
title: "Flying Car Game Police",
category: "acao",
thumbnail: "https://img.gamedistribution.com/10448b3b9e2142228136d7fe1886f5b3-512x384.jpeg",
url: "https://html5.gamemonetize.com/qcvzmxz7wlllddl0jv0a1qg98nzz0czp/
/"},
  {
id: "stickman-fighting-3d",
title: "Stickman Fighting 3D",
category: "acao",
thumbnail: "https://img.gamedistribution.com/e1ec8c72757f4b78b0c1ac3f94a3db3e-512x384.jpeg",
url: "https://html5.gamemonetize.com/xw85x49i7mbyy6ym40edewk3uzl87j8f/
/"},
  {
id: "gangster-war",
title: "Gangster War",
category: "acao",
thumbnail: "https://img.gamedistribution.com/010ae78c4e204101a0b63abdf49b1ce7-512x384.jpeg",
url: "https://html5.gamemonetize.com/kqofay1rbffef3l6e0db33s7lsmjckgi/
/"},
  {
id: "combat-rescue-officer",
title: "Combat Rescue Officer",
category: "acao",
thumbnail: "https://img.gamedistribution.com/fbe4749ff6ba48d7b566f8f25c8c2682-512x384.jpeg",
url: "https://html5.gamemonetize.com/dtwpfw95rgfrak2z7i4i0jke71n0eqtv/
/"},
  {
id: "ultimate-robo-duel-3d",
title: "Ultimate Robo Duel 3D",
category: "acao",
thumbnail: "https://img.gamedistribution.com/48c00ae9b9874e678ea457deaf9d1c83-512x384.jpeg",
url: "https://html5.gamemonetize.com/rr8jz22zdv0vkkokl8ep9ojj8fhtw9in/
/"},
  {
id: "angry-heroes",
title: "Angry Heroes",
category: "acao",
thumbnail: "https://img.gamedistribution.com/360a113e86a84c30860d0407d20baf7e-512x384.jpeg",
url: "https://html5.gamemonetize.com/dvwyaz42vw0njklkmt9pmhgm3ojyk0q3/
/"},
  {
id: "monster-revolution",
title: "Monster Revolution",
category: "acao",
thumbnail: "https://img.gamedistribution.com/7757eb49e5824033bd1635c843ed0bd4-512x384.jpeg",
url: "https://html5.gamemonetize.com/rkp8pc0tq9b3jj4if4i2wqng3ggmy27x/
/"},
  {
id: "zombie-sniper",
title: "Zombie Sniper",
category: "acao",
thumbnail: "https://img.gamedistribution.com/540213a5cf674dcb80c25f7331f52544-512x384.jpeg",
url: "https://html5.gamemonetize.com/jrxrw9gbatkmnp4xzgy5p7knx4xb3b9r/
/"},
  {
id: "pixel-battle-royale",
title: "Pixel Battle Royale",
category: "acao",
thumbnail: "https://img.gamedistribution.com/fdf1ad153cd74d9998e16e7bd107ac14-512x384.jpeg",
url: "https://html5.gamemonetize.com/bb7xvhr0r20llkmcfzy57ywx6qls8frs/
/"},
  {
id: "stickman-shooter",
title: "Stickman Shooter",
category: "acao",
thumbnail: "https://img.gamedistribution.com/4568c02c9bb84899aebd8fa09f2f93f4-512x384.jpeg",
url: "https://html5.gamemonetize.com/y24q5n8nuwr9gnjq59z6kg3lr86gf41x/
/"},
  {
id: "armour-clash",
title: "Armour Clash",
category: "acao",
thumbnail: "https://img.gamedistribution.com/df8049e678994c188f6d7b9dc48b7a68-512x384.jpeg",
url: "https://html5.gamemonetize.com/zxoy8i69d86jr5z6iqlop1gljfdlm3iy/
/"},
  {
id: "mad-scientist",
title: "Mad Scientist",
category: "acao",
thumbnail: "https://img.gamedistribution.com/ed7f77df80de4a81a71fdf7f7095f525-512x384.jpeg",
url: "https://html5.gamemonetize.com/qz3e0v5utddw1icrb96z6vhvztzzsh7v/
/"},
  {
id: "redhead-knight",
title: "Redhead Knight",
category: "acao",
thumbnail: "https://img.gamedistribution.com/28c2c5dfb97d4c49b3a6e15df37a1f2d-512x384.jpeg",
url: "https://html5.gamemonetize.com/4kvmw1jj0x8ot80xh8n6u4jvce71d55l/
/"},
  {
id: "firearm-simulator",
title: "Firearm Simulator",
category: "acao",
thumbnail: "https://img.gamedistribution.com/6bbcd90d76174cfa86ec87a8b9181b4a-512x384.jpeg",
url: "https://html5.gamemonetize.com/2iprb77a8v9sy86jj8kguoqznwyf7smn/
/"},
  {
id: "masked-forces-crazy-mode",
title: "Masked Forces Crazy Mode",
category: "acao",
thumbnail: "https://img.gamedistribution.com/b601eb99dc3c42a88d6978e73832e25b-512x384.jpeg",
url: "https://html5.gamemonetize.com/cbsv3zbn4ndsm1ep0t4i1c75yy2xyxdx/
/"},
  {
id: "zombie-outbreak-arena",
title: "Zombie Outbreak Arena",
category: "acao",
thumbnail: "https://img.gamedistribution.com/8653d1ef2bb543a9bde36a3cfc7233be-512x384.jpeg",
url: "https://html5.gamemonetize.com/9i56w71g9x6mynonm8s62c6p2hbi6p6c/
/"},
  {
id: "war-of-iron",
title: "War of Iron",
category: "acao",
thumbnail: "https://img.gamedistribution.com/948e03e233db4f37b83db8dffbf6a038-512x384.jpeg",
url: "https://html5.gamemonetize.com/n9v0kt8udrzbr8bnwdn3xd9a8i8qh7kx/
/"},
  {
id: "stickman-shadow-hero",
title: "Stickman Shadow Hero",
category: "acao",
thumbnail: "https://img.gamedistribution.com/f168f3c63c624fcb89125ae1a1ff5954-512x384.jpeg",
url: "https://html5.gamemonetize.com/k4dz62de47f4ds92xwy48z08uzqtivfq/
/"},
  {
id: "metal-army-war",
title: "Metal Army War",
category: "acao",
thumbnail: "https://img.gamedistribution.com/865823c3bd1546f2b5c8fca66cf0b607-512x384.jpeg",
url: "https://html5.gamemonetize.com/l0wqkd4q7skbmwwg4q3o3dt66evrjcpz/
/"},
  {
id: "crazy-shooters",
title: "Crazy Shooters",
category: "acao",
thumbnail: "https://img.gamedistribution.com/6018e8f8e6244b9b8b5c53756f0b2f42-512x384.jpeg",
url: "https://html5.gamemonetize.com/j7y02rbc5qad3jv3w9pufg7s57gq7qk4/
/"},
  {
id: "monster-rush",
title: "Monster Rush",
category: "acao",
thumbnail: "https://img.gamedistribution.com/07bbba96a8b04358a49e8057dcddcb14-512x384.jpeg",
url: "https://html5.gamemonetize.com/d4xj6r6w14fdg5et1jlh4q1t9iwp8vcg/
/"},
  {
id: "fps-shooting-strike",
title: "FPS Shooting Strike",
category: "acao",
thumbnail: "https://img.gamedistribution.com/b5bff943a6a64d6baedc1e15e2732630-512x384.jpeg",
url: "https://html5.gamemonetize.com/n6q65wqff6b7g5m95kk0lxz11mppq6wo/
/"},
  {
id: "aliens-attack",
title: "Aliens Attack",
category: "acao",
thumbnail: "https://img.gamedistribution.com/0e7d9307a33b432799fc234d183e34d2-512x384.jpeg",
url: "https://html5.gamemonetize.com/yvm0j3or4c0y8o3wzo2gjw95jvth2yzb/
/"},
  {
id: "super-dino-fighter",
title: "Super Dino Fighter",
category: "acao",
thumbnail: "https://img.gamedistribution.com/c0e96e5ad0b940f6a388324aef86ab6e-512x384.jpeg",
url: "https://html5.gamemonetize.com/nntcd69n2vgbmpz4e5lgkpkld9nk9a9c/
/"},
  {
id: "battle-simulator",
title: "Battle Simulator",
category: "acao",
thumbnail: "https://img.gamedistribution.com/4cb8f9987b2d4a7c94dbf09e1e13e57c-512x384.jpeg",
url: "https://html5.gamemonetize.com/bj4whsbwl9qaijz6du4pi0vn4l7x91cz/
/"},
  {
id: "bullet-league",
title: "Bullet League",
category: "acao",
thumbnail: "https://img.gamedistribution.com/f3a61b87c54f47cb9a37967f234f1e3d-512x384.jpeg",
url: "https://html5.gamemonetize.com/jsc1m0m22djl7rs7g4z96uxu5a1k4s13/
/"},
  {
id: "helix-jump-advance",
title: "Helix Jump Advance",
category: "acao",
thumbnail: "https://img.gamedistribution.com/0e89fd9285aa460a82e190bc80c1321e-512x384.jpeg",
url: "https://html5.gamemonetize.com/fumlv20w94p7h08j3zvx9mqh6b6qtj20/
/"},
  {
id: "battle-cars",
title: "Battle Cars",
category: "acao",
thumbnail: "https://img.gamedistribution.com/73f77b387ba84b97a662f0c7fd32e82f-512x384.jpeg",
url: "https://html5.gamemonetize.com/4v5auonw92q2u4lnrc97qv72dw63k9kk/
/"},
  {
id: "stickman-supreme-duelist-2",
title: "Stickman Supreme Duelist 2",
category: "acao",
thumbnail: "https://img.gamedistribution.com/ea1fbe04544d4c1788ee39c2c452bbee-512x384.jpeg",
url: "https://html5.gamemonetize.com/eqn8twfq1zxkmlr4yo8vbwac1hy8vcaf/
/"},
  {
id: "clash-of-orcs",
title: "Clash of Orcs",
category: "acao",
thumbnail: "https://img.gamedistribution.com/c8a77a21865b42aa9d3d2d47d491e76b-512x384.jpeg",
url: "https://html5.gamemonetize.com/ub0rmh2yxq50z46j1r1vf50j1u2okx20/
/"},
  {
id: "hitman-rush",
title: "Hitman Rush",
category: "acao",
thumbnail: "https://img.gamedistribution.com/3a2aaec20b1e4c49b195a6c731ff3a4e-512x384.jpeg",
url: "https://html5.gamemonetize.com/o3du0hd9tcy6jqrh32afzr8b5dt9v7g0/
/"},
  {
id: "stickman-team-force",
title: "Stickman Team Force",
category: "acao",
thumbnail: "https://img.gamedistribution.com/19d7d68fbe6f4d49925b7f9cf282e76b-512x384.jpeg",
url: "https://html5.gamemonetize.com/2cwnxyfyms9m4t7k0g6djxv4ftmkv35x/
/"},
  {
id: "realistic-tank-battle",
title: "Realistic Tank Battle",
category: "acao",
thumbnail: "https://img.gamedistribution.com/3c9181ec2c5a4f6babe9de3206e71bd9-512x384.jpeg",
url: "https://html5.gamemonetize.com/iqzjk1v8orlsm0dkt35fj12rk6q7epop/
/"},
  {
id: "death-race-monster-arena",
title: "Death Race Monster Arena",
category: "acao",
thumbnail: "https://img.gamedistribution.com/f66ee9e3de6f4662ae2340f51f5d51d7-512x384.jpeg",
url: "https://html5.gamemonetize.com/w3kmbr7fe0ykvtdk9tyr6vnfuuycf3vw/
/"},
  {
id: "moto-x3m",
título: "Moto X3M",
categoria: "corrida",
miniatura: "https://img.gamedistribution.com/f5ae0bcb573e42959c64639b9842df80-512x384.jpeg",
url: "https://html5.gamemonetize.com/8h2gdp5h5t69uq3wzwvlt7z5zspkk9vh/
/"},
  {
id: "rodovia-racer-3d",
título: "Highway Racer 3 D",
categoria: "corrida",
miniatura: "https://img.gamedistribution.com/9b9b69310b1d46cba9631e099f268cd7-512x384.jpeg",
url: "https://html5.gamemonetize.com/sj07c2ggh3pn8k13guh1d7i9uwokbhnm/
/"},
  {
id: "corrida-carros",
título: "Corrida de Carros",
categoria: "corrida",
miniatura: "https://img.gamedistribution.com/e4c45694c3384d4c85031f09cd9365c3-512x384.jpeg",
url: "https://html5.gamemonetize.com/kz28chxkw15tdh7zoij5i3sp9g54l6rl/
/"},
  {
id: "bicicleta-louca",
título: "Crazy Bike",
categoria: "corrida",
miniatura: "https://img.gamedistribution.com/1eaa28bfa45a4453b7d62e63e8d9aa07-512x384.jpeg",
url: "https://html5.gamemonetize.com/qivglz07c9y1ga2p3z7i9q3e3h5p6q1p/
/"},
  {
id: "drift-chefe",
título: "Drift Boss",
categoria: "corrida",
miniatura: "https://img.gamedistribution.com/566ddbc5822f406f922bcad9beec22c2-512x384.jpeg",
url: "https://html5.gamemonetize.com/y14a9h1oygmsx7m3fzph5j5r0fpjl22s/
/"},
  {
id: "velocidade-barco-extremo-corrida",
título: "Speed Boat Extreme Racing",
categoria: "corrida",
miniatura: "https://img.gamedistribution.com/302909f9736b441fa66eafe0f7b060d7-512x384.jpeg",
url: "https://html5.gamemonetize.com/2y2x9f8u1zk7kdb3wo5sjw2r13kgu0yy/
/"},
  {
id: "carro da cidade-dublê-4",
título: "City Car Stunt 4",
categoria: "corrida",
miniatura: "https://img.gamedistribution.com/646ce4dd1f4e47e58eaee0df4eec0a93-512x384.jpeg",
url: "https://html5.gamemonetize.com/h29kxj3euz58uj92q6qx3c95jz8dk6e2/
/"},
  {
id: "traffic-run-online",
title: "Traffic Run Online",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/3e88d3f9d7dc49bb9616235dbe6ea5d7-512x384.jpeg",
url: "https://html5.gamemonetize.com/7k4d8q14dq4ux5m32snm7g76ijyohm62/
/"},
  {
id: "top-speed-racing-3d",
title: "Top Speed Racing 3D",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/0fda55df5cb744f2a6b9eebf3bde4aa7-512x384.jpeg",
url: "https://html5.gamemonetize.com/zjts78rt8zom3tt9c1gpe6z8l5opozvs/
/"},
  {
id: "motorbike-racer-3d",
title: "Motorbike Racer 3D",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/3c7b9cb6c4794bbca47ebfc99438ad70-512x384.jpeg",
url: "https://html5.gamemonetize.com/fhfzvwn7g8se5qdfvw1x6gvdvyfndkqk/
/"},
  {
id: "traffic-racer-pro",
title: "Traffic Racer Pro",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/bbaf045c69f4472ba29923336ee6a674-512x384.jpeg",
url: "https://html5.gamemonetize.com/vv69kqj99owpjmmvoa8gyqgxg4b0ndlw/
/"},
  {
id: "racing-go",
title: "Racing Go",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/2c6e90b106c745889c47713f4c9b0be1-512x384.jpeg",
url: "https://html5.gamemonetize.com/d04t9kcv84odkqhm3btuvrq5zjbp1z9v/
/"},
  {
id: "grand-extreme-racing",
title: "Grand Extreme Racing",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/3fa58aaf4a0f420c85ec72dbdcad52f2-512x384.jpeg",
url: "https://html5.gamemonetize.com/zntcdmdlvscno2xdzw7k57d7e5ro6dpc/
/"},
  {
id: "traffic-car-racing",
title: "Traffic Car Racing",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/10e0474c45194e80ad97004281c78059-512x384.jpeg",
url: "https://html5.gamemonetize.com/02l1vsqp30ln6v66pi6cf62zx98q3fvw/
/"},
  {
id: "hill-climb-racer",
title: "Hill Climb Racer",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/48f21a59473d4efb9882166ffbb29380-512x384.jpeg",
url: "https://html5.gamemonetize.com/l9bwr8d6zlvhytqu2jwhq8jge3jcb3r3/
/"},
  {
id: "furious-racing",
title: "Furious Racing",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/4e6c3193e5e247c7a9ddf6f2e4f7a6f3-512x384.jpeg",
url: "https://html5.gamemonetize.com/o3soqqf1j0u8snbsl2evz3nc7kuf42u3/
/"},
  {
id: "fastlane-road-to-revenge",
title: "Fastlane Road to Revenge",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/3b2090d9638b46469453f444cd82ae96-512x384.jpeg",
url: "https://html5.gamemonetize.com/uwk63e99v48wssr1k9q9m04y3a7ryae6/
/"},
  {
id: "mad-truck-challenge",
title: "Mad Truck Challenge",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/e3ea5d1d69a049f5ae0e9aee7a3f48fd-512x384.jpeg",
url: "https://html5.gamemonetize.com/ncnwpr10xyp54y46c3bssz6rxweuzndw/
/"},
  {
id: "drift-race-3d",
title: "Drift Race 3D",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/ab7b52a1e16a4c4db2e328bf761b4f15-512x384.jpeg",
url: "https://html5.gamemonetize.com/yxpgqtsdh9m5r4m8sr4nyp42nxbm0gj9/
/"},
  {
id: "crazy-stunt-cars",
title: "Crazy Stunt Cars",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/b7d1706d702a445d82284492a130c1a5-512x384.jpeg",
url: "https://html5.gamemonetize.com/3j1r1hfyh6hzxk0pph1g0mc1o74j0mjq/
/"},
  {
id: "city-car-driving-simulator",
title: "City Car Driving Simulator",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/f7c243f5dd1e4eec89f8ad1b2f973199-512x384.jpeg",
url: "https://html5.gamemonetize.com/b4e3l3n4rdur0a6c6ovxdtx3nqchb6do/
/"},
  {
id: "extreme-car-driving-simulator",
title: "Extreme Car Driving Simulator",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/fce65a79a64f4cf7b847a688194d69a1-512x384.jpeg",
url: "https://html5.gamemonetize.com/fy9z0wr1f4uzqcb6tzmzyyxz3py55mta/
/"},
  {
id: "offroad-monster-truck-forest-championship",
title: "Offroad Monster Truck Forest Championship",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/87ac11829cb54d678449f81da349e011-512x384.jpeg",
url: "https://html5.gamemonetize.com/lwl1o01wn6ql3jdkl1j3t7jyue7ndke1/
/"},
  {
id: "bike-rush",
title: "Bike Rush",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/0a560b78f68e449cb1ec1e79b8308829-512x384.jpeg",
url: "https://html5.gamemonetize.com/hjqfrj2gztkeq2qd7e3r1kb1nnngq0rx/
/"},
  {
id: "rally-point-4",
title: "Rally Point 4",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/78580d33f9374c91a1a54d580d02dcaa-512x384.jpeg",
url: "https://html5.gamemonetize.com/h62dfgihnmijhh4cdng3fg1h1l7js6op/
/"},
  {
id: "mad-truck-challenge-special",
title: "Mad Truck Challenge Special",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/7ab0d992b5c944d3a37771a8fe2c96e6-512x384.jpeg",
url: "https://html5.gamemonetize.com/dpy8jh3u96j8z5idrysvfp8eb30kb93w/
/"},
  {
id: "city-car-stunt-4",
title: "City Car Stunt 4",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/f52ff994d8e843e9937d010e0c4edc96-512x384.jpeg",
url: "https://html5.gamemonetize.com/oi1p0gxtskt8z7up6oln7s6yb7flne8p/
/"},
  {
id: "speed-racer",
title: "Speed Racer",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/81db1b3bb5764630ad18583b1256d09f-512x384.jpeg",
url: "https://html5.gamemonetize.com/yqf3cf1zhj8luqwkr7vf8xatoxiy3zx2/
/"},
  {
id: "extreme-drift-cars",
title: "Extreme Drift Cars",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/72cd0075d1f843c8a44df7f3545d2ef9-512x384.jpeg",
url: "https://html5.gamemonetize.com/d99mu4c1pmljv4qk7ibgfov7veo4cn7y/
/"},
  {
id: "drag-racing-club",
title: "Drag Racing Club",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/3b6d36a1f6c84054a38b9f414b327d77-512x384.jpeg",
url: "https://html5.gamemonetize.com/qrxkrhvzdzvj3dy4onff7hlzq0n8y3ku/
/"},
  {
id: "crazy-runner",
title: "Crazy Runner",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/11563b0572a84e9d96dc5f0a3b740c83-512x384.jpeg",
url: "https://html5.gamemonetize.com/j0lhiyb5hm9yyt9c4e5wl8mkv0i0oc5f/
/"},
  {
id: "drag-racing-rivals",
title: "Drag Racing Rivals",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/eb5b17aa272a497e83e4f6e2cb99d76b-512x384.jpeg",
url: "https://html5.gamemonetize.com/qpyq47xhy8qlm7hl5kxu3ylq61beipz3/
/"},
  {
id: "cartoon-mini-racing",
title: "Cartoon Mini Racing",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/5ec646e09c154c41826f9281b798e5f1-512x384.jpeg",
url: "https://html5.gamemonetize.com/z4wqs0pk6sdch5h81lwzx1etys2cmtg7/
/"},
  {
id: "cyber-cars-punk-racing",
title: "Cyber Cars Punk Racing",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/6cd87ec0ac804b53a7b71a3e1194a21b-512x384.jpeg",
url: "https://html5.gamemonetize.com/vfgw0cku98ktx86j68rj7v9mu2q1kv90/
/"},
  {
id: "ragdoll-duel",
title: "Ragdoll Duel",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/fb0a7ea2bc4b4b6788b5a11fd6ce5d3e-512x384.jpeg",
url: "https://html5.gamemonetize.com/j0tvuvtj2ns1t3c3jhk7gwsr7gj3qg3r/
/"},
  {
id: "hill-climb-racing",
title: "Hill Climb Racing",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/4e13c5b027e348c2a74c2079e4a2f91b-512x384.jpeg",
url: "https://html5.gamemonetize.com/djxib9tnlsazl06tqwdyte2h74x3g3f4/
/"},
  {
id: "formula-rush",
title: "Formula Rush",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/e00f087d63f1471ba01946edc5249c03-512x384.jpeg",
url: "https://html5.gamemonetize.com/9geop2y2m8f9yyqtvnx4fvlra0lq3hx3/
/"},
  {
id: "crazy-car-stunt-car-games",
title: "Crazy Car Stunt Car Games",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/37b97ed9eddd47658c8a0fa144a24617-512x384.jpeg",
url: "https://html5.gamemonetize.com/f5jqcxfncw3tg0vv4c1nb6p7u1m13yt2/
/"},
  {
id: "drift-cup-racing",
title: "Drift Cup Racing",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/7d202c02472a4cc7bbf1cd4d8eaa0866-512x384.jpeg",
url: "https://html5.gamemonetize.com/jz20wbtgl58r4ap34hf7zm7qk0pbll4o/
/"},
  {
id: "rally-ponto-4",
título: "Rally Point 4",
categoria: "corrida",
miniatura: "https://img.gamedistribution.com/3a80327a6c8a4a5b865597902c7743d7-512x384.jpeg",
url: "https://html5.gamemonetize.com/ug1u4dh94v8y1m1yzgdxh4jk9xvy2w79/
/"},
  {
id: "corrida-carros",
título: "Corrida de Carros",
categoria: "corrida",
miniatura: "https://img.gamedistribution.com/67a13b4ed4bc4de4b97c3c5f7160e93c-512x384.jpeg",
url: "https://html5.gamemonetize.com/7gprufpj79omv6m10b9m5o7pl9c0q0bk/
/"},
  {
id: "gp-moto-corrida-3",
título: "GP Moto Racing 3",
categoria: "corrida",
miniatura: "https://img.gamedistribution.com/1f14cde2071f4b1c901e30cd6d52f13c-512x384.jpeg",
url: "https://html5.gamemonetize.com/o13vznmn0ct5qkz2ghyop8gw3k8j3xos/
/"},
  {
id: "rodovia-trânsito",
título: "Trânsito Rodoviário",
categoria: "corrida",
miniatura: "https://img.gamedistribution.com/1528be5c93754c1193d84a6d9c3a35e0-512x384.jpeg",
url: "https://html5.gamemonetize.com/jhsy57mx6mrp0vj4xnub5k1yb5egqj2s/
/"},
  {
id: "drift-chefe",
título: "Drift Boss",
categoria: "corrida",
miniatura: "https://img.gamedistribution.com/03e14d5c9d8d4a93a6c3aa64c98403b5-512x384.jpeg",
url: "https://html5.gamemonetize.com/bmsqt9noxjcwl7o9q9uvv5dkgkjqqj8g/
/"},
  {
id: "dublê-carro-desafio-3",
título: "Desafio do Carro de Dublês 3",
categoria: "corrida",
miniatura: "https://img.gamedistribution.com/5b82a58e38c148178c245384df4309df-512x384.jpeg",
url: "https://html5.gamemonetize.com/l4hijzhjlddu6z23opzex3lj3r7q74uh/
/"},
  {
id: "taxi-simulador-louco",
título: "Simulador Louco de Táxi",
categoria: "corrida",
miniatura: "https://img.gamedistribution.com/c42c3059c8f94b71b4e50d69a564a1f1-512x384.jpeg",
url: "https://html5.gamemonetize.com/wr6gq6k8m4k7d9tcyflg3efz1km2mdel/
/"},
  {
id: "trânsito-jam-3d",
título: "Traffic Jam 3 D",
categoria: "corrida",
miniatura: "https://img.gamedistribution.com/456ec738d1984b37ac4dc76ecf02c91b-512x384.jpeg",
url: "https://html5.gamemonetize.com/j9bx0qe6uf9a6ryuqfg1gxvo4dt3xh1r/
/"},
  {
id: "super-corrida-gt:-drag-pro",
título: "Super Racing GT: Drag Pro",
categoria: "corrida",
miniatura: "https://img.gamedistribution.com/6e0fc8fbd9b6460e90b3c800ee4df239-512x384.jpeg",
url: "https://html5.gamemonetize.com/gaymefivf7unvyn27g25ld0nuvkbgq6e/
/"},
  {
id: "velocidade-barco-extremo-corrida",
título: "Speed Boat Extreme Racing",
categoria: "corrida",
miniatura: "https://img.gamedistribution.com/7bb93d4f40e64d52b3fd0f42a4358fc5-512x384.jpeg",
url: "https://html5.gamemonetize.com/yh8i6yxzkdrcgtv8g95xpi8ekjwut68h/
/"},
  {
id: "car-stunt-races:-mega-ramps",
título: "Car Stunt Races: Mega Ramps",
categoria: "corrida",
miniatura: "https://img.gamedistribution.com/2e45cfae9ef84c289186bcf02c77de6c-512x384.jpeg",
url: "https://html5.gamemonetize.com/7jk5aocqsnqpwzzqxz1ax8j4vb0jq9am/
/"},
  {
id: "extremo-asfalto-carro-corrida",
título: "Extreme Asphalt Car Racing",
categoria: "corrida",
miniatura: "https://img.gamedistribution.com/0fbd3871fbe6469ca77b2adf82f7a0ea-512x384.jpeg",
url: "https://html5.gamemonetize.com/f38iv38zv0k81mf1v4y9tfskfxh6dgm6/
/"},
  {
id: "carro-voador-esportivo-real",
título: "Real Sports Flying Car",
categoria: "corrida",
miniatura: "https://img.gamedistribution.com/92f818f61a45438b80de60763c9ffb33-512x384.jpeg",
url: "https://html5.gamemonetize.com/x3qqpzrrt7glfl2jrlr5n4sdklrplvnm/
/"},
  {
id: "cyber-cars-punk-racing",
título: "Cyber Cars Punk Racing",
categoria: "corrida",
miniatura: "https://img.gamedistribution.com/6cd87ec0ac804b53a7b71a3e1194a21b-512x384.jpeg",
url: "https://html5.gamemonetize.com/vfgw0cku98ktx86j68rj7v9mu2q1kv90/
/"},
  {
id: "estacionamento-fúria-3d:-ladrão-noturno",
título: "Fúria do estacionamento 3 D: ladrão de noites",
categoria: "corrida",
miniatura: "https://img.gamedistribution.com/96c9dd88e7e54780960ec1f535a7c0f1-512x384.jpeg",
url: "https://html5.gamemonetize.com/jb3kq7cf7fxxz1np31owkwoa3sbg2dhu/
/"},
  {
id: "drifty-master",
título: "Drifty Master",
categoria: "corrida",
miniatura: "https://img.gamedistribution.com/9e7f7983994b41d7b248f6d1b775dd39-512x384.jpeg",
url: "https://html5.gamemonetize.com/45pdq56an8wc42qkbx56clgf0v65e0xz/
/"},
  {
id: "corrida de subida em ladeira",
título: "Hill Climb Racing",
categoria: "corrida",
miniatura: "https://img.gamedistribution.com/4e13c5b027e348c2a74c2079e4a2f91b-512x384.jpeg",
url: "https://html5.gamemonetize.com/djxib9tnlsazl06tqwdyte2h74x3g3f4/
/"},
  {
id: "arrasta-corrida-rivais",
título: "Drag Racing Rivals",
categoria: "corrida",
miniatura: "https://img.gamedistribution.com/eb5b17aa272a497e83e4f6e2cb99d76b-512x384.jpeg",
url: "https://html5.gamemonetize.com/qpyq47xhy8qlm7hl5kxu3ylq61beipz3/
/"},
  {
id: "céu-pista-corrida",
título: "Sky Track Racing",
categoria: "corrida",
miniatura: "https://img.gamedistribution.com/8c3a1601aefe4d46ac24a60fdc9aef43-512x384.jpeg",
url: "https://html5.gamemonetize.com/f8kwjpyxr90qu1pl8pw8xs1qex7j5z2b/
/"},
  {
id: "corrida de velocidade-pro-2",
título: "Speed Racing Pro 2",
categoria: "corrida",
miniatura: "https://img.gamedistribution.com/97d83f2e4cfb4de1ad4788baf13f6f91-512x384.jpeg",
url: "https://html5.gamemonetize.com/w7irbvhsrjqrcz0gy7pi3o8n3g37m9lw/
/"},
  {
id: "offroad-jeep-simulator",
título: "Offroad Jeep Simulator",
categoria: "corrida",
miniatura: "https://img.gamedistribution.com/9b96d4a18f6e4a6a930865ded54dc252-512x384.jpeg",
url: "https://html5.gamemonetize.com/6p7r3z8r6jtsmqb7tqynh3fdlj1q0nyw/
/"},
  {
id: "carro-come-carro:-aventura-vulcânica",
título: "Car Eats Car: Volcanic Adventure",
categoria: "corrida",
miniatura: "https://img.gamedistribution.com/9d6329f527194aefbc8be53ef1836de6-512x384.jpeg",
url: "https://html5.gamemonetize.com/vgx3jgzbpq65bmlz3j3t94xv4s6or8ne/
/"},
  {
id: "burnout-drift",
título: "Burnout Drift",
categoria: "corrida",
miniatura: "https://img.gamedistribution.com/58c0bce153f3422aa74d4b2bdf41eb92-512x384.jpeg",
url: "https://html5.gamemonetize.com/wrxqjpz3nq4z3j3d09sz2i1m2zsl2kmh/
/"},
  {
id: "zumbi-estrada",
título: "Zombie Road",
categoria: "corrida",
miniatura: "https://img.gamedistribution.com/34dcf3c7a25c4e169f0e10b6bd8a502c-512x384.jpeg",
url: "https://html5.gamemonetize.com/4fw5hfjvzyvml1wnfj8qpo9vgw8apc3v/
/"},
  {
id: "rodovia-racer-2",
título: "Highway Racer 2",
categoria: "corrida",
miniatura: "https://img.gamedistribution.com/640ca40f37d540d9801ad81097c99e1f-512x384.jpeg",
url: "https://html5.gamemonetize.com/rgpz5izwftq6oij7xnid6s8chdjhujz2/
/"},
  {
id: "top-speed-corrida-3d",
título: "Top Speed Racing 3 D",
categoria: "corrida",
miniatura: "https://img.gamedistribution.com/35d61d9393ae4892a20a2285795bfbfd-512x384.jpeg",
url: "https://html5.gamemonetize.com/ogqjxqxmbf89wsjv1bfje7eswaqjp6op/
/"},
  {
id: "speed-boat-water-racing",
title: "Speed Boat Water Racing",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/e5f30819c59d4e64a0e1dbd0a4a7f6c3-512x384.jpeg",
url: "https://html5.gamemonetize.com/cqmbje5rujz6mv1gl7w2fjiil1lc42lg/
/"},
  {
id: "desert-car-racing",
title: "Desert Car Racing",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/d515cb35054c4e7ba2e9b35db1b05d51-512x384.jpeg",
url: "https://html5.gamemonetize.com/zurddn7a5wl9ldu3ilcp3njow0v6ufef/
/"},
  {
id: "boat-simulator",
title: "Boat Simulator",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/ff7a3ee04e124b1185d881c71f233f64-512x384.jpeg",
url: "https://html5.gamemonetize.com/j4qnul0bwliynk2d8rxv4apknwovzkl4/
/"},
  {
id: "mountain-climb-racing",
title: "Mountain Climb Racing",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/fc3879fcb6f64977b2a839fcb80ef5b2-512x384.jpeg",
url: "https://html5.gamemonetize.com/ybfsxov7pv2q8rs5r3s43asw8cooxmy4/
/"},
  {
id: "crazy-drift",
title: "Crazy Drift",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/858cfdce3d694df8bb7a364f0f3c3856-512x384.jpeg",
url: "https://html5.gamemonetize.com/hqoyk9dldqtf4u4ws4pf2iz93qmej6ae/
/"},
  {
id: "traffic-rider",
title: "Traffic Rider",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/93f9f7fcfbd24e5e936a5f785e603be0-512x384.jpeg",
url: "https://html5.gamemonetize.com/0wqzv9x58bfljdpyjqof5iyntjizxgmd/
/"},
  {
id: "fastlane-revenge",
title: "Fastlane Revenge",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/aa6ac23093d24f0f9012c66d2387fd2f-512x384.jpeg",
url: "https://html5.gamemonetize.com/zbp97jvevmm53lq5evzq8xf1lpm5tvsc/
/"},
  {
id: "traffic-run-online",
title: "Traffic Run Online",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/9a165776ac5d4762993452dfb29a1f07-512x384.jpeg",
url: "https://html5.gamemonetize.com/98e0ybqqcnc4xsym7kgyu4jtpvzq46ej/
/"},
  {
id: "speed-boat-extreme-racing",
title: "Speed Boat Extreme Racing",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/30e845a00a1a4a2ab84b9434f4f4ab92-512x384.jpeg",
url: "https://html5.gamemonetize.com/oyltm3lr63z2nswhuhffal0a3asx5n6x/
/"},
  {
id: "extreme-drift-car-simulator",
title: "Extreme Drift Car Simulator",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/7ad93bb814e04d50a75344ff24838487-512x384.jpeg",
url: "https://html5.gamemonetize.com/dluwt6en03nmpr3mb4xqh3j0yqdfz02g/
/"},
  {
id: "racing-cars-2",
title: "Racing Cars 2",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/fecbcfc68d0b4e3f9b991efbd261cebd-512x384.jpeg",
url: "https://html5.gamemonetize.com/o93r56e41q2vhwo2fhyxvb9r7a9unqib/
/"},
  {
id: "city-bike-stunt-2",
title: "City Bike Stunt 2",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/1b1ddc05ae1e43f884498f32cf5a6dbf-512x384.jpeg",
url: "https://html5.gamemonetize.com/2lmpm7mpxhgcd0jkvn51zzczhmb84nvi/
/"},
  {
id: "crazy-taxi-car-simulation-game",
title: "Crazy Taxi Car Simulation Game",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/80b95b5db6d049569c66ed96dc9916c2-512x384.jpeg",
url: "https://html5.gamemonetize.com/z4hlrh8aoy9cy9bzggav1bh37u40f22a/
/"},
  {
id: "rally-point-4",
title: "Rally Point 4",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/3a80327a6c8a4a5b865597902c7743d7-512x384.jpeg",
url: "https://html5.gamemonetize.com/ug1u4dh94v8y1m1yzgdxh4jk9xvy2w79/
/"},
  {
id: "uphill-rush-10",
title: "Uphill Rush 10",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/292ca7019be64db9b5473a2a83a73515-512x384.jpeg",
url: "https://html5.gamemonetize.com/54hl1ubvq2v2icw4eckfhhdt20t7t4p5/
/"},
  {
id: "bus-simulator:-public-transport",
title: "Bus Simulator: Public Transport",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/20f396b7d8ed4b19bbd7df50c61c1c35-512x384.jpeg",
url: "https://html5.gamemonetize.com/hg2ssw68f0l6s7a9urfrqvk8p7dr4qvd/
/"},
  {
id: "hard-wheels-winter-2",
title: "Hard Wheels Winter 2",
category: "corrida",
thumbnail: "https://img.gamedistribution.com/8679115f6b2e4b70a1f6be2a657c404a-512x384.jpeg",
url: "https://html5.gamemonetize.com/ku0nhlrdczbg20ltcjv1tcyi2e28h7qv/
/"},
  {
id: "extreme-racing",
título: "Xtreme Racing",
categoria: "corrida",
miniatura: "https://img.gamedistribution.com/96df95d5fbe540a9be171be1b91a8bb6-512x384.jpeg",
url: "https://html5.gamemonetize.com/4jo6y00n5p9ceqz85bcwsl7tr6emnp9r/
/"},
  {
id: "cidade-carro-condução",
título: "City Car Driving",
categoria: "corrida",
miniatura: "https://img.gamedistribution.com/f7460d8a2fdf4b59b42e73a7c01720d7-512x384.jpeg",
url: "https://html5.gamemonetize.com/2f2sm83c7e2rlx5ty7c2i7a3g8oeuv8j/
/"},
  {
id: "monstro-caminhão-condução-simulador",
título: "Monster Truck Driving Simulator",
categoria: "corrida",
miniatura: "https://img.gamedistribution.com/c3b1bd2f0b9d4356a2dd087300e46cf9-512x384.jpeg",
url: "https://html5.gamemonetize.com/m7pyo9fij64jeh9wjz0grfdiu09m1h0h/
/"},
  {
id: "caminhão-motorista-cargo-jogo",
título: "Truck Driver Cargo Game",
categoria: "corrida",
miniatura: "https://img.gamedistribution.com/d10b5f05c0044b5d968457126e85e594-512x384.jpeg",
url: "https://html5.gamemonetize.com/fjzdx2j7h7b3xotbm74d95s8joql0svq/
/"},
  {
id: "cidade-drift-racer",
título: "City Drift Racer",
categoria: "corrida",
miniatura: "https://img.gamedistribution.com/1a4a61fffd0c44aab270cecc8890c80f-512x384.jpeg",
url: "https://html5.gamemonetize.com/tas2bfq5cvsmm60utqvld3ptjhr2jfbc/
/"},
  {
id: "race-down",
título: "Race Down",
categoria: "corrida",
miniatura: "https://img.gamedistribution.com/fd253c7c33f04191a04e01ee82f0d535-512x384.jpeg",
url: "https://html5.gamemonetize.com/b6f86tx48n1n9o6zohb7f7ev5b1w8bbm/
/"},
  {
id: "rodovia-trânsito-bicicleta-estudos",
título: "Highway Traffic Bike Stunts",
categoria: "corrida",
miniatura: "https://img.gamedistribution.com/5ff6b4c4abde4146b0b13e79d63d1da4-512x384.jpeg",
url: "https://html5.gamemonetize.com/bnflke8ghf9m6bjg52tn3etldsvbzry6/
/"},
  {
id: "simulador-de-carro-drift-real-3d",
título: "Real Drift Car Simulator 3 D",
categoria: "corrida",
miniatura: "https://img.gamedistribution.com/1071e28f0bb94dd68e6dfec11ef7ffdb-512x384.jpeg",
url: "https://html5.gamemonetize.com/kew70h5cuoacx18z29e35o5peplhpmob/
/"},
  {
id: "football-masters",
title: "Football Masters",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/18c1e3ae9eac41b3b2eaa0eec0a56a2e-512x384.jpeg",
url: "https://html5.gamemonetize.com/xfumqv02om4akbszlmw8fihs1bhqgwlg/
/"},
  {
id: "basket-random",
title: "Basket Random",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/70e8ff7624a14f7a94632782fe6eace5-512x384.jpeg",
url: "https://html5.gamemonetize.com/zncrxfoyxnmy81nzujpe3gp4yz5fwj74/
/"},
  {
id: "penalty-shooters-2",
title: "Penalty Shooters 2",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/885c3d4b49c246ce855d8ff81b89e226-512x384.jpeg",
url: "https://html5.gamemonetize.com/vs9clhng4qn4a2ugr2tbdk0mge6d6gg5/
/"},
  {
id: "3d-free-kick",
title: "3D Free Kick",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/46c2b0be6b5d4f82be0e07f2e715f06d-512x384.jpeg",
url: "https://html5.gamemonetize.com/nsv8t69ke4pxmn5ng4xoehnlwns51c2e/
/"},
  {
id: "street-basketball",
title: "Street Basketball",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/ae8b7a05a2c74098a92a8cc45c08e9f1-512x384.jpeg",
url: "https://html5.gamemonetize.com/w9srbpbgsqx02g9j6uhuq5kex5qaf5j1/
/"},
  {
id: "archery-world-tour",
title: "Archery World Tour",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/b5c7ce0670704f57a94e6747bfa03b82-512x384.jpeg",
url: "https://html5.gamemonetize.com/ctnczk1u9f5bl3tc8wo9easvfr8gr0mh/
/"},
  {
id: "8-ball-pool",
title: "8 Ball Pool",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/97cf85b233f54a8cbfb7f55b47146cb6-512x384.jpeg",
url: "https://html5.gamemonetize.com/abihsykzmb4cnquvdr1xvn2bkkz47pvq/
/"},
  {
id: "dunk-shot",
title: "Dunk Shot",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/0a1e9884e3774b25b4f32f261d7a6c6a-512x384.jpeg",
url: "https://html5.gamemonetize.com/8h8sk1xotgghm15u0k5af2ulzmmu3azq/
/"},
  {
id: "soccer-skills-euro-cup",
title: "Soccer Skills Euro Cup",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/0d6bb1a5565c4e888c6d9461d13e7f91-512x384.jpeg",
url: "https://html5.gamemonetize.com/bnqznxdn6db9v4fph0w5e4xhgkha0mi6/
/"},
  {
id: "tennis-open-2024",
title: "Tennis Open 2024",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/f7db04b9cbe842f48e72683e33aa5c11-512x384.jpeg",
url: "https://html5.gamemonetize.com/zzt9zrhrdjzkfczd48ipvo0b8c4b6w1l/
/"},
  {
id: "bowling-club",
title: "Bowling Club",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/0cc31cb6d80f4f58b7306462d7b00f7f-512x384.jpeg",
url: "https://html5.gamemonetize.com/g3gvh0zh8y3xsk4s8a3emimcuwfzkrny/
/"},
  {
id: "mini-golf-clash",
title: "Mini Golf Clash",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/8c77be88d93d4cf08b238e57167835f5-512x384.jpeg",
url: "https://html5.gamemonetize.com/ffjnhn1t2blsml2k0hqsxg9j0e80zg9y/
/"},
  {
id: "head-soccer-2",
title: "Head Soccer 2",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/899d6fd84fc2406ea7e60d3e471b8c28-512x384.jpeg",
url: "https://html5.gamemonetize.com/ymozhszvk82cokmvoikayb0gycymbsjc/
/"},
  {
id: "basketball-star",
title: "Basketball Star",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/49b5a0b1d7904c6f869f62a259dce4f0-512x384.jpeg",
url: "https://html5.gamemonetize.com/jmd9h9yz3b5bqvw57gykm9vxvfjkgoc8/
/"},
  {
id: "skater-dude",
title: "Skater Dude",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/fbb2d1ce14a845e79e0573f495b19cc1-512x384.jpeg",
url: "https://html5.gamemonetize.com/np4v4vjgj19hz8r9z22q5yld4mgnvz96/
/"},
  {
id: "moto-mx-extreme",
title: "Moto MX Extreme",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/196b28ce117e4ad39b8dd083152bc7dc-512x384.jpeg",
url: "https://html5.gamemonetize.com/2l8aigzg2of8a7m6bzoofh75f0okm0jd/
/"},
  {
id: "tennis-world-tour",
title: "Tennis World Tour",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/d7c1d3276f81437b8a065a2dbf0871f0-512x384.jpeg",
url: "https://html5.gamemonetize.com/vp0f7eyhvx9du0szj0al8mvzmsayx7eq/
/"},
  {
id: "crazy-golf",
title: "Crazy Golf",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/2a2d997511714012b9026a6c7489ea34-512x384.jpeg",
url: "https://html5.gamemonetize.com/l9k4rshs0q7ntk0e8oj3oz3e2zpf5mze/
/"},
  {
id: "soccer-league",
title: "Soccer League",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/cb6d75993e8243d09e68a2fd3e683093-512x384.jpeg",
url: "https://html5.gamemonetize.com/p9s0xs1csxhvxlr3kh1l9ltnv60phsrr/
/"},
  {
id: "extreme-skate",
title: "Extreme Skate",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/1edb30e6c9b24883959f6a5c7a00aa35-512x384.jpeg",
url: "https://html5.gamemonetize.com/f4z8sjz7s4e6fhl97z2eklgjx9v9g29f/
/"},
  {
id: "rugby-rush",
title: "Rugby Rush",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/343cb4d13ad04215a9f03d0f9f5a76d3-512x384.jpeg",
url: "https://html5.gamemonetize.com/fivqx89zzsy1lm42xflsyro9ztxetmwo/
/"},
  {
id: "golf-royale",
title: "Golf Royale",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/bfdd0937a6eb42138e8a56d7ec4c93c5-512x384.jpeg",
url: "https://html5.gamemonetize.com/14oc7le3u7mltuvkmgdksc3dw7hlk9br/
/"},
  {
id: "table-tennis-pro",
title: "Table Tennis Pro",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/c0b63a7e6c5d48ddba7be91b68d3dbb1-512x384.jpeg",
url: "https://html5.gamemonetize.com/zks1o9pe64jlfs5xdtd3qfzo7xvzr7rx/
/"},
  {
id: "snowboard-hero",
title: "Snowboard Hero",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/993489f5c5a748d181c7509b679c6fdf-512x384.jpeg",
url: "https://html5.gamemonetize.com/rqpk7twbgwrl9p1j0coz3rmmp68dktgm/
/"},
  {
id: "punch-boxing",
title: "Punch Boxing",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/e3c4b74f350445f2b29d91c946b9d655-512x384.jpeg",
url: "https://html5.gamemonetize.com/yrh6pbguwqv72lvsycxkj4ndfn6sc4ko/
/"},
  {
id: "volley-beans",
title: "Volley Beans",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/87296140924b4b76bbd8d10cfbba3f4d-512x384.jpeg",
url: "https://html5.gamemonetize.com/v72bj8raovzslx2uw1fq2zblx2vm4niq/
/"},
  {
id: "football-superstars",
title: "Football Superstars",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/dfd7a5a29e1b406583b59aa019561bd4-512x384.jpeg",
url: "https://html5.gamemonetize.com/b5kqvh4rg4nv73l8clq0cyr5p7o9kh6p/
/"},
  {
id: "crazy-tennis",
title: "Crazy Tennis",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/73a3e6c2d82e4bcdbe062a0fd1cb44a4-512x384.jpeg",
url: "https://html5.gamemonetize.com/o86ek1au0sjltv0uy5g3n04z9c51xybd/
/"},
  {
id: "mini-basketball",
title: "Mini Basketball",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/86a7c45b9edb4b23bb986d4b0d5352aa-512x384.jpeg",
url: "https://html5.gamemonetize.com/t5mgixsm49w0yewjgi1z4jpi0u4r0d1a/
/"},
  {
id: "boxing-hero",
title: "Boxing Hero",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/cf12ccf4c295405f859a8bd4b046967f-512x384.jpeg",
url: "https://html5.gamemonetize.com/hsg9dt4ucfnnkn97wbmkbw5yhr5ugjau/
/"},
  {
id: "air-hockey-pro",
title: "Air Hockey Pro",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/6bdc3fa3be0747ad8c765389e66ae569-512x384.jpeg",
url: "https://html5.gamemonetize.com/xsjsaz3q53dqjf49gsqwzj2v54epfwoq/
/"},
  {
id: "extreme-bikers",
title: "Extreme Bikers",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/97e12a06d10b4b4aa0198be894d80c02-512x384.jpeg",
url: "https://html5.gamemonetize.com/ylkrm4xh0jvm1jdfwhby3a71pfviywr0/
/"},
  {
id: "slalom-ski-simulator",
title: "Slalom Ski Simulator",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/fb5a1b9e31b14610b1aa453949191c37-512x384.jpeg",
url: "https://html5.gamemonetize.com/z8bs5hvhnt1sbgak3gt7b25p7ak21s6g/
/"},
  {
id: "street-football-online",
title: "Street Football Online",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/7b87b33b86ec49eea45c9e90a23c26c6-512x384.jpeg",
url: "https://html5.gamemonetize.com/6fbg9lrjb5th6kb0v30mtc4h7aevnuea/
/"},
  {
id: "bike-mania-2",
title: "Bike Mania 2",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/6a60b97c12f949b78c74a221e31aa2a1-512x384.jpeg",
url: "https://html5.gamemonetize.com/68oi9moxg9lzmc7zv8xblt9dkjy3m0z8/
/"},
  {
id: "surf-riders",
title: "Surf Riders",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/3d4edb1187024ab78d542c10821f037e-512x384.jpeg",
url: "https://html5.gamemonetize.com/pcy56idnx0w7mn4pmu5j0idjlv61k94s/
/"},
  {
id: "basket-slam-dunk",
title: "Basket Slam Dunk",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/fe57a3808bca41c39cfdd2be95d2ac1b-512x384.jpeg",
url: "https://html5.gamemonetize.com/q2qx2wlk0zaxnwj1d34vqflbsjcfj1y7/
/"},
  {
id: "mini-soccer",
title: "Mini Soccer",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/e19929b4eb0a44f597df2dd29a64910e-512x384.jpeg",
url: "https://html5.gamemonetize.com/xwdz4yyzdu54a3qjq3eh2h61lf06z6py/
/"},
  {
id: "skateboard-king",
title: "Skateboard King",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/cb2b5a350cf3424a9fc23b0c40e1dd64-512x384.jpeg",
url: "https://html5.gamemonetize.com/gtdn4n4gfgy6i1cfq5gsowxvkh9hv2p9/
/"},
  {
id: "ping-pong-king",
title: "Ping Pong King",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/f5ff812f6ad44ffbade69a78d87e1cf6-512x384.jpeg",
url: "https://html5.gamemonetize.com/fj6mgfrle6q2du1h3p6pcv6ptzv4xg8p/
/"},
  {
id: "volley-goal",
title: "Volley Goal",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/1e726cabd1bb4cbab1b9c17a9b5b3a0c-512x384.jpeg",
url: "https://html5.gamemonetize.com/7fpmgdh7aqv4lhmt87snodwrpqyd4z2j/
/"},
  {
id: "freekick-mania",
title: "Freekick Mania",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/4ff92cb004ae451dbbf2df3d7984ad92-512x384.jpeg",
url: "https://html5.gamemonetize.com/tux5mjxdvfebms3zbpqnbx08uywqchrr/
/"},
  {
id: "extreme-bowling",
title: "Extreme Bowling",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/5eaf939ff1464b5ba1bd017cebc5d372-512x384.jpeg",
url: "https://html5.gamemonetize.com/5sb6n87n2xyge5fy22cfv0vgj8qjhlwq/
/"},
  {
id: "rocket-punch-boxing",
title: "Rocket Punch Boxing",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/ce07b9d52b7b4db1a8e5f738c4a3bfb8-512x384.jpeg",
url: "https://html5.gamemonetize.com/sj98g7zbn0uv7lsy3wl7tspz5pnkizrt/
/"},
  {
id: "basketball-dunk",
title: "Basketball Dunk",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/0f3bead2782e43b89bc515a083e96e79-512x384.jpeg",
url: "https://html5.gamemonetize.com/x2cylxsm0krsu5w0ifqh7v2du2o6mjw2/
/"},
  {
id: "wrestling-fight",
title: "Wrestling Fight",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/bf91a25f88684e77ac6d9a3ea12aa79f-512x384.jpeg",
url: "https://html5.gamemonetize.com/l5ygp4qznx3sovbyz53lgl6ij67pczkx/
/"},
  {
id: "penalty-kicks",
title: "Penalty Kicks",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/0e30542e3a084c4c8c7e0e435b28eb15-512x384.jpeg",
url: "https://html5.gamemonetize.com/ps7afpr6m6lpnyfxj85i9kwqp3ux72vl/
/"},
  {
id: "goalkeeper-challenge",
title: "Goalkeeper Challenge",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/1c5575127b7a4e7b8991f5e3f0163d52-512x384.jpeg",
url: "https://html5.gamemonetize.com/x45nqlmfqeb6ar8aqrvzef0b0uc63rsz/
/"},
  {
id: "soccer-hero",
title: "Soccer Hero",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/f9b2d34d68084f688ce82cd889f8e278-512x384.jpeg",
url: "https://html5.gamemonetize.com/yi6qfj36j19zofrxoqo7fememq8lzzv3/
/"},
  {
id: "jump-dunk",
title: "Jump Dunk",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/2c7bc77eecc04d94954aa61759375c9b-512x384.jpeg",
url: "https://html5.gamemonetize.com/qef6vn1qitwyeuubvqvq2szkm4gwkfjv/
/"},
  {
id: "bicycle-kick-master",
title: "Bicycle Kick Master",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/2e1f9e08aeaf4e93af1ed8d615fc7f1e-512x384.jpeg",
url: "https://html5.gamemonetize.com/bd30oc7ds4kzvmi2xf4yzwqxf6osngnb/
/"},
  {
id: "flick-soccer",
title: "Flick Soccer",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/d94e68d8c22048be92c45e4e59456b67-512x384.jpeg",
url: "https://html5.gamemonetize.com/ok9m1w8xlz21mhryq4o4bsf8mf09y5cb/
/"},
  {
id: "finger-soccer-2023",
title: "Finger Soccer 2023",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/bc3a5712452249be876f446b0f98f5aa-512x384.jpeg",
url: "https://html5.gamemonetize.com/fb4kddt9mj1rwdyqwhdn3p7bl7o09eeb/
/"},
  {
id: "trampoline-dunk",
title: "Trampoline Dunk",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/8bda4f81a7bb42a08c8703d9d792b8f1-512x384.jpeg",
url: "https://html5.gamemonetize.com/jy9weqkw2o9he0nmgdvbdn1d97e5fz0m/
/"},
  {
id: "kick-trick",
title: "Kick Trick",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/b7c7ec9307cc4de19475a1a8a3cfc7e5-512x384.jpeg",
url: "https://html5.gamemonetize.com/83s0kck0a7k94xigb1r7n2bh3wz1h37e/
/"},
  {
id: "rally-racing-3d",
title: "Rally Racing 3D",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/b42d84e10a394f2ca9eae293ea20626b-512x384.jpeg",
url: "https://html5.gamemonetize.com/vw6g4zuwdzr1txjycu5axazldzdo63qz/
/"},
  {
id: "stick-tennis",
title: "Stick Tennis",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/0d37c93aa5e145f2a2f0e83d1dc8ac8d-512x384.jpeg",
url: "https://html5.gamemonetize.com/j4r5qzov8zxhb3ke3wufutj3sy3p0vnc/
/"},
  {
id: "bowling-king",
title: "Bowling King",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/4f3d53628a304009a982b25c4109e419-512x384.jpeg",
url: "https://html5.gamemonetize.com/nvtr3jlymswvyuwbne94cxjh20bgq1l2/
/"},
  {
id: "football-strike",
title: "Football Strike",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/8d5c73f02f3b4b09928cd1764ffbbcb7-512x384.jpeg",
url: "https://html5.gamemonetize.com/zjyqqjs2k3g5plnwy2u2qbvob4nyv6pu/
/"},
  {
id: "soccer-champ",
title: "Soccer Champ",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/2d9d97b1c1c64f1f8011f1a9f731dd82-512x384.jpeg",
url: "https://html5.gamemonetize.com/e9m6cu3mfbh6i9r71svv41ygvoa84y0q/
/"},
  {
id: "basketball-frvr",
title: "Basketball FRVR",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/3d34f4a63d5e4c2c98c15f7bb0b31d4b-512x384.jpeg",
url: "https://html5.gamemonetize.com/1apbk4ugmbj4h2y0xst8qzv8q3nuyk3b/
/"},
  {
id: "touchdown-pro",
title: "Touchdown Pro",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/8730f1de92f14b648a93ee12ffb4c4cc-512x384.jpeg",
url: "https://html5.gamemonetize.com/y5pf0dzxvctcmi71o9jj4k7z0as2vwpi/
/"},
  {
id: "stickman-skate",
title: "Stickman Skate",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/e0cb6a0fc8794036a5b4c57f8e16907b-512x384.jpeg",
url: "https://html5.gamemonetize.com/hptz2xdk0vn10a3drqgv3s5hku8i6ztd/
/"},
  {
id: "home-run-champion",
title: "Home Run Champion",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/3c720c02109147cb9373ab9e155a4f5a-512x384.jpeg",
url: "https://html5.gamemonetize.com/6dglsg1ymw3rk31wxz2xtr6hw5efpyxj/
/"},
  {
id: "3d-darts",
title: "3D Darts",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/010617535d3c4ac89bc8d86dfc6c9390-512x384.jpeg",
url: "https://html5.gamemonetize.com/gke0jwz03wa1bnsh12vbg82stlt7vzwb/
/"},
  {
id: "football-master",
title: "Football Master",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/27033c86f0f64c348e8a92e842e561bd-512x384.jpeg",
url: "https://html5.gamemonetize.com/xoaq8h6ilpy0mzbnslq8v9pg3s3o2jse/
/"},
  {
id: "penalty-shootout",
title: "Penalty Shootout",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/846b0a3f0c9a4c58b0b8429b5f7fcfbf-512x384.jpeg",
url: "https://html5.gamemonetize.com/6nvuf59ne26ay8c6r1zk5bs8t7t1pzkp/
/"},
  {
id: "ski-jump",
title: "Ski Jump",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/1e96a3f0e2324b84a63df26bfc8ab8a2-512x384.jpeg",
url: "https://html5.gamemonetize.com/d4e2f7vydkq0t4zx5fr5a7j2vh2p6x3n/
/"},
  {
id: "table-tennis-clash",
title: "Table Tennis Clash",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/132876014a494b409ec58033eb462d89-512x384.jpeg",
url: "https://html5.gamemonetize.com/gucl4kzpk2iyk9br4tnar1fpvcylj98n/
/"},
  {
id: "basketball-bounce",
title: "Basketball Bounce",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/1c9de170cfb94b10835c6df1839c5366-512x384.jpeg",
url: "https://html5.gamemonetize.com/75yzlf9gxtuv2azr0cnhspff4c7ir3va/
/"},
  {
id: "soccer-tricks",
title: "Soccer Tricks",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/cf5a5a8edc694ef2825a5d2b72e3f35b-512x384.jpeg",
url: "https://html5.gamemonetize.com/1fe8v3w7zfl1axknkqixqk1msheqz8wh/
/"},
  {
id: "dunk-shot-2",
title: "Dunk Shot 2",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/64657c1ba32f42b1a34763c3f5fdd9db-512x384.jpeg",
url: "https://html5.gamemonetize.com/p2gmfsj3xe3xzdpdd3v7mv7i13ceqxnq/
/"},
  {
id: "ski-king",
title: "Ski King",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/e34a6213d31b4dc0a5f6b705fc7c3b32-512x384.jpeg",
url: "https://html5.gamemonetize.com/iv3fwq7gy2zgx11zy5e7sh6mcxkfr55d/
/"},
  {
id: "skater-kid",
title: "Skater Kid",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/e2b3a8b54ebf4d5dbebcf74c0c9d9c5a-512x384.jpeg",
url: "https://html5.gamemonetize.com/udiy9zw28e5v2k4zkk7mf8odkdz6hkka/
/"},
  {
id: "basketball-2",
title: "Basketball 2",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/8d2e91c927d34778a9aa2f038b650c27-512x384.jpeg",
url: "https://html5.gamemonetize.com/l19xuxgv05bfbh5f3tw7znkxhf5tx5ok/
/"},
  {
id: "boxing-star",
title: "Boxing Star",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/514209d0cbb44f14ab6c2c63bdeea73d-512x384.jpeg",
url: "https://html5.gamemonetize.com/lzyv7i0aw8ml4leqydme0n2z7dffq40e/
/"},
  {
id: "tennis-pro",
title: "Tennis Pro",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/419a86da0fae4a40bc10f4f6ef0ecb58-512x384.jpeg",
url: "https://html5.gamemonetize.com/m1ohsn3zt0q9n2xdmj6ck3s26j7stp1c/
/"},
  {
id: "basketball-shooter",
title: "Basketball Shooter",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/1628f193f1b9443ebf3587b370fbce95-512x384.jpeg",
url: "https://html5.gamemonetize.com/6s3cax2xjhhypfqxsbpb0pj7clpsyt8z/
/"},
  {
id: "rugby-hero",
title: "Rugby Hero",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/dfd60ce3f4a84a179f0de46a46cd0ec7-512x384.jpeg",
url: "https://html5.gamemonetize.com/hruqjf7rruq5gvacp88jewbph01x72kd/
/"},
  {
id: "freekick-challenge",
title: "Freekick Challenge",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/fc2a4de3020147d7910598f35e561f34-512x384.jpeg",
url: "https://html5.gamemonetize.com/gm0czf13qv9ct4hn51g8a2lgvvptmv8v/
/"},
  {
id: "penalty-challenge",
title: "Penalty Challenge",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/8e4b8ce8f55e472b855e5fc9794fd7e9-512x384.jpeg",
url: "https://html5.gamemonetize.com/y9zrd8yy2w8zrl3f9kz7rd7n8vwb3j6m/
/"},
  {
id: "flick-basketball",
title: "Flick Basketball",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/1c2f3b4b799841f3b49e4a8c637f20e0-512x384.jpeg",
url: "https://html5.gamemonetize.com/qv2qsmxpbqu6yaonopj3x78twq9r57dr/
/"},
  {
id: "mini-golf-club",
title: "Mini Golf Club",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/f56fd3162fba41c4a1465e3022a52085-512x384.jpeg",
url: "https://html5.gamemonetize.com/pef9gl9zz0xhh69z46jxhb1p37ycu9m4/
/"},
  {
id: "rugby-kicks",
title: "Rugby Kicks",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/9ab1e57a3a3746f4b86b7e279ad9f3b6-512x384.jpeg",
url: "https://html5.gamemonetize.com/0xmu8rql1b39cps3uvruirvg0z77v93q/
/"},
  {
id: "air-hockey-pro",
title: "Air Hockey Pro",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/3cc6c03bcab845fe9912ea58ac37284c-512x384.jpeg",
url: "https://html5.gamemonetize.com/jb3q4cjvppcmq7mle23ns4qhhb6jhevy/
/"},
  {
id: "footstar",
title: "Footstar",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/98d8fda689204d92a69474861073bfc2-512x384.jpeg",
url: "https://html5.gamemonetize.com/s96g5t3v2h1cfv9xiz4w4olpyq43m89v/
/"},
  {
id: "tennis-open-2023",
title: "Tennis Open 2023",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/7745b0ac3d3a43899ee42f69c58a1e0a-512x384.jpeg",
url: "https://html5.gamemonetize.com/ycbtvhplvcgce3wr7nt0jp78cb9csz04/
/"},
  {
id: "speed-boat-racing",
title: "Speed Boat Racing",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/13a9b8f5f9db4c8a8b2b7b153f69cc89-512x384.jpeg",
url: "https://html5.gamemonetize.com/fdy2stxgklw25c3x7u94jkz92z5g7an2/
/"},
  {
id: "golf-battle",
title: "Golf Battle",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/2e486d318e7a493fb7e6c8c4d0f8310c-512x384.jpeg",
url: "https://html5.gamemonetize.com/yr7xq9cmocvzzy7o8g6re6zx2s7d0zqo/
/"},
  {
id: "basket-king",
title: "Basket King",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/627631db3be64d4e8c706c973c9240df-512x384.jpeg",
url: "https://html5.gamemonetize.com/82vnj9iwakp06lv0h52o7dcnp9usya5c/
/"},
  {
id: "penalty-shootout-multi-league",
title: "Penalty Shootout Multi League",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/9ad1eb38f1fc4c6eb5fd90b5896818cb-512x384.jpeg",
url: "https://html5.gamemonetize.com/s1jz3g2l9qskc8sz8b0i8b5vkmqrmc2n/
/"},
  {
id: "archery-king",
title: "Archery King",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/5a314a6e51e64bdb882bd7a065d6e429-512x384.jpeg",
url: "https://html5.gamemonetize.com/kazgxddw7mjq6ct3xewc0t2fke3pxj8p/
/"},
  {
id: "basket-slam-dunk",
title: "Basket Slam Dunk",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/92c6ec95cdd94e55a97e1d1db7d36f9a-512x384.jpeg",
url: "https://html5.gamemonetize.com/kz3adch69hzo4zk7lehm3x8xuvjdm8pd/
/"},
  {
id: "baseball-bash",
title: "Baseball Bash",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/bc6e9c04ad3a4a90a45800aa324de88e-512x384.jpeg",
url: "https://html5.gamemonetize.com/xz52n8c61ie58qb0zjhr5bkh5ocwv9aj/
/"},
  {
id: "jumping-hoops",
title: "Jumping Hoops",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/6aa21d31cdee47cbac38a241c35d1ee4-512x384.jpeg",
url: "https://html5.gamemonetize.com/2rqf6txkn3rj8nyk5dnajc53k4o6w70f/
/"},
  {
id: "tennis-clash",
title: "Tennis Clash",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/3542df7fd0e44c80a63f84eb7f8f91c0-512x384.jpeg",
url: "https://html5.gamemonetize.com/ov6d0a4j4r0mfyhyjqun0xdj0on2y3je/
/"},
  {
id: "ultimate-golf",
title: "Ultimate Golf",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/b687304174d04c34a58927369e9e7e40-512x384.jpeg",
url: "https://html5.gamemonetize.com/h9q2au25o8xv73w4gyjjldcy08hm61l9/
/"},
  {
id: "pool-8-ball",
title: "Pool 8 Ball",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/69e7f9d845a841cf9bc655b18a0f2611-512x384.jpeg",
url: "https://html5.gamemonetize.com/8bs34z7l8mwbryeg8tw9wms9f9ir9coy/
/"},
  {
id: "world-cup-fever",
title: "World Cup Fever",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/6c65ed8d75b94de6b1796bc29d58d3c7-512x384.jpeg",
url: "https://html5.gamemonetize.com/fi9mb3rkl0z4yl1gf3jgo7xy9p7a9l9s/
/"},
  {
id: "street-hoops",
title: "Street Hoops",
category: "esporte",
thumbnail: "https://img.gamedistribution.com/3fc5cebd03b64a2099b1a59ec0aaebcf-512x384.jpeg",
url: "https://html5.gamemonetize.com/czbvrujeq3rfqkuzok0f42icgc4k7kqa/
/"},
  {
id: "funny-dentist-surgery",
title: "Funny Dentist Surgery",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/ece196d69b574d8bb3b55aaaf6e7f0ea-512x384.jpeg",
url: "https://html5.gamemonetize.com/vv4gy7plbpzlyrrl1r5uf6u0s4l0pmb6/
/"},
  {
id: "baby-hazel-kitchen-fun",
title: "Baby Hazel Kitchen Fun",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/9027c96bc2354f09a119e15b2fba87e0-512x384.jpeg",
url: "https://html5.gamemonetize.com/j58gyrrgwe5bdjl6cwav2g3ac9it31rx/
/"},
  {
id: "peppa-pig-coloring",
title: "Peppa Pig Coloring",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/15e939b169684f7cb44a4083f59f71f9-512x384.jpeg",
url: "https://html5.gamemonetize.com/vsz0vyg3jzdfdc5s2abupx6uw6m58tiq/
/"},
  {
id: "doctor-kids-2",
title: "Doctor Kids 2",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/bcb19018bdf840f0a07d96b9c7dcb20f-512x384.jpeg",
url: "https://html5.gamemonetize.com/svlxqqox9axlbe0r3iy8otqmnfllvwsg/
/"},
  {
id: "toca-boca-cleanup",
title: "Toca Boca Cleanup",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/482391b7a5b94e94a512fe69b243a40f-512x384.jpeg",
url: "https://html5.gamemonetize.com/6dlvmuop1it9mc6gcuqmdmgej8v4bsni/
/"},
  {
id: "dora-memory-match",
title: "Dora Memory Match",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/2d92d92ae9674decae13c9de0d1e1b92-512x384.jpeg",
url: "https://html5.gamemonetize.com/3cysu9eh5kyb4agp0ft1piy9pe8nbq6e/
/"},
  {
id: "frozen-baby-bath",
title: "Frozen Baby Bath",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/7b9c2a6e82334b1eab66320dfe2e5cc2-512x384.jpeg",
url: "https://html5.gamemonetize.com/8cwkak8uqks4db2vlkozzjz6n8s2cz6x/
/"},
  {
id: "animal-quiz",
title: "Animal Quiz",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/8e160dfb556d49d18f4ef519a2e7f96f-512x384.jpeg",
url: "https://html5.gamemonetize.com/d9duqvvtom6bmy7pe3uw6suwuq1up4pi/
/"},
  {
id: "baby-taylor-doctor-day",
title: "Baby Taylor Doctor Day",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/f22f11a9d1d9442d90d8e58aa7f8b34f-512x384.jpeg",
url: "https://html5.gamemonetize.com/xu5ovvo6dvksgmp0ap5n4zpxx6tm2gpp/
/"},
  {
id: "kids-coloring-book",
title: "Kids Coloring Book",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/2b3b4ff56e504b77a5f61ef4903a6e9f-512x384.jpeg",
url: "https://html5.gamemonetize.com/yqej3edxtvszpp0y1w1b9xlg9f8doh70/
/"},
  {
id: "happy-farm",
title: "Happy Farm",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/4e801eb697a24ed689d429b0b25490db-512x384.jpeg",
url: "https://html5.gamemonetize.com/ztipz59en9a48ncxggmwhnvl1u10r0bt/
/"},
  {
id: "barbie-house-cleanup",
title: "Barbie House Cleanup",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/65a9292ce4694c7193c47c1f4494b43d-512x384.jpeg",
url: "https://html5.gamemonetize.com/t5oqfcu09f9uyfffdzcl98ce3hr1dz4n/
/"},
  {
id: "baby-hazel-hair-care",
title: "Baby Hazel Hair Care",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/49bb92c3983e48c2b799ce5dcd2fd6a5-512x384.jpeg",
url: "https://html5.gamemonetize.com/yljywvb3v2cngozw7z1eow0cn4e86f89/
/"},
  {
id: "baby-panda-coloring",
title: "Baby Panda Coloring",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/ce926fa3e8854416b12b92e5bdba7695-512x384.jpeg",
url: "https://html5.gamemonetize.com/6shwmdd4ybcs7gfb7z3nk4bss62at67r/
/"},
  {
id: "farm-puzzle-story",
title: "Farm Puzzle Story",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/dc99f9e9395b41b38a52dbf091af164f-512x384.jpeg",
url: "https://html5.gamemonetize.com/7x20oajwfpyh8vnvuyv9bw6it0kwu3pz/
/"},
  {
id: "my-pet-clinic",
title: "My Pet Clinic",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/934ad6d542fb4067a1cd5885c3bbcb01-512x384.jpeg",
url: "https://html5.gamemonetize.com/fhral5d77c7h7fgamz9sl4ov2pob9wv3/
/"},
  {
id: "animal-doctor",
title: "Animal Doctor",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/d1d84b22b3bc409e8885b38a9fa4de76-512x384.jpeg",
url: "https://html5.gamemonetize.com/n6qowbd1g9tp7bpefb7s41fcq9xeznu5/
/"},
  {
id: "kid-puzzle-adventure",
title: "Kid Puzzle Adventure",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/e2c169a8bb5f4a2fa118f17ee957cc8a-512x384.jpeg",
url: "https://html5.gamemonetize.com/9ay3avqfkmu5vj2tzmtk0w5uh18ra3jv/
/"},
  {
id: "ice-cream-making",
title: "Ice Cream Making",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/93e58965f8134231b0b62464678c760c-512x384.jpeg",
url: "https://html5.gamemonetize.com/9ydb8x1p7tvq4esqvtzq5dl1zqkbhecz/
/"},
  {
id: "magic-coloring-book",
title: "Magic Coloring Book",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/e6cbf7e1f44a42d1a865540c93b97dc1-512x384.jpeg",
url: "https://html5.gamemonetize.com/btcowop8ncgfkoq54o5h2jqtgdlif6em/
/"},
  {
id: "happy-glass",
title: "Happy Glass",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/4530fa6e0dc34f47aa3e1695dc415805-512x384.jpeg",
url: "https://html5.gamemonetize.com/w3kxkjxmuqft2lf4xr2kzkt24x8i3i6f/
/"},
  {
id: "funny-rescue-gardener",
title: "Funny Rescue Gardener",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/8f13d30c6bba406ca1e0e754a5d23b0d-512x384.jpeg",
url: "https://html5.gamemonetize.com/qgs1rby2liav0nyqj0el99wo4vkfq5yk/
/"},
  {
id: "jigsaw-puzzle-kids",
title: "Jigsaw Puzzle Kids",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/062f1845f6c142d780582ca03cb8a678-512x384.jpeg",
url: "https://html5.gamemonetize.com/5qos4kt1r8stlt9d1wsp6e1he7ujfuhb/
/"},
  {
id: "pet-wash",
title: "Pet Wash",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/80413291c7014ae68814654e15cc6a3e-512x384.jpeg",
url: "https://html5.gamemonetize.com/5m9vhnz2wptl4hj2djf2j8b1slsqz3xi/
/"},
  {
id: "coloring-book:-cars",
title: "Coloring Book: Cars",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/e7634b15d1b941ae90ee98ec57d1a3d9-512x384.jpeg",
url: "https://html5.gamemonetize.com/k61pe6zw5kkqctk0v47h8sdiih6owry9/
/"},
  {
id: "frozen-princess-clean",
title: "Frozen Princess Clean",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/0eea5e4975fc4a1b9c2f538de372801f-512x384.jpeg",
url: "https://html5.gamemonetize.com/j14swwdcqrrxrk59kft54i3mfu13jtdz/
/"},
  {
id: "sweet-baby-girl-cleanup",
title: "Sweet Baby Girl Cleanup",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/0f71b185a8024b10a9a61725214603fc-512x384.jpeg",
url: "https://html5.gamemonetize.com/kq16v7pvftff7wlgdj0l9j9jqmtn2cwv/
/"},
  {
id: "cute-animal-memory",
title: "Cute Animal Memory",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/658cf0c22ea84a1692c20785fa4466aa-512x384.jpeg",
url: "https://html5.gamemonetize.com/7ngm9p97zy0m1u8p4zvw5tdvhc1je5q0/
/"},
  {
id: "lego-building-adventure",
title: "Lego Building Adventure",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/22cb998a0a7c4239b2447a2fffd36c42-512x384.jpeg",
url: "https://html5.gamemonetize.com/d8pzr4o7hpcvmh1zkn7szn9odqmtx6jl/
/"},
  {
id: "magic-pet-salon",
title: "Magic Pet Salon",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/ea8d60bb91c04f979b09f59437d2914d-512x384.jpeg",
url: "https://html5.gamemonetize.com/9q1lln9ek50lquxvqndtk8rbbk5bdixr/
/"},
  {
id: "mini-town-farm-life",
title: "Mini Town Farm Life",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/f99be5c2359d4b369b4b8b02d676c9a1-512x384.jpeg",
url: "https://html5.gamemonetize.com/2wojv4eip0bdul7jzyvbjmo5w2avclv6/
/"},
  {
id: "ice-princess-makeup",
title: "Ice Princess Makeup",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/2ff8c1f3d7db4d83b88992de1b880ae7-512x384.jpeg",
url: "https://html5.gamemonetize.com/gz91as3rh6xxe4vc3cgfc0xn9ktxb4mf/
/"},
  {
id: "abc-kids-game",
title: "ABC Kids Game",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/4a3c2ae82b774e8a96ec3e2a8453b8cb-512x384.jpeg",
url: "https://html5.gamemonetize.com/5xnzq2f5v6p1u4pc02g4ac9m7ffdrp9g/
/"},
  {
id: "baby-tailor",
title: "Baby Tailor",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/9626bce228e64c25b9b18707bbf1f8f1-512x384.jpeg",
url: "https://html5.gamemonetize.com/p3zttpe4r50kl3u3kh9wevg3f38x3a7j/
/"},
  {
id: "princess-dress-up",
title: "Princess Dress Up",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/ccf5b6ecb3ef47f8be4ddc0e0c5a3d46-512x384.jpeg",
url: "https://html5.gamemonetize.com/j06zdt0et2dsvlq7h8ljf22uolzrpeuz/
/"},
  {
id: "baby-happy-cleaning",
title: "Baby Happy Cleaning",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/5a4638a086f94e2c845bd98f41c4ebd0-512x384.jpeg",
url: "https://html5.gamemonetize.com/cx7q5m3d2x6rxdj5azpv5d6xy4x0q9h5/
/"},
  {
id: "elsa-baby-bath",
title: "Elsa Baby Bath",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/4203b67b269946b08471d74a4bca5ac8-512x384.jpeg",
url: "https://html5.gamemonetize.com/kc07r6bdk6qilx5yqyn8ex81wglkqvw9/
/"},
  {
id: "animal-puzzle-kids",
title: "Animal Puzzle Kids",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/7a34e61ab21a41919566ebfd1d40be8d-512x384.jpeg",
url: "https://html5.gamemonetize.com/cprqpfl2fj5cp76eeepgxzptwrmxw8pb/
/"},
  {
id: "funny-daycare",
title: "Funny Daycare",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/93bdaf585dc04182b25110a3aa91ba35-512x384.jpeg",
url: "https://html5.gamemonetize.com/3ch8gpdzbsdkmn97bcyvgaabxv0dhazt/
/"},
  {
id: "puzzle-coloring",
title: "Puzzle Coloring",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/640ffb63a9f2464a89aa8582b9f13e4d-512x384.jpeg",
url: "https://html5.gamemonetize.com/fhbwe4a60ydk4qefjcuzf5k2v54ibj0p/
/"},
  {
id: "baby-hazel-learn-animals",
title: "Baby Hazel Learn Animals",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/9e40be569c1b49a4a3372e275963a1bc-512x384.jpeg",
url: "https://html5.gamemonetize.com/l6n2vh4s0uolsk07jxsoq6b62f49gkgm/
/"},
  {
id: "my-baby-unicorn",
title: "My Baby Unicorn",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/bba3ac90a3304bcd86e004a7ad7c38b7-512x384.jpeg",
url: "https://html5.gamemonetize.com/lh9y1vwz1em3ne30x0sxhshlt88w6wfo/
/"},
  {
id: "drawing-master",
title: "Drawing Master",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/e2946f17890c42a7a29b8e7ce2e4e25d-512x384.jpeg",
url: "https://html5.gamemonetize.com/fisrz12rnc2zpg1x1zr7sz9xj3l1p82w/
/"},
  {
id: "baby-panda-house-cleaning",
title: "Baby Panda House Cleaning",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/289fcbcf135f464fa39ff44dbfe202cb-512x384.jpeg",
url: "https://html5.gamemonetize.com/4b6d4zmtv4qbjij4tptvbm3k78iw2u3p/
/"},
  {
id: "my-pet-vet-hospital",
title: "My Pet Vet Hospital",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/53a2a46c398e438d9d92b1a4a38a3fe1-512x384.jpeg",
url: "https://html5.gamemonetize.com/nil83zdkmjil0rgdxkjitxd5lm5jtkms/
/"},
  {
id: "princess-school-cleaning",
title: "Princess School Cleaning",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/c263c02cb39c429b8e1d190c3f38f040-512x384.jpeg",
url: "https://html5.gamemonetize.com/k0zrp6z5zjlp59knyexdwlnz5qr6trkj/
/"},
  {
id: "baby-elsa-cooking",
title: "Baby Elsa Cooking",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/2687b5e29b6843b4b71a85b7e614f01e-512x384.jpeg",
url: "https://html5.gamemonetize.com/8ybg4xz2og8ruvge6ig6h3jwr4lgi4or/
/"},
  {
id: "kids-zoo-fun",
title: "Kids Zoo Fun",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/9a21cb54a70e4db1ac471be06604b991-512x384.jpeg",
url: "https://html5.gamemonetize.com/sig72khwy0lzhoop4mjv3v7kwcv0z5go/
/"},
  {
id: "monster-dentist",
title: "Monster Dentist",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/65cd7903872644498bc6837bbf33e8f1-512x384.jpeg",
url: "https://html5.gamemonetize.com/juszo1grvgacln3zo3ggvhs9pf9ul1a1/
/"},
  {
id: "baby-hazel-eye-care",
title: "Baby Hazel Eye Care",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/3fc45120eb40402099cd5e47c7fa6dc4-512x384.jpeg",
url: "https://html5.gamemonetize.com/3o9x2amj61a6aa2edg9t1k5bl9aljkaq/
/"},
  {
id: "kids-airport-adventure",
title: "Kids Airport Adventure",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/93902f3ee33f4648b6c9f098e5ae82be-512x384.jpeg",
url: "https://html5.gamemonetize.com/r40hoy2zcrgsqft2eytdlf0zfh4trxi2/
/"},
  {
id: "pony-dress-up",
title: "Pony Dress Up",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/f2e4c0f5b51d451a9cb0cf7a124fa87b-512x384.jpeg",
url: "https://html5.gamemonetize.com/7yzgz3g0efdequ9znspgq52jzkubuh12/
/"},
  {
id: "dora-play-puzzle",
title: "Dora Play Puzzle",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/82d89fbdde2b4ec9abf2ceca35d2c002-512x384.jpeg",
url: "https://html5.gamemonetize.com/7ctjsdrcb6sy2jvfyb7kkqt6pcvh3qgq/
/"},
  {
id: "cooking-express",
title: "Cooking Express",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/1bd09d9ee6a347e8bbd8a34cb404bda1-512x384.jpeg",
url: "https://html5.gamemonetize.com/w3ovpwtyhrrmcoipuyolgnvlq1bgzlj2/
/"},
  {
id: "clean-the-sea",
title: "Clean The Sea",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/2dcf8bfe4ae74db7b8dc3cc32ce4dbe5-512x384.jpeg",
url: "https://html5.gamemonetize.com/5jdd7md97j3i3q3j5ctfzazfyq3vj9z6/
/"},
  {
id: "funny-rescue-zookeeper",
title: "Funny Rescue Zookeeper",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/e5028a62d31944b7b44f9dc64eac7d36-512x384.jpeg",
url: "https://html5.gamemonetize.com/mc6o12j5zomd4k88k2r6wtucgzcv2o53/
/"},
  {
id: "animal-match-game",
title: "Animal Match Game",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/5ed963499c1841c88478cfc5ea62f3d7-512x384.jpeg",
url: "https://html5.gamemonetize.com/l96vt0wj8ssvuxmk7zpp3py7ns0jxfra/
/"},
  {
id: "funny-throat-surgery",
title: "Funny Throat Surgery",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/16c74713a17d46e7bb4d367c6d5143f6-512x384.jpeg",
url: "https://html5.gamemonetize.com/yjxd5y3hdacgo5byh12f6t23c3g3l0le/
/"},
  {
id: "pikachu-coloring",
title: "Pikachu Coloring",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/1544b529d21646cb8f38ef7d3dbb3523-512x384.jpeg",
url: "https://html5.gamemonetize.com/j6lx3jz6exzct9fmgd5cphw3kpdsp3ex/
/"},
  {
id: "happy-snail-house",
title: "Happy Snail House",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/f35d91e3fd534b4a849a08b254a214d1-512x384.jpeg",
url: "https://html5.gamemonetize.com/ifndh0iz93i8km8gtlfeh5u3bd9fnql3/
/"},
  {
id: "happy-kids-burger-maker",
title: "Happy Kids Burger Maker",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/1732b8084cdb4a4ab7a3a5974976a38a-512x384.jpeg",
url: "https://html5.gamemonetize.com/1pxhlbm28zyej9s33al3uxxvdtzpyg6g/
/"},
  {
id: "coloring-book-airplanes",
title: "Coloring Book Airplanes",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/944801ac8fcf4b07a621cce65c6a66b6-512x384.jpeg",
url: "https://html5.gamemonetize.com/qpyg6ljhz8ckmtc2fp7ivmxf3h9zmtm6/
/"},
  {
id: "baby-food-cooking",
title: "Baby Food Cooking",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/4e5021a69eea49589a9b33a33f3c3cf7-512x384.jpeg",
url: "https://html5.gamemonetize.com/ya33e8or0k35p2c1yt12vbx6k5k3dcso/
/"},
  {
id: "frozen-baby-care",
title: "Frozen Baby Care",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/10a8f8d18c134a39bfb9e3beaa2117f0-512x384.jpeg",
url: "https://html5.gamemonetize.com/3jbpb1syjq33x6mqf8u6yxbx4e68usq1/
/"},
  {
id: "kids-coloring-time",
title: "Kids Coloring Time",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/f48ac667ad1f48a58a512c0052e1e60e-512x384.jpeg",
url: "https://html5.gamemonetize.com/bgmjq2n5xzmmp1k6f7clvvqec8c8vzo4/
/"},
  {
id: "mini-monkey-mart",
title: "Mini Monkey Mart",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/bf2b10efb93e4e14a36436e2e08c88b5-512x384.jpeg",
url: "https://html5.gamemonetize.com/r8shb2gn17rzkdkoqkt0ckdu58wa90b4/
/"},
  {
id: "unicorn-dentist",
title: "Unicorn Dentist",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/1bbf45cf59594d339c925579acb7f3f1-512x384.jpeg",
url: "https://html5.gamemonetize.com/y07meqx8n52zkx4ph4mncnrxtlggz3z9/
/"},
  {
id: "ice-cream-memory-game",
title: "Ice Cream Memory Game",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/eb6f9c47d843432c8b39b1a1de6fbb60-512x384.jpeg",
url: "https://html5.gamemonetize.com/d7yf19gp5sq9z5tw8g4b09a5hzq79eqj/
/"},
  {
id: "doll-house-cleanup",
title: "Doll House Cleanup",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/50ff3d2b0e0d41df90b070de2355a79c-512x384.jpeg",
url: "https://html5.gamemonetize.com/sqizbniamvd5pbzkft5g16ps6v4rj9zq/
/"},
  {
id: "baby-cat-adventure",
title: "Baby Cat Adventure",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/67cd49d27d724e3d86b2df3ffb72a548-512x384.jpeg",
url: "https://html5.gamemonetize.com/3jl9kdph1z4tdozh12pgqeqgqqmrmw13/
/"},
  {
id: "cartoon-puzzle",
title: "Cartoon Puzzle",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/6c8d8658df4c4c12be76571d63f77e20-512x384.jpeg",
url: "https://html5.gamemonetize.com/w20k3pbv5x7s4zh9uzvjxbg2g1bp0zj9/
/"},
  {
id: "magic-coloring-book",
title: "Magic Coloring Book",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/8be589f7a42e4a9b84c4f3e1f512236d-512x384.jpeg",
url: "https://html5.gamemonetize.com/gzvl41h90cpm1amrgm1qod8sfqg2etq9/
/"},
  {
id: "funny-bone-surgery",
title: "Funny Bone Surgery",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/ca944c5d42cc4e3eaf89ec062d7f2c19-512x384.jpeg",
url: "https://html5.gamemonetize.com/2szgpt93lkisyybj96aeccpkbqoqk3jh/
/"},
  {
id: "little-dentist",
title: "Little Dentist",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/89df42949c5040e983cdb364df055d52-512x384.jpeg",
url: "https://html5.gamemonetize.com/q17ed01vqpptltyhx6ddk2ruwl2a4ugp/
/"},
  {
id: "elsa-magic-world",
title: "Elsa Magic World",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/4cc2d7f11ae148e5a3956b474c8c4135-512x384.jpeg",
url: "https://html5.gamemonetize.com/0k8hz7ed4dny7dcqvw2l9f46r5v3hvsv/
/"},
  {
id: "baby-chick-maze",
title: "Baby Chick Maze",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/b26e1d603af84c6e8c56d7c46266b5f5-512x384.jpeg",
url: "https://html5.gamemonetize.com/zmykt98hlx9zmn7h7c2lzx8k4rm1o8yz/
/"},
  {
id: "candy-catcher",
title: "Candy Catcher",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/05ee12b83d914c0b88e2348c76e9d58e-512x384.jpeg",
url: "https://html5.gamemonetize.com/vdnkz8k73g4nrf1pf1qnqxjh9ds8vkzy/
/"},
  {
id: "magic-tiles",
title: "Magic Tiles",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/878346cdcaeb49a1ab46a2f6e6cdd159-512x384.jpeg",
url: "https://html5.gamemonetize.com/y6ouph0wujnd86rb4rdjyrmjkpj9d4n5/
/"},
  {
id: "baby-dino-jigsaw",
title: "Baby Dino Jigsaw",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/6902c8bda72a4c3aa72c58cb8f1ae6b7-512x384.jpeg",
url: "https://html5.gamemonetize.com/t08wo2r1qnljwbksn0sxq5i7bk7mj4lk/
/"},
  {
id: "funny-ear-surgery",
title: "Funny Ear Surgery",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/f1a4b01ff53f4208a9c6df9281463779-512x384.jpeg",
url: "https://html5.gamemonetize.com/3xyyli4kpjxjipdq9qub8u3q3uwzyfqq/
/"},
  {
id: "fruit-ninja-online",
title: "Fruit Ninja Online",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/2e5d9c3194f2437581b0a3401f502c93-512x384.jpeg",
url: "https://html5.gamemonetize.com/0pmsdhxos9p6eoh1cz7ljytkvz6ntrkh/
/"},
  {
id: "piano-kids-music",
title: "Piano Kids Music",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/e8ff0fa4a4734380bd951b8ffcf7c7fa-512x384.jpeg",
url: "https://html5.gamemonetize.com/pcohzilz8qlrvc2ru16snqeqnx95rfgs/
/"},
  {
id: "princess-makeover",
title: "Princess Makeover",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/67d0a1a230ec4d70a4fcf6d30c20365f-512x384.jpeg",
url: "https://html5.gamemonetize.com/hzshumxmnqtpapmvcu03oyepqggh51n8/
/"},
  {
id: "unicorn-cake-cooking",
title: "Unicorn Cake Cooking",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/41207192620144fd8cb1d39e0a79ef65-512x384.jpeg",
url: "https://html5.gamemonetize.com/f4j3rx9rmy3dxk4iq3cvn39u1hd12tsg/
/"},
  {
id: "cute-animal-quiz",
title: "Cute Animal Quiz",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/8d6d41eb396c4423b3a2fd5a15524a0a-512x384.jpeg",
url: "https://html5.gamemonetize.com/t3ucx35trdyu0bguhcl4z4e7p2lwwfpp/
/"},
  {
id: "rainbow-ice-cream",
title: "Rainbow Ice Cream",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/5c91f1b032a84ddfa6bc19391c86dd13-512x384.jpeg",
url: "https://html5.gamemonetize.com/pzrn2h7fozue6nqs91qotwd49mjgtd3i/
/"},
  {
id: "magic-bubble-tea",
title: "Magic Bubble Tea",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/d4b848d4a8f74250abf1b36f9bb10cc3-512x384.jpeg",
url: "https://html5.gamemonetize.com/1ip7a1xxtvztazuk8jhy9ujmcq1jo3d6/
/"},
  {
id: "princess-coloring",
title: "Princess Coloring",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/f1830ef0b2fd4ce58db9b2c96b5b5b64-512x384.jpeg",
url: "https://html5.gamemonetize.com/pv9gd3ruu9ihgwnle5n3rfspnmp8gn93/
/"},
  {
id: "funny-nose-surgery",
title: "Funny Nose Surgery",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/3a82bdb3dc544c0f8a6d1e54cc92a25d-512x384.jpeg",
url: "https://html5.gamemonetize.com/zqfct2jvceowrpx3ezn5xybkw4tooh5s/
/"},
  {
id: "pony-pet-salon",
title: "Pony Pet Salon",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/17bb2d2e6fd44e74aa1b83b8b15ac053-512x384.jpeg",
url: "https://html5.gamemonetize.com/xv1t7svhrz7zd2zrx39z6vhjbyz8kq6x/
/"},
  {
id: "baby-bottle-feeding",
title: "Baby Bottle Feeding",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/984a51f202f14da391d3695eaa3f4a7a-512x384.jpeg",
url: "https://html5.gamemonetize.com/t2p4s3r6k5ot5x9u3js0eoxj8icfkmdb/
/"},
  {
id: "my-little-dragon",
title: "My Little Dragon",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/44784fba03b94df59f8e2bc48b0d0d86-512x384.jpeg",
url: "https://html5.gamemonetize.com/5s7iwgl6yt2ehry9ie3l7fekjfr8j4mn/
/"},
  {
id: "animal-shapes-puzzle",
title: "Animal Shapes Puzzle",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/1a984bcf39414e2f8095b3bfe9a80d41-512x384.jpeg",
url: "https://html5.gamemonetize.com/pbpebk4sh7z27ev5votxptz6keou9al9/
/"},
  {
id: "cocomelon-matching",
title: "Cocomelon Matching",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/c75f94ebc2434eb7baf524e8e5e8d55e-512x384.jpeg",
url: "https://html5.gamemonetize.com/v1dz4ih5br6zyt8i17l2zctdxj9y0iyh/
/"},
  {
id: "cute-monster-dentist",
title: "Cute Monster Dentist",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/21c64793fc2c4c229437fbd5291b3540-512x384.jpeg",
url: "https://html5.gamemonetize.com/0vn68b7s72vtf3dtzcdv1g58j2dkg4dc/
/"},
  {
id: "fish-coloring-book",
title: "Fish Coloring Book",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/8c48a1c7b1734bc2891aa3f2198a7b53-512x384.jpeg",
url: "https://html5.gamemonetize.com/j6rgtxiehxiyje0zch2osrb7rlz9wo3x/
/"},
  {
id: "sweet-baby-girl-cleanup",
title: "Sweet Baby Girl Cleanup",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/45f80214e8d948db8f7efc6aa7c94de9-512x384.jpeg",
url: "https://html5.gamemonetize.com/gxwvz3q9hjzvkhgl9dhok13exmss2lmv/
/"},
  {
id: "fruits-and-vegetables",
title: "Fruits and Vegetables",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/0e1435fefb5d457495016e529dfae6d9-512x384.jpeg",
url: "https://html5.gamemonetize.com/pby2vwqrzj5sfxra4jvvsljy7hqieyb7/
/"},
  {
id: "fun-pet-haircut",
title: "Fun Pet Haircut",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/0130670576b949f9a2c3b99c17113bb2-512x384.jpeg",
url: "https://html5.gamemonetize.com/q8gzvj2ggq7k2lfg6eobqcnzzmeps9va/
/"},
  {
id: "toddler-puzzle",
title: "Toddler Puzzle",
category: "infantil",
thumbnail: "https://img.gamedistribution.com/8282e3f1b92744be9e07be6e0571a83e-512x384.jpeg",
url: "https://html5.gamemonetize.com/vv4n4m7v1ib3cnlhxhp2aeqmyk7rkbw9/
/"},
  {
id: "shell-shockers",
title: "Shell Shockers",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/1f12d27babc74eb49df4d846ba958189-512x384.jpeg",
url: "https://html5.gamemonetize.com/3a1gsy2bpz2x9kx5muav11uwuw5z5sni/
/"},
  {
id: "minibattles",
title: "MiniBattles",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/241b989cbe3d4ec3a4d661cdffefcfb7-512x384.jpeg",
url: "https://html5.gamemonetize.com/oh6hhq19jll2rxd1lh8mynqfpdz8l1ei/
/"},
  {
id: "among-shooter-online",
title: "Among Shooter Online",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/17f39332814a4d6c9622b9a3c0a8c0b2-512x384.jpeg",
url: "https://html5.gamemonetize.com/bte2psw9tg1wq7wmo58xjlb5xhvex12p/
/"},
  {
id: "getaway-shootout",
title: "Getaway Shootout",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/ef5d40eb41c14756a1480647e70e77c6-512x384.jpeg",
url: "https://html5.gamemonetize.com/yzkvv9eor3v8re6a2b1kpkhxq2e07u2k/
/"},
  {
id: "pixel-gun-apocalypse-3",
title: "Pixel Gun Apocalypse 3",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/0b8c13a9e8234022a2f9d6115bd58e1f-512x384.jpeg",
url: "https://html5.gamemonetize.com/0u2jhm4wskmvnnyk9zovzixabk9y0rme/
/"},
  {
id: "fire-vs-water-fights",
title: "Fire vs Water Fights",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/f6f7e9242cf7459cbf92f8ff9c96d91a-512x384.jpeg",
url: "https://html5.gamemonetize.com/wz68cz9jb03k8xsw6xn3v1lhnlax7a3z/
/"},
  {
id: "rooftop-snipers",
title: "Rooftop Snipers",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/387edc2de26d4b39b6f9f4a1a64f0f65-512x384.jpeg",
url: "https://html5.gamemonetize.com/7uqaqm7q6n0r2urxwny5yjcowt4e7nlz/
/"},
  {
id: "8-ball-pool",
title: "8 Ball Pool",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/064fa36f58094c1caef1f4a4c6d03c7a-512x384.jpeg",
url: "https://html5.gamemonetize.com/41ifvywm6wqys4a2zixmjzrmdff32ddz/
/"},
  {
id: "two-ball-3d-dark",
title: "Two Ball 3D Dark",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/69d52ff0a0324ff8b370017fc71ab556-512x384.jpeg",
url: "https://html5.gamemonetize.com/oqer21f94bkppjjs3q44khnzdvlbx6eo/
/"},
  {
id: "bomb-it-7",
title: "Bomb It 7",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/54dbd1b5be2f4c0c93835712585a1105-512x384.jpeg",
url: "https://html5.gamemonetize.com/7bfpjojjm3mo8cx1mpx43u58p5fpq38r/
/"},
  {
id: "basketball-stars",
title: "Basketball Stars",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/689fdb3bcad04e7bb7b6015bb3d774df-512x384.jpeg",
url: "https://html5.gamemonetize.com/01mcb73h0yxk21weztlcgsdb3gt9yo5z/
/"},
  {
id: "tug-the-table",
title: "Tug the Table",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/775f5587dc2c44ef98cb3469f384ef2f-512x384.jpeg",
url: "https://html5.gamemonetize.com/33mmo5mo2chj9jkoi2pkydzlv8sygfns/
/"},
  {
id: "mini-royale",
title: "Mini Royale",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/34dd0ad37cf54b77a64e2f90c7c929a2-512x384.jpeg",
url: "https://html5.gamemonetize.com/gq9cg78jrvf1xpm97vci2ajd91t5ar4g/
/"},
  {
id: "two-punk-racing",
title: "Two Punk Racing",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/5b8b0abac9f64f64a7453f5d70aaaf9b-512x384.jpeg",
url: "https://html5.gamemonetize.com/tb7ybcyx4qx9q5ef2ynfr7jh5q7elxnx/
/"},
  {
id: "soccer-random",
title: "Soccer Random",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/6279b81a41a344f8bb8c896d71c63c01-512x384.jpeg",
url: "https://html5.gamemonetize.com/z4zfw41kcr3xio0ib6eb3l6n7rq90qg8/
/"},
  {
id: "dino-merge-wars",
title: "Dino Merge Wars",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/3baf0c28eb144c09b7ee5c2c6e8e6d9d-512x384.jpeg",
url: "https://html5.gamemonetize.com/uwln17ltvhlbdcsad3owh0zayxxwp6bg/
/"},
  {
id: "real-city-driver-2",
title: "Real City Driver 2",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/b62ecbffaf9241db92df9c805fe1cf5a-512x384.jpeg",
url: "https://html5.gamemonetize.com/yl4ymbk57id34c5h6srwpxszngmrutje/
/"},
  {
id: "pubg-pixel",
title: "PUBG Pixel",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/105e71bcd5ed4ac5ab47a1cfa917564e-512x384.jpeg",
url: "https://html5.gamemonetize.com/0cqllm79l3ckem4kp3tczrxws0sv38cy/
/"},
  {
id: "lolbeans",
title: "LOLBeans",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/64c31779b57e494bb9aa998bd2440a0b-512x384.jpeg",
url: "https://html5.gamemonetize.com/2g5bb4s2k2am3rbeflzncv94xzjz2dgh/
/"},
  {
id: "rocket-clash-3d",
title: "Rocket Clash 3D",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/1841f0807e144de19a4c978aa6d92de6-512x384.jpeg",
url: "https://html5.gamemonetize.com/12cb4unux5n4vneowfkqj3vpru3ulv9z/
/"},
  {
id: "two-tubes-3d",
title: "Two Tubes 3D",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/c888b8d48a2041c884acdcbe567f4dfb-512x384.jpeg",
url: "https://html5.gamemonetize.com/5cyt3whwjjwh2ezrwvqdfi8g1etxg9ro/
/"},
  {
id: "stick-duel-battle",
title: "Stick Duel Battle",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/01e2a98c1f4c46b6a77f7c024c55aa4e-512x384.jpeg",
url: "https://html5.gamemonetize.com/k7r4ss13n3ss3vygvb75ndz1ahuk0gkw/
/"},
  {
id: "pixel-battle-royale",
title: "Pixel Battle Royale",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/7322e2c7c8a84fd08f264c174abb7f35-512x384.jpeg",
url: "https://html5.gamemonetize.com/kb2e3rbt67z0zfvleu4r91g0xxeoyfl6/
/"},
  {
id: "money-movers-1",
title: "Money Movers 1",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/9c55a3738d214fdbb6cfafcfaee76902-512x384.jpeg",
url: "https://html5.gamemonetize.com/g21a4qf4n95wxd7jgpv3oc1wj6hfbyjc/
/"},
  {
id: "soccer-masters-euro-2020",
title: "Soccer Masters Euro 2020",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/63071f60b4c94dbb999a67b21cefc712-512x384.jpeg",
url: "https://html5.gamemonetize.com/et1pj71u0obuvv6q1ctgagbykmzw1c84/
/"},
  {
id: "tank-trouble-2",
title: "Tank Trouble 2",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/82a2df3bbf50403aa11d927f99fd2c0e-512x384.jpeg",
url: "https://html5.gamemonetize.com/ymw1ebn6fc2kpiuh1v3c0kp3jxq3zvjh/
/"},
  {
id: "drunken-wrestle",
title: "Drunken Wrestle",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/66dd5a27356a4b9f8e3b75aa7e249df9-512x384.jpeg",
url: "https://html5.gamemonetize.com/ufusoeh6yba75vx0f7h28yx7c1z0x2a3/
/"},
  {
id: "battle-royale-survival",
title: "Battle Royale Survival",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/8be93bbf7131436e80adf0cf86b8b764-512x384.jpeg",
url: "https://html5.gamemonetize.com/ohd6em1gjrznvds6eky5v7ezvdlw2x1d/
/"},
  {
id: "combat-online",
title: "Combat Online",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/55e71e93bbd940c0b657c010d7f60e5d-512x384.jpeg",
url: "https://html5.gamemonetize.com/cpg44s9azd13b4nl49l6s3d24hyxnncj/
/"},
  {
id: "city-bike-stunt-2",
title: "City Bike Stunt 2",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/9c3b4f564b7d41488bb632054f90cc7f-512x384.jpeg",
url: "https://html5.gamemonetize.com/dlhm27vmb67p7jsglj9rzid6d4x33c3r/
/"},
  {
id: "vortex-9",
title: "Vortex 9",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/c0ae38761a594d4e9093f7bfb2ad3c83-512x384.jpeg",
url: "https://html5.gamemonetize.com/fxamxwz3gfe0byd7vm2mp2v6h3mkkzqn/
/"},
  {
id: "heads-arena-soccer-all-stars",
title: "Heads Arena Soccer All Stars",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/9a697ed8e4a4435e931c3c4864c30577-512x384.jpeg",
url: "https://html5.gamemonetize.com/l4sax78nnfd2p27m7uglt7r9hq7xs4w7/
/"},
  {
id: "rally-point-4",
title: "Rally Point 4",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/019d47195f7d4f03a997a1ae53ae5ab2-512x384.jpeg",
url: "https://html5.gamemonetize.com/2uf6gf5vll6eqf26gr5p6rpv79yjeiqj/
/"},
  {
id: "two-bike-stunts",
title: "Two Bike Stunts",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/eae6c85ab0be4916b66c261c6fd4fc3d-512x384.jpeg",
url: "https://html5.gamemonetize.com/kkne7g9x32ny0jvwd99m8v1zovxopwks/
/"},
  {
id: "gunbattle",
title: "GunBattle",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/cd96b18c8c2e443f924a62e24414bcbf-512x384.jpeg",
url: "https://html5.gamemonetize.com/pwz8kdwt0u0oevlmmc2itugnvhbp9tm3/
/"},
  {
id: "masked-forces-crazy-mode",
title: "Masked Forces Crazy Mode",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/4f63c1898b484ab7aaf40b79a6e8f6e3-512x384.jpeg",
url: "https://html5.gamemonetize.com/vk0fh3j8upjls3u4mvztb7e53sfdo9x1/
/"},
  {
id: "gun-mayhem-redux",
title: "Gun Mayhem Redux",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/b99204bc4317498f8d9608eb2cd6df33-512x384.jpeg",
url: "https://html5.gamemonetize.com/svn0f0ij6h7oehtv8bm3h60kzvbj2is0/
/"},
  {
id: "basket-champs",
title: "Basket Champs",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/29b8e22719964d728fefcd4106f0d2cc-512x384.jpeg",
url: "https://html5.gamemonetize.com/x77h9cqz0osgzq6y1dzb7hz1osbx27l6/
/"},
  {
id: "boxing-random",
title: "Boxing Random",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/0bd68e9c71564bb9b6215f03ed0b3a6f-512x384.jpeg",
url: "https://html5.gamemonetize.com/ra2u3o56q9dtgdc26mk82yr79nz75slh/
/"},
  {
id: "tennis-masters",
title: "Tennis Masters",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/0e0636797f774d35993c89343c2f03c1-512x384.jpeg",
url: "https://html5.gamemonetize.com/wusmxy9eqj2w1b0qu2ohjr97xla0yn9u/
/"},
  {
id: "dunkers-fight-2p",
title: "Dunkers Fight 2P",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/2b2696feffdb46e7ad243c5d0f167735-512x384.jpeg",
url: "https://html5.gamemonetize.com/zsqcttbqytlxutlhdmqpzp8cxay9gxu6/
/"},
  {
id: "1v1-lol",
title: "1v1 LOL",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/6fa185c3d32e4052876d6fc0cfca269e-512x384.jpeg",
url: "https://html5.gamemonetize.com/2ukozlvp8x30v3lyc51nkfv8wkbj0qjm/
/"},
  {
id: "snakes-and-ladders",
title: "Snakes and Ladders",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/5893b54ac3e84d44a0a840bc1fd7e69c-512x384.jpeg",
url: "https://html5.gamemonetize.com/q4bdrc6evyfylk7oxl2m8pskvb9pvmzy/
/"},
  {
id: "drunken-boxing-2",
title: "Drunken Boxing 2",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/3f2470de407b49d68fa8ef246ce1744e-512x384.jpeg",
url: "https://html5.gamemonetize.com/hk8djq6m7t3gafhbyxgsrj8l3nxd2rqi/
/"},
  {
id: "among-us-space-rush",
title: "Among Us Space Rush",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/ececefe1c5044e3d833dbb5580bc3bb0-512x384.jpeg",
url: "https://html5.gamemonetize.com/wnxv0v3lz4tb9ce9j0ogogquwwh7rb9e/
/"},
  {
id: "dino-meat-hunt-dry-land",
title: "Dino Meat Hunt Dry Land",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/21630ea9a4c746f38b3250a0bc97dbb2-512x384.jpeg",
url: "https://html5.gamemonetize.com/94njokg9j8w7p7b17t1omdnv8oqm9qqe/
/"},
  {
id: "gun-night.io",
title: "Gun Night.io",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/b3d9b37019c54c2790c0091a2df40f30-512x384.jpeg",
url: "https://html5.gamemonetize.com/kkfknjq9r86pwka1ezgjb4ojpii8kqxg/
/"},
  {
id: "battle-wheels",
title: "Battle Wheels",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/37d5e352e1544972bb5d81c6a3b445bd-512x384.jpeg",
url: "https://html5.gamemonetize.com/ly9ywb1cg3eqqjr9cvugsvufp42u0r6h/
/"},
  {
id: "zombie-parade-defense-2",
title: "Zombie Parade Defense 2",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/e68eb43a9b3941d288cc1dd5ecdd8e9d-512x384.jpeg",
url: "https://html5.gamemonetize.com/cvw88obdnmec9s8a82gk1k4kmcf5hujv/
/"},
  {
id: "pixel-gun-warfare-2",
title: "Pixel Gun Warfare 2",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/1197e10e3cc44adf82ac801e368b4c36-512x384.jpeg",
url: "https://html5.gamemonetize.com/tfpqrxht0qpq38o6rmwwdkyfucjdzexq/
/"},
  {
id: "1v1-lol",
title: "1v1 LOL",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/b1b2e317e8db4b0197c63f5fa3ff35d2-512x384.jpeg",
url: "https://html5.gamemonetize.com/r5oh38cgygevl0nr08a62bi2blxjglbw/
/"},
  {
id: "bomb-it-6",
title: "Bomb It 6",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/926fa377262e45b9941c1ef81a57adf5-512x384.jpeg",
url: "https://html5.gamemonetize.com/xkz6jf7mcnfy9d9z1f0z1h7ytj4bvl9z/
/"},
  {
id: "gun-mayhem-redux",
title: "Gun Mayhem Redux",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/1743c447c5cb4a48a71b8826f3c6fd66-512x384.jpeg",
url: "https://html5.gamemonetize.com/qgfwwjmt8h2tjbkbszh7h7h7hjkj7lj7/
/"},
  {
id: "drunken-boxing",
title: "Drunken Boxing",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/6cf264f43c8e4fe3be83f1d7cb914390-512x384.jpeg",
url: "https://html5.gamemonetize.com/pkngcwnchcnw93chcbn34ch39vndh38w/
/"},
  {
id: "soccer-legends-2021",
title: "Soccer Legends 2021",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/6c36ebf0322b4e989dd3490b4478ad90-512x384.jpeg",
url: "https://html5.gamemonetize.com/nq839shsdfjlwvn23blc1cjlb81cz4dc/
/"},
  {
id: "2-player-city-racing",
title: "2 Player City Racing",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/ae2ffbd00d12424ebf165693d221a845-512x384.jpeg",
url: "https://html5.gamemonetize.com/bqk1plmb9hckl96kd2ndwt37dnfwefhd/
/"},
  {
id: "robo-battle-2-player",
title: "Robo Battle 2 Player",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/3bdca4aaab064055b110a7d03e60ff8b-512x384.jpeg",
url: "https://html5.gamemonetize.com/3kqv6hnsh4rzzr9xnbgl1yzx7fh0g5n9/
/"},
  {
id: "pixel-battle-royale",
title: "Pixel Battle Royale",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/6e646eb52d234d9987c8b2745dbd72da-512x384.jpeg",
url: "https://html5.gamemonetize.com/n8ck9zm9f5v7r3z81yb17fsymbqvhn8w/
/"},
  {
id: "battle-of-tanks",
title: "Battle of Tanks",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/75938b438a1b41d49832d9f7d5c23f3e-512x384.jpeg",
url: "https://html5.gamemonetize.com/7wn9pmvkt1dc8q8pzqhnjcrcb4prg9wn/
/"},
  {
id: "zombie-parade-defense",
title: "Zombie Parade Defense",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/59e01a36f6814e8ea8acb5ea47c84869-512x384.jpeg",
url: "https://html5.gamemonetize.com/bn8cpv5j5qksh0z9ybsf9y2c3c9gjz4w/
/"},
  {
id: "tank-rumble",
title: "Tank Rumble",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/4f84a21eb1dd4cd4979b82f54ab0d273-512x384.jpeg",
url: "https://html5.gamemonetize.com/7g8mrk04wq3mps88e6qv5dy5dkqv5cy3/
/"},
  {
id: "minibattles-2–6-players",
title: "MiniBattles 2–6 Players",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/b1c1bcaa9de74025a8e9f67e52fa6013-512x384.jpeg",
url: "https://html5.gamemonetize.com/lbr5lvtvxz9qjqxoq2o2cl89wkt7y3c4/
/"},
  {
id: "thumb-fighter",
title: "Thumb Fighter",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/5c327f1f5fd3471e931aa1a93e11dd9a-512x384.jpeg",
url: "https://html5.gamemonetize.com/nh37m99nb9qdv2g6ivraowh1ziv3t6z1/
/"},
  {
id: "basketball-legends-2020",
title: "Basketball Legends 2020",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/eb7b1f88e60b40e68020263b5155a8c3-512x384.jpeg",
url: "https://html5.gamemonetize.com/g6r9x3m4c01chgbqw3r04f7pfzq3n8cc/
/"},
  {
id: "ludo-hero",
title: "Ludo Hero",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/f29cb5f843d44e5f80a897939c4589cf-512x384.jpeg",
url: "https://html5.gamemonetize.com/jmnx8v4gs23sq07a5dnwsg3eguykkqxs/
/"},
  {
id: "getaway-shootout",
title: "Getaway Shootout",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/4a4be7ff19c5463caab3874ce2d2d1f0-512x384.jpeg",
url: "https://html5.gamemonetize.com/6z3qj9q38mrw8lhddr9jz2upzkvh1ohv/
/"},
  {
id: "grindcraft",
title: "GrindCraft",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/889a118f3cc145e3bfc406e519c169a9-512x384.jpeg",
url: "https://html5.gamemonetize.com/g1lh4z3qghm61rszxkg1i7v7fnlfwv3b/
/"},
  {
id: "fireboy-and-watergirl-5",
title: "Fireboy and Watergirl 5",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/3d6cb38263fc4d4c8518b49dba1a0cb0-512x384.jpeg",
url: "https://html5.gamemonetize.com/m4xr20r9zj1c3nk6qk5gmdixppvixn7m/
/"},
  {
id: "stick-duel:-revenge",
title: "Stick Duel: Revenge",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/e6b5aa73f3804a929408b4b65a9dc8c3-512x384.jpeg",
url: "https://html5.gamemonetize.com/psk3v63ytxlb14tlfn7tx8k6j4k3g84k/
/"},
  {
id: "pixel-gun-apocalypse-3",
title: "Pixel Gun Apocalypse 3",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/25732ebacb14407a973184d729b12694-512x384.jpeg",
url: "https://html5.gamemonetize.com/dubpd9jjjr3ym7rwvymq7eub2qpafkct/
/"},
  {
id: "rooftop-snipers-2",
title: "Rooftop Snipers 2",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/9c1be300b84745b7bb431d177c5e9d8b-512x384.jpeg",
url: "https://html5.gamemonetize.com/gm9oqq1e10vtzv2fsyavj85xw3tnb60p/
/"},
  {
id: "bumper.io",
title: "Bumper.io",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/9e053e72595b4c999238d87a43834d2e-512x384.jpeg",
url: "https://html5.gamemonetize.com/x77y3s3akqsp8wx6v9v7f12ggpt3aw1p/
/"},
  {
id: "tank-trouble",
title: "Tank Trouble",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/77dcb7f8e8a9446e8151b4e81eeb65b7-512x384.jpeg",
url: "https://html5.gamemonetize.com/bapm52prfuw19kk01f9fbc2t96hx7a41/
/"},
  {
id: "glowit",
title: "GlowIT",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/748e94dd087b4f5a845ba49e1e20cadd-512x384.jpeg",
url: "https://html5.gamemonetize.com/hkm31v2tn9w8m8sby4w3dzflqfh8jq9f/
/"},
  {
id: "two-ball-3d",
title: "Two Ball 3D",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/fdb0d9d7fdb84b39841ab3f58f93d14e-512x384.jpeg",
url: "https://html5.gamemonetize.com/j9a2htltprlgo2o1mbthg5ejyss4sg3n/
/"},
  {
id: "fighter-legends-duo",
title: "Fighter Legends Duo",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/c16c3403463c470d90a7683be25778f2-512x384.jpeg",
url: "https://html5.gamemonetize.com/v9s8d3r9urx2a2rwygltrb9txzrcjl8q/
/"},
  {
id: "tennis-open-2022",
title: "Tennis Open 2022",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/f9e6f6d09e1c42b1be8d4475cbb92f61-512x384.jpeg",
url: "https://html5.gamemonetize.com/xt48u62sdgfqxswjz0yd0e01wmlz9mj1/
/"},
  {
id: "pubg-pixel",
title: "PUBG Pixel",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/d4b02b9cce0b490d922bb981c6030542-512x384.jpeg",
url: "https://html5.gamemonetize.com/o0oqkv2r7jkz1m0q47oevny7iqdfj86h/
/"},
  {
id: "city-car-stunt-4",
title: "City Car Stunt 4",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/171e25ae879c40f2bc5463d244fdcc7e-512x384.jpeg",
url: "https://html5.gamemonetize.com/fbhd6vmqojjwjh2srngw3ztxy63wje8j/
/"},
  {
id: "space-combat",
title: "Space Combat",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/6b4f737f3e504effad6d8782b42d7e5a-512x384.jpeg",
url: "https://html5.gamemonetize.com/y3a1ek13dknfr60ae29dfw7v7uc80q5x/
/"},
  {
id: "ultimate-robo-duel-3d",
title: "Ultimate Robo Duel 3D",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/3e2f43c7ed4747a088d8658133f4c1b5-512x384.jpeg",
url: "https://html5.gamemonetize.com/tl40x2b1v2z2m6xau4ra8ffkwjld7vuo/
/"},
  {
id: "pixel-warfare-5",
title: "Pixel Warfare 5",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/04a1e1838a3841e7a9a96c670e1128c4-512x384.jpeg",
url: "https://html5.gamemonetize.com/7nnm9zms0evvj0pr41ojv6qn3vtrqvp1/
/"},
  {
id: "soccer-physics-2",
title: "Soccer Physics 2",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/39f360b2a49e44ddaa3e8d898ba1d56e-512x384.jpeg",
url: "https://html5.gamemonetize.com/xmf1fsyc1dug9owp2mrtqoj0yzvvnt81/
/"},
  {
id: "stick-duel-battle",
title: "Stick Duel Battle",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/5ff7dbf8acde4c509650fc0dbab527a5-512x384.jpeg",
url: "https://html5.gamemonetize.com/r6dtbjqks35v3o23mwcq0v23gllmhr65/
/"},
  {
id: "two-punk-racing-2",
title: "Two Punk Racing 2",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/b6d60b8c514648e49840d1809385852c-512x384.jpeg",
url: "https://html5.gamemonetize.com/8dkg1oc01zt9yzjdo9l5j3w9peolh44z/
/"},
  {
id: "battle-soccer-arena",
title: "Battle Soccer Arena",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/eb158165cb8f4b49b6ea78923808d552-512x384.jpeg",
url: "https://html5.gamemonetize.com/umq7zq4yaemfrfqax7tw1zzvv8fpbxg3/
/"},
  {
id: "tennis-masters",
title: "Tennis Masters",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/c4ecf3c9a5cf49f9a59dbb47edb601f3-512x384.jpeg",
url: "https://html5.gamemonetize.com/smh8qx6s9zntq01euvrgpk2p2oz1r2va/
/"},
  {
id: "pixel-royale-apocalypse",
title: "Pixel Royale Apocalypse",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/02cdd43c5fbc4b24bc16e81e50d801b0-512x384.jpeg",
url: "https://html5.gamemonetize.com/vq78cb5e7szbqxnb3cgu2dmgh6tgbj99/
/"},
  {
id: "zombie-mission-4",
title: "Zombie Mission 4",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/8f0e1dc7c9ae44e188a62bc4df073c43-512x384.jpeg",
url: "https://html5.gamemonetize.com/qb2fhzw9kfdym7wbn6qwimnw90b9pbdl/
/"},
  {
id: "city-clash:-ninja-battle",
title: "City Clash: Ninja Battle",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/abbf5e423e284e8fa455353ba4a70659-512x384.jpeg",
url: "https://html5.gamemonetize.com/rq6mnvw1b97bk5xw7uw09dcogm1b2rpp/
/"},
  {
id: "pixel-forces",
title: "Pixel Forces",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/d279e627421f423e92dd2dc2f7f6e468-512x384.jpeg",
url: "https://html5.gamemonetize.com/fzyjqp5fv55f71mpcexq74lbdlo7zbnv/
/"},
  {
id: "extreme-car-stunts-multiplayer",
title: "Extreme Car Stunts Multiplayer",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/f9a78dcb9a064d7ea8207eb93342f87c-512x384.jpeg",
url: "https://html5.gamemonetize.com/1ws93bnsvz14xrcauee5zyxhz5dnqyb9/
/"},
  {
id: "two-bike-stunts",
title: "Two Bike Stunts",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/eef8a1937e2e40e68d8b38b0aa1cf5cb-512x384.jpeg",
url: "https://html5.gamemonetize.com/9wfrqn2jcv0x8e8a4qul0kyqg4jszsyl/
/"},
  {
id: "extreme-drift-2",
title: "Extreme Drift 2",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/3a058a79e3cf4fa0a5f77f5b8305970f-512x384.jpeg",
url: "https://html5.gamemonetize.com/b5uwrkg81hrzsnc6m8ldg57wn2w26fyy/
/"},
  {
id: "street-fight-2-player",
title: "Street Fight 2 Player",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/7272a7d4e72d420e84e51bdf8f6cf99a-512x384.jpeg",
url: "https://html5.gamemonetize.com/nopmtqvrn2xrnqkixbl9vlk7tu80w1rx/
/"},
  {
id: "racing-rocket-2-player",
title: "Racing Rocket 2 Player",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/dc9cfa869eb343f6be70e36b1e21aa56-512x384.jpeg",
url: "https://html5.gamemonetize.com/y6gzznpi9ddtv2p0vwncqxw93dbjvkfj/
/"},
  {
id: "slap-king-online",
title: "Slap King Online",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/e9f16ae681df4adfa2749efee81fe0a5-512x384.jpeg",
url: "https://html5.gamemonetize.com/uwcnpyvrcbnufp0amflgwsxhbdtqx6an/
/"},
  {
id: "wrestle-online",
title: "Wrestle Online",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/cd31bb7cf3c54115948c1fdff9da9f1e-512x384.jpeg",
url: "https://html5.gamemonetize.com/xkz6f5mcpnyl9ecrzpz36mld6qzzwf64/
/"},
  {
id: "ragdoll-runners",
title: "Ragdoll Runners",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/64118c60b94c4939b0d246b8814e220e-512x384.jpeg",
url: "https://html5.gamemonetize.com/daktn3by0ljn8cizl6wkgurht8qg5lvz/
/"},
  {
id: "pixel-combat-multiplayer",
title: "Pixel Combat Multiplayer",
category: "multiplayer",
thumbnail: "https://img.gamedistribution.com/2d5d94d4207e44e4ba6f59caa21980f6-512x384.jpeg",
url: "https://html5.gamemonetize.com/s4oqr8rfkug9fo4t4u4rn1l1ztswr7zj/
/"},
  {
id: "unblock-cube-3d",
title: "Unblock Cube 3D",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/03e8cba8cd4f49eb9e637fa88ab479f5-512x384.jpeg",
url: "https://html5.gamemonetize.com/wlppdqqy3s36ed6nvn44g8ekr6bqkfh3/
/"},
  {
id: "pipe-puzzle",
title: "Pipe Puzzle",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/4f58e92c901f4c3c8bb3b21e345ba616-512x384.jpeg",
url: "https://html5.gamemonetize.com/kz1unybzmdjvr0e1ptfqoepp6rp6v2ja/
/"},
  {
id: "emoji-puzzle-challenge",
title: "Emoji Puzzle Challenge",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/6d5cddeafdb84a6fa3a3e561cb1ef95c-512x384.jpeg",
url: "https://html5.gamemonetize.com/v5y7xzn0fdx9jqfxb0al4j4j4yg8u6ub/
/"},
  {
id: "maze-monster",
title: "Maze Monster",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/e3c9d55689cd4e4cb9fa4874d930255f-512x384.jpeg",
url: "https://html5.gamemonetize.com/zr7m7pd8rmjl6q5n2u1uuf0ab9ql2avj/
/"},
  {
id: "cut-the-rope-2",
title: "Cut the Rope 2",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/398490cb8d2c43f1a77f58f02a1b931e-512x384.jpeg",
url: "https://html5.gamemonetize.com/yx3z5xptlz1aqm8b7uubfc4o0vfq5shg/
/"},
  {
id: "puzzle-balls",
title: "Puzzle Balls",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/9e4036f25ec4485d8aa4627f021a914b-512x384.jpeg",
url: "https://html5.gamemonetize.com/1r8zbqvz0k7ol9ixge7l9s9d1xktdlx7/
/"},
  {
id: "sort-it-online",
title: "Sort It Online",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/030cbd25ee204f75881f879a764e4cb5-512x384.jpeg",
url: "https://html5.gamemonetize.com/hclpl9of2jqkjx1pk5nifh7ezdlrxs23/
/"},
  {
id: "wood-block-puzzle",
title: "Wood Block Puzzle",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/72a76d34fdfd47408c0f23a7e1d2a6a9-512x384.jpeg",
url: "https://html5.gamemonetize.com/rp61kex5d3n14zkqpn3sbm3o8fv34so1/
/"},
  {
id: "happy-glass-puzzles",
title: "Happy Glass Puzzles",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/e95dd7490fcf4ad19bc6220578ee0eb0-512x384.jpeg",
url: "https://html5.gamemonetize.com/p9myphab1aibdy27ulqfl9j8vnp6whdx/
/"},
  {
id: "candy-mahjong",
title: "Candy Mahjong",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/7b3089c489da40679541f9df7905e6a0-512x384.jpeg",
url: "https://html5.gamemonetize.com/sww5pn3dj3w9zuhpnn9bgsu5dws88wvz/
/"},
  {
id: "rolling-ball-maze",
title: "Rolling Ball Maze",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/81808f0db3454a6ab24d949b8b153bfc-512x384.jpeg",
url: "https://html5.gamemonetize.com/m3kl9h0q09lt1o3k78mfrk76a8rl5al8/
/"},
  {
id: "smart-numbers",
title: "Smart Numbers",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/473ed64048194c42b8f0540e5c5d02d3-512x384.jpeg",
url: "https://html5.gamemonetize.com/b7shqzdfkr9pg7pjg01tyc5zdye1mnq3/
/"},
  {
id: "puzzle-color-match",
title: "Puzzle Color Match",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/f51c3fef1df34802a10be375fb3ac685-512x384.jpeg",
url: "https://html5.gamemonetize.com/4aq3m3z4xqlf1r3o28pxu9fc2wtgy7bg/
/"},
  {
id: "maze-control",
title: "Maze Control",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/3a2874e37a8e431894d8bbfd3c144b26-512x384.jpeg",
url: "https://html5.gamemonetize.com/4sxgct35vlvqn94vvwsofp2cm4jd29nn/
/"},
  {
id: "jelly-collapse",
title: "Jelly Collapse",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/27e830f5d69e4426b64b1472b6d0ae4e-512x384.jpeg",
url: "https://html5.gamemonetize.com/xnxuq1yojvgwxz7kkunndj81pg26gkzp/
/"},
  {
id: "tower-builder-puzzle",
title: "Tower Builder Puzzle",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/6f06a4d7e5f440b493c4d7036f2ed5c3-512x384.jpeg",
url: "https://html5.gamemonetize.com/jp0fvh5t7hgrg5ypag9vk8dsc7grrj6f/
/"},
  {
id: "slide-puzzle-ball",
title: "Slide Puzzle Ball",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/d7285d09a7084e67a0e6e93c621183b6-512x384.jpeg",
url: "https://html5.gamemonetize.com/vmx1e9sxs0ymj6mcdfjdyfx9lgysx4kx/
/"},
  {
id: "color-match-3d",
title: "Color Match 3D",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/59f378def25e4a5aa5aa9d626e86b28f-512x384.jpeg",
url: "https://html5.gamemonetize.com/rngd8s1kmm1zlhcfk2vfndxsy3klq5q9/
/"},
  {
id: "puzzle-slide-fun",
title: "Puzzle Slide Fun",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/179f52024f7c4873880a1b81ac560dc0-512x384.jpeg",
url: "https://html5.gamemonetize.com/wvdt2vv0w9hkgkj6lyymnghj3pazsjkr/
/"},
  {
id: "onet-connect-classic",
title: "Onet Connect Classic",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/313c0e37f4e54a1f9e9e35f7cbb2c8ab-512x384.jpeg",
url: "https://html5.gamemonetize.com/ytnowck52lsdf8hngbyjo0n9pm5op3k5/
/"},
  {
id: "hexa-merge",
title: "Hexa Merge",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/c73f3d02204e47698d9c2c43e1dfd857-512x384.jpeg",
url: "https://html5.gamemonetize.com/mzvs2oqkpw4v6f5jhpzq5kx7a3yqv51h/
/"},
  {
id: "roll-this-ball",
title: "Roll This Ball",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/6bb6e9cc1d6142a0b3b9c4012b25e037-512x384.jpeg",
url: "https://html5.gamemonetize.com/h7mcg34zyt26o3y4l3rsdd4gkzsk0q2m/
/"},
  {
id: "sudoku-daily",
title: "Sudoku Daily",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/570e820b1dbf4f529d3d47f9a0138711-512x384.jpeg",
url: "https://html5.gamemonetize.com/qzt72yoq0ch4b9kdrrkz2w6cv2tsxn29/
/"},
  {
id: "block-puzzle",
title: "Block Puzzle",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/6f1e29f16079401090fdf0a7cf24b222-512x384.jpeg",
url: "https://html5.gamemonetize.com/b2rt74jvknmf4gfjmsfrvlm7dt2gpw4w/
/"},
  {
id: "match-3d",
title: "Match 3D",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/02db760e750f464da87dfda52963279e-512x384.jpeg",
url: "https://html5.gamemonetize.com/qx5mqlkxv7ufvhd1x9cx4uq0b9g3tuh4/
/"},
  {
id: "drop-me",
title: "Drop Me",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/97c1e6ae741e4579ac24c3b76196a446-512x384.jpeg",
url: "https://html5.gamemonetize.com/9lnv2dq6eb3az9vjw0yx1he27dz9bivq/
/"},
  {
id: "merge-number-puzzle",
title: "Merge Number Puzzle",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/2e50604d2e934f059e46b97dfdf0f1a7-512x384.jpeg",
url: "https://html5.gamemonetize.com/oy4fbgs2r2n50wtm2omvj8txm8h4o59x/
/"},
  {
id: "puzzle-rotate",
title: "Puzzle Rotate",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/1217a103d53547e39f7a62616e18d746-512x384.jpeg",
url: "https://html5.gamemonetize.com/5ff1czmgzk9x0x2n43dgrf0x6bpn8v5f/
/"},
  {
id: "color-pipes",
title: "Color Pipes",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/f4c54f2e30cb4dc5a701f2345a8cf92b-512x384.jpeg",
url: "https://html5.gamemonetize.com/bm9hvplzq75kwvmp1o13n1vngq3w07u6/
/"},
  {
id: "balance-ball",
title: "Balance Ball",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/fd4a290a94d6477e84b2f59879edc799-512x384.jpeg",
url: "https://html5.gamemonetize.com/3bcyxs2kph5v3cfjcddgz9zqmq41u0zj/
/"},
  {
id: "connect-the-dots",
title: "Connect the Dots",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/8e449bf8615443fd8ee03b55e741e38e-512x384.jpeg",
url: "https://html5.gamemonetize.com/n25ojl6r5yd5tljgk0mz3b5bsdlcg26x/
/"},
  {
id: "slide-blocks",
title: "Slide Blocks",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/ce245e87c84c417590ab3e1359ad8e43-512x384.jpeg",
url: "https://html5.gamemonetize.com/52p7xpyfx5joc0f95kyd5m3v2ypkdyh3/
/"},
  {
id: "numbers-puzzle",
title: "Numbers Puzzle",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/c1f9d82d0b234c99b02033c1e15a0b3e-512x384.jpeg",
url: "https://html5.gamemonetize.com/x2f5zdq8byro3s1jpy7oqn0g60nsd69y/
/"},
  {
id: "light-rays",
title: "Light Rays",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/d3e1725206b34257bd68083f3ce8c67c-512x384.jpeg",
url: "https://html5.gamemonetize.com/dqog5l7qtdp4e0wt7hfq85k19o8z5wpp/
/"},
  {
id: "merge-blocks-2048",
title: "Merge Blocks 2048",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/c5e89607b6f645df97e8d4029fd0c174-512x384.jpeg",
url: "https://html5.gamemonetize.com/s0yykpdsuwhllg8kz9j1tssmch9rrloy/
/"},
  {
id: "jigsaw-puzzle-classic",
title: "Jigsaw Puzzle Classic",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/c0049b5742f149ad947155c8d8a820be-512x384.jpeg",
url: "https://html5.gamemonetize.com/f70f2ok5d34dv4ff3n5x9zk6kfbsykbo/
/"},
  {
id: "match-arena",
title: "Match Arena",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/7478e0f22eb741e4b8ce28ad3535a3df-512x384.jpeg",
url: "https://html5.gamemonetize.com/xd5dqfyj3u24byz4h7z6vff62ywf9grn/
/"},
  {
id: "ball-sort-puzzle",
title: "Ball Sort Puzzle",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/caf3e1de93204bc69de6115dc8fce8d5-512x384.jpeg",
url: "https://html5.gamemonetize.com/nxn2lhrvzr70n1y6gwk1zrsqbrl9q6cc/
/"},
  {
id: "fill-the-gap",
title: "Fill the Gap",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/e1341ac7f6e54f99bdee23899b31e05d-512x384.jpeg",
url: "https://html5.gamemonetize.com/qxyv7wb2h69fqozv2c1d7azf2zzp9pfd/
/"},
  {
id: "connect-dots",
title: "Connect Dots",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/51a064cb2fc44c33b47c12b8f7b3e296-512x384.jpeg",
url: "https://html5.gamemonetize.com/uk1bzwqj5rb9n95chow7ffnlmxnujmox/
/"},
  {
id: "happy-blocks",
title: "Happy Blocks",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/f83cc5b6c0e84c70bbcb04a7dcaa7cb3-512x384.jpeg",
url: "https://html5.gamemonetize.com/6qtd6f1al02zm29epb0bvnxg0c5w4i61/
/"},
  {
id: "maze-path",
title: "Maze Path",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/2eebed790d5e4a7893d934f879b9de34-512x384.jpeg",
url: "https://html5.gamemonetize.com/3wvvcrz2kn7jrmww28ra4xqsdy04jc4x/
/"},
  {
id: "tower-puzzle",
title: "Tower Puzzle",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/63dc2c63b86e4bcbb2513eb9626e1606-512x384.jpeg",
url: "https://html5.gamemonetize.com/rr3p6wwc5mj3zof1zprrgf2ctypkboq1/
/"},
  {
id: "rope-star",
title: "Rope Star",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/942d8c116cde4d65b8c5a9be0b05d93c-512x384.jpeg",
url: "https://html5.gamemonetize.com/7v2o3m9gwllct5mz2vbkgfk4zr4kzjvc/
/"},
  {
id: "lines-puzzle",
title: "Lines Puzzle",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/bf5716ef622f47b980b2c68f28ef8f91-512x384.jpeg",
url: "https://html5.gamemonetize.com/0d2bzsm9qt8rrgfpmgzvxdkul61zjcsr/
/"},
  {
id: "tangled-rope",
title: "Tangled Rope",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/5e7a4fdcc2ea407d93b42a9efeb786e5-512x384.jpeg",
url: "https://html5.gamemonetize.com/7z51xevm2q0qh6s6rfz5mwdtvjw4kek2/
/"},
  {
id: "one-line-only",
title: "One Line Only",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/83e5ce63e12a431880370080dc1d3844-512x384.jpeg",
url: "https://html5.gamemonetize.com/n10a0trc2eqe66we1i9wqn1knbn8vpcy/
/"},
  {
id: "merge-thirteen",
title: "Merge Thirteen",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/7b76fc6608f74b9b8a225185ee89dc1d-512x384.jpeg",
url: "https://html5.gamemonetize.com/lobgo8b6t62x9ozbkavq8e88bi9r6tmg/
/"},
  {
id: "slide-puzzle-fruits",
title: "Slide Puzzle Fruits",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/49017a77968e4cf1a95b123e099d5b4b-512x384.jpeg",
url: "https://html5.gamemonetize.com/8xe0nlh49xdyq3v6q0jgy59fzvnrh5bd/
/"},
  {
id: "fit-balls",
title: "Fit Balls",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/85c1b3247b3d4b1389f527c493e3ed65-512x384.jpeg",
url: "https://html5.gamemonetize.com/pp9zq82pr65m4xjdyay3g3sn3gd8wzmr/
/"},
  {
id: "pop-it-match",
title: "Pop It Match",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/b3b71ab7d5b443e5b41d30116310d0aa-512x384.jpeg",
url: "https://html5.gamemonetize.com/goxmdfkkzngdy1r4mh99i0s58jvwfe5z/
/"},
  {
id: "pipes-and-balls",
title: "Pipes and Balls",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/d7d7b7dd2b7b46048e0f5e34b73c9183-512x384.jpeg",
url: "https://html5.gamemonetize.com/qzqt7f61t0x7irypw5x7ot98dr03ttbd/
/"},
  {
id: "water-sort",
title: "Water Sort",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/eb6aa73b02064c98bcf7c64f5ea93c18-512x384.jpeg",
url: "https://html5.gamemonetize.com/g1cmh42mf9ozkpz74e6p10fhxwhb10br/
/"},
  {
id: "sorting-fun",
title: "Sorting Fun",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/f10bbf032c2f4040bd59f47a6f87a898-512x384.jpeg",
url: "https://html5.gamemonetize.com/p7yzf4b4chgs2mz9vqfpyefylrgbrkaq/
/"},
  {
id: "logic-hex",
title: "Logic Hex",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/059b970421ae40e1b3169c8021c63ce1-512x384.jpeg",
url: "https://html5.gamemonetize.com/84ptq9ipwjzv87w5q7jw3l1k0n2dlhjc/
/"},
  {
id: "hidden-objects-room",
title: "Hidden Objects Room",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/d66ac77276ce4c17b9ad53c4c71b66e5-512x384.jpeg",
url: "https://html5.gamemonetize.com/lzgsxv3smr6q8i26zj8lrzqll2efo5z9/
/"},
  {
id: "iq-ball",
title: "IQ Ball",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/c180875ce1984cc1aa0c0a29b15b202f-512x384.jpeg",
url: "https://html5.gamemonetize.com/3afrd8kps5yo4wcfrbwdfpwpp40sqmd0/
/"},
  {
id: "puzzle-rotate-3d",
title: "Puzzle Rotate 3D",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/1ed3cc442d434191bdfd246b2758894f-512x384.jpeg",
url: "https://html5.gamemonetize.com/q1j97nrqk4lt65q3xzwfwvf7pnq90t2r/
/"},
  {
id: "ball-maze",
title: "Ball Maze",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/7ac0f6fc5a7840f2a36b5c80dc8b24bd-512x384.jpeg",
url: "https://html5.gamemonetize.com/yr22qrm4rjhr5vs1gfz7ta4wr7b11qf1/
/"},
  {
id: "bubble-sorting",
title: "Bubble Sorting",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/d59f7e03c2604b1db5b3024a2cf491e9-512x384.jpeg",
url: "https://html5.gamemonetize.com/pj17dc63eq0kph27n5xv7wtv5u5k1x8b/
/"},
  {
id: "merge-fruit",
title: "Merge Fruit",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/8d8678c3e2994263afcb38ec1c3bff07-512x384.jpeg",
url: "https://html5.gamemonetize.com/x4ot9krz7r2l3a1i5ddsl41vsyfzzppc/
/"},
  {
id: "cube-sorting",
title: "Cube Sorting",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/625891cfc9cb43dd9d712f64e2d3e841-512x384.jpeg",
url: "https://html5.gamemonetize.com/f9bap7w0t80s1xx55dzqjqbg7rmff4l5/
/"},
  {
id: "pipe-mania",
title: "Pipe Mania",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/63182db3b4694f3cb6f121cbd0995881-512x384.jpeg",
url: "https://html5.gamemonetize.com/vly4lqvytytk7mvdmdj2zd4c1s8mj3h3/
/"},
  {
id: "sort-mart",
title: "Sort Mart",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/bc4e689d13b149148b7b04f5b7e9de6e-512x384.jpeg",
url: "https://html5.gamemonetize.com/vat0f2mgz6fkm99kib8c82jb7iz4nm4o/
/"},
  {
id: "laser-puzzle",
title: "Laser Puzzle",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/e9f44b16b1ea471d81d3461e3a13a728-512x384.jpeg",
url: "https://html5.gamemonetize.com/03lxw79w63nk0ev1mnhwnf8zj7fqddp7/
/"},
  {
id: "zig-zag-puzzle",
title: "Zig Zag Puzzle",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/87834fc86a9f47e498bc2a3f73f9e19e-512x384.jpeg",
url: "https://html5.gamemonetize.com/zyt6j3zh22hjf3v9y8a9a7hqap76vj1j/
/"},
  {
id: "block-it-up",
title: "Block It Up",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/e68cc6351e564d85b94bb102c09c5c38-512x384.jpeg",
url: "https://html5.gamemonetize.com/p0xqpqshx8h7m2rsrb8zpb3q04q3koe6/
/"},
  {
id: "puzzle-slider",
title: "Puzzle Slider",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/86be2e4c7ae048b090aa3a05efcd0ea9-512x384.jpeg",
url: "https://html5.gamemonetize.com/3rwkxfvpykaojgz7xkxy0z0o30svlwbz/
/"},
  {
id: "smart-numbers",
title: "Smart Numbers",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/f9d7a5b502e64f1ca8b5c3e8491a0ea2-512x384.jpeg",
url: "https://html5.gamemonetize.com/qfb1vn56fqq42fn7c9ok2mf6z3nz2tov/
/"},
  {
id: "collect-balls",
title: "Collect Balls",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/460e1fa5cb6b4e9cbab928d9a38e705b-512x384.jpeg",
url: "https://html5.gamemonetize.com/h8dl1miv9lj6j8hj7q3z5mn1s5oetb4b/
/"},
  {
id: "hexagon-fall",
title: "Hexagon Fall",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/d5fd6c61ea9a4e2285cfaf67a360fbbc-512x384.jpeg",
url: "https://html5.gamemonetize.com/v75p3g97qsbw97hnzv6v36cl3vk2tghr/
/"},
  {
id: "slide-puzzle-numbers",
title: "Slide Puzzle Numbers",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/bfb13a8fcff4499fbbbd5ad5403388a5-512x384.jpeg",
url: "https://html5.gamemonetize.com/3s9ml2ty9xv16m1gqwdpc3x5yqhn2cpa/
/"},
  {
id: "push-puzzle",
title: "Push Puzzle",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/32cf6453f460413b970708aad1e19e95-512x384.jpeg",
url: "https://html5.gamemonetize.com/kb2dvixdf1fjvnd6mj2tpmngawlz6qxq/
/"},
  {
id: "swipe-cubes",
title: "Swipe Cubes",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/e29c1d47e7c5468e8723bb25f9098a3b-512x384.jpeg",
url: "https://html5.gamemonetize.com/f2j8qqhtgn11r9kgnnyxw1uwm5myojke/
/"},
  {
id: "zen-blocks",
title: "Zen Blocks",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/34d6e53705b94189a79c038f1c9f91b7-512x384.jpeg",
url: "https://html5.gamemonetize.com/qnccqs1y2cn0pq8ug9rmc1d0lwfwx4rc/
/"},
  {
id: "match-pairs",
title: "Match Pairs",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/b2ebc52c27db4489b08b325d69a1342f-512x384.jpeg",
url: "https://html5.gamemonetize.com/7vnpvpmouksu3hr59r0fsfylscqpy5b9/
/"},
  {
id: "perfect-pipes",
title: "Perfect Pipes",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/57d494cf2a8f4ea9b69aebd6df1d392c-512x384.jpeg",
url: "https://html5.gamemonetize.com/zw1k4s0fwzklhq4qztfh4n8x40s1a7dx/
/"},
  {
id: "unblock-me",
title: "Unblock Me",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/3d49e14fe1e1494195560662e0730055-512x384.jpeg",
url: "https://html5.gamemonetize.com/5lhplf9dcxh41d5hhqylhpslbkq1w1hs/
/"},
  {
id: "spot-the-difference",
title: "Spot The Difference",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/9dcfce9a205b45fc81270e22e3f55e9d-512x384.jpeg",
url: "https://html5.gamemonetize.com/dyml3fy4tvsht2s1zfvjq6fmg5zj5qe7/
/"},
  {
id: "draw-the-path",
title: "Draw The Path",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/7e3f15f2922d4f93ac96dddf0bbbe705-512x384.jpeg",
url: "https://html5.gamemonetize.com/5ogv5dx2frj15h5d5piqz18q3mvsnbyx/
/"},
  {
id: "brain-it-on",
title: "Brain It On",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/2933965cf0e948569ce09ce2f8a88f69-512x384.jpeg",
url: "https://html5.gamemonetize.com/gxng9gfsns0k19vk4wbsclx0fsq6tvtx/
/"},
  {
id: "pipe-flow",
title: "Pipe Flow",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/3b1b20797bb54a6e9214e62f67c3ee9b-512x384.jpeg",
url: "https://html5.gamemonetize.com/75qk64hybh9ow2qpkx8z0f12iyiyid95/
/"},
  {
id: "tap-and-match",
title: "Tap and Match",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/d9d80b7e007e4ceebf9531e2729c7b67-512x384.jpeg",
url: "https://html5.gamemonetize.com/0nnxhnp58kljgo2qzfnm3kag9r6qkibj/
/"},
  {
id: "shape-sorter",
title: "Shape Sorter",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/e77fc9d6188f4ee2a1218e3ea6d72e48-512x384.jpeg",
url: "https://html5.gamemonetize.com/gm3g2ka7a7epb3g2af73n67gyblby7tk/
/"},
  {
id: "slide-and-merge",
title: "Slide and Merge",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/f916bc5b801948e2abf0c1d52aaeb926-512x384.jpeg",
url: "https://html5.gamemonetize.com/h6vclm73r5ko0we1k5szvltzzoyts9r1/
/"},
  {
id: "draw-climber",
title: "Draw Climber",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/3f85a598e2654034a5b2b41e37c4e8d7-512x384.jpeg",
url: "https://html5.gamemonetize.com/v3ur3h6h7cpkxgq0iz95ae7v5qtwdapq/
/"},
  {
id: "folding-blocks",
title: "Folding Blocks",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/3dc3b6ce2e884f1090b2e1c861a4d556-512x384.jpeg",
url: "https://html5.gamemonetize.com/o4a90e5eysb3xndfak3zy4rhlbbmtdi1/
/"},
  {
id: "pipes-puzzle",
title: "Pipes Puzzle",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/8f5fc905b3134567b7db7b5ec5b207c4-512x384.jpeg",
url: "https://html5.gamemonetize.com/kfci0bcsq03rcmgqf1iq86b47u0nrtds/
/"},
  {
id: "math-up",
title: "Math Up",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/91ed8f4e53bb4fc582e76434c369c78e-512x384.jpeg",
url: "https://html5.gamemonetize.com/wd9wmw0rx1v1k2zbxr1b3hzh0x0z9axz/
/"},
  {
id: "jelly-collapse",
title: "Jelly Collapse",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/87e92909ec6b4c9899858b21fc69e4c7-512x384.jpeg",
url: "https://html5.gamemonetize.com/lm0a4uvby7vav4jlvcf3qp7lka7sqwnu/
/"},
  {
id: "animal-puzzle",
title: "Animal Puzzle",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/f3f764902fa043ee90eaa9e173ac8b77-512x384.jpeg",
url: "https://html5.gamemonetize.com/1dt4qxczvxk5rtx9gfmmkhmjwbt6mn8g/
/"},
  {
id: "switch-blocks",
title: "Switch Blocks",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/ebc58cbb9bcb41cfaed5a443472a2a18-512x384.jpeg",
url: "https://html5.gamemonetize.com/0pqkgqnp9kvo7e2ejn2bgwqbds0pzm0z/
/"},
  {
id: "puzzle-rotate",
title: "Puzzle Rotate",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/4108a85debe14c99a3ecbe9b2de91382-512x384.jpeg",
url: "https://html5.gamemonetize.com/syx84vcdv5at3z21cw84bb8y3ty0fsbz/
/"},
  {
id: "block-escape",
title: "Block Escape",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/e7507f0e4f184282a3b58ff99dbf441c-512x384.jpeg",
url: "https://html5.gamemonetize.com/gzntbqsy6hv8v69wvu4gvydmrf35cqtb/
/"},
  {
id: "magic-ball",
title: "Magic Ball",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/504519b6b10d40d0b9cf529e4375c9c4-512x384.jpeg",
url: "https://html5.gamemonetize.com/q9g6nmtrrj8jk12k3dytlclivz2rg34e/
/"},
  {
id: "color-maze",
title: "Color Maze",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/90ff7a9784a742f4a87e0e430338f3a1-512x384.jpeg",
url: "https://html5.gamemonetize.com/fvsl5rj4z6ms0c92kvjv2u0rzfkj8ta4/
/"},
  {
id: "connect-cubes",
title: "Connect Cubes",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/cbc199309f27416db88835b1b7fdfb82-512x384.jpeg",
url: "https://html5.gamemonetize.com/9wjra57w5a1ij42j2ix84p34mjc9jwoa/
/"},
  {
id: "color-sort-master",
title: "Color Sort Master",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/3d4a1df620f34a9ab9c6336d429f6716-512x384.jpeg",
url: "https://html5.gamemonetize.com/qb5ehs4ox1xsgm1vlujkwgsv4mqp6kqq/
/"},
  {
id: "2048-classic",
title: "2048 Classic",
category: "puzzle",
thumbnail: "https://img.gamedistribution.com/8a0428de9f4b42089d9c3f9fe39f47d2-512x384.jpeg",
url: "https://html5.gamemonetize.com/cegbtpgb0fgdj43tz3kxl0uwhkjr96qj/
/"},
  {
id: "sniper-clash-3d",
title: "Sniper Clash 3D",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/8c3bd1f635ea487d84e7c916db3b7b75-512x384.jpeg",
url: "https://html5.gamemonetize.com/3h2dku5gh9lfwjru4r4sl2ek2azfrtck/
/"},
  {
id: "masked-forces",
title: "Masked Forces",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/30b50300a5ec4c8990cf1538a02e5105-512x384.jpeg",
url: "https://html5.gamemonetize.com/5z59h8cyzv9i6o73zzul71em9r7v8t5e/
/"},
  {
id: "zombie-outbreak-arena",
title: "Zombie Outbreak Arena",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/9672b2df42d94820b4f2a2f6531184c7-512x384.jpeg",
url: "https://html5.gamemonetize.com/2bci81d6ku3y9v3hdv5zjx6tgw1zvda2/
/"},
  {
id: "pixel-gun-apocalypse",
title: "Pixel Gun Apocalypse",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/6a64e35c52724d7190c4ab63d0450de1-512x384.jpeg",
url: "https://html5.gamemonetize.com/b9dh6n2vc8m3et8zoyexg9d7tqvkh5zm/
/"},
  {
id: "stickman-war",
title: "Stickman War",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/5a41fc95d0374a699db7a7bd96d1d00e-512x384.jpeg",
url: "https://html5.gamemonetize.com/r3kyxvb0n2ouu7bzivv76olymc1ze5ez/
/"},
  {
id: "mr.-bullet-3d",
title: "Mr. Bullet 3D",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/f063e345d0a0412c94e3a06d2530da00-512x384.jpeg",
url: "https://html5.gamemonetize.com/iz4g1ml4c51h0lm1xumoy7qj5mh9n8i4/
/"},
  {
id: "gunblood-remastered",
title: "Gunblood Remastered",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/9c9649607f634946a81212387f8b684b-512x384.jpeg",
url: "https://html5.gamemonetize.com/pz1i5mdz9kwec8pp6ly7ikx79kdjrk9w/
/"},
  {
id: "infinity-battlefield-ops",
title: "Infinity Battlefield Ops",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/2e0fa7298011420eaa4e7c346671d4cb-512x384.jpeg",
url: "https://html5.gamemonetize.com/xah27pjef7j3vo7rm95g1o9er4z9d1mc/
/"},
  {
id: "mini-royale-2",
title: "Mini Royale 2",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/3de08de28cd443e4bdc6c6a3896f1c5a-512x384.jpeg",
url: "https://html5.gamemonetize.com/ay5qfx8x6kkz5h8cuq4h5wjg1dl6tbxw/
/"},
  {
id: "zombie-mission",
title: "Zombie Mission",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/fe2d33cf2ad8486a9273f0a3874c5e9c-512x384.jpeg",
url: "https://html5.gamemonetize.com/8h6g8ctikv1f25lk1ed3t0is8b2m80qz/
/"},
  {
id: "warzone-sniper",
title: "Warzone Sniper",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/848fc8813ff94ed0bd5f5dbf142a3a9f-512x384.jpeg",
url: "https://html5.gamemonetize.com/j1ts6z9kcs3eq33xjjz3d08an7g01sg2/
/"},
  {
id: "commando-strike",
title: "Commando Strike",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/49f2c20a3f9246dfb2f3e3f5ee21b9a8-512x384.jpeg",
url: "https://html5.gamemonetize.com/mhrvqulfsh8akkt31gzn5pnr7cf7t4jz/
/"},
  {
id: "gun-war-z2",
title: "Gun War Z2",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/1580d6e3bcd24e78971b9b3d8a5a0107-512x384.jpeg",
url: "https://html5.gamemonetize.com/k3hn8hnpvqbg6q8z6f60tvwdhnke08ln/
/"},
  {
id: "stickman-army-team-battle",
title: "Stickman Army Team Battle",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/6e87fd15a52b4fa59c5f5890b993a4de-512x384.jpeg",
url: "https://html5.gamemonetize.com/3fbf3m1seayibz48pjy3dw9se71v75h6/
/"},
  {
id: "sniper-3d-assassin",
title: "Sniper 3D Assassin",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/70ab0e2b4a6042219e4d71229e81f8fd-512x384.jpeg",
url: "https://html5.gamemonetize.com/0h4u7gbis6r6ffhfzkbpwjjwrbklxnd6/
/"},
  {
id: "shoot-&-run",
title: "Shoot & Run",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/35523c39cf544b4d9e06eb7fcdb1a196-512x384.jpeg",
url: "https://html5.gamemonetize.com/2mylxjzkr7fn4x3nto6p1agj2fkqvbc4/
/"},
  {
id: "super-sniper-assassin",
title: "Super Sniper Assassin",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/f8be2757e3cf4429b00322ce633f2df9-512x384.jpeg",
url: "https://html5.gamemonetize.com/2odq6n2f54xidwh6o89iduvsfhkne7lj/
/"},
  {
id: "critical-strike-global-ops",
title: "Critical Strike Global Ops",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/137ed83a1c9148b39b8eeaa8b9379c1c-512x384.jpeg",
url: "https://html5.gamemonetize.com/efn61p5s1ng4dc6bhq8fnwmpjmb8j5u6/
/"},
  {
id: "fps-shooting-survival-sim",
title: "FPS Shooting Survival Sim",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/b26229e2a9f74d6595f37e4a93b53844-512x384.jpeg",
url: "https://html5.gamemonetize.com/13azqp4ofzyl4kzceifvx9fyp1txqxo3/
/"},
  {
id: "mission-counter-strike",
title: "Mission Counter Strike",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/1dc90b87b01f4d859021bfc19d877d76-512x384.jpeg",
url: "https://html5.gamemonetize.com/mnbqj5p0c4gf1h3b0m97kw6xjrw8b7lj/
/"},
  {
id: "rally-point-4",
title: "Rally Point 4",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/3a80327a6c8a4a5b865597902c7743d7-512x384.jpeg",
url: "https://html5.gamemonetize.com/ug1u4dh94v8y1m1yzgdxh4jk9xvy2w79/
/"},
  {
id: "tactical-squad",
title: "Tactical Squad",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/1172c45698ee4090a43f65df14c65f49-512x384.jpeg",
url: "https://html5.gamemonetize.com/saf11oij3jx4dfykfojxgg1v2c5pz9f3/
/"},
  {
id: "ragdoll-duel",
title: "Ragdoll Duel",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/fb0a7ea2bc4b4b6788b5a11fd6ce5d3e-512x384.jpeg",
url: "https://html5.gamemonetize.com/j0tvuvtj2ns1t3c3jhk7gwsr7gj3qg3r/
/"},
  {
id: "gun-spin",
title: "Gun Spin",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/ee95a91a49d54c75b9aa4189ce8a162c-512x384.jpeg",
url: "https://html5.gamemonetize.com/lkqz0zxlzznqppthh02tcdqf3r74ejqa/
/"},
  {
id: "soldier-legend",
title: "Soldier Legend",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/aa2e0c15e6c646ed89b57a6ef8b4be6a-512x384.jpeg",
url: "https://html5.gamemonetize.com/0mrwkw7k6s9bncd0v0whw5z9xj6l7g4p/
/"},
  {
id: "western-gunfight",
title: "Western Gunfight",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/6f997c53647a4b90a1b87541f5523d46-512x384.jpeg",
url: "https://html5.gamemonetize.com/ql5t0ek9jrtncc65nmt7h5vvay2jlu2d/
/"},
  {
id: "alien-shooter",
title: "Alien Shooter",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/e3e2b7b72a8e4204ab537a78ad61a13d-512x384.jpeg",
url: "https://html5.gamemonetize.com/rt6dtayydmrx7pkkhsq5i7m55an81oky/
/"},
  {
id: "army-commando",
title: "Army Commando",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/e00f087d63f1471ba01946edc5249c03-512x384.jpeg",
url: "https://html5.gamemonetize.com/5mb1q56eeqtd79ylh62ddpm7pjclzzuk/
/"},
  {
id: "military-shooter-training",
title: "Military Shooter Training",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/5f51f8bcb4dc4d67a5ce57c7165f81df-512x384.jpeg",
url: "https://html5.gamemonetize.com/y8h2mow1ku09tp0ox0wn9p5g4tnskqdr/
/"},
  {
id: "shot-trigger",
title: "Shot Trigger",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/9775a416234c41e8bcbd8b26f42c9e1b-512x384.jpeg",
url: "https://html5.gamemonetize.com/09tlxzkkak5ou0ng9sz1m7n2yik0rncp/
/"},
  {
id: "tower-defense-zombie",
title: "Tower Defense Zombie",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/105e17c4ae764e99a2d11b379d39a1ab-512x384.jpeg",
url: "https://html5.gamemonetize.com/7wq1my8k54m96ij8czltp9aq3aq84rmp/
/"},
  {
id: "pixel-combat-2",
title: "Pixel Combat 2",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/34bb0be6829a4e1893f2b2ed975c798c-512x384.jpeg",
url: "https://html5.gamemonetize.com/b3qwof33npb7axp4vvr1bdxkywh6zw4q/
/"},
  {
id: "paintball-racers",
title: "Paintball Racers",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/65ac9e0f63e4452c9b6d3a15c1cb1b2d-512x384.jpeg",
url: "https://html5.gamemonetize.com/xg7nhmoydvv6i75xe29suhc8e0fyhkwx/
/"},
  {
id: "gun-master-2",
title: "Gun Master 2",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/6e09d50c5bb946b2a19cd82e0170c577-512x384.jpeg",
url: "https://html5.gamemonetize.com/5sz7igb8vt7up7rfhd9h8ahmv2v2wvmd/
/"},
  {
id: "sniper-hero",
title: "Sniper Hero",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/4f7bd1d7c7bc476ab77c9291cf45dcfd-512x384.jpeg",
url: "https://html5.gamemonetize.com/vxrxm2ovmx26khltnv5jaj1teqh7q61h/
/"},
  {
id: "zombie-hunter-survival",
title: "Zombie Hunter Survival",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/1fc37b08eeb943edbcb5b08374fa08b8-512x384.jpeg",
url: "https://html5.gamemonetize.com/ezq8bzggzgsdzwqxvp92h6l88oj7q0fj/
/"},
  {
id: "combat-pixel-arena-3d",
title: "Combat Pixel Arena 3D",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/e9c0c4e7bd1d43c497ecf5f003b77b33-512x384.jpeg",
url: "https://html5.gamemonetize.com/fvav6ew58q0wljpv03i9ul9zz25rj6kx/
/"},
  {
id: "stickman-armed-assassin-cold-space",
title: "Stickman Armed Assassin Cold Space",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/c78f58b9e4fc44c2962ae251fe245ab5-512x384.jpeg",
url: "https://html5.gamemonetize.com/pd3kckzrxjufkjizcnsra91pgn96kzq3/
/"},
  {
id: "clash-of-tanks",
title: "Clash of Tanks",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/bf51ec9bb79a4ef6972a03dfde1fa9d6-512x384.jpeg",
url: "https://html5.gamemonetize.com/np3y42rj4ldck01zvj1zkdu0h13mv2rm/
/"},
  {
id: "gun-fight",
title: "Gun Fight",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/9f3fd3dbfb0e4bbab77589d3b1660282-512x384.jpeg",
url: "https://html5.gamemonetize.com/c9ur1sq5op18py6mqp26l8v4d2y9on79/
/"},
  {
id: "zombie-gunpocalypse",
title: "Zombie Gunpocalypse",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/5c7731ce3b5d4e1f9b21cf6cfa7c4438-512x384.jpeg",
url: "https://html5.gamemonetize.com/q4zpt5u6e1tbntz92m9zwu56lpze7m2h/
/"},
  {
id: "warrior-shooter",
title: "Warrior Shooter",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/f1d264a40c9240f4a2ea8bda01cdd294-512x384.jpeg",
url: "https://html5.gamemonetize.com/y7jnb96kdk6jcqtc08n4kjhec4h9vn9g/
/"},
  {
id: "counter-city-strike",
title: "Counter City Strike",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/0e929d3f8b164279a9a59a52fa6fd217-512x384.jpeg",
url: "https://html5.gamemonetize.com/6t6vpo9t5ph6to7mp7v4w1h8md9cq7sp/
/"},
  {
id: "gun-rush",
title: "Gun Rush",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/108236e72b4a4eaf9c66d1e74a69701e-512x384.jpeg",
url: "https://html5.gamemonetize.com/mwoaj9svr5z2iz8dz1mqg1yoqzvpsgi3/
/"},
  {
id: "frontline-sniper",
title: "Frontline Sniper",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/e4fd63d2bafe460d8c4d1f2fa56ef5a3-512x384.jpeg",
url: "https://html5.gamemonetize.com/2mw3yfojbmf9zgkpvbs3ex7j4k4kaxt6/
/"},
  {
id: "hero-3d",
title: "Hero 3D",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/15796d7851c543f0918268fd3a1e91cc-512x384.jpeg",
url: "https://html5.gamemonetize.com/fp2y5kfpnqpqsqgyv1sj1icwq14c5zga/
/"},
  {
id: "silent-sniper",
title: "Silent Sniper",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/5c7b4f70f845451590389bd9ee4a8cd6-512x384.jpeg",
url: "https://html5.gamemonetize.com/l29o6b7t02hry7vq3qbt3ep88tge8yt6/
/"},
  {
id: "stickman-warfield",
title: "Stickman Warfield",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/430121e1328e4a7cbfd80b3b8a9a53f7-512x384.jpeg",
url: "https://html5.gamemonetize.com/y4a3r5q8nq5fcxq76kkrc0i7z4py94hd/
/"},
  {
id: "sky-war",
title: "Sky War",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/43bffbe6b66a47b49bd4a9e7b7a47333-512x384.jpeg",
url: "https://html5.gamemonetize.com/hmqzkq9hxw5lxk54j6x9yf4syabj3sld/
/"},
  {
id: "trigger-combat",
title: "Trigger Combat",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/34b820a77d244a4aab02d25803f15032-512x384.jpeg",
url: "https://html5.gamemonetize.com/4mj8ne1cpb77ifz0pj4geqkhbyty0e8a/
/"},
  {
id: "battlefield-elite-3d",
title: "Battlefield Elite 3D",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/46a6e8d79b4f4c7b950a6b3121e1f994-512x384.jpeg",
url: "https://html5.gamemonetize.com/81r6uvl4ywm9hw8dcmam0pc9cyy5rsq6/
/"},
  {
id: "zombie-strike-2",
title: "Zombie Strike 2",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/f0a1474fa5c94c3080e4ecdd2e4a69ec-512x384.jpeg",
url: "https://html5.gamemonetize.com/jzhr8k65pnnjyz8t4f97nnzw5i0p5tq3/
/"},
  {
id: "sniper-shot:-bullet-time",
title: "Sniper Shot: Bullet Time",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/218e9f5f8edb4fd2a2068fbb9f13daef-512x384.jpeg",
url: "https://html5.gamemonetize.com/2u1qlfnqff56txrpp90dd63ar9v1ddxl/
/"},
  {
id: "ultimate-sniper",
title: "Ultimate Sniper",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/3cd3b24c680e4be0aeb9e99f0ec9d54f-512x384.jpeg",
url: "https://html5.gamemonetize.com/b7mmbsc72j8p2g5ffo4n67t3sxsjtnu5/
/"},
  {
id: "cartoon-clash",
title: "Cartoon Clash",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/cb98f5d6a8f74698942adbc6214533c0-512x384.jpeg",
url: "https://html5.gamemonetize.com/vc11pv5frrzq53f71a95a0rhbsxehcqq/
/"},
  {
id: "shooter-challenge",
title: "Shooter Challenge",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/f56b4e1a1e234b9d8c63de0f2f9be73e-512x384.jpeg",
url: "https://html5.gamemonetize.com/h7aeyj8xzm5vpt8vhljykpsunq5csncb/
/"},
  {
id: "sniper-trigger",
title: "Sniper Trigger",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/e8a2c4e4f2f346c5bd9c4f05e025fe42-512x384.jpeg",
url: "https://html5.gamemonetize.com/8evufqs04n8g5u7z5rb8hfx7iqfvz58q/
/"},
  {
id: "sky-defender",
title: "Sky Defender",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/76caa83369e44d70a737587117c3fa94-512x384.jpeg",
url: "https://html5.gamemonetize.com/kr0v5jwvw9u6ybdr68okzntw6umzdhbk/
/"},
  {
id: "bullet-hunter",
title: "Bullet Hunter",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/0d1f23f3f77d4229b85fdd0733a8cf70-512x384.jpeg",
url: "https://html5.gamemonetize.com/wz9u6vvrrlx3fl39r8n7qpnmz6ozotwb/
/"},
  {
id: "gun-strike-online",
title: "Gun Strike Online",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/25f0a1f29ed24a039ca8cd12180b63a8-512x384.jpeg",
url: "https://html5.gamemonetize.com/7x2eh0s8soh4bzn8loyjkhe2qlhe0xop/
/"},
  {
id: "zombie-killer",
title: "Zombie Killer",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/69e5671965a44d7890b96b0a4fc4d9ea-512x384.jpeg",
url: "https://html5.gamemonetize.com/uex3xv45b0vvvuvhd5egmyvsz3a5vvdr/
/"},
  {
id: "stickman-shooter-3",
title: "Stickman Shooter 3",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/0a9d97c7f8cd470a85a065f0c9d4d771-512x384.jpeg",
url: "https://html5.gamemonetize.com/6jd96v3qvk0yl6wnqfk6dsrjhk6kwwa2/
/"},
  {
id: "pixel-strike",
title: "Pixel Strike",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/7a4d35b57cf34e9ca674ebd48da9d37e-512x384.jpeg",
url: "https://html5.gamemonetize.com/m8o5j7tdc3a30ezp1v19d43z6hrz7la4/
/"},
  {
id: "gun-wars",
title: "Gun Wars",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/390f8282cb784f7f92d4e22e27a3b4c6-512x384.jpeg",
url: "https://html5.gamemonetize.com/26fj2jy8eq0yplxumqfy5mf1qrlw3oz7/
/"},
  {
id: "elite-ghost-sniper",
title: "Elite Ghost Sniper",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/ae3d944a62f84fba86c41ab06bd830fc-512x384.jpeg",
url: "https://html5.gamemonetize.com/00b32gh6uw2y8mh8ru8sco8pg8ch75ss/
/"},
  {
id: "tank-defender",
title: "Tank Defender",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/9a20c0e2e234409db5c9ec5919cead1e-512x384.jpeg",
url: "https://html5.gamemonetize.com/3vhtv9uoclf3zjofxwux2fekbfyx27qu/
/"},
  {
id: "robot-gun-shooter",
title: "Robot Gun Shooter",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/85c9eaa24173401484c87b9dc84899bb-512x384.jpeg",
url: "https://html5.gamemonetize.com/0dhymhx0r97n2aj0zvg3y9dkng0a29np/
/"},
  {
id: "bullet-fury-2",
title: "Bullet Fury 2",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/ccc4f84d39f147f78c061cfc9ae884cc-512x384.jpeg",
url: "https://html5.gamemonetize.com/bnvncyidddbs17op20ur10vshl2vcznk/
/"},
  {
id: "ghost-sniper",
title: "Ghost Sniper",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/51562d2e9f78414fb8ff01715d319d63-512x384.jpeg",
url: "https://html5.gamemonetize.com/7oz27d1w9ra5ofe4m3pbms3fu26c1slk/
/"},
  {
id: "tank-wars",
title: "Tank Wars",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/dce16297c6d1461cabe2b731f1762bc3-512x384.jpeg",
url: "https://html5.gamemonetize.com/3rkhzmx0l28eud94reoe7r9bnfw5hzm6/
/"},
  {
id: "city-sniper",
title: "City Sniper",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/3d06f53bb3884d01a76183946b7de355-512x384.jpeg",
url: "https://html5.gamemonetize.com/0x2fmdjfw0rhk9erudlbk9o4q3ljvcpa/
/"},
  {
id: "sniper-mission-3d",
title: "Sniper Mission 3D",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/24a10d1795a9462f9396b169255b11cb-512x384.jpeg",
url: "https://html5.gamemonetize.com/fp57mjzgj4c8v9yqvkpnd0lwkr1s4xme/
/"},
  {
id: "fps-gunner",
title: "FPS Gunner",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/ee9e52e96934426a8abbdbe6f1cb7767-512x384.jpeg",
url: "https://html5.gamemonetize.com/vtm01lbyfe2z2v6hs9l7yqifk1dbpn9m/
/"},
  {
id: "air-combat",
title: "Air Combat",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/6b69f01e28924cfb95a2c438d145258b-512x384.jpeg",
url: "https://html5.gamemonetize.com/d7x1sya7dx7zrm4ak97llxzsrh7g8pxc/
/"},
  {
id: "modern-shooter",
title: "Modern Shooter",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/5cb0ec1bc15144dd95bc2f00cc62eb83-512x384.jpeg",
url: "https://html5.gamemonetize.com/zcs14o5vhc90m9zybwtefnxtymrzyhsp/
/"},
  {
id: "commando-adventure",
title: "Commando Adventure",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/15a1936c20984298894b320a5dc12c89-512x384.jpeg",
url: "https://html5.gamemonetize.com/41mc9phn9fqa8r0wf6vqhz9l6cs8msfa/
/"},
  {
id: "tank-shootout",
title: "Tank Shootout",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/b5187e49bdc645df80be5ff6dfdd91d1-512x384.jpeg",
url: "https://html5.gamemonetize.com/uvch2ck1x1vv8im3bny1x62f9dy2g20a/
/"},
  {
id: "gun-builder",
title: "Gun Builder",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/1a7a0d5e3fa84573a6600f33a44e9178-512x384.jpeg",
url: "https://html5.gamemonetize.com/8tyh5bnj3n9zyhf7pwv9xdwzk4hyx2mi/
/"},
  {
id: "battle-arena",
title: "Battle Arena",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/509fd7b2ea574b8aa58a3f5b3e2e8fef-512x384.jpeg",
url: "https://html5.gamemonetize.com/r4ls7nbgxq8er3u5nptm4nb0s04z0knj/
/"},
  {
id: "trigger-king",
title: "Trigger King",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/c76b5ae4e2c847199ff282f845d1d06e-512x384.jpeg",
url: "https://html5.gamemonetize.com/jk2jz02tnu7p5nlmu38ypo5b91zp5m7q/
/"},
  {
id: "sniper-mission",
title: "Sniper Mission",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/1b85d81d98f1472e84467ebcf67bcb29-512x384.jpeg",
url: "https://html5.gamemonetize.com/xq5e4haxwx63e35j3gu1yij5dfq2zdr9/
/"},
  {
id: "combat-rescue-officer",
title: "Combat Rescue Officer",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/41b39c847ebd4d67beed73e24064a5e4-512x384.jpeg",
url: "https://html5.gamemonetize.com/h4cyc6yfng93k4bw0a1r6c6dkn36uqhx/
/"},
  {
id: "masked-forces",
title: "Masked Forces",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/d3e871ae9d9f405e95b5dd2a8c01eb84-512x384.jpeg",
url: "https://html5.gamemonetize.com/b6v7v1pkv4l5pm55l7z9mskduknmdokq/
/"},
  {
id: "stickman-team-force",
title: "Stickman Team Force",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/8b57d6b8576e45a98f25341dbd4f6344-512x384.jpeg",
url: "https://html5.gamemonetize.com/j6wmcj1yn2p9zg8qsjw6nqu69v3jseuq/
/"},
  {
id: "soldier-attack",
title: "Soldier Attack",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/11c165032d4a4c4f8e2ac6e1ae93d82b-512x384.jpeg",
url: "https://html5.gamemonetize.com/yknmc64ecx3a3l6n8zotazf4qndipqev/
/"},
  {
id: "zombie-massacre",
title: "Zombie Massacre",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/3461c3e9263744d2aa51ff4ad3b4a91a-512x384.jpeg",
url: "https://html5.gamemonetize.com/v8le57gg69u4v6g62j8u1h5phb6vd54h/
/"},
  {
id: "gun-strike-2",
title: "Gun Strike 2",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/ed5b1d1392de42db915b1c82f56f6f00-512x384.jpeg",
url: "https://html5.gamemonetize.com/ciljltwm66g3xau9sq4nl9dbjld2zq7k/
/"},
  {
id: "stickman-counter-terror",
title: "Stickman Counter Terror",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/661df45c87d44ad3a6e0b29149b43b59-512x384.jpeg",
url: "https://html5.gamemonetize.com/bh4o1o3dmmzrw6pmeffpj4py07d9abmt/
/"},
  {
id: "commando-defense",
title: "Commando Defense",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/e30435559de243d4bcf8a47631245c4a-512x384.jpeg",
url: "https://html5.gamemonetize.com/bzm2ry5pp4hjsn09g28o6lbwdcezsq3a/
/"},
  {
id: "clash-of-guns",
title: "Clash of Guns",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/c3e8973b3c7e4483ac91ccf16fa4baba-512x384.jpeg",
url: "https://html5.gamemonetize.com/bzv90g88d3yih8olq9gu42mfw7ku5qsx/
/"},
  {
id: "war-gun-commando",
title: "War Gun Commando",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/6e7dfb69a3e04a65a2b1e5ecfb6f9875-512x384.jpeg",
url: "https://html5.gamemonetize.com/0fhkmb1q70oxs39cyq9jaj0f9mrppqki/
/"},
  {
id: "fps-assault-shooter",
title: "FPS Assault Shooter",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/60d905d1efb741b2ac53cc011e45f1f6-512x384.jpeg",
url: "https://html5.gamemonetize.com/56it8r9ue8r3jrz1h1lr2fjz87ywhkru/
/"},
  {
id: "sniper-assassin",
title: "Sniper Assassin",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/bf43a3bb90ce4eeb88eb437dbf29d7c1-512x384.jpeg",
url: "https://html5.gamemonetize.com/yv58nf7rkhz8tnn9y4vqf6tx4pt51q2j/
/"},
  {
id: "shooting-range",
title: "Shooting Range",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/594594c3a7c045b3be6f2e0a3c508748-512x384.jpeg",
url: "https://html5.gamemonetize.com/zi5ga7e3a6ylshxgsc5v8z91w5fay8ze/
/"},
  {
id: "bullet-hell-adventure",
title: "Bullet Hell Adventure",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/bb650da377d04cfb933e05c948de5c7e-512x384.jpeg",
url: "https://html5.gamemonetize.com/vc0lrs4mqjbxx4x4a5zzugayz68jq6ku/
/"},
  {
id: "cover-hunter",
title: "Cover Hunter",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/69a7f886b1b04f4f9c7a1121e8e1e2df-512x384.jpeg",
url: "https://html5.gamemonetize.com/9sztz2sh0q6ap3g8l3zv7kkd2n26t0zw/
/"},
  {
id: "gun-zombie",
title: "Gun Zombie",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/04803a03b42641cbba3a5d14ff0c1816-512x384.jpeg",
url: "https://html5.gamemonetize.com/h5g0y7lj7o4rzxme2pd7zcd18xotx4gt/
/"},
  {
id: "soldier-legend",
title: "Soldier Legend",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/4567cbdcde8e4f8a80ffb0e6f464fb88-512x384.jpeg",
url: "https://html5.gamemonetize.com/wtq13e03enxmkxvdj4leiyl54c7a9drg/
/"},
  {
id: "gunblood-remastered",
title: "Gunblood Remastered",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/81a1091444a44b7fb11e60c6c37be271-512x384.jpeg",
url: "https://html5.gamemonetize.com/vp2rm39efr4oz3dh0ie0g75gz9rtfsvt/
/"},
  {
id: "armed-forces",
title: "Armed Forces",
category: "tiro",
thumbnail: "https://img.gamedistribution.com/f29b7c3453e54bc0b8ed3762b61a01e3-512x384.jpeg",
url: "https://html5.gamemonetize.com/0f0bszvnxq0rxu05c7hzlzhfr27jowvl/
/" }
];

// Função para renderizar a página inicial com jogos populares e anúncios
function renderHome() {
  document.title = 'JogiNix - Jogos Online';
  let html = '<h1>Jogos Populares</h1>';
  html += '<div class="games-grid">';
  games.slice(0, 6).forEach(game => {
    html += `<div class="game-card" data-id="${game.id}">` +
            `<img src="${game.thumbnail}" alt="${game.title}" />` +
            `<div class="game-info"><div class="game-title">${game.title}</div></div>` +
            '</div>';
  });
  html += '</div>';
  html += '<div class="ad-space">Espaço para anúncio</div>';
  app.innerHTML = html;
  attachGameCardListeners();
}

// Função para renderizar página de categoria
function renderCategory(category) {
  document.title = `JogiNix - ${category.charAt(0).toUpperCase() + category.slice(1)}`;
  let html = `<h1>Categoria: ${category.charAt(0).toUpperCase() + category.slice(1)}</h1>`;
  html += '<div class="games-grid">';
  games.filter(g => g.category === category).forEach(game => {
    html += `<div class="game-card" data-id="${game.id}">` +
            `<img src="${game.thumbnail}" alt="${game.title}" />` +
            `<div class="game-info"><div class="game-title">${game.title}</div></div>` +
            '</div>';
  });
  html += '</div>';
  html += '<div class="ad-space">Espaço para anúncio</div>';
  app.innerHTML = html;
  attachGameCardListeners();
}

// Função para renderizar página do jogo
function renderGame(gameId) {
  const game = games.find(g => g.id === gameId);
  if (!game) {
    app.innerHTML = '<h2>Jogo não encontrado</h2>';
    return;
  }
  document.title = `JogiNix - ${game.title}`;
  let html = `<h1>${game.title}</h1>`;
  html += '<div class="ad-space">Espaço para anúncio acima do jogo</div>';
  html += `<div class="game-player">` +
          `<iframe src="https://example.com/games/${game.id}" allowfullscreen allow="fullscreen" frameborder="0" width="800" height="450"></iframe>` +
          `<div class="game-controls">` +
          `<button id="btnFullscreen">Fullscreen</button>` +
          `<button id="btnPause">Pausar</button>` +
          `</div>` +
          `</div>`;
  html += '<div class="ad-space">Espaço para anúncio abaixo do jogo</div>';
  html += '<h3>Jogos sugeridos</h3>';
  html += '<div class="games-grid">';
  games.filter(g => g.category === game.category && g.id !== game.id).forEach(sg => {
    html += `<div class="game-card" data-id="${sg.id}">` +
            `<img src="${sg.thumbnail}" alt="${sg.title}" />` +
            `<div class="game-info"><div class="game-title">${sg.title}</div></div>` +
            '</div>';
  });
  html += '</div>';
  app.innerHTML = html;
  attachGameCardListeners();

  // Eventos dos botões fullscreen e pause
  const iframe = app.querySelector('iframe');
  const btnFullscreen = document.getElementById('btnFullscreen');
  const btnPause = document.getElementById('btnPause');

  btnFullscreen.onclick = () => {
    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
    } else if (iframe.webkitRequestFullscreen) {
      iframe.webkitRequestFullscreen();
    } else if (iframe.mozRequestFullScreen) {
      iframe.mozRequestFullScreen();
    } else if (iframe.msRequestFullscreen) {
      iframe.msRequestFullscreen();
    }
  };

  btnPause.onclick = () => {
    // Pausar iframe não é trivial, aqui apenas removemos o src para simular pausa
    iframe.src = '';
    setTimeout(() => {
      iframe.src = `https://example.com/games/${game.id}`;
    }, 1000);
  };

  // Temporizador para anúncio após 8-10 minutos
  setTimeout(() => {
    alert('Anúncio de vídeo: aproveite o intervalo!');
  }, 9 * 60 * 1000);
}

// Função para anexar eventos aos cards de jogos
function attachGameCardListeners() {
  document.querySelectorAll('.game-card').forEach(card => {
    card.onclick = () => {
      const gameId = card.getAttribute('data-id');
      navigateTo(`#/jogo/${gameId}`);
    };
  });
}

// Função para navegação SPA
function navigateTo(hash) {
  window.location.hash = hash;
  router();
}

// Função para busca com sugestões
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  if (!query) {
    searchSuggestions.style.display = 'none';
    return;
  }
  const matches = games.filter(g => g.title.toLowerCase().includes(query));
  if (matches.length === 0) {
    searchSuggestions.style.display = 'none';
    return;
  }
  searchSuggestions.innerHTML = '';
  matches.slice(0, 5).forEach(match => {
    const div = document.createElement('div');
    div.textContent = match.title;
    div.onclick = () => {
      navigateTo(`#/jogo/${match.id}`);
      searchSuggestions.style.display = 'none';
      searchInput.value = '';
    };
    searchSuggestions.appendChild(div);
  });
  searchSuggestions.style.display = 'block';
});

// Função para roteamento
function router() {
  const hash = window.location.hash || '#/';
  if (hash === '#/' || hash === '') {
    renderHome();
  } else if (hash.startsWith('#/jogo/')) {
    const gameId = hash.split('/')[2];
    renderGame(gameId);
  } else {
    const category = hash.slice(2);
    renderCategory(category);
  }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);