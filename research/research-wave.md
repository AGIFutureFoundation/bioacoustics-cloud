# WAVE / Bioacoustics Research — Findings

**Research date:** 7 November 2026
**Method:** Web search to find source pages, then Firecrawl scrapes of the key pages (10 scrapes, 1 credit each, all `success: true`). Figures are quoted only with a source URL and an as-of date. Where a figure could not be verified it is flagged, not filled in.
**Scope reminder:** WAVE's live predictor is BirdNET. Perch and NatureLM are **not** connected to WAVE. All archives below are public resources linked to, **not owned by**, WAVE. No partnership, integration, or capability is claimed beyond what the sources state.

## Headline figures (verified this pass)

| Source | Verified figure | As of |
|---|---|---|
| BirdNET v2.4 (production) | 6,522 bird species (+ smaller mammal/anuran sets) | March 2025 |
| BirdNET V3.0 generation | 11,000+ species (Dev Preview 3.1, June 2026) | June–Sept 2026 |
| BirdNET Live app | 8,927 birds, 268 mammals, 254 insects, 340 amphibians | Sept 2026 |
| Perch 2.0 (Google DeepMind) | 14,795 classes (14,597 species), 1,542,778 training recordings | 7 Aug 2025 |
| Xeno-canto | 1,111,111 recordings (milestone); ~13,400 species | Nov 2026 |
| Macaulay Library | 3.2M+ audio recordings; 84M+ photos; 300k+ videos; 96% of bird species | Nov 2026 |
| Watkins (WHOI) | ~2,000 unique recordings, 60+ species, >15,000 annotated clips | Sayigh et al. 2016 (still the cited holdings) |
| iNaturalist sounds | 571,698 recordings used in Perch 2.0 training (Mar 2025 snapshot); platform-wide total **not verified** | Mar 2025 |
| Animal Sound Archive (Berlin) | ~120,000–130,000 recordings; ~1,800 bird, ~580 mammal species | Oct 2026 |
| GBIF | 3.8B+ occurrence records total; audio-enabled count **not verified** | Aug 2026 |
| NatureLM-audio training set | 26.4M (audio, text) pairs; >2M audio files; 22,100 hours | Nov 2024 paper / 2025 dataset |
| Project CETI | 8,719 codas from ~60 whales → 156-coda "phonetic alphabet" | May 2024 |

---

## 1. BirdNET (Cornell)

**What it is:** Open-source bird/animal sound identification from the Cornell K. Lisa Yang Center for Conservation Bioacoustics (Cornell Lab of Ornithology) and the Chair of Media Informatics, Chemnitz University of Technology. The model is trained on curated recordings from Xeno-canto and the Macaulay Library. Free apps (BirdNET, Merlin Sound ID uses related tech) and the BirdNET-Analyzer tool for batch analysis.

**Current version / counts:**
- **v2.4 is the production model**, released March 2025: **6,522 bird species** (plus a smaller set of mammals and anurans). Sources: Zenodo model release (Mar 2025); Funosas et al., *Ecological Indicators* 182 (2026) 114550 ("Its latest version (v.2.4) can identify more than 6000 bird species worldwide").
- **V3.0 generation ("BirdNET+"): Developer Preview 3.1, June 2026, "11K Species"** — larger, more diverse training set, expanded non-bird species. Repo: `birdnet-team/birdnet-V3.0-dev` (created 2025-11-10; latest commit 16 June 2026). Model DOI: 10.5281/zenodo.20703646. Explicitly a developer preview: "Models, labels, and code will change before final release."
- **BirdNET Live app (Sept 2026):** "automatically recognizes **8,927 bird species, 268 mammals, 254 insects, and 340 amphibians**, all in real time without an internet or cellular connection." Free on Android/iOS; UI in 12 languages. Source: Cornell CCB *SoundBytes – September '26*.
- BirdNET+ V3.0 FAQ states **9,789 species** (birds, amphibians, mammals, insects). The public taxonomy list shows 13,967 species (11,127 birds) — that list appears to include taxa beyond the current model.
- The official About page lists "High species coverage (**11k+**)" as a design priority (scraped 7 Nov 2026).

