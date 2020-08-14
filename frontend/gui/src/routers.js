import React from 'react'
import { Route } from 'react-router-dom'

import ArticlesListView from './containers/ArticlesListView'
import ArticlesDetailView from './containers/ArticlesDetailView'

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ArticlesListView} />
        <Route exact path='/:articleID' component={ArticlesDetailView} />
    </div>
)

export default BaseRouter;