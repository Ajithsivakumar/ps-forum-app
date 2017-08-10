import { StepforumPage } from './app.po';

describe('stepforum App', () => {
  let page: StepforumPage;

  beforeEach(() => {
    page = new StepforumPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