**How the 11,000+ vs 6,522 figures relate:** they are **different model generations, not a contradiction**. 6,522 = v2.4 production model classes (March 2025). 11,000+ = the V3.0 generation (developer preview June 2026; BirdNET Live app Sept 2026). The correct WAVE wording is: "BirdNET v2.4 (production, March 2025) covers 6,522 bird species; the V3.0 generation in preview/live apps covers 11,000+ species." Do not present 11,000+ as the production-model figure.

**License / access:** BirdNET-Analyzer **source code is MIT**; **models are CC BY-NC-SA 4.0** (non-commercial; educational/research use is freely permitted; commercial use needs a Cornell licence; custom models trained with it inherit the same terms). No hosted API — models and tools are downloadable; apps are free. Contact: ccb-birdnet@cornell.edu.

**Sources:**
- https://birdnet.cornell.edu/about/ (scraped 7 Nov 2026)
- https://github.com/birdnet-team/birdnet-V3.0-dev
- https://github.com/birdnet-team/birdnet-analyzer/blob/HEAD/README.md (licence)
- https://www.birds.cornell.edu/ccb/soundbytes-september-26/ (BirdNET Live figures)

**Gaps / could not verify:** final V3.0 release date (still preview as of June 2026); exact non-bird species counts in v2.4; whether WAVE runs v2.4 or a newer build (internal question, not a public fact).

---

## 2. Google Perch

**What it is:** Google DeepMind / Google Research bioacoustics foundation model. An embedding + classifier model for transfer learning: feed it audio, get embeddings, train small classifiers for new species/tasks with few examples ("agile modeling"). Also the basis for SurfPerch (coral reefs) and Google's whale classifiers.

**Current version / counts:**
- **Perch 2.0, released 7 August 2025.** **14,795 classes: 14,597 species + 198 general sound-event classes (FSD50K).** 1,536-dimensional embeddings; ~12M-parameter EfficientNet-B3-class model.
- Training data (paper Table 1; downloads Mar–Apr 2025): **1,542,778 recordings** — Xeno-canto 896,255; iNaturalist 571,698; Tierstimmenarchiv 33,859; FSD50K 40,966.
- Perch 1.0 (2023): EfficientNet-B1 trained on the full Xeno-canto corpus downloaded July 2022; >250,000 downloads (per DeepMind); bird-vocalization-classifier on TF Hub/Kaggle.
- Benchmarks: BirdSet AUROC ~0.907–0.908; state-of-the-art on BEANS tasks (per secondary reporting; paper: arXiv:2508.04665, revised Jan 2026).
- Limitation stated in the paper: almost no marine hydrophone training data (only a few dozen cetacean recordings).

**License / access:** Code **Apache-2.0** (`google-research/perch` on GitHub — repo itself warns parts are out of date and pip install is unlikely to work; for inference use `perch-hoplite`). Models distributed free via **Kaggle Models** (`google/bird-vocalization-classifier`, variant `perch_v2`; SurfPerch at `google/surfperch`). No hosted API; self-hosted download. **Perch is NOT connected to WAVE** — it is a candidate/comparison model only.

**Sources:**
- https://github.com/google-research/perch (scraped 7 Nov 2026; Apache-2.0)
- https://arxiv.org/pdf/2508.04665 (Perch 2.0 paper, "Perch 2.0: The Bittern Lesson for Bioacoustics")
- https://www.kaggle.com/models/google/bird-vocalization-classifier
- https://www.karmactive.com/google-perch-ai-analyzes-hawaii-wildlife-sounds-faster-endangered-species/ (release date 7 Aug 2025)

**Gaps / could not verify:** Kaggle model licence field (repo is Apache-2.0; model weights page not scraped); any newer version after 2.0.

---

## 3. NatureLM (Earth Species Project)

**What it is:** NatureLM-audio is the Earth Species Project's audio-language foundation model: an audio encoder linked to a large language model (built on LLaMA 3.1), so recordings can be queried in plain English ("Which species are calling here?"). It does species classification, call-type and life-stage classification, detection, captioning, and counting, including zero-shot generalisation to species not in training. It is a **research model, not a translation device** — ESP and independent commentators stress it finds patterns, not confirmed meanings.

