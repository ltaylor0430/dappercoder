//TODO: import angular and other dependencies
/**
 * we don't need to use a variable
 * or the from keyword when importing a css/styl file
 * thanks the styles loader it gets added as a
 * <style> tag in the head by default but can be changed
 * we are importing a module called normalize.css,
 * and relative paths are not modules
 */

import 'normalize.css';
import {appDirective} from './app-directive';

//the angular libs are just common js
///and therefore we can assume they were
/////exported using the default keyword in ES2015
///so we can import each module
///with any name we see fit.
///Note that the actual value are just strings except angular itself
///because that's how angular decided to export
///their auxilary modules
import angular from 'angular';

//TODO: import other dependencies
import _ from 'lodash';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import {home} from './components/home/home';
import {blog} from './components/blog/blog';
angular.module('app',[
    uiRouter,
    ngAnimate,
  // home is the module, the angular module
  // because that's what we exported in home.js
  // all angular modules have a name
  // property who's value is the name you set the
  // module to be
  home.name,
  blog.name
  ]).directive('app', appDirective);

