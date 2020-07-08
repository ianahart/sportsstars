import React from 'react';
import { closeModal, openModal } from '../actions';
import { connect } from 'react-redux';

import '../css/Modal.css';

class Modal extends React.Component {
  fillEmptyFields = (value) => {
    if (value === null || value === '' || value === undefined) {
      value = 'N/A';
    }
    return value;
  };

  render() {
    const athlete = this.props.athlete.athlete.find((athlete) => {
      return athlete.idPlayer === this.props.playerId;
    });

    return (
      <div>
        <div
          className="modal fade"
          id="modal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="modal"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modal">
                  {this.fillEmptyFields(athlete.strPlayer)}
                </h5>
                <button
                  onClick={this.props.closeModal}
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p className="dob">
                  <span className="text-danger">DOB: </span>
                  {this.fillEmptyFields(athlete.dateBorn)}
                </p>
                <p className="birth-place">
                  <span className="text-danger">Birth Location: </span>
                  {this.fillEmptyFields(athlete.strBirthLocation)}
                </p>
                <p className="nationality">
                  <span className="text-danger">Nationality: </span>
                  {this.fillEmptyFields(athlete.strNationality)}
                </p>
                <p className="sport">
                  <span className="text-danger">Sport: </span>
                  {this.fillEmptyFields(athlete.strSport)}
                </p>
                <p className="team">
                  <span className="text-danger">Team: </span>
                  {this.fillEmptyFields(athlete.strTeam)}
                </p>
                <h3 className="bio-heading mb-3 mt-3 text-center">
                  Biography:
                </h3>
                <p className="description">
                  {this.fillEmptyFields(athlete.strDescriptionEN)}
                </p>
              </div>
              <div className="modal-footer">
                <button
                  onClick={this.props.closeModal}
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isModalOpen: state.modal,
    playerId: state.modal.playerId,
    athlete: state.athlete,
  };
};

export default connect(mapStateToProps, { closeModal, openModal })(Modal);
