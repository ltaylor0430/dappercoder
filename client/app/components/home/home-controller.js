// create our controller using the
// highly controversial class
import _ from 'lodash';
import portrait from '../../../images/Portrait.png';
class HomeController {
  // bind to this and not $scope
  // because of controllerAs.
  constructor() {
    this.title = 'Professional, Pragmatic, Efficient';
    this.subtitle = 'Responsive Front-end Developer';
    this.portrait = portrait;
  }
}
// could also just export the class up top as well
export {HomeController};
