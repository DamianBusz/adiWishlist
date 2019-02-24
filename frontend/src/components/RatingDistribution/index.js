import React from 'react'
import { Line } from 'rc-progress';

//helper function to count % of ratings
function Percentage(props) {
    const { totalAmount, count} = props;
    const onePercent = totalAmount/100
    const countPercent = parseInt(count/onePercent)
      return (
          <div>
              <Line percent={countPercent} strokeWidth="0.4" strokeColor="#010a0f" />
          </div>
      );
  }
  
  export default function RatingDistribution(props) {
      const {reviewCount, data } = props;
      return (
          <div className="rating-section">
              {data.map((item, index) => {
                  return (
                      <div className="rating-bar" key={index}>
                          <span>{item.rating}</span> <Percentage totalAmount={reviewCount} count={item.count} />
                      </div>
                  );
              })}
          </div>
      );
  }