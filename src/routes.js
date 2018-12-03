import AppCont from 'containers/AppCont';
import Rules from 'components/Rules';
import Policy from 'components/Policy';
import Services from 'components/Services';
import Contacts from 'components/Contacts';
import About from 'components/About';
import Description from 'components/Description';
import CarsCont from 'containers/CarsCont';
import CarCont from 'containers/CarCont';

export default [
  {
    path: '/',
    component: AppCont,
    exact: true
  },
  {
    path: '/app',
    component: AppCont,
    exact: true
  },
  {
    path: '/cars',
    component: CarsCont,
    exact: true
  },
  {
    path: '/car/:id',
    component: CarCont,
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
