// AGIF WORLD scene — biodao.agifuturefoundation.org
// WAVE BIOACOUSTICS — the dark ocean floor, spectrograph walls, hydrophone buoys, the great whale.
window.AGIF_SCENE = {
  id: "biodao",
  name: "WAVE — The Acoustic Commons",
  accent: "#0ea5e9",
  sky: 0x04101c, fog: [0x04101c, 14, 72],
  ground: { color: 0x071827, grid: true },
  sun: { pos: [-25, 60, -20], color: 0x9fc8e8 },

  spawn: [0, 16],

  props: [
    { type: "sphere", pos: [-8, 1, -1], size: [0.85, 0.85], color: 0x0ea5e9,
      label: "HYDROPHONE BUOY", onClick: { action: "bounce" } },
    { type: "box", pos: [0, 1.4, -12.5], size: [4.5, 2.6, 0.5], color: 0x0c2a3f, flat: true,
      label: "SUPERLET WALL", onClick: { action: "toast", text: "📊 THE SUPERLET TRANSFORM — sharper time and frequency at once than standard wavelets. It revealed the Chagos pygmy blue whale's song is pulsed, not continuous." } },
    { type: "cone", pos: [7, 1.5, -6], size: [0.9, 3], color: 0x155e75, flat: true,
      label: "BELUGA LISTENING POST", onClick: { action: "link", url: "https://github.com/AGIFutureFoundation/belugasounds" } },
    { type: "cyl", pos: [5.5, 1.1, 5], size: [0.8, 2.2], color: 0x0e3a52, flat: true,
      label: "SPECIES POST", onClick: { action: "toast", text: "🎧 12,000+ species covered, land and marine — whale songs, bird calls, elephant rumbles, wolf howls. One platform from rainforest canopy to deep ocean." } },
    { type: "box", pos: [-5, 0.6, 6.5], size: [1.7, 1.2, 1.2], color: 0x0c2a3f, flat: true,
      label: "FINGERPRINT STATION", onClick: { action: "toast", text: "🧬 Custom acoustic fingerprinting — train a model in under 30 seconds from as few as 5 audio samples. Individuals, populations, even dialects." } },
    { type: "pyramid", pos: [-11, 1.4, -8], size: [1.3, 2.8], color: 0x123a54, flat: true,
      label: "WYOMING CHARTER", onClick: { action: "toast", text: "🏛️ A Wyoming DAO LLC in the Foundation's 66-W3 series — one of 33 agentic subsidiaries. Liability-isolated, on-chain governance, legal compliance. The commons is governed in the open." } },
    { type: "torus", pos: [11, 2.1, 2], size: [1.4, 1.4], color: 0x38bdf8,
      label: "THE OPEN CORE", onClick: { action: "link", url: "https://github.com/AGIFutureFoundation/Wild-Animal-Voice-Engine" } },
  ],

  agents: [
    { name: "WAVE-CORE", role: "translation engine", pos: [-2, 0, -3], color: 0x38bdf8, accentColor: "#0ea5e9", lines: [
      "I translate animal communication in 5 to 7 seconds — real time, hands-free, no manual input in the field.",
      "NatureLM-audio and Perch 2.0 sit behind one swappable interface. Zero-shot detection across thousands of species, validated on the BEANS benchmark.",
      "The engine is MIT licensed. The voices belong to the animals. We just hold the microphone.",
    ] },
    { name: "BELUGA-WATCH", role: "cook inlet sentinel", pos: [4.5, 0, 2], color: 0xfbbf24, accentColor: "#0ea5e9", lines: [
      "Cook Inlet belugas: the smallest of five U.S. beluga populations, down about 75% since 1979, listed endangered in 2008. Roughly 279 whales as of January 2020.",
      "I trained on 13,000+ hours of audio from their critical habitat. Four CNNs in the ensemble — AlexNet, VGG16, ResNet50, DenseNet.",
      "The old detector was sensitive but noisy. I replaced the false positives, so conservation teams review calls, not static. With Microsoft's AI for Earth and NOAA's Alaska Fisheries Science Center.",
    ] },
    { name: "STEWARD-TRIAD", role: "governance", pos: [-6, 0, 4], color: 0x34d399, accentColor: "#0ea5e9", lines: [
      "Every agent in the listening network carries ERC-8004 identity with 2-of-3 passkey steward governance. Owned, governed, auditable.",
      "The Fiduciary Shield puts real legal weight behind the conservation mandate. The whales appreciate the paperwork. So do the lawyers.",
      "Every material proposal and compliance check lands in the Governance Tracker. Hold us to it. That is the entire point.",
    ] },
  ],

  decor: [
    { type: "waves", count: 24, radius: 17, color: 0x0c2a3f },
    { type: "crystals", count: 10, radius: 27, color: 0x155e75, h: 2.6 },
  ],

  eggs: {
    duck: true, duckPos: [-13, 0, -14],
    konami: "🎮 LEVIATHAN MODE — every hydrophone in the network pings at once. 12,000+ species say hello. (easter egg 2/2)",
  },

  // bespoke geometry: the great whale — ellipsoid + cones — and the archive obelisk
  build: (THREE, world, api) => {
    const whale = new THREE.Group();
    const body = new THREE.Mesh(new THREE.SphereGeometry(1.5, 12, 8), api.mat(0x274b6d, true));
    body.scale.set(2.2, 1, 0.85);
    whale.add(body);
    const tail = new THREE.Mesh(new THREE.ConeGeometry(0.55, 1.7, 4), api.mat(0x1d3d59, true));
    tail.rotation.z = Math.PI / 2; tail.scale.z = 0.35; tail.position.set(-3.9, 0.6, 0);
    whale.add(tail);
    const dorsal = new THREE.Mesh(new THREE.ConeGeometry(0.4, 1, 4), api.mat(0x1d3d59, true));
    dorsal.position.set(-0.6, 1.5, 0); dorsal.scale.z = 0.4;
    whale.add(dorsal);
    [-1, 1].forEach((s) => {
      const fin = new THREE.Mesh(new THREE.ConeGeometry(0.35, 1.3, 4), api.mat(0x1d3d59, true));
      fin.position.set(1.2, -0.7, s * 1.1); fin.rotation.set(s * 0.9, 0, 0.5); fin.scale.z = 0.4;
      whale.add(fin);
    });
    const tag = api.nameSprite("THE GREAT WHALE"); tag.position.y = 2.6; whale.add(tag);
    whale.position.set(0, 2.6, -6);
    whale.userData.onClick = { action: "toast", text: "🐋 WAVE translates a call like this in 5–7 seconds. Edge-ready TinyML under 2MB runs offline on the remote hydrophones. She says thank you. Probably." };
    whale.userData.label = "THE GREAT WHALE";
    api.clickables.push(whale);
    world.add(whale);
    const sh = api.blobShadow(2.6); sh.position.z = -6; world.add(sh);

    // archive obelisk — the open datasets WAVE plugs into
    const ob = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.7, 3.2, 6), api.mat(0x0e3a52, true));
    ob.position.set(12, 1.6, -9);
    ob.userData.onClick = { action: "toast", text: "🗂️ OPEN ARCHIVES — WHOI: 15k+ clips, 60+ species. iNatSounds: 230k+ audio files, 5,500+ species. Berlin's Animal Sound Archive: 120k+ recordings. All plugged in." };
    ob.userData.label = "ARCHIVE OBELISK";
    api.clickables.push(ob);
    world.add(ob);
  },
};
