module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Create a component',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'src/components/{{dashCase name}}/index.tsx',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/Component.js.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{dashCase name}}/styles.ts',
        templateFile: 'plop-templates/Styles.js.hbs',
      },
    ],
  });
  plop.setGenerator('screen', {
    description: 'Create a screen',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your screen name?',
      },
    ],
    actions: [
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'src/scenes/{{kebabCase name}}/index.tsx',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/Screen.js.hbs',
      },
      {
        type: 'add',
        path: 'src/scenes/{{kebabCase name}}/styles.ts',
        templateFile: 'plop-templates/Styles.js.hbs',
      },
    ],
  });
  plop.setGenerator('hook', {
    description: 'Create a hook',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your hook name?',
      },
    ],
    actions: [
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'src/components/{{dashCase name}}/index.tsx',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/Component.js.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{dashCase name}}/styles.ts',
        templateFile: 'plop-templates/Styles.js.hbs',
      },
      {
        // Add a new file
        type: 'add',
        path: 'src/tools/{{kebabCase name}}/index.tsx',
        templateFile: 'plop-templates/hook/index.js.hbs',
      },
      {
        type: 'add',
        path: 'src/tools/{{kebabCase name}}/context.tsx',
        templateFile: 'plop-templates/hook/context.js.hbs',
      },
      {
        type: 'add',
        path: 'src/tools/{{kebabCase name}}/types.tsx',
        templateFile: 'plop-templates/hook/types.js.hbs',
      },
      {
        type: 'add',
        path: 'src/hooks/use-{{kebabCase name}}.tsx',
        templateFile: 'plop-templates/hook/use-hook.js.hbs',
      },
    ],
  });
  plop.setGenerator('model', {
    description: 'Create a model',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your model name?',
      },
    ],
    actions: [
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'src/redux/types/{{kebabCase name}}.types.ts',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/model/types.js.hbs',
      },
      {
        type: 'add',
        path: 'src/redux/actions/{{name}}.action.ts',
        templateFile: 'plop-templates/model/action.js.hbs',
      },
      {
        type: 'add',
        path: 'src/redux/reducers/{{name}}.reducer.ts',
        templateFile: 'plop-templates/model/reducer.js.hbs',
      },
      {
        type: 'add',
        path: 'src/redux/sagas/{{name}}.saga.ts',
        templateFile: 'plop-templates/model/saga.js.hbs',
      },
      {
        type: 'add',
        path: 'src/services/{{name}}-service.ts',
        templateFile: 'plop-templates/model/service.js.hbs',
      },
    ],
  });
  plop.setGenerator('mock', {
    description: 'Create a mock data',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your mock screen?',
      },
    ],
    actions: [
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'src/scenes/{{kebabCase name}}/__mocks__/data.ts',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/mock.js.hbs',
      },
    ],
  });
};
