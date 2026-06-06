const API_BASE = 'https://itunes.apple.com/search';
const DEFAULT_QUERY = 'Radiohead';

const albumData = [
  {
    slug: 'pablo-honey',
    year: 1993,
    title: 'Pablo Honey',
    subtitle: 'The starting signal.',
    summary: 'The debut is the sound of Radiohead before the mythology: distorted guitars, loud-quiet dynamics, and anxious melodic writing still tied to early-90s alternative rock.',
    biography: 'Pablo Honey introduces Radiohead as a guitar band trying to escape the shadow of one gigantic song. Behind the obvious impact of Creep, the album already carries themes that later become central: discomfort, self-surveillance, brittle confidence, and sudden emotional release. It is less futuristic than the later records, but it documents the raw first version of the band.',
    release: '22 February 1993',
    label: 'Parlophone / Capitol',
    producer: 'Sean Slade, Paul Q. Kolderie',
    role: 'Debut album',
    sound: 'Alternative rock pressure, loud guitars, direct hooks',
    entry: ['Creep', 'You', 'Anyone Can Play Guitar'],
    visual: 'Raw monochrome club energy',
    legacy: 'Important because it shows the band before the later art-rock transformation.',
    tags: ['guitar-heavy', 'raw', 'early tension']
  },
  {
    slug: 'the-bends',
    year: 1995,
    title: 'The Bends',
    subtitle: 'The songwriting sharpens.',
    summary: 'A major leap in atmosphere and craft: the guitars are still central, but the songs feel wider, more patient, and more emotionally exact.',
    biography: 'The Bends is where Radiohead start sounding fully like themselves. The album keeps the pressure of guitar rock but adds spacious arrangements, more careful pacing, and a deeper sense of melancholy. It turns personal unease into widescreen songs, creating the bridge between the directness of Pablo Honey and the ambition of OK Computer.',
    release: '13 March 1995',
    label: 'Parlophone / Capitol',
    producer: 'John Leckie, with Radiohead and Nigel Godrich',
    role: 'Breakthrough refinement',
    sound: 'Anthemic alt-rock, suspended chords, dramatic crescendos',
    entry: ['Fake Plastic Trees', 'Street Spirit', 'Just'],
    visual: 'Clinical blues, plastic skin, pressure chambers',
    legacy: 'Often treated as the first truly classic Radiohead album.',
    tags: ['melodic', 'cinematic', 'guitar bloom']
  },
  {
    slug: 'ok-computer',
    year: 1997,
    title: 'OK Computer',
    subtitle: 'The machine learns to panic.',
    summary: 'A widescreen record of alienation: guitars still dominate, but they are stretched into sirens, alarms, glitches, and cinematic static.',
    biography: 'OK Computer turns modern life into a nervous dream. It expands the band’s guitar language into something architectural: suites, transitions, distorted signals, dead-air pauses, and sudden moments of strange beauty. The record feels less like a set of singles than a complete world, which is why it became a central reference point for late-90s art rock.',
    release: '16 June 1997',
    label: 'Parlophone / Capitol',
    producer: 'Nigel Godrich and Radiohead',
    role: 'Canonical art-rock statement',
    sound: 'Paranoia, machines, modern dread, huge dynamic shifts',
    entry: ['Paranoid Android', 'Karma Police', 'No Surprises'],
    visual: 'Motorway lights, instruction-manual dread, cold corporate white',
    legacy: 'The album that made Radiohead a generational art-rock reference.',
    tags: ['dystopian', 'expansive', 'essential']
  },
  {
    slug: 'kid-a',
    year: 2000,
    title: 'Kid A',
    subtitle: 'Rock dissolves into fog.',
    summary: 'The band turns away from obvious anthems and builds a frozen landscape of loops, synths, processed vocals, brass, ambience, and uneasy silence.',
    biography: 'Kid A is the radical break. After the success of OK Computer, Radiohead avoid repeating the formula and instead rebuild their language with electronic textures, abstract forms, and fragmented vocals. It can feel cold on the surface, but underneath it is deeply emotional: disappearance, overload, panic, and the wish to become anonymous.',
    release: '2 October 2000',
    label: 'Parlophone / Capitol',
    producer: 'Nigel Godrich and Radiohead',
    role: 'Radical reinvention',
    sound: 'Glitch, ambience, anti-rock structure, processed voice',
    entry: ['Everything In Its Right Place', 'Idioteque', 'How to Disappear Completely'],
    visual: 'Snowfields, mountains, warning colours, digital isolation',
    legacy: 'A famous example of a major rock band refusing to repeat its winning formula.',
    tags: ['electronic', 'abstract', 'cold beauty']
  },
  {
    slug: 'amnesiac',
    year: 2001,
    title: 'Amnesiac',
    subtitle: 'A twin record with a stranger face.',
    summary: 'Built from the same creative period as Kid A, but more haunted and fragmented: jazz shadows, warped ballads, unstable textures, and sudden dread.',
    biography: 'Amnesiac feels like a memory of Kid A seen through dirty glass. It uses related material from the same broad sessions, but the sequencing is more nocturnal and less monumental. The album moves between ancient-sounding piano, ghostly jazz, angular guitars, and electronic dread, making it one of the band’s most mysterious records.',
    release: '4 June 2001',
    label: 'Parlophone / Capitol',
    producer: 'Nigel Godrich and Radiohead',
    role: 'Companion experiment',
    sound: 'Nocturnal jazz, warped ballads, fractured electronics',
    entry: ['Pyramid Song', 'Knives Out', 'You and Whose Army?'],
    visual: 'Library dust, red books, hidden rooms, uneasy rituals',
    legacy: 'Proof that the Kid A period contained more than one emotional universe.',
    tags: ['uneasy', 'shadowy', 'experimental']
  },
  {
    slug: 'hail-to-the-thief',
    year: 2003,
    title: 'Hail to the Thief',
    subtitle: 'The catalogue turns urgent.',
    summary: 'A dense, restless album where electronic anxiety and guitar attack meet, shifting between political dread, digital unease, and raw band energy.',
    biography: 'Hail to the Thief sounds like a band reconnecting its two halves: the direct live force of the early records and the electronic language of Kid A and Amnesiac. It is long, tense, and full of abrupt turns. The result is a paranoid album of overload, slogans, broken systems, and songs that feel like warnings.',
    release: '9 June 2003',
    label: 'Parlophone / Capitol',
    producer: 'Nigel Godrich and Radiohead',
    role: 'Restless hybrid era',
    sound: 'Political static, guitar attack, computer unease',
    entry: ['2 + 2 = 5', 'There There', 'A Wolf at the Door'],
    visual: 'Street-map colour blocks, alarms, slogans, heat',
    legacy: 'The bridge between the experimental early-2000s era and later rhythmic warmth.',
    tags: ['urgent', 'uneasy', 'combustive']
  },
  {
    slug: 'in-rainbows',
    year: 2007,
    title: 'In Rainbows',
    subtitle: 'The pulse becomes human again.',
    summary: 'A warmer, more physical era: intricate drums, close vocals, blooming guitars, and songs that feel both intimate and enormous.',
    biography: 'In Rainbows makes Radiohead feel bodily again. The arrangements are complex, but the emotional centre is immediate: breath, pulse, touch, release. The album is famous not only for its sound but also for its pay-what-you-want online release, which turned the record into a cultural event as well as a musical one.',
    release: '10 October 2007',
    label: 'Self-released download / XL retail',
    producer: 'Nigel Godrich and Radiohead',
    role: 'Warm human centrepiece',
    sound: 'Rhythm, intimacy, layered guitars, close vocal textures',
    entry: ['Weird Fishes / Arpeggi', 'Reckoner', 'Nude'],
    visual: 'Neon rain, black space, heat traces, colour bloom',
    legacy: 'One of their most loved albums because it balances experimentation with emotional directness.',
    tags: ['warm', 'sensual', 'rhythmic']
  },
  {
    slug: 'the-king-of-limbs',
    year: 2011,
    title: 'The King of Limbs',
    subtitle: 'Loops become a living forest.',
    summary: 'The shortest studio album in the run, built around repetition, interlocking percussion, and organic-electronic motion rather than traditional rock release.',
    biography: 'The King of Limbs is Radiohead at their most loop-focused. Instead of dramatic choruses, it works through small rhythmic cells, clipped textures, and gradually shifting patterns. It can seem minimal at first, but its identity becomes clearer when heard as a living machine: branches, cycles, percussion, and air.',
    release: '18 February 2011',
    label: 'Self-released / XL',
    producer: 'Nigel Godrich and Radiohead',
    role: 'Loop-based study',
    sound: 'Polyrhythms, clipped textures, bass movement, negative space',
    entry: ['Lotus Flower', 'Codex', 'Separator'],
    visual: 'Woodcut forests, limbs, paper creatures, earthy shadows',
    legacy: 'A divisive but important record for understanding the band’s rhythm-first experiments.',
    tags: ['looped', 'percussive', 'minimal']
  },
  {
    slug: 'a-moon-shaped-pool',
    year: 2016,
    title: 'A Moon Shaped Pool',
    subtitle: 'Memory bends around strings.',
    summary: 'Orchestral arrangements, soft piano, and spectral textures turn the songs into slow-moving weather systems: beautiful, restrained, and heavy with memory.',
    biography: 'A Moon Shaped Pool feels like an archive of ghosts: old songs reshaped, strings floating around the voice, and a sense of time slowing down. Rather than chase another reinvention, the album gathers many Radiohead languages — electronics, acoustic guitar, chamber strings, piano, dread, tenderness — into a late-period statement of restraint.',
    release: '8 May 2016',
    label: 'XL Recordings',
    producer: 'Nigel Godrich and Radiohead',
    role: 'Orchestral late-period statement',
    sound: 'Strings, piano, spectral electronics, suspended grief',
    entry: ['Burn the Witch', 'Daydreaming', 'Present Tense'],
    visual: 'White-grey washes, moonlight, erasure, soft decay',
    legacy: 'A mature closing point to the studio-album arc so far.',
    tags: ['orchestral', 'ghostly', 'patient']
  }
];

