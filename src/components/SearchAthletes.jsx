import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { fetchAthlete, openModal } from '../actions';

import Modal from './Modal';

import '../css/SearchAthletes.css';

class SearchAthletes extends React.Component {
  renderError = ({ error, touched }) => {
    if (error && touched) {
      return (
        <div className="mt-2 alert text-center alert-danger" role="alert">
          {error}
        </div>
      );
    }
  };
  renderInput = ({ input, label, meta }) => {
    return (
      <div className="form-group">
        <label htmlFor="name">{label}</label>
        <input
          type="text"
          autoComplete="off"
          className="form-control"
          id="name"
          {...input}
        />
        <div>{this.renderError(meta)}</div>
      </div>
    );
  };

  onSubmit = (searchTerm) => {
    this.props.fetchAthlete(searchTerm.name);
    console.log(searchTerm.name);
    this.props.reset();
  };

  renderImage = (image) => {
    return !image
      ? 'https://via.placeholder.com/150?text=photo+unavailable'
      : image;
  };

  renderList() {
    return this.props.athlete.athlete.map((athlete) => {
      return (
        <div className="athlete-container" key={athlete.idPlayer}>
          <h3 className="name">{athlete.strPlayer}</h3>
          <img src={this.renderImage(athlete.strThumb)} alt="athlete" />

          <button
            type="button"
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modal"
            onClick={() => {
              this.props.openModal(athlete.idPlayer);
            }}
          >
            <i className="fas fa-user-alt"></i> Bio:
          </button>
        </div>
      );
    });
  }
  renderModal() {
    if (this.props.isModalOpen) {
      return <Modal />;
    } else {
      return null;
    }
  }
  render() {
    const className =
      this.props.athlete.athlete.length > 2 ? 'list-container' : '';
    return (
      <div>
        {this.renderModal()}
        <div className={className}>{this.renderList()}</div>

        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            name="name"
            label="Enter a name:"
            component={this.renderInput}
          />
          <button className="btn btn-danger" type="submit">
            <i className="fas fa-search"></i> Search
          </button>
        </form>
      </div>
    );
  }
}

const validate = (value) => {
  const errors = {};
  if (!value.name) {
    errors.name = 'Please enter a name';
  }
  return errors;
};

const mapStateToProps = (state) => {
  return {
    athlete: state.athlete,
    isModalOpen: state.modal.isModalOpen,
  };
};

SearchAthletes = connect(mapStateToProps, { fetchAthlete, openModal })(
  SearchAthletes
);

export default reduxForm({
  form: 'searchAthletes',
  validate,
})(SearchAthletes);
