import angular from 'angular';
import {showcaseDirective} from '../showcase/showcase-directive';
// placing an export in front of ar var is the same
// as exporting the var at the end of the file
// using export {varname}
export const showcase = angular.module('showcase', [])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('showcase', {
    url: '/',
    template: `<showcase></showcase>`
  });
})
.directive('showcase', showcaseDirective);
