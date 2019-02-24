import React from 'react';

export default function RatingBig(props) {
	const { overallRating } = props;

	if (overallRating >= 0 && overallRating<0.5) {
		return (
			<div className="rating-big">
				<i className="fa fa-star-o" aria-hidden="true" />
				<i className="fa fa-star-o" aria-hidden="true" />
				<i className="fa fa-star-o" aria-hidden="true" />
				<i className="fa fa-star-o" aria-hidden="true" />
				<i className="fa fa-star-o" aria-hidden="true" />
				<span>{parseFloat(overallRating).toFixed(1)}</span>
			</div>
		);
  }
  else 	if (overallRating >= 0.5 && overallRating<1) {
		return (
			<div className="rating-big">
			  <i className="fa fa-star-half-o" aria-hidden="true"></i>
				<i className="fa fa-star-o" aria-hidden="true" />
				<i className="fa fa-star-o" aria-hidden="true" />
				<i className="fa fa-star-o" aria-hidden="true" />
				<i className="fa fa-star-o" aria-hidden="true" />
				<span>{parseFloat(overallRating).toFixed(1)}</span>
			</div>
		);
  }
  else 	if (overallRating >= 1 && overallRating<1.5) {
		return (
			<div className="rating-big">
			  <i className="fa fa-star" aria-hidden="true"></i>
				<i className="fa fa-star-o" aria-hidden="true" />
				<i className="fa fa-star-o" aria-hidden="true" />
				<i className="fa fa-star-o" aria-hidden="true" />
				<i className="fa fa-star-o" aria-hidden="true" />
				<span>{parseFloat(overallRating).toFixed(1)}</span>
			</div>
		);
  }
  else 	if (overallRating >= 1.5 && overallRating<2) {
		return (
			<div className="rating-big">
			  <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star-half-o" aria-hidden="true"></i>
				<i className="fa fa-star-o" aria-hidden="true" />
				<i className="fa fa-star-o" aria-hidden="true" />
				<i className="fa fa-star-o" aria-hidden="true" />
				<span>{parseFloat(overallRating).toFixed(1)}</span>
			</div>
		);
  }
  else 	if (overallRating >= 2 && overallRating<2.5) {
		return (
			<div className="rating-big">
			  <i className="fa fa-star" aria-hidden="true"></i>
				<i className="fa fa-star" aria-hidden="true"></i>
				<i className="fa fa-star-o" aria-hidden="true" />
				<i className="fa fa-star-o" aria-hidden="true" />
				<i className="fa fa-star-o" aria-hidden="true" />
				<span>{parseFloat(overallRating).toFixed(1)}</span>
			</div>
		);
  }
  else 	if (overallRating >= 2.5 && overallRating<3) {
		return (
			<div className="rating-big">
			  <i className="fa fa-star" aria-hidden="true"></i>
				<i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star-half-o" aria-hidden="true"></i>
				<i className="fa fa-star-o" aria-hidden="true" />
				<i className="fa fa-star-o" aria-hidden="true" />
				<span>{parseFloat(overallRating).toFixed(1)}</span>
			</div>
		);
  }
  else 	if (overallRating >= 3 && overallRating<3.5) {
		return (
			<div className="rating-big">
			  <i className="fa fa-star" aria-hidden="true"></i>
				<i className="fa fa-star" aria-hidden="true"></i>
				<i className="fa fa-star" aria-hidden="true"></i>
				<i className="fa fa-star-o" aria-hidden="true" />
				<i className="fa fa-star-o" aria-hidden="true" />
				<span>{parseFloat(overallRating).toFixed(1)}</span>
			</div>
		);
  }
  else 	if (overallRating >= 3.5 && overallRating<4) {
		return (
			<div className="rating-big">
			  <i className="fa fa-star" aria-hidden="true"></i>
				<i className="fa fa-star" aria-hidden="true"></i>
				<i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star-half-o" aria-hidden="true"></i>
				<i className="fa fa-star-o" aria-hidden="true" />
				<span>{parseFloat(overallRating).toFixed(1)}</span>
			</div>
		);
  }
  else 	if (overallRating >= 4 && overallRating<4.5) {
		return (
			<div className="rating-big">
			  <i className="fa fa-star" aria-hidden="true"></i>
				<i className="fa fa-star" aria-hidden="true"></i>
				<i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
				<i className="fa fa-star-o" aria-hidden="true" />
				<span>{parseFloat(overallRating).toFixed(1)}</span>
			</div>
		);
  }
  else 	if (overallRating >= 4.5 && overallRating<5) {
		return (
			<div className="rating-big">
			  <i className="fa fa-star" aria-hidden="true"></i>
				<i className="fa fa-star" aria-hidden="true"></i>
				<i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star-half-o" aria-hidden="true"></i>
				<span>{parseFloat(overallRating).toFixed(1)}</span>
	
			</div>
		);
  }
  else 	if (overallRating === 5) {
		return (
			<div className="rating-big">
			  <i className="fa fa-star" aria-hidden="true"></i>
				<i className="fa fa-star" aria-hidden="true"></i>
				<i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
				<span>{parseFloat(overallRating).toFixed(1)}</span>
			</div>
		);
  }
  else{
    return (	<div className="rating-big">  </div>)
  }
}
