import React from "react";
import {connect} from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySection } from "../../redux/directory/directory.selector";

import MenuItem from "../MenuItem/MenuItem.component";
import './Directory.styles.scss';

const Directory = ({sections}) => {

    return (
      <div className="directory-menu">
        {sections.map(({id, ...sectionProps}) => (
          <MenuItem key={id} {...sectionProps} />
        ))}
      </div>
    );
  }

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
})

export default connect(mapStateToProps)(Directory);