**Current status / counts:**
- Paper: Robinson et al., *NatureLM-audio: An Audio-Language Foundation Model for Bioacoustics*, arXiv:2411.07186, **November 2024**.
- Training dataset: **>26 million (audio, text) pairs; >2 million audio files; 22,100 hours; 44 bioacoustic tasks**; sources include Xeno-canto, iNaturalist, Watkins, Animal Sound Archive, plus human speech/music/environmental sound. On Hugging Face as `EarthSpeciesProject/NatureLM-audio-training` (**26.4M rows**, verified by scrape 7 Nov 2026).
- Model on Hugging Face: `EarthSpeciesProject/NatureLM-audio`. A no-code demo exists.
- **NatureLM-audio 2.0 "to be released soon"** per ESP blog, 30 Sept 2026; model-merging work (NeurIPS 2025 workshop) improved unseen-family F1 by >200% relative and is folded into 2.0.
- **alp-data** (July 2026): ESP's shared data layer uniting **35+ ML-ready bioacoustic datasets**.

**License / access:** Training data is composite — **per-sample licences** (field `license`, e.g. CC-BY-NC, CC0); the dataset as a whole has no single licence. Model weights licence **not verified in this pass** (not stated on the dataset card scraped). Access via Hugging Face and the public demo; no hosted API found. **NatureLM is NOT connected to WAVE.**

**Sources:**
- https://arxiv.org/abs/2411.07186 (paper, Nov 2024)
- https://huggingface.co/datasets/EarthSpeciesProject/NatureLM-audio-training (scraped 7 Nov 2026)
- https://earthspecies.org/2026/09/30/what-if-a-model-knows-more-than-it-can-say/ (2.0 status)
- https://www.earthspecies.org/2026/07/22/introducing-alp-data-a-shared-data-layer-for-animal-language-processing/ (alp-data)

**Gaps / could not verify:** NatureLM-audio model weights licence; NatureLM-audio 2.0 release date; demo URL (not captured); any species-count claim for the model itself (ESP describes "thousands of species" without a single verified number — do not quote one).

---

## 4. Xeno-canto

**What it is:** Community archive of wildlife sounds (birds, grasshoppers, bats, frogs, land mammals), run by the Xeno-canto Foundation (Willem-Pier Vellinga, Bob Planqué, Sander Pieterse). The principal training source for BirdNET, Merlin, Perch, and NatureLM-audio. Public archive, **not owned by WAVE**.

**Current count:** **1,111,111 recordings** — a milestone announced on the XC homepage news feed (scraped 7 Nov 2026). Corroborated by the maintainers' own page: "**about 1,100,000 recordings of more than 13,400 species** … shared by more than 13,000 recordists" (2026), and "over 1,000,000 wildlife recordings" (Sept 2026 talk). **This supersedes the ~1,040,000 figure from November 2026** — the archive grows by ~5,000 recordings/month. Used in >6,000 publications (Google Scholar, 2026).

**License / access:** Recordings carry **individual Creative Commons licences** (most commonly CC BY-NC-SA; the homepage shows CC BY-NC-SA 3.0/4.0 badges per recording). Free, open **API**: https://xeno-canto.org/explore/api (also `xenopy` Python wrapper). New in 2026: annotations with the "Annota-JSON" schema, exportable via the API; Spectrolipi integration; the site notes bot pressure in late 2026.

**Sources:**
- https://xeno-canto.org/ (scraped 7 Nov 2026 — 1,111,111 milestone)
- https://www.few.vu.nl/~rplanque/XC/index.html (maintainers' page: ~1.1M, 13,400+ species)
- https://xeno-canto.org/explore/api

