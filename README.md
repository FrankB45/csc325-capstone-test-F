# Test repo F — Over-limit TrailSupply

A matched copy of C with one extra documentation commit. The website itself remains valid.

**Expected compatibility result: Reject · exceeds 50 commits.**

- Default-branch commits: **51**.
- Commit numbers below are **oldest first**, starting at 1.
- This is a synthetic Git Gallery fixture, not an organic production history.
- Expected outcomes below describe the application requirements, not a claim that Git Gallery integration tests have passed.

## Pages at the latest commit

`index.html`, `catalog.html`, `product.html`, `about.html`, `help.html`

## Test cases and expected results

### One commit over the limit

**Target page:** `index.html`  
**Commit numbers:** 51.

Reject compatibility with a message stating the 50-commit limit. Do not proceed to page/commit selection or capture, even though the website renders.

### Matched boundary control

**Target page:** `index.html`  
**Commit numbers:** 50, 51.

C is accepted at 50; F is rejected at 51. F's first 50 commit SHAs match C. Commit 51 changes only README.md; website files and appearance are unchanged.

## Important fixture rules

- This explorer can render F for inspection; Git Gallery is expected to reject it before capture.
- A branch or tag with fewer commits is not a substitute for this default-branch boundary test.
- Previously saved analyses must remain accessible when a new compatibility check is rejected.

## Local preview

Serve this directory with `python3 -m http.server 8000`, then open http://localhost:8000. The site uses only local HTML, CSS, JavaScript, and original SVG assets. No build step, API, external font, account, or secret is needed.

## Preserve the test

Do not append setup or documentation commits casually: the default-branch count is part of this test. Count with `git rev-list --count main`. List the history oldest first with `git log --reverse --format="%h %s" main`.

The README contains test guidance and expected answers. AI evaluation using this repo is therefore not a blind benchmark; judge visual claims against screenshots and website changes, not this document alone.