const fallbackAlbumArt = {
  'pablo-honey': 'assets/album-pablo-honey.svg',
  'the-bends': 'assets/album-the-bends.svg',
  'ok-computer': 'assets/album-ok-computer.svg',
  'kid-a': 'assets/album-kid-a.svg',
  'amnesiac': 'assets/album-amnesiac.svg',
  'hail-to-the-thief': 'assets/album-hail-to-the-thief.svg',
  'in-rainbows': 'assets/album-in-rainbows.svg',
  'the-king-of-limbs': 'assets/album-the-king-of-limbs.svg',
  'a-moon-shaped-pool': 'assets/album-a-moon-shaped-pool.svg'
};

function fallbackArtwork(slug) {
  return fallbackAlbumArt[slug] || '';
}

const state = {
  tracks: [],
  currentIndex: -1,
  isPlaying: false,
  analyser: null,
  dataArray: null,
  audioContextReady: false,
  energy: 0,
  selectedAlbum: albumData[0],
  artworkCache: new Map()
};

const qs = (selector, parent = document) => parent.querySelector(selector);
const qsa = (selector, parent = document) => [...parent.querySelectorAll(selector)];

const audio = qs('#audio');
const trackGrid = qs('#trackGrid');
const playBtn = qs('#playBtn');
const prevBtn = qs('#prevBtn');
const nextBtn = qs('#nextBtn');
const nowArt = qs('#nowArt');
const nowTitle = qs('#nowTitle');
const nowAlbum = qs('#nowAlbum');
const progress = qs('#progress');
const searchInput = qs('#searchInput');
const searchBtn = qs('#searchBtn');
const cursorGlow = qs('#cursorGlow');
const canvas = qs('#signalCanvas');
const ctx = canvas.getContext('2d');
const albumGrid = qs('#albumGrid');
const archiveWall = qs('#archiveWall');
const spotlightArt = qs('#spotlightArt');
const spotlightFallback = qs('#spotlightFallback');
const spotlightKicker = qs('#spotlightKicker');
const spotlightTitle = qs('#spotlightTitle');
const spotlightText = qs('#spotlightText');
const spotlightFacts = qs('#spotlightFacts');
const spotlightTags = qs('#spotlightTags');
const spotlightPreviewBtn = qs('#spotlightPreviewBtn');
const albumSpotlight = qs('#albumSpotlight');

