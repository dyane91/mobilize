import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getEvents} from '../redux-store/events';
import ReactPaginate from 'react-paginate';
// import Pagination from 'react-bootstrap/Pagination';

class PaginationJs extends Component {
  constructor(){
    super()
    this.getEvents = this.handleGetEvents.bind(this)
  }
  handleGetEvents(selectedNum) {
    // increment by 1 because the npm paginate package is zero based, 1 starts at 0 and so on
    const pageNumber = selectedNum + 1;
    this.props.getEvents(pageNumber);
  }
  render(){
    let totalEvents = this.props.events.count;
    let active = this.props.pageNumber;
    return (
      <div>
          <ReactPaginate activeClassName={'active'}key={active}  initialPage={1}pageCount={totalEvents/24} pageRangeDisplayed={10} marginPagesDisplayed={2}  onPageChange={(event)=> this.handleGetEvents(event.selected)}>
          </ReactPaginate>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  events: state.events.events,
  pageNumber: state.events.pageNumber
});

const mapDispatchToProps = dispatch => ({
  getEvents: (pageNumber) => dispatch(getEvents(pageNumber))
})

export default connect(mapStateToProps, mapDispatchToProps)(PaginationJs);
