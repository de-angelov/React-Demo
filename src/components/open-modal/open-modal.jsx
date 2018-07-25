import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openModal } from  '../../actions/modalActions';
import './css/open-modal.css'

class OpenModal extends Component {

  constructor(props){
    super(props);
    this.openModal=this.openModal.bind(this);
  }
  
  openModal(){
    console.log('this.prop.isModalOpen', this.props.isModalOpen);
    console.log('this.props.location', this.props.location);
    return this.props.openModal();
	}

  render() {
    return (
    <div>
      <button 
      className='open-button btn-black btn'
      type='button' 
      onClick={this.openModal} > Open Modal </button>
    </div>
    )
  }
}

const mapStateToProps= (state) => {
  return {
    isModalOpen: state.modal.isModalOpen,
  }
}

export default connect(mapStateToProps, { openModal }) (OpenModal);