/*  Archivo de configuracion de grunt 
 *  y a su vez indexa diversas tareas
 *
 * @Edward Llanca Haro (edwarllanca@hotmail.com)
 *
 */

'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  require('load-grunt-config')(grunt, {
    data: {
      pkg: grunt.file.readJSON('package.json')
    }
  });
};