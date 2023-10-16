# Test always error

This is an example Next.js (pages) project that demonstrates how to create custom error pages.

This works because the function on the `always-error` page has no functionality and simply throws an error:

```js
// src/pages/always-error.js
export async function getServerSideProps() {
  throw new Error("This is a test server-side error.");
}
```

## Getting Started

Clone the repo and navigate to the project folder.

Then install dependencies, build the app and start the server:

```bash
pnpm i && pnpm run build && pnpm run start
```

## Test

You should then be able to navigate to http://localhost:3000/always-error to see the custom error message.