**Gaps / could not verify:** exact species count on the day (13,400+ is the maintainers' rounded figure); licence mix percentages.

---

## 5. Macaulay Library (Cornell Lab)

**What it is:** The world's largest and oldest scientific archive of wildlife media, part of the Cornell Lab of Ornithology. Founded 1929 (first recordings 18 May 1929, Ithaca). Integrated with eBird; the other principal training source for BirdNET. Public archive, **not owned by WAVE**.

**Current count:** **3.2 million+ audio recordings; 84 million+ photographs; 300,000+ videos; covering 96% of the world's bird species** (Wikipedia, citing Cornell Lab sources; scraped 7 Nov 2026). Consistent with Cornell's own job posting ("more than 77 million images, 3 million sound recordings, and 350k videos, from more than 80k contributors") and Cornell Alumni (Mar 2025: "more than 2.7 million audio recordings … 330,000 videos and 72 million images"; >500,000 audio recordings uploaded in 2024 alone). **500,000th video** reached 12 July 2026. The settled WAVE figure remains **3.2M+ (Nov 2026)**.

**License / access:** Free to browse/listen via https://www.macaulaylibrary.org/ and eBird; media are contributed by recordists and remain their copyright. **Exact current reuse/download terms were not verified in this pass** — do not assert a licence; link to the library's terms.

**Sources:**
- https://en.wikipedia.org/wiki/Macaulay_Library (scraped 7 Nov 2026)
- https://alumni.cornell.edu/cornellians/macaulay-library/ (Mar 2025)
- https://www.gbif.org/es/dataset/7f6dd0f7-9ed4-49c0-bb71-b2a9c7fed9f1 (GBIF dataset record)

**Gaps / could not verify:** A secondary report (bird-watchers.com, Oct 2026, citing eBird's mobile-upload announcement) says the library held **3.8 million sound recordings** in Sept 2026. This conflicts with 3.2M and is **unverified** — it may reflect a different count basis (e.g. including uncatalogued mobile uploads). Keep 3.2M+ as the cited figure and flag the 3.8M claim as unresolved, not as fact. Exact media reuse licence also unverified.

---

## 6. Watkins Marine Mammal Sound Database (WHOI)

**What it is:** The William A. Watkins Marine Mammal Sound Database, Woods Hole Oceanographic Institution — the historic reference collection of marine mammal vocalisations, built over 40+ years by William Watkins (with William Schevill). Spans seven decades (1940s–2000s), including the first recordings of 51 marine mammal species. Public resource, **not owned by WAVE**.

**Holdings:** **~2,000 unique recordings of 60+ marine mammal species, with >15,000 annotated digital sound clips** (Sayigh et al. 2016, *Proc. Meetings on Acoustics* 27:040013). "Best of" subset: **1,694 high-quality cuts, 32 species**. The physical Watkins collection at the New Bedford Whaling Museum holds ~18,000 calls from 70+ species and 2,300 reel-to-reel tapes.

**Access — important caveat:** the official site (`cis.whoi.edu/science/B/whalesounds/`, mirror `whoicf2.whoi.edu`) was **offline as of 19 Sept 2026** (both hosts redirect to `maintenance.whoi.edu`), per an independently verified catalogue checked that date. Working fallbacks verified in that catalogue: the **BEANS GCS zip** (`storage.googleapis.com/ml-bioacoustics-datasets/watkins.zip`, 882 MB, WAV + annotations.csv, 31 classes) and Hugging Face mirrors (`DBD-research-group/beans_watkins`; `ivangtorre/watkins-marine-mammal-full-cuts`, 15,200 recordings, 54 species per card) and an Internet Archive full-cuts copy. The Kaggle mirror (`shreyj1729/best-of-watkins-marine-mammal-sound-database`) **returns 404** — do not link it.

**License:** Free download, no registration, under Watkins site terms (when live); BEANS/HF mirrors inherit Watkins terms (non-commercial in the underlying collection). No per-clip CC licence was verified.

**Sources:**
- https://www.researchgate.net/publication/315366631_The_Watkins_Marine_Mammal_Sound_Database_An_online_freely_accessible_resource (Sayigh et al. 2016)
- https://github.com/mallhw/keiko-hackmit/blob/HEAD/training/dataset/catalog/survey_registries_endpoints.md (offline status verified 2026-09-19; mirrors)
- https://www.whoi.edu/press-room/news-release/?fwp_archive_search=Acoustics (WHOI launch announcement)

**Gaps / could not verify:** whether the WHOI site is back online after Sept 2026 (not re-checked); current licence text (site down); whether the full 15,000-clip set is intact in any single mirror (HF full-cuts mirror claims 15,200 recordings, but its licence field is undeclared).

---

## 7. iNaturalist Sounds

**What it is:** Audio recordings attached as evidence to observations on iNaturalist (California Academy of Sciences / National Geographic Society joint initiative), the global citizen-science platform. Sounds are one of three separately licensed content types per observation (observation data, photos, audio).

**Data / counts:** Sounds are queryable via the API (`sounds=true`, `sound_license=` filters; v1 at `api.inaturalist.org/v1`, v2 at `api.inaturalist.org/v2`). A solid sourced figure: **571,698 iNaturalist recordings** were in Perch 2.0's training data (research-grade observations via GBIF, downloaded March 2025). **A current platform-wide total of sounds was not verified in this pass** — iNaturalist publishes observation totals, not a sounds total, in the sources checked.

**License / access:** Default for new accounts is **CC BY-NC for all three content types** (observation data, images, audio); users may choose CC0, CC BY, CC BY-NC-SA, CC BY-NC-ND, CC BY-ND, CC BY-SA, or all rights reserved — licences can differ within a single observation. Only CC-licensed media are shared with GBIF. Open-licensed media are bulk-accessible via the **iNaturalist Open Data program on AWS** (`inaturalist-open-data`). API use is subject to iNaturalist Terms of Service. As of July 2026, ~23% of observations are not under an open observation licence and therefore cannot be redistributed via GBIF (Callaghan et al., *BioScience* 2026, doi:10.1093/biosci/biag135).

**Sources:**
- https://academic.oup.com/bioscience/advance-article/doi/10.1093/biosci/biag135/8820383 (licensing + 23% figure, July 2026)
- https://arxiv.org/pdf/2508.04665 (Perch 2.0 Table 1: 571,698 iNaturalist recordings)
- https://www.inaturalist.org/pages/api+reference ; https://api.inaturalist.org/v2

**Gaps / could not verify:** total number of sounds on iNaturalist; number of sound-bearing observations; commercial-use implications of the CC BY-NC default for WAVE (needs a decision, not a fact).

---

## 8. Earth Species Library

**What it is:** The Earth Species Project's open repository of ML-ready, multi-modal (primarily acoustic) datasets, hosted on GitHub — curated, preprocessed, and documented for training bioacoustic models. Distinct from the NatureLM-audio training set (Section 3), though related. Public resource, **not owned by WAVE**.

**Contents / status:** "A diverse collection of multi-modal (primarily acoustic) datasets … available to the public, easily downloadable, and preprocessed for machine learning." Examples from the README: **Bird Song** — 686 recordings, 87 labels (with PyTorch dataloaders); **Egyptian Fruit Bat** — 300,000 unique vocalizations, 90k labeled annotations. ESP notes "many more data sets that we have not yet been able to make public." Datasets are archived on the Internet Archive; the repo includes how-to-add-a-dataset docs. Hugging Face org `EarthSpeciesProject` hosts the derived datasets (NatureLM-audio-training, BEANS-Zero).

**License / access:** Free via GitHub; licences vary per dataset (public-domain and CC/permissive sources). **Note: the ESP website Library page (earthspecies.org/what-we-do/library) returned "Page not found" when scraped 7 Nov 2026** — the ESP site appears to be migrating (staging domain `earthspeciesproject.wpcomstaging.com`). Use the GitHub repo as the live home, not the old website URL.

**Sources:**
- https://github.com/earthspecies/library (README scraped via search; live)
- https://raw.githubusercontent.com/earthspecies/library/main/README.md
- https://huggingface.co/datasets/EarthSpeciesProject/ (dataset family)

**Gaps / could not verify:** total dataset count / total hours in the Library itself (no aggregate figure published); per-dataset licences beyond the general statement.

---

## 9. Project CETI

**What it is:** The Cetacean Translation Initiative — a nonprofit (founded 2020, based in Dominica, 8 institutions, ~50 scientists) applying machine learning, robotics, linguistics, and underwater acoustics to sperm whale communication. It studies codas (rhythmic click patterns), not bird song; relevant to WAVE as the leading marine-mammal decoding programme. **No translation has been achieved** — CETI's researchers are explicit about this.

**Status / findings:**
- **May 2024:** "sperm whale phonetic alphabet" — **8,719 codas from ~60 individual whales** analysed with ML; **156 distinct codas** with combinatorial structure (*Nature Communications* 15:3393, doi:10.1038/s41467-024-47221-8).
- **Nov 2025:** vowel- and diphthong-like spectral patterns in codas (Beguš et al., UC Berkeley / CETI).
- **Apr 2026:** "The phonology of sperm whale coda vowels" (*Proc. R. Soc. B* 293(2069):20252994).
- **Mar 2026:** first complete drone + hydrophone record of a sperm whale birth (Unit A, Dominica), published in *Science* and *Scientific Reports* (6+ hours of underwater audio + aerial video).
- **Dec 2025:** open-source bio-logger (Harvard SEAS) — high-fidelity multi-channel audio + behaviour/environment sensors, hardware and software open-source (Vogt et al., *PLOS ONE*, doi:10.1371/journal.pone.0337093). Autonomous underwater glider for real-time tracking developed May 2026. "Whale Tales" analysis software "soon" available to the cetacean community (per CETI site, scraped 7 Nov 2026).
- CETI is a member of the **AWS Open Data Program** and partners with Google Research and Microsoft Research.

**What data is public:** Papers, the open-source bio-logger designs/code, and selected footage/audio released with publications. **No verified public bulk download of the coda corpus was found in this pass** — the AWS Open Data dataset was not located/confirmed, and CETI's site links "Research & Data" without a public dataset portal in the scraped pages. Do not claim the whale recordings are downloadable.

**Sources:**
- https://www.projectceti.org/research/index (scraped 7 Nov 2026)
- https://doi.org/10.1038/s41467-024-47221-8 (phonetic alphabet)
- https://seas.harvard.edu/news/tapping-whale-talk (bio-logger, Dec 2025)
- https://www.projectceti.org/blog-posts/welcome-to-cetis-new-website (AWS Open Data Program)

**Gaps / could not verify:** size of CETI's total recorded corpus (hours/whales beyond the 8,719-coda study set); AWS Open Data dataset URL; any public audio download.

---

## 10. Animal Sound Archive (Tierstimmenarchiv, Berlin)

**What it is:** The Animal Sound Archive at the Museum für Naturkunde Berlin (Leibniz Institute), founded **1951** by Günter Tembrock. One of the world's oldest and third-largest bioacoustic archives; recordings of birds, mammals, fish, amphibians, reptiles, and insects. Public archive, **not owned by WAVE**.

**Holdings:** **~120,000–130,000 recordings**: GBIF dataset description says "around 130 000 records of animal voices"; the Museum's 75th-anniversary report (Oct 2026) says "**more than 120,000 recordings** … from approximately **1,800 bird species and 580 mammal species**", plus amphibians, reptiles, fish, and insects. The archive celebrated its 75th anniversary with a colloquium on 7 Nov 2026. Perch 2.0 used 33,859 Tierstimmenarchiv recordings (Apr 2025).

**Access:** Search portal at `suche.tierstimmenarchiv.de` (cited in the Perch 2.0 paper); dataset published via GBIF (doi:10.15468/0bpalr). Older sources: representative sections of >10,000 recordings listenable online; complete recordings "can be requested for scientific purposes free of charge." A 2025 review table lists access as "**Contact required**" — this conflicts with the "open access" description, so treat bulk access as gated/unclear. **The Museum's research page URL returned 404 when scraped 7 Nov 2026** (site reorganisation); use the search portal and GBIF record instead.

**License:** Not verified in this pass — no licence statement found on the sources checked. Do not assert one.

**Sources:**
- https://www.gbif.org/dataset/b7ec1bf8-819b-11e2-bad2-00145eb45e9a (GBIF record: ~130,000 records, founded 1951)
- https://blog.everythingdinosaur.com/blog/_archives/category/animal-news-stories (75th anniversary, 25 Oct 2026: 120,000+ recordings, 1,800 bird / 580 mammal species)
- https://arxiv.org/pdf/2508.04665 (Perch 2.0: 33,859 recordings; portal suche.tierstimmenarchiv.de)

**Gaps / could not verify:** current licence/terms; whether bulk download is possible without contact; live portal URL status (not scraped directly).

---

## 11. GBIF

**What it is:** The Global Biodiversity Information Facility — an intergovernmental open-data infrastructure (founded 2001; OECD Megascience Forum proposal 1999) that aggregates species occurrence records from museums, citizen-science platforms, and agencies via the Darwin Core standard. It is an **index/aggregator, not a sound archive itself** — but it is where the open-licensed media of iNaturalist, Xeno-canto, Macaulay Library, and the Animal Sound Archive become jointly searchable and downloadable.

**Counts:** **3.8 billion+ occurrence records** as of August 2026 (Miller et al., "The Global Biodiversity Information Facility at 25", *Biodiversity Data Journal* 14:e208528, Oct 2026; corroborated by GBIF's 25th-anniversary reporting: 70 participating countries, data providers in 120+ countries, 2,700 institutions). Under 5% of records are machine observations (camera traps, acoustic monitors). **The current number of audio-enabled (sound) records in GBIF was not verified** — the last sourced figure is from 2017, when Xeno-canto's addition of 170,041 audio records more than doubled a base of ~100,000 sound records. That figure is nine years stale; do not quote it as current.

**License / access:** Free, open access; data under CC0 / CC BY / CC BY-NC as set by publishers; occurrence and species APIs; Darwin Core Archives; GBIF-hosted data portal and analytics at gbif.org/analytics/global. Media URLs are included in occurrence records and in the iNaturalist Open Data / dataset downloads.

**Sources:**
- https://doi.org/10.3897/BDJ.14.e208528 (GBIF at 25, Oct 2026 — 3.8B records)
- https://www.gbif.org/uk/news/VqABDXdrK6ceAM6CY2aY4/tweets-chirps-and-hoots-collaborative-project-xeno-canto-adds-170000-sound-based-bird-records (2017 audio figure, dated)
- https://www.gbif.org/analytics/global

**Gaps / could not verify:** current audio-enabled record count (needs a GBIF occurrence search with mediaType=Sound — not run in this pass); current sounds total by dataset.

---

## 12. Other major open bioacoustics datasets / models found

Only items verified in sources checked this pass:

- **BEANS (Benchmark of Animal Sounds)** — ESP, ICASSP 2023 (Hagiwara et al.). 12 datasets across birds, land/marine mammals, amphibians, insects (classification: Watkins best-of, bats, Cornell Bird ID, dogs, HumBugDB; detection: DCASE, enabirds, HICEAS, RFCx, gibbons; plus ESC-50/SC1 auxiliaries). Code: https://github.com/earthspecies/beans ; mirrors on Hugging Face (`DBD-research-group/beans_*`). **BEANS-Zero** (Robinson et al. 2025) is the zero-shot benchmark for NatureLM-audio.
- **BirdSet** — large bird-sound classification benchmark: ~520,000 Xeno-canto recordings for training, 400+ hours of annotated passive recordings for testing (Rauch et al. 2025). https://huggingface.co/datasets/DBD-research-group/BirdSet
- **SurfPerch** — Google's reef-adapted Perch model (birds + coral reef sounds + general audio), Kaggle `google/surfperch`, paper arXiv:2404.16436; trained on ReefSet (global reef recordings).
- **Google whale models** — multispecies whale classifier (8 species / 12 classes: humpback, killer whale, blue, fin, minke, Bryde's, N. Atlantic/Pacific right) and a humpback whale model, both on Kaggle Models (`google/multispecies-whale`, `google/humpback-whale`); training data from PIFSC, MBARI, DFO, NEFSC. Apache-2.0 per the Perch repo (unverified on the model pages themselves).
- **DolphinGemma** — Google DeepMind + Wild Dolphin Project + Georgia Tech; ~400M-parameter audio language model trained on 40 years of Atlantic spotted dolphin recordings (Bahamas), SoundStream tokeniser, runs on Pixel phones. Announced April 2025; Google said it would be openly released. **Status unresolved:** DeepMind's own page (accessed Nov 2026) says "currently in development. On release, it will be openly available"; Wikipedia likewise notes "no model or data have been publicly released"; some secondary outlets claim a summer-2025 release. **Do not claim it is released or available.**
- **AVES / AVES2 (ESP)** — bioacoustic encoder models (audio representation learning), trained on Xeno-canto + iNaturalist + Watkins + AudioSet; on Hugging Face (`EarthSpeciesProject/esp-aves2-*`); paper arXiv:2508.11845. BEANS classification probe accuracy 0.788 (reported on model card).
- **alp-data (ESP, July 2026)** — shared data layer uniting 35+ ML-ready bioacoustic datasets (see Section 3).
- **FSD50K** — 40,966 general audio clips (Fonseca et al. 2022); the non-species portion of Perch 2.0 training.
- **AnuraSet** — anuran (frog/toad) call dataset (Cañas et al. 2023), used in BEANS-family benchmarks.
- **NOAA NCEI passive-bioacoustic cloud bucket** (`noaa-passive-bioacoustic` on Google Cloud) — the richest anonymous marine endpoint per a Sept 2026 verified catalogue: DCLDE 2011/2013/2015/2018/2022, NEFSC, PIFSC, SanctSound, ADEON, JASCO, etc., listable with no credentials. Worth a follow-up pass for WAVE's marine side.
- **Australian Acoustic Observatory** — searchable continental-scale passive acoustic archive (cited as a Perch 2.0 data source; not independently verified this pass).

---

## Figure reconciliation (use these wordings)

- **BirdNET 6,522 vs 11,000+:** different generations. v2.4 (production, Mar 2025) = 6,522 bird species. V3.0 generation (preview June 2026; BirdNET Live Sept 2026) = 11,000+ species; BirdNET Live lists 8,927 birds + 268 mammals + 254 insects + 340 amphibians. The 11,000+ figure is real but belongs to V3.0, not v2.4.
- **Xeno-canto ~1,040,000 vs 1,111,111:** the older figure was correct in early Nov 2026; the archive passed 1,111,111 recordings by the time of this pass (homepage milestone). Use **~1.11 million (Nov 2026)**.
- **Macaulay 3.2M vs 3.8M:** 3.2M+ is the Cornell-cited figure; 3.8M is a single unverified secondary claim (Oct 2026). Use **3.2M+** and flag the discrepancy.
- **Watkins "15,000 clips" vs "1,694 cuts":** both true — 15,000+ is the full archive, 1,694 is the curated "Best of" subset.

## Open questions for the programme (not verifiable from public sources)

1. Which BirdNET build/version does WAVE actually run, and is a V3.0 upgrade planned? (Internal.)
2. GBIF current audio-enabled record count (needs a GBIF API occurrence query with mediaType=Sound).
3. iNaturalist platform-wide sounds total (needs an iNaturalist API count query).
4. Macaulay Library and Animal Sound Archive current reuse licences (needs their terms pages).
5. Watkins official site status after Sept 2026 (re-check `cis.whoi.edu`).
6. DolphinGemma release status (re-check DeepMind page / Kaggle).
7. NatureLM-audio model weights licence (check the Hugging Face model card).
8. Whether WAVE has any contact/agreement with Cornell, ESP, CETI, or WHOI — none is evidenced in public sources; do not imply one.

## Method note

- Firecrawl scrapes (10): example.com (access check), birdnet.cornell.edu/about, github.com/birdnet-team/birdnet-V3.0-dev, xeno-canto.org, en.wikipedia.org/wiki/Macaulay_Library, github.com/google-research/perch, earthspecies.org/what-we-do/library (404), projectceti.org/research/index, huggingface.co/datasets/EarthSpeciesProject/NatureLM-audio-training, museumfuernaturkunde.berlin/en/research/animalsoundarchive (404). All others succeeded.
- Web searches: 13 queries across BirdNET, Perch, NatureLM, Xeno-canto, Macaulay, Watkins, iNaturalist, Earth Species Library, CETI, Animal Sound Archive, GBIF, BEANS, DolphinGemma, BirdNET licensing.
- No live site tree was edited; nothing was pushed, deployed, published, emailed, or shared. This file is local staging only.
