import { MeetupAppPage } from './app.po';

describe('meetup-app App', () => {
  let page: MeetupAppPage;

  beforeEach(() => {
    page = new MeetupAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
