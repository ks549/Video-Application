import { VideoappPage } from './app.po';

describe('videoapp App', function() {
  let page: VideoappPage;

  beforeEach(() => {
    page = new VideoappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
