import _ from 'lodash';

export class ShowcaseController {
  // bind to this and not $scope
  // because of controllerAs.
  // note do not use arrow functions in constructor functions
  constructor() {
    this.title = 'Welcome to the blog!';
    this.posts = _.times(6, i => {
      return {title: `I am item ${i}`,
              author: 'Moses'
             }
    });

    this.appBrowser;
    this.selected = -1;
    this.selectApp = function(post,$index) {
      //collapse any open app vies
      console.log(this.selected);
      this.selected = post;
      let elem = angular.element( document.querySelector( '#appbrowser' ));
      console.log(elem);
      console.log(post);

      console.log(this.selected);
    }
    this.isOpen = function(item){
      return this.selected === item;
    }
  }
}

