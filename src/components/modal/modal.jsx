import React, { Component } from 'react';
import { closeModal, updateUrl, addComment, addReply } from '../../actions/modalActions';
import { connect } from 'react-redux';
import Video from  '../video/video';
import Comments from '../comments/comments'

class Modal extends Component {
  constructor(props){
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.updateUrl = this.updateUrl.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  closeModal(){
    return this.props.closeModal();
  }

  addComment(e){
    e.preventDefault();
    const comment = this.refs.comment.value;
    this.refs.comment.value = '';
    return this.props.addComment(comment);
  }
  
  updateUrl(e){
    e.preventDefault();
    let url = this.refs.url.value;
    // url = url.substr(1);
    return this.props.updateUrl(url);
  }

  render() {
    var video = null;
        if (this.props.url!=='' && this.props.url) {
            video = ( <Video url={this.props.url} />);
        }
    return (
      <div className={this.props.isModalOpen === true ? 'modal' : 'display-none'}>
        <div className='modal-main'>
          <button
            type='button'
            onClick={this.closeModal}
            className='btn-dot'>
            X
          </button>
          <form
            onSubmit={this.updateUrl}
            className={this.props.url === '' ? 'display-block' : 'display-none'}>
            <input type='text' ref='url' className='modal-element' placeholder='add video url' />
            <div className='space' />
            <div className='modal-element'>
              <button type='submit' className='btn btn-black'>Submit</button>
            </div>
            <div className='space' />
          </form>
          <div className={this.props.url !== '' ? 'modal-element' : 'display-none'}>
            {video}
          </div>
          <form
            onSubmit={this.addComment}
            className={this.props.url !== '' ? '' : 'display-none'}>
            <div className='space' />
            <div className='modal-element'>
              <div className='flex-space-between'>
                <div>
                  <button type='button' className='btn btn-white'>
                    <i className='fa fa-heart' />Like
                  </button>
                  <button
                    type='button'
                    className='btn btn-white'>
                    <i className='fa fa-share-alt'/>Share
                    </button>
                  <button
                    type='submit'
                    className='btn btn-white'>
                    <i className='fa fa-comment' />
                    Comment<span className='important'>(implemented)</span>
                  </button>
                </div>
                <div>
                  <button
                    type='button'
                    className='btn btn-black'>
                    EDIT
                  </button>
                  <button
                    type='button'
                    className='btn btn-red'>
                    DELETE
                  </button>
                </div>
              </div>
            </div>
            <div className='space' />
            <input
              className='modal-element'
              type='text'
              ref='comment'
              placeholder='comment...' />
            <div className='space' />
          </form>
          <hr />
           <Comments/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({ 
    isModalOpen: state.modal.isModalOpen,
    url: state.modal.url,
    comments: state.modal.comments,
   })
};

export default connect(mapStateToProps, { closeModal, updateUrl, addComment, addReply })(Modal);
