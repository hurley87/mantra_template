import React from 'react';

class MyStudents extends React.Component {
  render() {
  	const profiles = this.props.profiles || []
  	return (
  		<div>
  		{ profiles.length > 0 ? this.profiles() : this.search() }
  		</div>
  	)
  }
  search() {
  	return (
  		<div><a href="/search">Search for profiles</a></div>
  	)
  }
  profiles() {
    return (
      <div className="MyStudents clearfix">
        {this.props.profiles.map(profile => {
          return (
            <div className="mail" key={profile._id}>
              <a href={ "/students/" + profile.user }>{profile.name}</a>
            </div>
          )
        })}
        { this.search() }
      </div>
    )
  }
}

export default MyStudents;