import MainPage from 'containers/MainPageCont';
import Rules from 'components/Rules';
import Policy from 'components/Policy';
import Services from 'components/Services';
import Contacts from 'components/Contacts';
import About from 'components/About';
import Description from 'components/Description';
import Cars from 'components/Cars';

export default [
  {
    path: '/',
    component: MainPage,
    exact: true
  },
  {
    path: '/app',
    component: MainPage,
    exact: true
  },
  {
    path: '/cars',
    component: Cars,
    exact: true
  },
  {
    path: '/rules',
    component: Rules,
    exact: true
  },
  {
    path: '/policy',
    component: Policy,
    exact: true
  },
  {
    path: '/services',
    component: Services,
    exact: true
  },
  {
    path: '/contacts',
    component: Contacts,
    exact: true
  },
  {
    path: '/about',
    component: About,
    exact: true
  },
  {
    path: '/description',
    component: Description,
    exact: true
  },
]
