import React, { Component } from 'react';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(newReviewGroup) {
    const { updateReviews, numOfReviews, reviewGroup } = this.props;
    const lastReviewGroup = numOfReviews % 7 === 0 ? (numOfReviews / 7) - 1 : Math.floor(numOfReviews / 7);
    const newReviewGroupIsWithinBounds = newReviewGroup <= lastReviewGroup && newReviewGroup >= 0;
    if (newReviewGroupIsWithinBounds) {
      updateReviews(newReviewGroup);
      const topOfReviewDiv = document.getElementById('reviewsComponent-reviews').offsetTop - 10;
      window.scrollTo({
        top: topOfReviewDiv,
        behavior: 'smooth',
      });
    }
  }

  render() {
    const { reviewGroup, numOfReviews } = this.props;
    const lastReviewGroup = numOfReviews % 7 === 0 ? (numOfReviews / 7) - 1 : Math.floor(numOfReviews / 7);
    const previousButtonText = reviewGroup !== 0 ? '< ' : 1;
    const nextButtonText = reviewGroup !== lastReviewGroup ? ' >' : lastReviewGroup + 1;
    const firstButtonText = previousButtonText === 1 ? null : 1;
    const middleText = reviewGroup !== 0 && reviewGroup !== lastReviewGroup ? ' ... ' + (reviewGroup + 1) + ' ... ' : ' ... ';
    const lastButtonText = nextButtonText === lastReviewGroup + 1 ? null : lastReviewGroup + 1;
    return (
      <div id="reviewsComponent-pagination">
        <div id='prev' className='reviewsComponent-pagination-button' onClick={()=>this.handleClick(reviewGroup-1)}>{previousButtonText}</div>
        <div id='firstButton' className='reviewsComponent-pagination-button' onClick={()=>this.handleClick(0)}>{firstButtonText}</div>
        <div className='reviewsComponent-pagination-button'>{middleText}</div>
        <div id='lastButton' className='reviewsComponent-pagination-button' onClick={()=>this.handleClick(lastReviewGroup)}>{lastButtonText}</div>
        <div id='next' className='reviewsComponent-pagination-button' onClick={()=>this.handleClick(reviewGroup+1)}>{nextButtonText}</div>
      </div>
    );
  }
}

export default Pagination;