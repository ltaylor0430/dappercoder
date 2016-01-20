// create our controller using the
// highly controversial class
import _ from 'lodash';
class ShowcaseController {
  // bind to this and not $scope
  // because of controllerAs.
  constructor() {
    this.expanded = -1;
    this.posts = _.times(50, i => {
      return {title: `I am item ${i}`,
              author: 'Moses',
              info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laborum voluptatum eveniet totam ad iusto aliquid animi veniam earum,
              nemo beatae, et aut ratione sed eligendi optio,
              quos debitis minus doloremque!`
             }
    });
    this.toggleExpand = function(index) {
      this.expanded = index;
      console.log('expanding =' + this.expanded);
    }
    this.toggleClose = function(index) {
      this.expanded = -1;
      console.log('expanding =' + this.expanded);
    }
    this.isSelected = function($index) {
      console.log($index);
      console.log($index === this.expanded);
        return this.expanded === $index;
    }
  }
}
// could also just export the class up top as well
export {ShowcaseController};
