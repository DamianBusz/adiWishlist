import React, {Fragment} from 'react'
import Rating from '../Rating'
import Dummy from '../../assets/dummy.png'
export default function DetailsCardDummy() {
  return (
    <Fragment>
      <div className="container fade-in blurred ">
							<div className="row">
								<div className="col-md-6">
									<div className="model-img">
										<div className="model-img-box">
										
										</div>
										<div className="model-preview">
										
										
													<img
														src={Dummy}
														className="image-preview"
													
														alt="exampleDummy"
												
													/>
										
                    <img
														src={Dummy}
														className="image-preview"
													
														alt="exampleDummy"
												
													/>
                          <img
														src={Dummy}
														className="image-preview"
													
														alt="exampleDummy"
												
													/>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="model">
                 
										<Rating overallRating={4.5} />
                
										<div className="model-brand">Blurred</div>
										<div className="model-name">Actually non existant name of this</div>

										<div className="model-price">&#xa3; 223</div>
										<div className="model-icon">
											<i className="fa fa-heart-o" /> Add to wishlist
										</div>
									</div>
								</div>
							</div>
						</div>

			
    </Fragment>
  )
}
