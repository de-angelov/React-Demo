import React, { Component } from 'react'
import { addComment, addReply } from '../../actions/modalActions';
import CustomScroll from 'react-custom-scroll';
import { connect } from 'react-redux';
import './css/comments.css';



class Comments extends Component {
  
  constructor(props){
    super(props);
    this.addReply = this.addReply.bind(this);
    this.addCommentHTML = this.addCommentHTML.bind(this);
  }

  addReply(e){
    e.preventDefault();
    const index = e.target.getAttribute('data-index');
    const reply = e.target.reply.value;
    e.target.reply.value='';
    return this.props.addReply(reply, index);
  }

  addCommentHTML(comment, index) {
    return (
      <div
        key={index}>
        <div className='modal-element-lg author flex-align-center'>
          <div className='flex-start'>
            <div className='user-picture' />
            <div className=''>
              <p className='text-strong '>Author Name</p>
              <p className='text-weak'>march 7 , 2013 AT 7:30PM</p>
            </div>
          </div>
        </div>
        <div className='space' />
        <div className='comments-test-scroll modal-element'>
          <CustomScroll className='custom-scrollbar'>
            <div className='comments-test'>
              <span
                className='display-block'>
                {comment.text}</span>
              <div className='space' />
              <div>
                <form
                  data-index={index}
                  onSubmit={this.addReply}
                  className={this.props.url !== '' ? '' : 'display-none'}>
                  <div className='modal-element-sm'>
                  <div className='flex-space-between'>
                    <div>
                      <button type='submit' className='btn btn-white float-left'>
                        <i className='fa fa-comment' />Comment
                      </button>
                      <button type='button' className='btn btn-white float-left'>
                        <i className='fa fa-heart' />Like
                      </button>
                      <button type='button' className='btn btn-white float-left'>
                        <i className='fa fa-share-alt' />Share
                        </button>
                    </div>
                    <div>
                      <button type='button' className='btn btn-white float-right'>
                        <i className='fa fa-flag' />Report
                      </button>
                    </div>
                  </div>
                  </div>
                  <div className='space' />
                  <hr className='modal-element-sm' />
                  <div className='space' />
                  <div className='modal-element-sm flex-start'>
                    <button
                      type='submit'
                      className='btn btn-white'>
                      Comment <span className='important'> (implemented)</span>
                    </button>
                    <button
                      type='button'
                      className='btn btn-white'>
                      Like
              </button>
                    <button
                      type='button'
                      className='btn btn-white'>
                      Share
              </button>
                    <div className='space' />
                  </div>
                  <div className='space' />
                  <input
                    placeholder='reply...'
                    className='modal-element-sm'
                    type='text'
                    name='reply' />
                  <div className='space' />
                </form>
                {comment.replies.map((reply, i) => {
                  return (
                    <div className='modal-element-sm display-block' key={i}>
                      <div className='space' />
                      <div>{reply}</div>
                      <div className='space' />
                      <hr className='modal-element-sm' />
                    </div>)
                })}
              </div>
            </div>
          </CustomScroll  >
        </div>
      </div>)
  };


  render() {
    return (
      <div>
      {
        this.props.comments.map(this.addCommentHTML)
      }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    comments: state.modal.comments,
  })
}

export default connect(mapStateToProps, { addComment, addReply })(Comments);
