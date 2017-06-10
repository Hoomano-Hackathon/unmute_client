import { UnmutePepperPage } from './app.po';

describe('UnmutePepper App', () => {
  let page: UnmutePepperPage;

  beforeEach(() => {
    page = new UnmutePepperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
