---
name: Grepfox
description: A quiet personal column for an Android ROM maintainer: type, space and precise hover states.
colors:
  paper: "#fbfbfa"
  paper-hover: "#f2f2ef"
  paper-code: "#f3f3f0"
  ink: "#1b1b19"
  ink-secondary: "#5c5b57"
  ink-tertiary: "#72716c"
  hairline: "#e7e6e2"
  teal: "#157a68"
  caution-wash: "#fbf3e4"
  caution-ink: "#6b4a12"
  night: "#111110"
  night-hover: "#1b1b1a"
  night-code: "#191918"
  night-ink: "#ededeb"
  night-ink-secondary: "#a3a29e"
  night-ink-tertiary: "#8d8c87"
  night-hairline: "#262624"
  night-teal: "#6fd0b8"
  night-caution-wash: "#221c12"
  night-caution-ink: "#e3c48c"
typography:
  display:
    fontFamily: "Geist, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.625rem, 4vw, 2rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Geist, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Geist, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "\"ss01\", \"cv11\""
  label:
    fontFamily: "Geist, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  meta:
    fontFamily: "'Geist Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.6
  code:
    fontFamily: "'Geist Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.75
rounded:
  focus: "4px"
  inline-code: "5px"
  sm: "6px"
  md: "8px"
  lg: "10px"
  xl: "12px"
  pill: "999px"
spacing:
  gutter: "1.5rem"
  row-y: "0.7rem"
  row-x: "0.75rem"
  row-gap: "1rem"
  heading-gap: "1rem"
  section: "3.5rem"
  column-home: "36rem"
  column-read: "42rem"
components:
  row:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "0.7rem 0.75rem"
  row-hover:
    backgroundColor: "{colors.paper-hover}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink-secondary}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0.3rem 0.6rem"
  nav-link-hover:
    backgroundColor: "{colors.paper-hover}"
    textColor: "{colors.ink}"
  theme-toggle:
    backgroundColor: "transparent"
    textColor: "{colors.ink-secondary}"
    rounded: "{rounded.sm}"
    size: "2rem"
  copy-button:
    backgroundColor: "transparent"
    textColor: "{colors.ink-tertiary}"
    rounded: "{rounded.sm}"
    padding: "0.2rem 0.5rem"
  copy-button-done:
    textColor: "{colors.teal}"
  device-row:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "0.75rem"
  device-row-hover:
    backgroundColor: "{colors.paper-hover}"
  badge:
    backgroundColor: "transparent"
    textColor: "{colors.ink-secondary}"
    rounded: "{rounded.pill}"
    padding: "0.25rem 0.45rem"
  code-block:
    backgroundColor: "{colors.paper-code}"
    textColor: "{colors.ink}"
    typography: "{typography.code}"
    rounded: "{rounded.lg}"
    padding: "0.85rem 3.5rem 0.85rem 1rem"
  note:
    backgroundColor: "{colors.caution-wash}"
    textColor: "{colors.caution-ink}"
    rounded: "{rounded.lg}"
    padding: "1rem 1.1rem"
---

# Design System: Grepfox

## Overview

**Creative North Star: "The Quiet Column"**

One narrow, left-aligned column of type on warm off-white paper (or warm near-black at night), in the manner of a well-made developer homepage. The site does not dress up as a terminal or a ROM portal: no neon, no card grids, no device hero on the home page. Identity is carried by Geist set small and close, generous vertical space, and a handful of hover states tuned precisely (a soft fill, an arrow that nudges up-right, an underline that turns teal).

Density is low and reading-first. The home column is 36rem and starts roughly a fifth of the way down the viewport; inner pages widen to a 42rem reading column with a small top bar. Content is organised as rows (label / value / action), hairline-ruled lists (specs, FAQ) and numbered steps joined by a thin rail. Both themes are first-class; they follow the OS by default and persist a manual choice.

Motion is one gesture: on the home page the lines settle into place on load (6px rise, 4px blur clearing, 70ms stagger, expo ease-out), and a theme switch crossfades through a View Transition. Both are off under reduced motion.

**Key Characteristics:**
- Left-aligned single column, 36rem (home) / 42rem (reading).
- Warm neutral grounds and ink ramp; one teal accent used only for state.
- Geist for everything readable, Geist Mono for codenames, metadata and commands.
- Rows with soft hover fills instead of cards; hairline rules instead of boxes.
- Flat surfaces; the only shadow sits under raster imagery.

## Colors

A warm, nearly achromatic paper-and-ink palette in two themes, with a single teal that appears only when something is in a state.

