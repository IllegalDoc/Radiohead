# Radiohead Fan Experience

A premium animated static fan site built with HTML, CSS, and vanilla JavaScript.

## What changed in this version

- The navbar no longer uses the text-only `RH` mark. It now uses a Radiohead band image.
- The former “Selected Eras” area is now an expanded album biography archive.
- Every Radiohead studio album has a longer biography, release context, production notes, visual mood, legacy note, and entry tracks.
- A larger visual album wall was added so the discography section contains more imagery.
- Album artwork and 30-second song previews are loaded live from Apple/iTunes Search API at runtime.

## How to run

Open `index.html` directly, or run a local server from this folder:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Notes

This is an unofficial fan project. It does not host or redistribute full songs. Music previews and album artwork are requested from Apple/iTunes at runtime.

The Radiohead band image used in the navbar and album archive intro is from Wikimedia Commons: `File:Radiohead.jpg`, licensed CC BY-SA 2.5.


## Latest visual update

- Added a Radiohead logo loading/entry sequence using the supplied short audio file.
- Browser autoplay rules may require clicking **Enter the archive**; the overlay closes only after the intro audio finishes.
- Rebuilt the hero and palette sections with more image-heavy, animated visuals.


## Palette section update
The palette section now uses five local non-album mood visuals in `assets/mood-*.svg` instead of album artwork, making it lighter and less buggy.
