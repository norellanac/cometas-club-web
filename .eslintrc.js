module.exports = {
    extends: ['react-app', 'prettier'],
    plugins: ['react', 'jsx-a11y', 'import'],
    rules: {
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': 'warn',
    },
  };
  