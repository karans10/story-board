import { StoryBoardPage } from './app.po';

describe('story-board App', () => {
  let page: StoryBoardPage;

  beforeEach(() => {
    page = new StoryBoardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
