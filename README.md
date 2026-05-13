# APT Strength Tracker

A static web app for a 12-week, 3-day-per-week strength program with anterior pelvic tilt correction built into the training flow.

## Run locally

```bash
python3 -m http.server 8080 --directory .
```

Open `http://localhost:8080`.

You can also open `index.html` directly in a browser.

## Publish on GitHub Pages

```bash
git init -b main
git add .
git commit -m "Add APT Strength Tracker"
gh repo create apt-strength-tracker --public --source=. --push
```

Then enable GitHub Pages from the repository settings:

- Source: deploy from a branch
- Branch: `main`
- Folder: `/root`

## What it includes

- 12-week progression
- 3 total-body sessions per week
- APT warmup reset for every session
- Progressive loading suggestions from prior logged sets
- Body weight, APT score, and note tracking
- JSON backup/import
- CSV workout export
- Browser `localStorage` persistence

## Program blocks

- Weeks 1-3: base hypertrophy
- Week 4: deload
- Weeks 5-7: strength bias
- Week 8: deload
- Weeks 9-11: intensification
- Week 12: audit week

