# Stack

Language: ReactJS + TypeScript

- [Tutorial](https://www.youtube.com/watch?v=Z5iWr6Srsj8)

Formatter: Prettier

- [Install](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Documentation: StorybookJS

- [Tutorial](https://www.youtube.com/watch?v=lWk5SntifCU)

Testing: Jest

- No tutorial yet...

# PR Convention

Always squash and merge

## Naming convention

Format: `<type>(<scope>): <subject>`

`<scope>` is optional

Types:

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)

### Example

```
feat: add hat wobble
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

Reference: https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716

## Code Review

`styles.tsx`

- Style names are generic if in Components/\*
- Style names are specific if in ChatEngine/\*
- All styles end with `*Style`
- All styles are camelCase
- Export Styles interface
- Apply to `styles` object

`props.tsx`

- The `Props` object extends `Styles` interface
- Prop names are generic
  - If in Components/\*
  - Or are locally scoped
- Drill up prop names are specific if in ChatEngine/\*

`index.tsx`

- All style props are in ({ props }) object
- Styles cascaded in this order
  - Default Style
  - Stateful Styles
  - Prop Styles
  - Props Styles base on State
- Each </> component has purpose

`stories.tsx`

- Consistent explanation structure
  - Structure TBD
- Stories Structure
  - Default
  - States
  - Prop Variations
  - Custom Styles
- Custom Styles formal
  - Border Colors for each customizable component
  - Unique / bold colors for each

`test.tsx`

- Who cares for now :smile:
