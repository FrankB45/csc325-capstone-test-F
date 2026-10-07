# Test repo C — TrailSupply

A passive five-page outdoor catalog with major palette and layout milestones, exact reversions, and controlled missing-page cases.

**Expected result: Accept · exactly at the history limit.**

Exactly **50 commits** on main. Commit numbers are oldest first.
Synthetic history for Git Gallery testing; all content is fictional.

## Scenarios

### 50-commit boundary

Page: `index.html`. Versions: 1, 6, 11, 17, 22, 28, 33, 39, 44, 50.

Compatibility passes at exactly 50 default-branch commits. No more than 10 versions can be captured in one analysis. The homepage is present and usable in every commit.

### Partial capture failure

Page: `help.html`. Versions: 31, 32, 33, 34.

31 and 34 succeed; 32 and 33 fail because help.html is absent. Overall status is Partially Complete, with successful screenshots retained and failed entries identified.

### All selected captures fail

Page: `help.html`. Versions: 1, 10, 20, 32, 33.

All five captures fail for a missing target page. Overall status is Failed. No screenshot from another page or commit is substituted.

### Crowded cards and recovery

Page: `catalog.html`. Versions: 36, 37, 38.

All captures succeed. 37 crowds the cards; 38 restores the appearance of 36. Compare 36/37 for a visible difference and 36/38 for no difference.

### Nonvisual changes

Page: `index.html`. Versions: 40, 41, 42, 43.

All initial screenshots show the same page. Documentation, landmark labels, and CSS comments must not be invented as visual changes.

### Palette experiment reverted

Page: `index.html`. Versions: 45, 46, 47.

46 changes the palette. 47 restores 45's appearance. 45/46 differ; 45/47 match.

### Static catalog navigation

Page: `catalog.html`. Versions: 50.

The catalog renders six products. The Ridge Daypack details link opens product.html and the Field guide link opens help.html. There is no scripted search, sorting, cart, purchase, or backend.

## Fixture rules

- catalog.html starts at 6, product.html at 17, about.html at 21, and help.html at 27.
- help.html is removed at 32, remains absent at 33, and returns at 34.
- Use F as the matched rejection case: its first 50 commits are exactly this history.
- Every historical page fits the current passive HTML/CSS/PNG profile. Large visual redesigns are intentional synthetic test data; only the documented identical pairs should stay unchanged.

## Preview

Run `python3 -m http.server 8000` and open http://127.0.0.1:8000/index.html.
Only native HTML, flat CSS, system fonts, and local PNG artwork are used. No install, build step, script, external service, or backend is required.

Do not append commits: counts are part of the fixtures. The 2026-11-10 refresh intentionally replaced historical SHAs; refresh previously cached Git Gallery selections.
Queue completion, partial completion, and timeline behavior are acceptance expectations; local fixture verification alone is not a live database/worker test.
README text supplies expected answers; use screenshots and source diffs when judging AI claims.
