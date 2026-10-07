# Test repo C — TrailSupply

The largest supported fixture, with a searchable catalog, secondary pages, subtle changes, reversions, and controlled missing-page cases.

**Expected compatibility result: Accept · exactly at the history limit.**

- Default-branch commits: **50**.
- Commit numbers below are **oldest first**, starting at 1.
- This is a synthetic Git Gallery fixture, not an organic production history.
- Expected outcomes below describe the application requirements, not a claim that Git Gallery integration tests have passed.

## Pages at the latest commit

`index.html`, `catalog.html`, `product.html`, `about.html`, `help.html`

## Test cases and expected results

### 50-commit boundary

**Target page:** `index.html`  
**Commit numbers:** 1, 6, 11, 17, 22, 28, 33, 39, 44, 50.

Compatibility passes at exactly 50 default-branch commits. No more than 10 versions can be captured in one analysis. The homepage is present and usable in every commit.

### Partial capture failure

**Target page:** `help.html`  
**Commit numbers:** 31, 32, 33, 34.

31 and 34 succeed; 32 and 33 fail because help.html is absent. Overall status is Partially Complete, with successful screenshots retained and failed entries identified.

### All selected captures fail

**Target page:** `help.html`  
**Commit numbers:** 1, 10, 20, 32, 33.

All five captures fail for a missing target page. Overall status is Failed. No screenshot from another page or commit is substituted.

### Crowded cards and recovery

**Target page:** `catalog.html`  
**Commit numbers:** 36, 37, 38.

All captures succeed. 37 crowds the cards; 38 restores the appearance of 36. Compare 36/37 for a visible difference and 36/38 for no difference.

### Nonvisual changes

**Target page:** `index.html`  
**Commit numbers:** 40, 41, 42, 43.

All initial screenshots show the same page. Documentation, landmark labels, and CSS comments must not be invented as visual changes.

### Palette experiment reverted

**Target page:** `index.html`  
**Commit numbers:** 45, 46, 47.

46 changes the palette. 47 restores 45's appearance. 45/46 differ; 45/47 match.

### Interactive catalog

**Target page:** `catalog.html`  
**Commit numbers:** 50.

In the live preview, search, category filtering, price sorting, empty results, and add-to-bag work. The bag is deliberately in-page only and resets on navigation. Screenshots alone do not prove these interactions.

## Important fixture rules

- catalog.html starts at 6, product.html at 17, about.html at 21, and help.html at 27.
- help.html is removed at 32, remains absent at 33, and returns at 34.
- Use F as the matched rejection case: its first 50 commits are exactly this history.

## Local preview

Serve this directory with `python3 -m http.server 8000`, then open http://localhost:8000. The site uses only local HTML, CSS, JavaScript, and original SVG assets. No build step, API, external font, account, or secret is needed.

## Preserve the test

Do not append setup or documentation commits casually: the default-branch count is part of this test. Count with `git rev-list --count main`. List the history oldest first with `git log --reverse --format="%h %s" main`.

The README contains test guidance and expected answers. AI evaluation using this repo is therefore not a blind benchmark; judge visual claims against screenshots and website changes, not this document alone.
