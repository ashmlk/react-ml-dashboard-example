import React, { Component } from "react";

class NavUserContainer extends Component {
  render() {
    return (
      <div>
        <div className="nav-user-container px-3">
          <div className="text-center">
            <div className="nav-profile-image-container my-2">
              <img
                className="rounded profile-image-nav img-fluid"
                width="72px"
                src={this.props.userFromNav.profile_image_url}
              />
            </div>
            <div className="user-information">
              <div className="user-full-name">
                <span className="h5 ds-text-white">
                  {this.props.userFromNav.full_name}
                </span>
              </div>
              <div class="user-company">
                <span className="h6 ds-text-muted">
                  {this.props.userFromNav.company}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default NavUserContainer;
