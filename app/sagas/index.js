import homeSaga from './home';

export default function* rootSaga () {
  yield [
    homeSaga()
  ];
}