### Primary
- **Signal Teal** (light `teal`, dark `night-teal`): reserved for state: the focus ring (2px outline, 3px offset), text selection (28% mix over the ground), a prose link's underline on hover, and the "Copied" confirmation on copy buttons. Never a fill, never a heading colour, never at rest.

### Neutral
- **Warm Paper / Night** (`paper`, `night`): page ground. Also the browser `theme-color`.
- **Hover Wash** (`paper-hover`, `night-hover`): the soft fill behind rows, device rows, nav links and the theme toggle on hover. This fill is the system's main interaction signal.
- **Code Stock** (`paper-code`, `night-code`): code blocks, inline code and the placeholder behind device thumbnails.
- **Ink** (`ink`, `night-ink`): headings, row values, strong text, code.
- **Secondary Ink** (`ink-secondary`, `night-ink-secondary`): bios, page intros, prose paragraphs and list items, nav links at rest, badge text.
- **Tertiary Ink** (`ink-tertiary`, `night-ink-tertiary`): row labels, spec terms, metadata, figure captions, footer, arrows at rest, list markers.
- **Hairline** (`hairline`, `night-hairline`): 1px rules on specs and FAQ, code and badge borders, step circles and rail, prose link underline at rest, scrollbar.

### Tertiary
- **Caution Wash / Caution Ink** (`caution-wash` + `caution-ink`, night pair): the only tinted surface, used for the signing/safety note. A functional warning colour, not a second accent.

### Named Rules
**The State-Only Accent Rule.** Teal marks focus, selection, hover-underline and copy success. If it is visible on a page at rest, it is misplaced.

**The Warm Neutral Rule.** Grounds and inks are warm greys (slight yellow-brown cast). Do not introduce cool zinc/slate greys or pure #000/#fff.

## Typography

**Display Font:** Geist (with ui-sans-serif, system-ui, -apple-system, Segoe UI fallback)
**Body Font:** Geist
**Label/Mono Font:** Geist Mono (with ui-monospace, SFMono-Regular, Menlo, Consolas fallback)

**Character:** One family at small sizes and only three weights (400, 500, 600). Hierarchy comes from weight, colour step and space far more than from size; Geist Mono marks anything a user would type or match against a device (codenames, Android versions, commands). Stylistic sets `ss01` and `cv11` are on site-wide.

### Hierarchy
- **Display** (600, clamp(1.625rem, 4vw, 2rem), 1.2, -0.025em, balanced wrap): inner page titles only.
- **Title** (600, 1.0625rem, -0.01em): the name on the home page and redirect pages; the home page deliberately has no large headline.
- **Headline** (600, 1rem, -0.01em): section headings, FAQ questions, step titles. Same size as body; weight alone separates it.
- **Body** (400, 1rem, 1.6): prose, row values. Page intros cap at 34rem.
- **Label** (400, 0.9375rem): row keys, spec terms, nav links, notes. Small print below it: 0.875rem (captions, footer, device links), 0.8125rem (copy button, mobile row keys), 0.75rem/500 (badges).
- **Meta / Code** (Geist Mono 400, 0.8125rem; code at 1.75 line height): page metadata line, device codename lines, code blocks. Inline code is 0.875em on a code-stock chip.

### Named Rules
**The Small Voice Rule.** Nothing on the site exceeds 2rem. Emphasis is a weight step (to 600) or a colour step (tertiary → ink), not a size jump.

**The Mono Means Literal Rule.** Geist Mono is for literal strings: codenames, versions, commands, step numbers. Never for decoration or headings.

## Layout

A single centred container holding a left-aligned column, with a 1.5rem side gutter. Home and redirect pages use the 36rem column with top padding of clamp(4.5rem, 20vh, 11rem); inner pages use the 42rem reading column under a top bar (brand left, nav and theme toggle right, 1.75rem from the top). Page heads open with clamp(3.5rem, 10vh, 6rem) above and 2.5rem below; sections are spaced 3.5rem apart with 1rem under their headings. The footer sits 4rem below content.

Rows and device rows bleed 0.75rem past the column edge on each side so that their hover fill aligns their text with the column. Rows are a three-track grid (7rem label / flexible value / auto action, 1rem gap); spec lists use a 9rem / flexible grid. Steps hang a 2.75rem left indent for the numbered circle and rail.

At 34rem and below, rows restack to label-over-value with the action spanning both lines on the right, spec rows collapse to one column, device link labels hide leaving the arrow, and nav links tighten.

## Elevation & Depth

Flat. Surfaces sit on the page ground; depth is expressed by tonal steps (hover wash, code stock) and 1px hairlines, never by lifting UI chrome.

