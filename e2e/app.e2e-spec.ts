import { ProjectLoveDeservedPage } from './app.po';

describe('project-love-deserved App', () => {
  let page: ProjectLoveDeservedPage;

  beforeEach(() => {
    page = new ProjectLoveDeservedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
