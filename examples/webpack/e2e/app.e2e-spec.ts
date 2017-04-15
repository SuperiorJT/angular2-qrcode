import { WebpackPage } from './app.po';

describe('webpack App', () => {
  let page: WebpackPage;

  beforeEach(() => {
    page = new WebpackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
