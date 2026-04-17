# CarbonLens Work Done Tracker

This document tracks the cleaned and current project direction.

## Completed

- Finalized product identity as a smart ESG control tower for manufacturing SMEs
- Locked the product positioning to operations and governance first
- Kept AI as a supporting layer rather than the system core
- Restricted Scope 3 to a limited and realistic MVP
- Created and aligned the main project docs around CarbonLens
- Cleaned conflicting documentation that had pushed OCR-heavy and oversized MVP scope
- Updated README, idea, CRD, PRD, architecture, task plan, and pitch notes for one consistent story
- Set up the frontend application shell with React, Vite, TypeScript, Tailwind, and routing
- Built the internal settings workflow for organization and facility master data
- Added form validation patterns with `react-hook-form` and Zod for Harsh phase 1 scope
- Built the isolated public supplier submission portal for Harsh phase 2 scope
- Added repeatable metric entry, evidence file attachments, submit states, and unauthenticated supplier API posting

## Current Status

- Documentation is mostly aligned
- Product direction is stable
- Frontend implementation has started and Harsh phase 1 and phase 2 UI work are present

## Removed or Simplified

- OCR-first ingestion assumptions from MVP scope
- Massive Scope 3 expectations from early planning
- Overly enterprise-heavy branch/task structure
- Duplicate README variants not needed for the project

## Next Recommended Work

1. Reconcile older docs with the current supplier submission endpoint contract
2. Connect and verify the backend supplier submission endpoint end-to-end
3. Seed demo data
4. Build remaining core flows in this order:
   - auth
   - data entry/upload
   - calculation engine
   - dashboard
   - governance
   - report summary
   - AI-smart summary layer
