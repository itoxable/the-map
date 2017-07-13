import { TheMapPage } from './app.po';

describe('the-map App', () => {
  let page: TheMapPage;

  beforeEach(() => {
    page = new TheMapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
