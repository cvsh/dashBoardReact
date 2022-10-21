import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
        <Route path={`${APP_PREFIX_PATH}/main/home`} component={lazy(() => import(`./home`))} />
        <Route path={`${APP_PREFIX_PATH}/main/catalog/items`} component={lazy(() => import(`./pages/catalog/catalog-list`))} />
        <Route path={`${APP_PREFIX_PATH}/main/planner`} component={lazy(() => import(`./pages/planner`))} />
        <Route path={`${APP_PREFIX_PATH}/main/catalog/add-product`} component={lazy(() => import(`./pages/catalog/add-product`))} />
        <Route path={`${APP_PREFIX_PATH}/main/clients/client-list`} component={lazy(() => import(`./pages/clients/client-list`))} />
        <Route path={`${APP_PREFIX_PATH}/main/clients/client-detail/:id`} component={lazy(() => import(`./pages/clients/client-detail`))} />
        <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/main/home`} />
      </Switch>
    </Suspense>
  )
}

export default React.memo(AppViews);