import './showcase.styl';
import {ShowcaseController as controller} from './showcase-controller';
import template from './showcase.html';

export const showcaseDirective = ()=> {
  return {
    template,
    controller,
    controllerAs: 'vm',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
