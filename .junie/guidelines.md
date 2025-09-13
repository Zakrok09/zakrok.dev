## project structure

- `src/components`: holds all the Astro components that can be reused on the website
- `src/layouts`: holds all the page layouts for Astro
- `src/pages`: holds my website pages
- `src/pages/blog`: holds dynamic url path that filters the blog based on a tag
- `src/pages/posts`: holds entries in my markdown blog

## commands

- `bun run dev`: to run website in developer mode

## Must NEVER do:
- modify `package.json` without first prompting the user
- modify `bun.lockb`
- execute any command without first prompting the user

## commits:

- you must follow the conventional commits convention for commit naming
  - use `chore: ...` for changes that are not related to the business logic
  - use `fix: ...` for any fixes to the behaviour
  - use `feat: ...` for introduced features
  - use `refactor: ...` for changes that change the code but not the behaviour
  - use `docs: ...` for changes to documentation
