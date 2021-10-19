## Setup the Project

1. Clone the retriever.

```bash
$ git clone git@github.com:gandarfh/llama-ui.git
$ cd llama-ui
```

2. Install root dependencies.

```bash
$ yarn
```

3. Build the existing components.

```bash
$ yarn build
```

1. Now to create one new package follow this rules.
   1. Run `yarn cli`
   2. Provide a name for the package and description

## To improve our development process we use a monorepo structure.

### Tooling

- Lerna to manage monorepo
- Storybook for component development and testing
- Testing library with jest to test
- Docussaurus to create the documentation page

## Commit Convention

Before you create a pull request, check with you are using our commit conventions.

When create a commit follow this convention `category(scope or module): message` using one of this categories.

- **feat**: changes where introduce news codes our new features
- **fix**: when you fix a bug
- **refactor**: when you change the code but don't break the idea of feature
- **docs**: chaging existing our create a new documentation
- **test**: change code about test or create a new test
- **chore**: any change to repository

## Pull Request

We use a conventional to create ours pr. `[type/scope]` for exemple `feat:button-package`. You will follow the same commit convention types.

Before to create your pull request, run `yarn changeset`. This will genereate a changelog.
