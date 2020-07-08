import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSports } from '../actions';

import '../css/SportsListings.css';

class SportsListings extends Component {
  componentDidMount() {
    this.props.fetchSports();
  }
  renderSportsList = () => {
    return this.props.categories.map((sport) => {
      return (
        <div className="sports-item" key={sport.idSport}>
          <h2>{sport.strSport}</h2>
          <img src={sport.strSportThumb} alt={sport.strSport} />
          <h5>{sport.strFormat}</h5>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="sports-listings">
        <div className="heading">
          <h1 className="text-dark">
            Search for athletes across multiple sports
          </h1>
        </div>
        <div className="grid-container">{this.renderSportsList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.sports,
  };
};

export default connect(mapStateToProps, { fetchSports })(SportsListings);
