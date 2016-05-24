import React from 'react';
import SearchInput, {createFilter} from 'react-search-input';

class ProfileList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }
  render() {
    const profiles = this.props.profiles.filter(createFilter(this.state.searchTerm, ['name']))
    return (
      <div className="ProfileList clearfix">
        <SearchInput className="search-input" onChange={this.searchUpdated.bind(this)} />
        <form onSubmit={this.addStudents.bind(this)}>
        {profiles.map(profile => {
          return (
            <div className="mail" key={profile._id}>
              <input ref={profile.user} type='checkbox' htmlFor={profile.name}/> <label id={profile.name}>{profile.name}</label>
            </div>
          )
        })}
        <button type='submit'>Add students</button>
        </form>
      </div>
    )
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