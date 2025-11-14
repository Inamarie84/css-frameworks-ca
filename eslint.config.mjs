import globals from 'globals'
import pluginJs from '@eslint/js'

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser, // Includes browser-specific globals
        ...globals.node, // Includes all Node.js-specific globals
      },
    },
  },
  pluginJs.configs.recommended,
]
