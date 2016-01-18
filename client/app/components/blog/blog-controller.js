import _ from 'lodash';

class BlogController {
  // bind to this and not $scope
  // because of controllerAs.
  constructor() {
    this.title = 'Welcome to the blog!';
    this.posts = _.times(5, i => {
      return {title: `I am item ${i}`,
              author: 'Moses'
             }
    });
  }
}
// could also just export the class up top as well
export {BlogController};
