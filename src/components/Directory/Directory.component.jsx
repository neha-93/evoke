import React from "react";
import sections from "../../directory.data";
import MenuItem from "../MenuItem/MenuItem.component";
import './Directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
        sections: sections
    }
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({id, ...sectionProps}) => (
          <MenuItem key={id} {...sectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
