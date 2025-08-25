# Template Comment Highlighter

Highlight template strings in JavaScript/TypeScript files when preceded by special comments:

```js
const html = /*html*/ `
  <div class="card">Hello!</div>
`;

const svg = /*svg*/ `
  <svg width="100" height="100">
    <circle cx="50" cy="50" r="40" />
  </svg>
`;
