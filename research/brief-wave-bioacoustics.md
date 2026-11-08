# Enhancement Brief — WAVE / Bioacoustics

**Published:** research brief in this repo's `research/` folder.
**Research date: 7 November 2026. Evidence: `RESEARCH.md` §1 (which consolidates `research-wave.md`, `githubs.md`, `inventory-bio.md`).**
**Applies to:** the WAVE regen (`bioacoustics.cloud`), the WAVE agent site, the staged WAVE articles, the staged WAVE homepage, and the WAVE interactive components. A later worker should be able to apply this brief without re-researching: every item below gives the exact fact, its source URL, and its as-of date.

## Honesty lines (read first — they govern every item)

- WAVE's live predictor is **BirdNET**. Perch and NatureLM are **not connected** to WAVE. Say so wherever models are named.
- All archives are public resources **linked to, not owned by**, WAVE / the Foundation. Never imply ownership, partnership, or an agreement with Cornell, ESP, CETI, WHOI, or any archive — none is evidenced in public sources.
- No translation has been achieved — by WAVE, CETI, NatureLM, or anyone else in the sources. NatureLM "finds patterns, not confirmed meanings." CETI's researchers are explicit: no translation.
- No animal-diagnosis, reef-diagnosis, or conservation-outcome claims. Threat detection is credited to Rainforest Connection et al., frog ID to FrogID (Australian Museum) — not WAVE.
- The WAVETranslator engine repo is a **3-file stub** (no code/model/site source). Do not present it as the engine source. The live bioacoustics.cloud site is Kylon Next.js on Vercel; the regen is local only.
- Every number needs a source URL + as-of date. Where a figure could not be verified, say so — do not fill it in.

---

## 1. What exists today on Mike's sites / articles

From `inventory-bio.md` §§2–6 (paths included; counts are files containing the term, not mention counts):

