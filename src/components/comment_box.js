import React, { Component } from 'react';

export default class CommentBox extends Component {
  // the follow event should be reflected in this component's
  // local state, so initialize the component's starting comment value
  constructor(props) {
    super(props);
    this.state={ comment: '' };
  }
  handleChange(event){
    this.setState({ comment: event.target.value })
  }

  handleSubmit(event){
    event.preventDefault();
    this.setState({ comment: '' })
  }

  render(){
    return (
      <form
        onSubmit={this.handleSubmit.bind(this)}
        className="comment-box">
        <textarea
          value={this.state.comment}
          onChange={this.handleChange.bind(this)}
          name="" id="" cols="30" rows="10" />
        <button action="submit">Submit Comment</button>
      </form>
    )
  }
}
