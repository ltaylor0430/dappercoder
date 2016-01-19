// TODO: register your routes for the blog and the directive
import 'angular';
import {showcaseDirective} from './showcase-directive';
export const showcase =angular.module('showcase',[]).config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('showcase', {
    url: '/showcase',
    template: '<showcase></showcase>'
  });
})
.directive('showcase', showcaseDirective);
