import React from 'react';
import SearchInput, {createFilter} from 'react-search-input';
import Header from '../containers/header.js';
import { _ } from 'lodash';

class ProfileList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      studentIds: this.props.studentIds
    }
  }
  render() {
    let profiles = this.props.profiles;
    let searchableProfiles = profiles.filter(createFilter(this.state.searchTerm, ['name']));

    return (
      <div className={ this.props.toggle ? 'dashboard show-menu' : 'dashboard hide-menu' }>
        <Header title='Search'/>
        <div id='panel' className='welcome row'>
          <div className='col-sm-12'>
            <h3>Track your student in 2 easy steps.</h3>
            <p>Salvia mixtape ethical, dreamcatcher semiotics neutra readymade. Gochujang heirloom you probably haven't heard of them, truffaut brooklyn shoreditch umami echo park mustache flannel</p>
          </div>
          <div className='row'>
            <div className='col-sm-6'>
              <h3>1. Find your student </h3>
              <p>Choose your students below by clicking on their username.</p>
              <SearchInput className="search-input" onChange={this.searchUpdated.bind(this)} />
              {searchableProfiles.map(profile => {
                return (
                  <div key={profile._id}>
                    { this.state.studentIds.indexOf(profile._id) === -1 ?
                    <div className='col-sm-3' onClick={this.addStudentId.bind(this, profile._id)}>
                      <div className="student" >
                        {profile.name}
                      </div>
                    </div>
                      :
                      null
                    }
                  </div>
                )
              })}
            </div>
            <div className='col-sm-6'>
              <h3>2. Subscribe</h3>
              <p>Mumblecore cred kitsch green juice synth. Semiotics lomo banh mi, polaroid humblebrag four loko 3 wolf moon pug flannel kale chips. You probably haven't heard of them chicharrones lumbersexual</p>
              <p>You are subscribed to {this.state.studentIds.length} students.</p>
              <p>You will have to pay ${this.state.studentIds.length * 9} per month. </p>
              <button className='button' onClick={this.props.createCustomer.bind(this, this.state.studentIds.length * 900, 'Subscription Plan', 'Full acccess to Pttrns.', this.state.studentIds)}>Subscribe</button>
              <p>Secure server</p>
              {profiles.map(profile => {
                return (
                  <div key={profile._id}>
                    { this.state.studentIds.indexOf(profile._id) !== -1 ?
                    <div className='col-sm-3' onClick={this.removeStudentId.bind(this, profile._id)}>
                      <div className="student" >
                        {profile.name}
                      </div>
                    </div>
                      :
                      null
                    }
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
  totalPSubscriptionAmount() {

  }
  removeStudentId(id) {
    let studentIds = this.state.studentIds;
    _.remove(studentIds, function(n) { return n === id });
    this.setState({ studentIds: studentIds});
  }
  addStudentId(id) {
    let studentIds = this.state.studentIds;
    studentIds.push(id);
    this.setState({ studentIds: studentIds});
  }
  addStudents(e) {
    e.preventDefault();
    let students = [];
    for (var ref in this.refs) {
      if(this.refs[ref].checked) {
        students.push(ref)
      }
    }
    this.props.addStudents(students);
  }
  searchUpdated (term) {
    this.setState({searchTerm: term})
  }
  updateSearchValue(e) {
    e.preventDefault();
    this.props.updateProfileList(e.target.value);
  }
}

export default ProfileList;

