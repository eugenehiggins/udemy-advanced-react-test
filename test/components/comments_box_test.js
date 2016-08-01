import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';
// import App from '../../src/components/app';


describe('CommentBox', () => {
  it('has a comment box', () => {
    const component = renderComponent(CommentBox);
    expect(component).to.have.class('comment-box');
  });

  it('has a text area', () => {
    const component = renderComponent(CommentBox);
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    const component = renderComponent(CommentBox);
    expect(component.find('button')).to.exist;
  })
});
