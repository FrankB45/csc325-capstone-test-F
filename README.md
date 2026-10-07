# Test repo F — Over-limit TrailSupply

A matched copy of C with one extra documentation commit. The website itself remains valid.

**Expected result: Reject · exceeds 50 commits.**

Exactly **51 commits** on main. Commit numbers are oldest first.
Synthetic history for Git Gallery testing; all content is fictional.

## Scenarios

### One commit over the limit

Page: `index.html`. Versions: 51.

Reject compatibility with a message stating the 50-commit limit. Do not proceed to page/commit selection or capture, even though the website renders.

### Matched boundary control

Page: `index.html`. Versions: 50, 51.

C is accepted at 50; F is rejected at 51. F's first 50 commit SHAs match C. Commit 51 changes only README.md; website files and appearance are unchanged.

## Fixture rules

- This explorer can render F for inspection; Git Gallery is expected to reject it before capture.
- A branch or tag with fewer commits is not a substitute for this default-branch boundary test.
- Previously saved analyses must remain accessible when a new compatibility check is rejected.
- Every historical page fits the current passive HTML/CSS/PNG profile. Large visual redesigns are intentional synthetic test data; only the documented identical pairs should stay unchanged.

## Preview

Run `python3 -m http.server 8000` and open http://127.0.0.1:8000/index.html.
Only native HTML, flat CSS, system fonts, and local PNG artwork are used. No install, build step, script, external service, or backend is required.

Do not append commits: counts are part of the fixtures. The 2026-11-10 refresh intentionally replaced historical SHAs; refresh previously cached Git Gallery selections.
Queue completion, partial completion, and timeline behavior are acceptance expectations; local fixture verification alone is not a live database/worker test.
README text supplies expected answers; use screenshots and source diffs when judging AI claims.
