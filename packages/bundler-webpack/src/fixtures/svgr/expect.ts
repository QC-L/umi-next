import { IExpectOpts } from '../types';

export default ({ indexContent }: IExpectOpts) => {
  expect(indexContent).toContain(`__webpack_require__.p + "static/logo.`);
}
