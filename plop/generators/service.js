module.exports = {
  description: "Create service",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What is your service name?",
    },
  ],
  actions: [
    {
      type: "add",
      path: "services/{{camelCase name}}/{{camelCase name}}.js",
      templateFile: "plop/templates/service/service.hbs",
    },
    {
      type: "add",
      path: "services/index.js",
      templateFile: "plop/templates/service/injectable-index.hbs",
      skipIfExists: true,
    },
    {
      type: "append",
      path: "services/index.js",
      pattern: `/* PLOP_INJECT_IMPORT */`,
      template: `import {{camelCase name}} from './{{camelCase name}}/{{camelCase name}}';`,
    },
    {
      type: "append",
      path: "services/index.js",
      pattern: `/* PLOP_INJECT_EXPORT */`,
      template: `\t{{camelCase name}},`,
    },
  ],
}
