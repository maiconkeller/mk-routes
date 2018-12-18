import Base from '../BaseLayout/Base' // component base (menu, sidebar, content)

import Public1 from '../PublicViews/Public1'
import Public2 from '../PublicViews/Public2'
import Public3 from '../PublicViews/Public3'

import Protect1 from '../ProtectedViews/Protected1'
import Protect2 from '../ProtectedViews/Protected2'
import Protect3 from '../ProtectedViews/Protected3'

export const routes = [
  //anonymous paths
  { type: 'anonymous', mode: 'auth', exact: true, path: '/', component: Public1 },
  { type: 'anonymous', mode: 'auth', exact: true, path: '/public/page2', component: Public2 },
  { type: 'anonymous', mode: 'auth', exact: true, path: '/public/page3', component: Public3 },
  //protected paths
  { type: 'protected', mode: 'view', exact: true, path: '/protected/page1', component: Protect1, componentBase: Base },
  { type: 'protected', mode: 'view', exact: true, path: '/protected/page2', component: Protect2, componentBase: Base },
  { type: 'protected', mode: 'view', exact: true, path: '/protected/page3', component: Protect3, componentBase: Base }
]
