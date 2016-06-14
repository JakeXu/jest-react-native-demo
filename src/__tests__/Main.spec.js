import Main from '../Main';

/*

SyntaxError: Unexpected token import in file 'src/__tests__/Main.spec.js'.

    Make sure your preprocessor is set up correctly and ensure your 'preprocessorIgnorePatterns' configuration is correct: http://facebook.github.io/jest/docs/api.html#preprocessorignorepatterns-array-string
    If you are currently setting up Jest or modifying your preprocessor, try `jest --no-cache`.
    Preprocessor: No preprocessor specified, consider installing 'babel-jest'.
    Jest tried to the execute the following code:
    import Main from '../Main';

    describe('<Main />', () => {
      it('works', () => {
        expect(1 + 4).toEqual(5);
      });
    });

*/

describe('<Main />', () => {
  it('works', () => {
    expect(1 + 4).toEqual(5);
  });
});
