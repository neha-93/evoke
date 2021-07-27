import React from "react";
import { withRouter } from "react-router";
import {Route} from "react-router-dom";

import Collection from "../CollectionPage/CollectionPage.component";
import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview.component";

const ShopPage = ({match}) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview}/>
      <Route exact path={`${match.path}/:collectionId`} component={Collection}/>
    </div>
  );
};

export default withRouter(ShopPage);
