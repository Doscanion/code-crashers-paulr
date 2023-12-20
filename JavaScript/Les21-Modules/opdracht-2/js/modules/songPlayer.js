function* mmSongs() {
	yield "Sonata of Awakening";
	yield "Goron Lullaby";
	yield "New Wave Bossa Nova";
	yield "Elegy of Emptiness";
}

export default function* songs() {
	yield "Minuet of Forest";
	yield "Bolero of Fire";
	yield "Serenade of Water";
	yield "Requiem of Spirit";
	yield "Nocturne of Shadow";
	yield "Prelude of Light";
	yield* mmSongs();
}
