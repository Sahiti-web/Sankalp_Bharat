# Changelog
## CarbonLens

All notable documentation changes are tracked here.

## [Unreleased]

### Updated
- Unified the repo around the CarbonLens product direction
- Simplified the MVP to operations/governance first
- Kept AI as a supporting layer
- Reduced Scope 3 expectations to a limited realistic flow
- Removed OCR-first assumptions from MVP planning
- Added frontend implementation progress for Harsh phase 1 internal settings workflow
- Added Harsh phase 2 public supplier submission portal with isolated routing and UI separation

### Cleaned Up
- Removed duplicate README variants
- Replaced conflicting oversized task and architecture assumptions
- Aligned PRD, architecture, tasks, and work tracker with final product scope

### Added
- Public supplier route at `/supplier/submit/:tokenHash`
- Separate external shell for supplier submissions with no internal navigation chrome
- Repeatable supplier metric entry form using `react-hook-form` field arrays and Zod validation
- Supplier evidence file attachment flow and unauthenticated `FormData` submission helper