const introLoader = qs('#introLoader');
const introAudio = qs('#introAudio');
const introEnter = qs('#introEnter');
const introProgress = qs('#introProgress');
const introStatus = qs('#introStatus');

function finishIntro() {
  if (!introLoader || document.body.classList.contains('intro-finished')) return;
  introProgress.style.width = '100%';
  introStatus.textContent = 'archive unlocked';
  document.body.classList.add('intro-finished');
  document.body.classList.remove('intro-active');
  setTimeout(() => introLoader.remove(), 1100);
}

function initIntroSequence() {
  if (!introLoader || !introAudio) return;

  const updateProgress = () => {
    if (introAudio.duration) {
      introProgress.style.width = `${Math.min(100, (introAudio.currentTime / introAudio.duration) * 100)}%`;
    }
  };

  introAudio.addEventListener('timeupdate', updateProgress);
  introAudio.addEventListener('ended', finishIntro);
  introAudio.addEventListener('error', () => {
    introStatus.textContent = 'intro audio unavailable — opening archive';
    setTimeout(finishIntro, 900);
  });

  const playIntro = async () => {
    introLoader.classList.remove('needs-click');
    introStatus.textContent = 'playing entry sequence…';
    introAudio.currentTime = 0;
    try {
      await introAudio.play();
    } catch (error) {
      introLoader.classList.add('needs-click');
      introStatus.textContent = 'click to play the entry sequence';
    }
  };

  introEnter.addEventListener('click', playIntro);
  window.setTimeout(playIntro, 360);
}

function initRevealAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  qsa('[data-reveal]').forEach((el, index) => {
    el.style.transitionDelay = `${Math.min(index * 35, 260)}ms`;
    observer.observe(el);
  });
}

function initCursorGlow() {
  const finePointer = window.matchMedia('(pointer: fine)').matches;
  if (!finePointer) return;

  window.addEventListener('pointermove', (event) => {
    cursorGlow.style.opacity = '1';
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
  });
}

function initTilt() {
  qsa('.tilt').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateX = ((y / rect.height) - 0.5) * -8;
      const rotateY = ((x / rect.width) - 0.5) * 8;
      card.style.transform = `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    card.addEventListener('pointerleave', () => {
      card.style.transform = 'perspective(1100px) rotateX(0deg) rotateY(0deg)';
    });
  });
}


function initPaletteCollage() {
  qsa('.palette-tile, .palette-feature, .palette-picture').forEach((tile) => {
    tile.addEventListener('pointermove', (event) => {
      const rect = tile.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      tile.style.setProperty('--mx', `${x}%`);
      tile.style.setProperty('--my', `${y}%`);
    });
  });
}

function normalize(value = '') {
  return value.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]/g, '');
}

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function safeArtwork(url, size = 900) {
  if (!url) return '';
  return url.replace(/100x100bb\.(jpg|png|webp)/, `${size}x${size}bb.$1`);
}

function renderAlbums() {
  albumGrid.innerHTML = albumData.map((album, index) => `
    <article class="album-card${index === 0 ? ' active' : ''}" data-album-card="${album.slug}" data-reveal>
      <button class="album-image-button" type="button" data-album-open="${album.slug}" aria-label="Open ${escapeHtml(album.title)} album biography">
        <div class="album-art" data-album-art="${album.slug}">
          <img src="" alt="Artwork for ${escapeHtml(album.title)}" loading="lazy">
          <span class="album-index">${String(index + 1).padStart(2, '0')}</span>
        </div>
      </button>
      <div class="album-content">
        <div class="album-meta-row"><span class="album-year">${album.year}</span><span>${escapeHtml(album.release)}</span></div>
        <h3>${escapeHtml(album.title)}</h3>
        <p class="album-summary">${escapeHtml(album.summary)}</p>
        <div class="album-mini-facts">
          <span><strong>Producer</strong>${escapeHtml(album.producer)}</span>
          <span><strong>Visual mood</strong>${escapeHtml(album.visual)}</span>
        </div>
        <div class="album-tags">
          ${album.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join('')}
        </div>
        <div class="album-actions">
          <button type="button" data-album-open="${album.slug}">Read biography</button>
          <button type="button" data-album-preview="${album.slug}">Previews</button>
        </div>
      </div>
    </article>
  `).join('');

  albumData.forEach((album) => setAlbumArtwork(album.slug, fallbackArtwork(album.slug)));

  bindAlbumButtons();

  qsa('.album-card').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mx', `${x}%`);
      card.style.setProperty('--my', `${y}%`);
    });
  });

  renderArchiveWall();
  selectAlbum(albumData[0].slug, false);
}

function bindAlbumButtons(parent = document) {
  qsa('[data-album-open]', parent).forEach((button) => {
    button.addEventListener('click', () => selectAlbum(button.dataset.albumOpen, true));
  });

  qsa('[data-album-preview]', parent).forEach((button) => {
    button.addEventListener('click', () => loadAlbumPreviews(button.dataset.albumPreview));
  });
}

function renderArchiveWall() {
  if (!archiveWall) return;
  archiveWall.innerHTML = albumData.map((album, index) => {
    const artworkUrl = state.artworkCache.get(album.slug) || fallbackArtwork(album.slug);
    return `
      <button class="wall-tile wall-tile-${index % 5}${artworkUrl ? ' loaded' : ''}" type="button" data-album-open="${album.slug}" aria-label="Open ${escapeHtml(album.title)}">
        ${artworkUrl ? `<img src="${artworkUrl}" alt="Artwork for ${escapeHtml(album.title)}" loading="lazy">` : '<span class="wall-fallback"></span>'}
        <span>${album.year}</span>
        <strong>${escapeHtml(album.title)}</strong>
      </button>
    `;
  }).join('');
  bindAlbumButtons(archiveWall);
}

function selectAlbum(slug, shouldScroll) {
  const album = albumData.find((item) => item.slug === slug) || albumData[0];
  state.selectedAlbum = album;

  qsa('[data-album-card]').forEach((card) => {
    card.classList.toggle('active', card.dataset.albumCard === album.slug);
  });
  qsa('.wall-tile').forEach((tile) => {
    tile.classList.toggle('active', tile.dataset.albumOpen === album.slug);
  });

  spotlightKicker.textContent = `${album.year} / ${album.title}`;
  spotlightTitle.textContent = album.subtitle;
  spotlightText.textContent = album.biography;
  spotlightFacts.innerHTML = `
    <div class="fact"><strong>Release</strong><span>${escapeHtml(album.release)}</span></div>
    <div class="fact"><strong>Producer</strong><span>${escapeHtml(album.producer)}</span></div>
    <div class="fact"><strong>Label</strong><span>${escapeHtml(album.label)}</span></div>
    <div class="fact"><strong>Role</strong><span>${escapeHtml(album.role)}</span></div>
    <div class="fact"><strong>Sound DNA</strong><span>${escapeHtml(album.sound)}</span></div>
    <div class="fact"><strong>Entry tracks</strong><span>${album.entry.map(escapeHtml).join(', ')}</span></div>
  `;
  spotlightTags.innerHTML = `
    ${album.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join('')}
    <span>${escapeHtml(album.visual)}</span>
    <span>${escapeHtml(album.legacy)}</span>
  `;
  spotlightPreviewBtn.dataset.albumPreview = album.slug;
  setSpotlightArtwork(album);

  albumSpotlight.animate([
    { opacity: 0.4, transform: 'translateY(12px) scale(0.99)' },
    { opacity: 1, transform: 'translateY(0) scale(1)' }
  ], { duration: 420, easing: 'cubic-bezier(.2,.7,.1,1)' });

  if (shouldScroll) {
    albumSpotlight.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function setAlbumArtwork(slug, artworkUrl) {
  const wrap = qs(`[data-album-art="${slug}"]`);
  const fallback = fallbackArtwork(slug);
  const resolvedArtwork = artworkUrl || fallback;

  qsa(`[data-palette-art="${slug}"]`).forEach((paletteImg) => {
    if (resolvedArtwork) paletteImg.src = resolvedArtwork;
  });

  if (!wrap || !resolvedArtwork) return;
  const img = qs('img', wrap);
  img.addEventListener('load', () => wrap.classList.add('loaded'), { once: true });
  img.addEventListener('error', () => {
    if (fallback && !img.src.endsWith(fallback)) {
      img.src = fallback;
    } else {
      wrap.classList.remove('loaded');
    }
  }, { once: true });
  img.src = resolvedArtwork;
}

function setSpotlightArtwork(album) {
  const fallback = fallbackArtwork(album.slug);
  const artworkUrl = state.artworkCache.get(album.slug) || fallback;
  const wrap = albumSpotlight.querySelector('.spotlight-art-wrap');
  spotlightArt.alt = artworkUrl ? `Artwork for ${album.title}` : '';
  spotlightArt.addEventListener('load', () => wrap.classList.add('loaded'), { once: true });
  spotlightArt.addEventListener('error', () => {
    if (fallback && !spotlightArt.src.endsWith(fallback)) {
      spotlightArt.src = fallback;
    } else {
      wrap.classList.remove('loaded');
      spotlightFallback.hidden = false;
    }
  }, { once: true });
  spotlightArt.src = artworkUrl || '';
  wrap.classList.toggle('loaded', Boolean(artworkUrl));
  spotlightFallback.hidden = Boolean(artworkUrl);
}

async function fetchAlbumArtwork(album) {
  if (state.artworkCache.has(album.slug)) return state.artworkCache.get(album.slug);

  const params = new URLSearchParams({
    term: `Radiohead ${album.title}`,
    media: 'music',
    entity: 'album',
    limit: '15',
    country: 'US'
  });

  try {
    const response = await fetch(`${API_BASE}?${params}`);
    if (!response.ok) throw new Error(`API returned ${response.status}`);
    const data = await response.json();
    const target = normalize(album.title);
    const match = (data.results || [])
      .filter((item) => item.artistName && item.artistName.toLowerCase() === 'radiohead')
      .find((item) => normalize(item.collectionName).includes(target));

    const artworkUrl = safeArtwork(match?.artworkUrl100, 900) || fallbackArtwork(album.slug);
    state.artworkCache.set(album.slug, artworkUrl);
    return artworkUrl;
  } catch (error) {
    console.info(`Artwork fallback active for ${album.title}:`, error.message);
    const artworkUrl = fallbackArtwork(album.slug);
    state.artworkCache.set(album.slug, artworkUrl);
    return artworkUrl;
  }
}

async function hydrateAlbumArtworks() {
  await Promise.all(albumData.map(async (album) => {
    const artworkUrl = await fetchAlbumArtwork(album);
    setAlbumArtwork(album.slug, artworkUrl);
    if (state.selectedAlbum.slug === album.slug) setSpotlightArtwork(album);
  }));
  renderArchiveWall();
  selectAlbum(state.selectedAlbum.slug, false);
}

function loadAlbumPreviews(slug) {
  const album = albumData.find((item) => item.slug === slug) || state.selectedAlbum;
  searchInput.value = album.title;
  fetchTracks(`Radiohead ${album.title}`);
  qs('#listen').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function formatAlbum(track) {
  const year = track.releaseDate ? new Date(track.releaseDate).getFullYear() : 'Unknown year';
  return `${track.collectionName || 'Radiohead'} · ${year}`;
}

async function fetchTracks(term = DEFAULT_QUERY) {
  trackGrid.innerHTML = '<div class="loader">Loading official preview snippets…</div>';
  const params = new URLSearchParams({
    term,
    media: 'music',
    entity: 'song',
    limit: '36',
    country: 'US'
  });

  try {
    const response = await fetch(`${API_BASE}?${params}`);
    if (!response.ok) throw new Error(`API returned ${response.status}`);
    const data = await response.json();
    const radioheadTracks = (data.results || [])
      .filter((track) => track.artistName && track.artistName.toLowerCase() === 'radiohead')
      .filter((track) => Boolean(track.previewUrl))
      .sort((a, b) => {
        const aDate = a.releaseDate ? Date.parse(a.releaseDate) : 0;
        const bDate = b.releaseDate ? Date.parse(b.releaseDate) : 0;
        return aDate - bDate || (a.trackName || '').localeCompare(b.trackName || '');
      });

    state.tracks = radioheadTracks;
    renderTracks();

    if (state.tracks.length) {
      selectTrack(0, false);
    } else {
      trackGrid.innerHTML = '<div class="error">No preview clips found for this search. Try a different Radiohead title or album.</div>';
    }
  } catch (error) {
    console.error(error);
    trackGrid.innerHTML = '<div class="error">The preview API could not be reached. Open this page with an internet connection and try again.</div>';
  }
}

function renderTracks() {
  if (!state.tracks.length) return;

  trackGrid.innerHTML = state.tracks.map((track, index) => `
    <article class="track-card" data-index="${index}">
      <img src="${safeArtwork(track.artworkUrl100, 600)}" alt="Artwork for ${escapeHtml(track.collectionName || track.trackName)}" loading="lazy">
      <div class="track-meta">
        <h3>${escapeHtml(track.trackName)}</h3>
        <p>${escapeHtml(formatAlbum(track))}</p>
        <button type="button" data-play-index="${index}">Preview</button>
      </div>
    </article>
  `).join('');

  qsa('[data-play-index]').forEach((button) => {
    button.addEventListener('click', () => {
      const index = Number(button.dataset.playIndex);
      if (state.currentIndex === index && state.isPlaying) {
        pauseTrack();
      } else {
        selectTrack(index, true);
      }
    });
  });
}

function selectTrack(index, shouldPlay) {
  const track = state.tracks[index];
  if (!track) return;

  state.currentIndex = index;
  audio.src = track.previewUrl;
  audio.load();
  nowArt.src = safeArtwork(track.artworkUrl100, 600);
  nowArt.alt = `Artwork for ${track.collectionName || track.trackName}`;
  nowTitle.textContent = track.trackName;
  nowAlbum.textContent = formatAlbum(track);
  updateActiveCard();
  progress.style.width = '0%';

  if (shouldPlay) playTrack();
  else playBtn.textContent = 'Play';
}

async function playTrack() {
  if (state.currentIndex < 0 && state.tracks.length) selectTrack(0, false);
  try {
    await audio.play();
    state.isPlaying = true;
    playBtn.textContent = 'Pause';
    setupAudioAnalyser();
    updateActiveCard();
  } catch (error) {
    console.error(error);
    playBtn.textContent = 'Play';
  }
}

function pauseTrack() {
  audio.pause();
  state.isPlaying = false;
  playBtn.textContent = 'Play';
  updateActiveCard();
}

function nextTrack() {
  if (!state.tracks.length) return;
  selectTrack((state.currentIndex + 1 + state.tracks.length) % state.tracks.length, true);
}

function prevTrack() {
  if (!state.tracks.length) return;
  selectTrack((state.currentIndex - 1 + state.tracks.length) % state.tracks.length, true);
}

function updateActiveCard() {
  qsa('.track-card').forEach((card) => {
    card.classList.toggle('active', Number(card.dataset.index) === state.currentIndex && state.isPlaying);
  });
}

function setupAudioAnalyser() {
  if (state.audioContextReady) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();
    const source = audioContext.createMediaElementSource(audio);
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 128;
    source.connect(analyser);
    analyser.connect(audioContext.destination);
    state.analyser = analyser;
    state.dataArray = new Uint8Array(analyser.frequencyBinCount);
    state.audioContextReady = true;
  } catch (error) {
    console.info('Audio visualizer fallback active:', error.message);
  }
}

function updateProgress() {
  if (audio.duration) {
    progress.style.width = `${(audio.currentTime / audio.duration) * 100}%`;
  }
}

function initPlayer() {
  playBtn.addEventListener('click', () => {
    state.isPlaying ? pauseTrack() : playTrack();
  });
  nextBtn.addEventListener('click', nextTrack);
  prevBtn.addEventListener('click', prevTrack);
  audio.addEventListener('timeupdate', updateProgress);
  audio.addEventListener('ended', nextTrack);
  audio.addEventListener('pause', () => {
    state.isPlaying = false;
    playBtn.textContent = 'Play';
    updateActiveCard();
  });
  audio.addEventListener('play', () => {
    state.isPlaying = true;
    playBtn.textContent = 'Pause';
    updateActiveCard();
  });
  spotlightPreviewBtn.addEventListener('click', () => loadAlbumPreviews(spotlightPreviewBtn.dataset.albumPreview));
}

function initSearch() {
  const runSearch = () => {
    const value = searchInput.value.trim();
    const query = value ? `Radiohead ${value}` : DEFAULT_QUERY;
    fetchTracks(query);
  };
  searchBtn.addEventListener('click', runSearch);
  searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') runSearch();
  });
}

function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.floor(rect.width * dpr);
  canvas.height = Math.floor(rect.height * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function drawSignal(time = 0) {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  ctx.clearRect(0, 0, width, height);

  if (state.analyser && state.dataArray) {
    state.analyser.getByteFrequencyData(state.dataArray);
    const sum = state.dataArray.reduce((acc, value) => acc + value, 0);
    state.energy = sum / state.dataArray.length / 255;
  } else {
    state.energy = 0.18 + Math.sin(time * 0.001) * 0.06;
  }

  const lines = 17;
  for (let line = 0; line < lines; line++) {
    const yBase = (height / (lines + 1)) * (line + 1);
    const amp = 12 + state.energy * 70 + line * 0.35;
    const hueShift = line / lines;
    ctx.beginPath();
    for (let x = 0; x <= width; x += 8) {
      const phase = time * 0.0014 + line * 0.6;
      const wave = Math.sin(x * 0.012 + phase) * amp + Math.sin(x * 0.035 - phase * 1.5) * amp * 0.22;
      const glitch = Math.random() > 0.992 ? (Math.random() - 0.5) * 58 : 0;
      const y = yBase + wave + glitch;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    const gradient = ctx.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop(0, `rgba(146, 241, 255, ${0.08 + hueShift * 0.10})`);
    gradient.addColorStop(0.5, `rgba(200, 255, 82, ${0.14 + state.energy * 0.25})`);
    gradient.addColorStop(1, `rgba(255, 105, 120, ${0.07 + hueShift * 0.11})`);
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 1.2 + state.energy * 2.3;
    ctx.stroke();
  }

  ctx.fillStyle = `rgba(244, 241, 232, ${0.015 + state.energy * 0.03})`;
  for (let i = 0; i < 80; i++) {
    ctx.fillRect(Math.random() * width, Math.random() * height, Math.random() * 2.2, Math.random() * 2.2);
  }

  requestAnimationFrame(drawSignal);
}

window.addEventListener('resize', resizeCanvas);

document.addEventListener('DOMContentLoaded', () => {
  initIntroSequence();
  renderAlbums();
  initRevealAnimations();
  initCursorGlow();
  initTilt();
  initPaletteCollage();
  initPlayer();
  initSearch();
  resizeCanvas();
  drawSignal();
  hydrateAlbumArtworks();
  fetchTracks();
});
