module.exports = {
    // eslint의 동작환경을 지정
      'env': {
          'browser': true,
          'es2021': true,
          'node': true
      },
    // 기본적인 룰셋을 지정
      'extends': ['eslint:recommended', 'prettier'],
    // 특정 파일에만 다른 룰을 지정
    'overrides': [],
      // 사용환경을 최신 자바스트립트로 가정
      'parserOptions': {
          'ecmaVersion': 'latest'
      },
    // extends 옵션으로 지정한 룰셋을 덮어씌운다
    rules: {
        'no-unused-vars': ['error'],
        'no-unused-expressions': ['error'],
        'no-unreachable-loop': ['error'],
        'no-unreachable': ['error'],
        'no-param-reassign': ['error'],
        'no-use-before-define': ['error'],
        'max-depth': [
        'error',
        {
          max: 1,
        },
        ],
        'padding-line-between-statements': [
          'error',
          {
            blankLine: 'always',
            prev: '*',
            next: 'return',
          },
        ],
        'no-unneeded-ternary': [
          'error',
          {
            defaultAssignment: false,
          },
        ],
        quotes: [
          'error',
          'single',
          {
            avoidEscape: true,
          },
        ],
        'object-curly-spacing': ['error', 'always'],
        'array-bracket-spacing': ['error', 'never'],
        'brace-style': ['error'],
        curly: ['error', 'multi-line', 'consistent'],
        'no-debugger': ['warn'],
        'no-restricted-globals': ['off'],
        'no-alert': ['warn'],
        'no-console': [
          'warn',
          {
            allow: ['warn', 'error'],
          },
        ],
    },
}