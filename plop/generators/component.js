module.exports = {
  description: "UI Component Template",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "Enter component name",
    },
    {
      type: "directory",
      name: "path",
      message: "where would you like to put this component?",
    },
  ],
  actions: (data) => {
    const actions = [
      {
        type: "add",
        path:
          "{{#if path}}{{path}}/components/{{else}}components/{{/if}}{{pascalCase name}}/{{pascalCase name}}.js",
        templateFile: "plop/templates/component/index.hbs",
      },
      {
        type: "add",
        path:
          "{{#if path}}{{path}}/components/{{else}}components/{{/if}}{{pascalCase name}}/{{pascalCase name}}.test.js",
        templateFile: "plop/templates/component/test.hbs",
      },
      {
        type: "add",
        path:
          "{{#if path}}{{path}}/components/{{else}}components/{{/if}}{{pascalCase name}}/{{pascalCase name}}.less",
        templateFile: "plop/templates/component/less.hbs",
      },
    ]

    if (data.path) {
      actions.push(
        {
          type: "add",
          path: "{{path}}/components/index.js",
          templateFile: "plop/templates/component/path-index.hbs",
        },
        {
          type: "append",
          path: "{{path}}/components/index.js",
          templateFile: "plop/templates/component/export.hbs",
          pattern: "/* Plop Generated Exports */",
        }
      )
    } else {
      actions.push({
        type: "append",
        path: "components/index.js",
        templateFile: "plop/templates/component/export.hbs",
        pattern: "/* Plop Generated Exports */",
      })
    }

    return actions
  },
}