**Staged articles — `~/workspace/your_files/agifuturefoundation-articles/` (read-only; publish coordinator active — do NOT edit these files yourself; hand corrections to the coordinator):**
- `wave-bioacoustics/wave-bioacoustics-01-reef-soundscapes.md` — reef soundscapes; framing para already correct: live predictor is BirdNET (11,000+ platform / 6,522 in v2.4 Mar 2025), Perch/NatureLM NOT connected, marine classification is Watkins cross-reference only, WAVETranslator repo is a stub, no reef-diagnosis claim.
- `wave-bioacoustics/wave-bioacoustics-02-forest-alarm-system.md` — forest acoustic threat detection; same BirdNET/Perch/NatureLM framing; threat detection credited to Rainforest Connection et al., not WAVE.
- `wave-bioacoustics/wave-bioacoustics-03-frog-chorus-census.md` — frog chorus census; same framing; frog ID credited to FrogID (Australian Museum).
- `wave-bioacoustics/assets/charts/archive-sizes.svg` — open-archive sizes chart (**Xeno-canto ~1.04M as of Nov 2026 per Mike's decision — NOW STALE, see §2 item 1**; Macaulay 3.2M; Watkins).
- `wave-agent/wave-agent-01-animal-voice-dataset.md` — animal-voice datasets; Project CETI / Cetacean Translation Initiative (156 codas, 2024 study), Watkins as historical counterpart (7 decades of recordings); BirdNET/NatureLM/archive figures.
- `wave-agent/wave-agent-02-species-identification-by-sound.md` — species ID by sound; BirdNET, Perch/NatureLM, archives.
- `wave-agent/wave-agent-03-acoustic-monitoring-conservation-evidence.md` — acoustic monitoring for conservation evidence; BirdNET/archives; ALS appears only via the family-catalog chart.
- `wave-agent/assets/charts/open-archive-sizes.svg` — same archive-size chart as wave-bioacoustics (same Xeno-canto correction needed).
- `biota/biota-02-listening-to-the-ocean.md` — ocean bioacoustics; cites BirdNET, Watkins database, Xeno-canto/Macaulay archives.
- `MANIFEST.md` — records the BirdNET/Perch/NatureLM framing, the Macaulay 2.7M (Mar 2025) vs 3.2M figure tension, and word counts.

**WAVE site — `~/workspace/your_files/hostinger-email/sites/bioacoustics.cloud-regen/` (96 files, local regen of bioacoustics.cloud; densest bioacoustics concentration on the machine):**
- `index.html` — WAVE homepage; "Cetacean" appears here (and in `llms.txt`); BirdNET as live predictor; Perch/NatureLM not connected.
- `blog/birdnet-and-the-democratization-of-bioacoustics/index.html` — BirdNET deep dive.
- `blog/foundation-models-for-nature/index.html` — "what NatureLM and Perch really promise"; Perch + NatureLM as foundation models for animal sound.
- `blog/reef-soundscapes/index.html`, `blog/forest-alarm-system/index.html`, `blog/frog-chorus-census/index.html`, `blog/listening-to-the-ocean/index.html` — mirror the staged wave-bioacoustics articles (BirdNET/Watkins framing).
- `blog/how-a-species-classifier-is-trained/index.html`, `blog/how-wave-decodes-animal-communication/index.html`, `blog/the-data-landscape-of-animal-translation/index.html`, `blog/can-we-really-translate-animals/index.html` — classifier training, animal-translation status, archive landscape (Xeno-canto, Macaulay, Watkins, CETI).
- `blog/the-hydrophone-the-instrument-that-opened-the-ocean/index.html`, `blog/the-cocktail-party-problem-underwater/index.html`, `blog/the-infrasonic-world-of-elephants/index.html`, `blog/bats-and-the-ultrasonic-frontier/index.html`, `blog/the-vanishing-chorus-insects-and-the-quiet-crisis/index.html`, `blog/soundscape-ecology-reading-a-whole-habitat/index.html`, `blog/passive-acoustic-monitoring-explained/index.html`, `blog/acoustic-monitoring-and-the-future-of-protected-areas/index.html`, `blog/a-short-history-of-listening-to-animals/index.html`, `blog/dialects-in-the-wild/index.html`, `blog/dialects-culture-and-the-question-of-animal-tradition/index.html`, `blog/do-animals-have-names-signature-calls-and-individual-identity/index.html`, `blog/edge-ai-in-the-field/index.html`, `blog/from-recording-to-insight-a-fieldworkers-workflow/index.html`, `blog/sound-as-shape-geometry-of-communication/index.html`, `blog/the-base-rate-problem-why-rare-species-fool-detectors/index.html`, `blog/the-ethics-of-listening-to-wild-animals/index.html`, `blog/what-a-spectrogram-really-shows/index.html` — full 30-post blog; most carry Watkins/BirdNET/archive mentions in body or related-links blocks (hence Watkins 43 files, BirdNET 43 files — near-site-wide).
- `.well-known/agent-skills/{acoustic-fingerprint,identify-species,search-archives}.md` + `ai-catalog.json` + `agent.json` — WAVE agent skills (species ID, archive search) and catalog.
- `soundmap/index.html`, `translate/index.html` — Sound Map + Translator pages (regen notes the Translator/Sound Map need a model backend and cannot work statically).
- `README-DEPLOY.md` — deploy notes (Cloudflare Pages preview; live site is Kylon Next.js on Vercel).

**Agent sites — `~/workspace/your_files/hostinger-email/sites/agents/wave/` (WAVE, $WAVE):**
- `agent.json` — 6 jobs + 1 sub (species_identification $5/30min, animal_voice_dataset $25/48h, continuous_animal_voice_access $50/24h, sound_clip_id $1/5min, species_acoustic_profile $15/24h, expedition_sound_map $100/72h; field_listener $30/30d); token $WAVE, not graduated; offline as of 2026-11-06.
- `index.html`, `jobs.html`, `about.html`, `hire.html` — homepage + catalog + offline note; WAVE homepage shows no animal-data claims (name only) per memory 2026-11-06.
- `articles/animal-voice-dataset.html`, `articles/species-identification-by-sound.html`, `articles/acoustic-monitoring-conservation-evidence.html` — staged wave-agent articles as site pages (CETI/cetacean, Watkins, BirdNET, NatureLM, Xeno-canto, Macaulay).
- Note: a SECOND WAVE agent (no token, Pro) exists in Virtuals with the same name/description; it has no repo/site — duplicate-naming decision still open (memory 2026-11-06/07).
- Live state: 29 jobs + 6 subs verified live in Virtuals ACP 2026-11-06; instances offline, no hire fulfillable (`~/workspace/your_files/omega-hive-live/ACP_PUBLIC_STATE_2026-11-06.md`).

**Foundation site — `~/workspace/your_files/hostinger-email/sites/agifuturefoundation.org/`:**
- `features/feature-01-the-wave.html` — "The WAVE — Listening to the Earth" feature.
- Per-term gaps on this site: xeno-canto 0, macaulay 0, cetacean 0, birdnet 1, watkins 1 — the archive/model detail lives in the WAVE regen + staged articles, not on the Foundation site.

**Interactive components (staged only, nothing live) — `~/workspace/your_files/interactive-builds/wave-bioacoustics/`:**
- `archive-explorer.html` — archive explorer (8 public archives: Xeno-canto, Macaulay, Watkins, etc.).
- `birdnet-explainer.html` — BirdNET explainer (5-step; 11,000+ species headline, v2.4 6,522 footnote — already correctly framed).
- `sound-blog-explorer.html` — sound/blog explorer.
- `INTEGRATION.md` — integration notes.
- `wave-agent/data.js` — wave-agent component data.

**Staged homepage — `~/workspace/your_files/homepage-redesign/wave-bioacoustics/index.html` + `README.md`:**
- 5 dropdowns, verified stats, Perch/NatureLM stated not connected, forms removed, **Macaulay 2.7M Mar 2025 figure — tension vs the 3.2M Nov 2026 figure Mike settled** (see §2 item 2).

**Mike's own WAVE repos (for linking, not for claiming as the engine):**
- https://github.com/WAVETranslator/Wild-Animal-Voice-Engine — **STUB** (see §3).
- https://github.com/AGIFutureFoundation/bioacoustics-cloud — static site source for bioacoustics.cloud (10 entries; `index.html` 25 KB; README: "Static site for the WAVE bioacoustics platform. Content migrated from the live Vercel-hosted site. Pure HTML + CSS + JS, no build step."; TODOs: wire contact form, fill placeholder social links). Last activity 2026-11-04. Licence unknown. NOT a model or engine — the site only.
- https://github.com/AGIFutureFoundation/bioacoustics-cloud-pages — Cloudflare Pages static site regen. Last activity 2026-11-06. Licence unknown.
- https://github.com/AGIFutureFoundation/wave-site — WAVE site repo. Last activity 2026-11-04.
- https://github.com/AGIFutureFoundation/wave.agifuturefoundation.org — WAVE site (subdomain). Last activity 2026-11-07.

---

## 2. Exactly what to add or correct, item by item

### Item 1 — URGENT: Xeno-canto figure is stale — update ~1.04M → 1,111,111 (tell the publish coordinator)
- **Where:** `wave-bioacoustics/assets/charts/archive-sizes.svg` and `wave-agent/assets/charts/open-archive-sizes.svg` in the staged articles; any site copy that says "~1,040,000" or "~1.04M"; the WAVE regen blog/archive pages if they carry the old figure.
- **Verified fact:** Xeno-canto holds **1,111,111 recordings** — a milestone announced on the XC homepage news feed. Corroborated by the maintainers' own page: "about 1,100,000 recordings of more than 13,400 species … shared by more than 13,000 recordists" (2026), and "over 1,000,000 wildlife recordings" (Sept 2026 talk). Used in >6,000 publications (Google Scholar, 2026). The archive grows by ~5,000 recordings/month.
- **Source + as-of:** https://xeno-canto.org/ (scraped 7 Nov 2026); https://www.few.vu.nl/~rplanque/XC/index.html
- **Wording to use:** "~1.11 million recordings of 13,400+ species (Nov 2026)".
- **Why it supersedes the settled figure:** the ~1,040,000 figure was Mike-settled in Nov 2026 and was correct in early Nov 2026; the 1,111,111 milestone was verified later the same month (7 Nov 2026 scrape). **The newer verified figure SUPERSEDES the settled one — state this explicitly when telling the publish coordinator.** Do not present both as current.
- **Do NOT edit the staged articles yourself** — the publish coordinator is working there now. Hand this item to the coordinator.

### Item 2 — Macaulay Library figure: retire 2.7M, use 3.2M+ everywhere
- **Where:** `~/workspace/your_files/homepage-redesign/wave-bioacoustics/index.html` + `README.md` (Macaulay 2.7M Mar 2025); `agifuturefoundation-articles/MANIFEST.md` (records the tension); any other page still showing 2.7M.
- **Verified fact:** **3.2 million+ audio recordings; 84 million+ photographs; 300,000+ videos; covering 96% of the world's bird species.** Consistent with Cornell's own job posting (>77M images, 3M sound recordings, 350k videos, >80k contributors) and Cornell Alumni (Mar 2025: >2.7M audio, 330k videos, 72M images; >500,000 audio recordings uploaded in 2024 alone). **500,000th video** reached 12 July 2026.
- **Source + as-of:** https://en.wikipedia.org/wiki/Macaulay_Library (scraped 7 Nov 2026); https://alumni.cornell.edu/cornellians/macaulay-library/ (Mar 2025)
- **Wording to use:** "3.2 million+ audio recordings (Nov 2026)". The 2.7M figure may appear only as a dated historical footnote ("2.7M in Mar 2025").
- **Licence note:** media remain contributors' copyright. **Exact reuse/download terms were not verified** — do not assert a licence; link to the library's terms.

### Item 3 — BirdNET wording: keep the two-generation framing; do not collapse it
- **Where:** every page/article that names a BirdNET species count — staged articles (already correctly framed), `blog/birdnet-and-the-democratization-of-bioacoustics/index.html`, `interactive-builds/wave-bioacoustics/birdnet-explainer.html` (already correct: 11,000+ headline, v2.4 6,522 footnote), staged WAVE homepage.
- **Verified fact:** v2.4 production (March 2025) = **6,522 bird species** (+ smaller mammal/anuran sets). V3.0 generation ("BirdNET+"), Developer Preview 3.1 (June 2026) = **11,000+ species**. BirdNET Live app (Sept 2026) = **8,927 birds, 268 mammals, 254 insects, 340 amphibians**, real time, no internet/cellular, free on Android/iOS, UI in 12 languages. BirdNET+ V3.0 FAQ states 9,789 species; the public taxonomy list shows 13,967 species (11,127 birds) — that list appears to include taxa beyond the current model.
- **Source + as-of:** https://birdnet.cornell.edu/about/ (scraped 7 Nov 2026); https://www.birds.cornell.edu/ccb/soundbytes-september-26/ (Sept 2026); Zenodo model release (Mar 2025); Funosas et al., *Ecological Indicators* 182 (2026) 114550; model DOI 10.5281/zenodo.20703646
- **Wording to use:** "BirdNET v2.4 (production, March 2025) covers 6,522 bird species; the V3.0 generation in preview/live apps covers 11,000+ species." Headline is 11,000+ with the v2.4 footnote.
- **Licence to state:** BirdNET-Analyzer source code **MIT**; models **CC BY-NC-SA 4.0** (non-commercial; educational/research use freely permitted; commercial use needs a Cornell licence). No hosted API. Contact: ccb-birdnet@cornell.edu. Source: https://github.com/birdnet-team/birdnet-analyzer/blob/HEAD/README.md

### Item 4 — Add Perch 2.0 as a comparison model (NOT connected), with its verified counts
- **Where:** `blog/foundation-models-for-nature/index.html` and any page that mentions Perch without a version/count; the staged wave-agent articles if they name Perch generically.
- **Verified fact:** Perch 2.0, released **7 August 2025**: **14,795 classes (14,597 species + 198 general sound-event classes, FSD50K)**; 1,536-dimensional embeddings; ~12M-parameter EfficientNet-B3-class model. Training data: **1,542,778 recordings** — Xeno-canto 896,255; iNaturalist 571,698; Tierstimmenarchiv 33,859; FSD50K 40,966 (paper Table 1; downloads Mar–Apr 2025). Benchmarks: BirdSet AUROC ~0.907–0.908. Limitation stated in the paper: almost no marine hydrophone training data (only a few dozen cetacean recordings). Perch 1.0 (2023): >250,000 downloads (per DeepMind).
- **Source + as-of:** https://github.com/google-research/perch (scraped 7 Nov 2026; Apache-2.0); https://arxiv.org/pdf/2508.04665 (Perch 2.0 paper, arXiv:2508.04665, revised Jan 2026); https://www.kaggle.com/models/google/bird-vocalization-classifier
- **Wording to use:** "Perch 2.0 (Google DeepMind, 7 Aug 2025) covers 14,795 classes. Perch is a comparison/candidate model — it is NOT connected to WAVE."
- **Repo to link:** https://github.com/google-research/perch (Apache 2.0, last activity 2026-11-06, original, active, 403 stars). For inference use `perch-hoplite`: https://github.com/google-research/perch-hoplite (last activity 2026-11-02, 132 stars). Do NOT link a `google-deepmind` Perch repo — none exists. Do NOT link third-party PyTorch ports (`bghani/perchv2-pytorch`, `matijama/perch-v2-pytorch`) without a clear "unofficial port" label.

### Item 5 — Add NatureLM-audio as a comparison model (NOT connected), with its verified training-set size — and no species count
- **Where:** `blog/foundation-models-for-nature/index.html` and any page that mentions NatureLM.
- **Verified fact:** Paper Robinson et al., arXiv:2411.07186, **November 2024**. Training dataset: **>26 million (audio, text) pairs; >2 million audio files; 22,100 hours; 44 bioacoustic tasks**. Hugging Face `EarthSpeciesProject/NatureLM-audio-training` = **26.4M rows** (verified by scrape 7 Nov 2026). NatureLM-audio 2.0 "to be released soon" (ESP blog, 30 Sept 2026). **alp-data** (July 2026): shared data layer uniting **35+ ML-ready bioacoustic datasets**.
- **Source + as-of:** https://arxiv.org/abs/2411.07186 (Nov 2024); https://huggingface.co/datasets/EarthSpeciesProject/NatureLM-audio-training (scraped 7 Nov 2026); https://earthspecies.org/2026/09/30/what-if-a-model-knows-more-than-it-can-say/; https://www.earthspecies.org/2026/07/22/introducing-alp-data-a-shared-data-layer-for-animal-language-processing/
- **Wording to use:** "NatureLM-audio (Earth Species Project, Nov 2024) was trained on 26.4M (audio, text) pairs. It is a research model that finds patterns, not confirmed meanings — it is NOT a translation device, and it is NOT connected to WAVE."
- **Repo to link:** https://github.com/earthspecies/NatureLM-audio (MIT, last activity 2026-11-01, original, active, 108 stars); demo: https://github.com/earthspecies/naturelm-audio-demo (last activity 2026-10-28, 7 stars).
- **Do NOT quote a species count for NatureLM** — ESP describes "thousands of species" without a single verified number. Do NOT assert a model-weights licence — not verified.

### Item 6 — Add Watkins with the offline-site caveat and the working mirrors (do NOT link the dead Kaggle mirror)
- **Where:** `blog/the-data-landscape-of-animal-translation/index.html`, `wave-agent-01`, `biota-02`, the archive explorer (`interactive-builds/wave-bioacoustics/archive-explorer.html`), and any page citing Watkins holdings.
- **Verified fact:** **~2,000 unique recordings of 60+ marine mammal species, with >15,000 annotated digital sound clips** (Sayigh et al. 2016). "Best of" subset: **1,694 high-quality cuts, 32 species**. Physical collection (New Bedford Whaling Museum): ~18,000 calls from 70+ species, 2,300 reel-to-reel tapes. Spans seven decades (1940s–2000s), including the first recordings of 51 marine mammal species.
- **Source + as-of:** https://www.researchgate.net/publication/315366631_The_Watkins_Marine_Mammal_Sound_Database_An_online_freely_accessible_resource (Sayigh et al. 2016)
- **Access caveat to state:** the official WHOI site (`cis.whoi.edu/science/B/whalesounds/`) was **offline as of 19 Sept 2026**. Working fallbacks: BEANS GCS zip (`storage.googleapis.com/ml-bioacoustics-datasets/watkins.zip`, 882 MB, WAV + annotations.csv, 31 classes) and Hugging Face mirrors (`DBD-research-group/beans_watkins`; `ivangtorre/watkins-marine-mammal-full-cuts`). **Do NOT link the Kaggle mirror `shreyj1729/best-of-watkins-marine-mammal-sound-database` — it returns 404.**
- **Wording to use:** "~2,000 unique recordings of 60+ species, >15,000 annotated clips (Sayigh et al. 2016); the official WHOI site was offline as of Sept 2026 — use the BEANS / Hugging Face mirrors."

### Item 7 — Add Project CETI with the "no translation" line and the 2025–2026 updates
- **Where:** `wave-agent-01-animal-voice-dataset.md`, `blog/the-data-landscape-of-animal-translation/index.html`, `blog/can-we-really-translate-animals/index.html`, the WAVE regen `index.html` / `llms.txt` (cetacean appears there only). Cetacean coverage is thin and second-hand today (1 staged article, 2 regen files, 1 agent-site article; nothing in memory or the Foundation site) — this item is the fix.
- **Verified fact:** May 2024 "sperm whale phonetic alphabet" — **8,719 codas from ~60 individual whales**; **156 distinct codas** with combinatorial structure (*Nature Communications* 15:3393, doi:10.1038/s41467-024-47221-8). Nov 2025: vowel- and diphthong-like spectral patterns (Beguš et al.). Apr 2026: "The phonology of sperm whale coda vowels" (*Proc. R. Soc. B* 293(2069):20252994). Mar 2026: first complete drone + hydrophone record of a sperm whale birth (Unit A, Dominica), published in *Science* and *Scientific Reports* (6+ hours of underwater audio + aerial video). Dec 2025: open-source bio-logger (Harvard SEAS; Vogt et al., *PLOS ONE*, doi:10.1371/journal.pone.0337093). CETI is a member of the AWS Open Data Program; partners Google Research and Microsoft Research. Nonprofit founded 2020, based in Dominica, 8 institutions, ~50 scientists.
- **Source + as-of:** https://www.projectceti.org/research/index (scraped 7 Nov 2026); https://doi.org/10.1038/s41467-024-47221-8
- **Wording to use:** "Project CETI found 156 distinct sperm-whale codas in 8,719 codas from ~60 whales (May 2024). No translation has been achieved — CETI's researchers are explicit about this."
- **Do NOT claim** the whale recordings are downloadable — no verified public bulk download of the coda corpus was found; the AWS Open Data dataset was not located/confirmed.

### Item 8 — Add the Animal Sound Archive (Berlin) and iNaturalist Sounds as archive entries
- **Where:** the archive explorer (`interactive-builds/wave-bioacoustics/archive-explorer.html`, currently 8 archives) and `blog/the-data-landscape-of-animal-translation/index.html`.
- **Animal Sound Archive — verified fact:** founded **1951** by Günter Tembrock (Museum für Naturkunde Berlin). **~120,000–130,000 recordings** (GBIF: "around 130 000 records"; Museum 75th-anniversary report, Oct 2026: "more than 120,000 recordings … from approximately 1,800 bird species and 580 mammal species"). Perch 2.0 used 33,859 Tierstimmenarchiv recordings (Apr 2025). Access: search portal `suche.tierstimmenarchiv.de`; dataset via GBIF (doi:10.15468/0bpalr). Bulk access is gated/unclear (a 2025 review lists "Contact required"). **Licence not verified — do not assert one.** The Museum's research page URL returned 404 when scraped 7 Nov 2026 — use the search portal and GBIF record instead.
  - Source: https://www.gbif.org/dataset/b7ec1bf8-819b-11e2-bad2-00145eb45e9a
- **iNaturalist Sounds — verified fact:** **571,698 iNaturalist recordings** were in Perch 2.0's training data (research-grade observations via GBIF, downloaded March 2025). Default licence for new accounts **CC BY-NC** (observation data, images, audio); users may choose other CC licences or all rights reserved. Open-licensed media bulk-accessible via **iNaturalist Open Data on AWS**. As of July 2026, ~23% of observations are not under an open observation licence (Callaghan et al., *BioScience* 2026, doi:10.1093/biosci/biag135).
  - Source: https://arxiv.org/pdf/2508.04665 (Perch 2.0 Table 1); https://academic.oup.com/bioscience/advance-article/doi/10.1093/biosci/biag135/8820383
  - **Do NOT quote a platform-wide iNaturalist sounds total** — not verified.

### Item 9 — Add GBIF as the aggregator (not an archive) with its 3.8B figure
- **Where:** `blog/the-data-landscape-of-animal-translation/index.html` and the archive explorer.
- **Verified fact:** **3.8 billion+ occurrence records** as of August 2026 (Miller et al., *Biodiversity Data Journal* 14:e208528, Oct 2026; 70 participating countries, data providers in 120+ countries, 2,700 institutions). Under 5% of records are machine observations. GBIF is an **index/aggregator, not a sound archive itself**.
- **Source + as-of:** https://doi.org/10.3897/BDJ.14.e208528 (Oct 2026)
- **Do NOT quote a current audio-enabled GBIF count** — the last sourced figure is from 2017 and is nine years stale.

### Item 10 — Add the Earth Species Library (GitHub is the live home) and the BEANS / BirdSet benchmarks
- **Where:** `blog/the-data-landscape-of-animal-translation/index.html` and the archive explorer.
- **Earth Species Library — verified fact:** open repository of ML-ready, multi-modal (primarily acoustic) datasets on GitHub. Examples: **Bird Song** — 686 recordings, 87 labels (with PyTorch dataloaders); **Egyptian Fruit Bat** — 300,000 unique vocalizations, 90k labeled annotations. Datasets archived on the Internet Archive. **The ESP website Library page returned "Page not found" when scraped 7 Nov 2026 — use the GitHub repo as the live home, not the old website URL.**
  - Source: https://github.com/earthspecies/library; https://raw.githubusercontent.com/earthspecies/library/main/README.md
- **BEANS:** 12 datasets across birds, land/marine mammals, amphibians, insects (ESP, ICASSP 2023, Hagiwara et al.). Code: https://github.com/earthspecies/beans ; mirrors on Hugging Face (`DBD-research-group/beans_*`). **BEANS-Zero** (Robinson et al. 2025) is the zero-shot benchmark for NatureLM-audio.
- **BirdSet:** ~520,000 Xeno-canto recordings for training, 400+ hours of annotated passive recordings for testing (Rauch et al. 2025). https://huggingface.co/datasets/DBD-research-group/BirdSet

### Item 11 — Link the correct BirdNET repos; label the community one
- **Where:** any repo-link block on the WAVE regen, agent site, or staged homepage.
- **Official (Cornell, org `birdnet-team`):**
  - https://github.com/birdnet-team/BirdNET-Analyzer — MIT, last activity 2026-11-06, original, active (1,743 stars)
  - https://github.com/birdnet-team/birdnet — MIT, last activity 2026-11-06, original, active (167 stars)
  - https://github.com/birdnet-team/birdnet-live-app — licence unknown, last activity 2026-11-06, original, active (77 stars)
  - https://github.com/birdnet-team/BirdNET-Lite — last activity 2026-10-15, original, **archived** (label as archived if linked)
  - https://github.com/birdnet-team/BirdNET-V1 — last activity 2026-08-24, original, **archived** (label as archived if linked)
- **Community (not Cornell):** https://github.com/tphakala/birdnet-go — self-hosted realtime soundscape analyser (Go, Raspberry Pi), last activity 2026-11-07, very active (2,408 stars). Label "community, not Cornell" if linked.
- **V3.0 dev repo:** https://github.com/birdnet-team/birdnet-V3.0-dev (created 2025-11-10; latest commit 16 June 2026; model DOI 10.5281/zenodo.20703646; developer preview — "Models, labels, and code will change before final release").

### Item 12 — Keep the Sound Map / Translator honesty note
- **Where:** `soundmap/index.html`, `translate/index.html` in the regen.
- **Fact (from inventory):** the Translator/Sound Map need a model backend and cannot work statically. Keep that limitation stated on the pages; do not imply a live working translator. The WAVE agent is offline (see §1) — no hire fulfillable.

---

## 3. What NOT to claim

- Do NOT claim WAVE translates animal communication, or that any model does. CETI: no translation achieved. NatureLM: patterns, not confirmed meanings.
- Do NOT claim Perch or NatureLM is connected to WAVE, or that WAVE runs a specific BirdNET build — whether WAVE runs v2.4 or a newer build is an internal question, not a public fact.
- Do NOT present 11,000+ as the production-model figure, or 6,522 as the current platform total. Use the two-generation wording (§2 item 3).
- Do NOT use Xeno-canto ~1.04M or Macaulay 2.7M as current figures. Do NOT quote Macaulay 3.8M (unverified secondary claim).
- Do NOT claim the archives are owned by WAVE / the Foundation, or that WAVE has any contact/agreement with Cornell, ESP, CETI, or WHOI.
- Do NOT link the dead Kaggle Watkins mirror (404). Do NOT link the ESP website Library page (404) — use the GitHub repo.
- Do NOT claim DolphinGemma is released or available — DeepMind's own page (accessed Nov 2026) says "currently in development. On release, it will be openly available"; Wikipedia notes "no model or data have been publicly released."
- Do NOT quote a species count for NatureLM-audio, a platform-wide iNaturalist sounds total, a current GBIF audio-enabled count, or a Macaulay / Animal Sound Archive reuse licence — none was verified.
- Do NOT present the WAVETranslator repo as the engine source — it is a 3-file stub (1 star, 1 fork, one commit ever, "Initial commit" 2026-06-13; files: `.gitignore` 263 B, `LICENSE` MIT 1,071 B, `README.md` 154 B, two lines only). Link it only with the stub label.
- Do NOT claim the WAVE agent is online or able to take hires — it is offline as of 2026-11-06; 0 jobs completed, $0 earned (ALS agent figures; WAVE agent likewise offline — see `ACP_PUBLIC_STATE_2026-11-06.md`).

---

## 4. Figure-alignment notes for this area

| Figure | Resolution |
|---|---|
| Xeno-canto ~1,040,000 vs 1,111,111 | **1,111,111 (Nov 2026) SUPERSEDES ~1,040,000.** Tell the publish coordinator. See §2 item 1. |
| Macaulay 2.7M (Mar 2025) vs 3.2M+ (Nov 2026) | Both true at their dates; **use 3.2M+ (Nov 2026)**. 2.7M only as a dated historical footnote. |
| Macaulay 3.2M vs 3.8M (Oct 2026 secondary) | Unresolved; **do not quote 3.8M**. |
| BirdNET 6,522 vs 11,000+ | Different generations, both true. **Headline 11,000+ with the v2.4 6,522 footnote.** |
| BirdNET Live 8,927 birds vs V3.0 FAQ 9,789 vs taxonomy list 13,967 | Different scopes (Live app vs FAQ vs taxonomy list incl. taxa beyond the current model). Quote each with its scope; do not merge them. |
| Watkins 15,000 clips vs 1,694 cuts | Both true — full archive vs curated "Best of" subset. |

---

## 5. Open questions needing Mike's decision

1. **Xeno-canto update:** confirm the publish coordinator is told to update ~1.04M → 1,111,111 in the staged articles/charts (the coordinator owns those files; this brief does not edit them).
2. **Which BirdNET build does WAVE actually run**, and is a V3.0 upgrade planned? (Internal — determines whether site copy can ever say "WAVE runs BirdNET vX".)
3. **Macaulay 3.8M claim:** should anyone chase the eBird mobile-upload basis, or leave 3.2M+ as the cited figure? (Recommendation: leave 3.2M+.)
4. **iNaturalist CC BY-NC default:** what are the commercial-use implications for WAVE? (Needs a decision, not a fact.)
5. **Watkins site:** re-check whether `cis.whoi.edu` is back online after Sept 2026; if it is, restore it as the primary link.
6. **DolphinGemma:** re-check the DeepMind page / Kaggle when the next research pass runs — do not claim a release until then.
7. **Duplicate WAVE agent** (second WAVE agent in Virtuals, no token, Pro, same name/description, no repo/site): naming decision still open (memory 2026-11-06/07).
8. **GBIF audio count / iNaturalist sounds total:** both need an API count query (GBIF occurrence search with mediaType=Sound; iNaturalist API count) — approve a follow-up pass if wanted.
9. **NOAA NCEI passive-bioacoustic bucket** (`noaa-passive-bioacoustic` on Google Cloud) — worth a follow-up pass for WAVE's marine side? It was the richest anonymous marine endpoint in a Sept 2026 verified catalogue.
