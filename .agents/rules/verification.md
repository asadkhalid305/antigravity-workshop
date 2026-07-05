# TripLens Verification

Use focused verification for the change being made.

Common checks:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
npm run verify
```

For calculation changes, run the unit tests and inspect
`src/lib/triplens/calculations.test.ts`.

For dashboard or form changes, also verify in the browser:

- Mobile width around 390px.
- Desktop width around 1440px.
- No horizontal overflow.
- Selected trip can be changed.
- Compared trip can be changed separately.
- New trip form is readable and usable.
- Edit trip form is readable and usable.
- Reset restores seed data.
- Charts render visible marks and have readable supporting text.

When reporting back, name the changed files and the checks actually run.
