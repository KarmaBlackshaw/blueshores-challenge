module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
  ],
  rules: {
    'prefer-const': 'error',
    'no-undef': 'error',
    'no-var': 'error',
    'vue/no-unused-properties': [
      'error',
      {
        ignorePublicMembers: true,
        groups: ['props', 'methods', 'computed', 'data'],
      },
    ],
    "padded-blocks": ["error", "never"],
    "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
    "space-infix-ops": "error",
    "no-multi-spaces": "error",
    'object-curly-spacing': ['error', 'always'],
    'no-multiple-empty-lines': ["error", {
      max: 1
    }],
    'vue/html-indent': ['error', 2, {
      'attribute': 1,
      'baseIndent': 1,
      'closeBracket': 0,
      'alignAttributesVertically': true,
      'ignores': []
    }],
    "vue/html-self-closing": [
      "error",
      {
        "html": {
          "void": "never",
          "normal": "never",
          "component": "always"
        },
        "svg": "always",
        "math": "always"
      }
    ],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
  },
}