### Shadow Vocabulary
- **Image lift** (light `0 1px 2px rgba(20,20,18,.06), 0 8px 24px -12px rgba(20,20,18,.12)`; dark `0 1px 2px rgba(0,0,0,.4), 0 8px 24px -12px rgba(0,0,0,.6)`): only under raster imagery (device thumbnails, article figures), so photographs read as objects on the page.

### Named Rules
**The Images-Only Shadow Rule.** Shadows belong to photographs. Rows, buttons, code blocks and notes stay flat.

## Shapes

Soft, small radii that grow with element size: 4px on the focus ring, 5px on inline code, 6px on nav links, the theme toggle and copy buttons, 8px on rows and device thumbnails, 10px on device rows, code blocks and notes, 12px on article figures. Pills (999px) only for badges and step-number circles. Borders are 1px hairlines; there are no heavy outlines or offset shapes. Icons are hand-set inline SVG on a 16px grid, 1.6 stroke with round caps and joins, sized at 1em and inheriting text colour.

## Components

### Rows (signature)
The system's core unit: label / value / action on one line.
- **Shape:** gently rounded (`rounded.md`), bleeding 0.75rem beyond the column.
- **Rest:** transparent; label in tertiary ink at label size, value in ink, action (arrow or copy button) in tertiary ink.
- **Hover:** hover-wash fill fades in (0.2s); the arrow turns ink and nudges 2px up-right (0.3s, expo ease-out). The whole row is the hit area via the value link's stretched overlay.
- **Arrows:** up-right diagonal for external destinations, straight right arrow for on-site destinations.

### Copy Button
- **Style:** quiet text button (0.8125rem, tertiary ink, `rounded.sm`) with a clipboard icon; a transparent 1px border that appears (hairline, on page ground) when its row is hovered or it is focused.
- **Done:** switches to a check icon and Signal Teal, label reads "Copied" for 1.6s.
- **In code blocks:** icon-only, pinned top-right inside the block on the code-stock ground.

### Navigation
- **Top bar (inner pages):** brand name (600, -0.01em) left; nav links (label size, secondary ink, 0.3rem 0.6rem padding, `rounded.sm`) and theme toggle right. Hover turns ink on the hover wash; the current section is marked by ink colour only.
- **Home foot:** the same link treatment, Releases · FAQ left and the theme toggle pushed to the far right.
- **Theme toggle:** 2rem square icon button, moon in light theme, sun in dark; labelled with the theme it switches to.

### Device Rows
- **Structure:** 3rem-wide thumbnail (5.4rem tall, `rounded.md`, image lift shadow) / name with status badge and mono codename line / destination label with arrow.
- **Hover:** hover-wash fill on `rounded.lg`; the destination label turns ink.

### Badge
- **Style:** pill, 1px hairline border, 0.75rem/500 secondary ink, no fill. Used for build status (Official / Unofficial).

### Code Block
- **Style:** code-stock ground, 1px hairline, `rounded.lg`, Geist Mono 0.8125rem at 1.75 line height, horizontal scroll, right padding reserved for the copy button.

### Lists: Specs, FAQ, Steps
- **Specs:** term / value grid separated by hairlines top and bottom; values use tabular numerals.
- **FAQ:** questions as headlines in hairline-ruled blocks (1.5rem vertical padding).
- **Steps:** mono step number in a 1.65rem hairline circle, joined to the next step by a 1px hairline rail.

### Note
- **Style:** caution wash with caution ink, `rounded.lg`, 1rem 1.1rem padding, a warning-triangle icon leading. Reserved for safety guidance (signing, unofficial mirrors).

### Prose Links
- **Rest:** ink text with a 1.5px hairline underline, 3px offset.
- **Hover:** underline turns Signal Teal (0.2s).

## Do's and Don'ts

### Do:
- **Do** keep every page to one left-aligned column: 36rem for home and redirects, 42rem for reading.
- **Do** present links and contact channels as rows (label / value / action) with the hover-wash fill and nudging arrow.
- **Do** use Signal Teal only for focus (2px outline, 3px offset), selection, prose-link underline on hover and copy success.
- **Do** set codenames, versions, metadata and commands in Geist Mono at 0.8125rem.
- **Do** separate list items with 1px hairlines rather than boxes.
- **Do** ship both themes from the same token set, and gate the load-in rise and theme crossfade behind `prefers-reduced-motion: no-preference`.

### Don't:
- **Don't** use terminal costume, neon colour or card grids, and don't put a device hero on the home page.
- **Don't** put teal on anything at rest: no teal fills, headings, icons or borders.
- **Don't** set type above 2rem or add weights beyond 400 / 500 / 600.
- **Don't** add shadows to UI chrome; shadows sit only under photographs.
- **Don't** add motion beyond the home load-in and the theme crossfade.
- **Don't** introduce cool greys or pure black/white grounds.
