# CarbonLens Progress

## Current Status

Documentation planning pack is complete, frontend scaffolding is in place, Harsh phase 1 settings work exists, and Harsh phase 2 public supplier submission portal is now implemented in the Vite app.

## Decision Log

- Selected product name: `CarbonLens`
- Chosen audience: manufacturing SMEs
- Chosen build strategy: practical MVP
- Positioning: single source of truth for ESG and GHG data
- Core value: actionability plus accountability, not dashboarding alone
- Scope 3 approach: limited but meaningful
- AI role: optional enhancement, not core logic

## Completed Items

- Problem statement interpretation
- Project ideation
- CRD planning
- UX and design planning
- Technical stack definition
- System architecture planning
- Data model outline
- API contract draft
- Demo script draft
- Pitch notes draft
- Frontend app scaffolding with React Router, Tailwind, Axios, and shared session/http utilities
- Internal settings experience for organization and facility management
- `react-hook-form` + Zod validation for the settings workflow
- Public supplier submission portal route and separate external layout
- Repeatable supplier metric entry with file attachment support
- Supplier submission API integration using unauthenticated `FormData`

## In Progress

- Additional frontend and backend feature phases remain in progress across the broader project plan
- Supplier portal backend validation and downstream processing depend on the API team contract

## Blockers

- No blocker for the implemented supplier UI itself
- End-to-end supplier submission depends on the backend `/api/supplier/submit` endpoint honoring the agreed phase 2 payload contract

## Risks

- Scope creep during implementation
- Over-focus on AI instead of core flows
- Underestimating seeded data preparation
- Spending too much time on export polish

## Next Immediate Tasks

- Continue remaining phase work outside Harsh scope
- Connect the supplier portal to the live backend endpoint and validate file handling
- Build remaining governance, dashboard, and reporting modules
- Reconcile older API documentation with the newer supplier submission contract
- Add backend-backed test coverage for supplier submission and issue workflows

## Demo Readiness Checklist

- [x] Problem and solution story defined
- [x] Core MVP scope defined
- [x] User roles documented
- [x] Main screens planned
- [x] Data entities listed
- [x] API contract drafted
- [x] Demo script prepared
- [x] Pitch notes prepared
- [x] Implementation started
- [ ] Seeded demo data created
- [x] UI demo built
- [ ] Report output built

## Timestamped Updates

- `2026-04-17 11:29 IST` Problem statement sourced from `SKB-P1.pdf`
- `2026-04-17 11:40 IST` Product direction narrowed to practical MVP for manufacturing SMEs
- `2026-04-17 11:55 IST` Documentation-only hackathon planning pack approved
- `2026-04-17 12:10 IST` Documentation files created for implementation handoff
- `2026-04-17 21:38 IST` Frontend Vite application scaffold and internal settings module present in the repo
- `2026-04-18 IST` Harsh phase 2 supplier submission portal implemented with isolated public routing and `FormData` submission flow

## Notes From Reviews Or Pivots

- Keep the narrative grounded in real operational pain
- Do not present the solution as full regulatory compliance software
- Protect time for a polished and simple demo story
- Treat `implementation-pan.md` phase 2 supplier contract as the source of truth over the older single-record supplier example in `api-contract.md`
