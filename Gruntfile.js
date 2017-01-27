/*
 * Este archivo muestra una configuración para iniciar el servidor y
 * levantar al plugin watch.
 *
 * Note: Configuración básica para los primeros entregables
 * se trata de no tener muchos archivos, o instrucciones sueltas
 * en la aplicación.
 *
 * @author Edward Llanca Haro (edwarllanca@hotmail.com)
 */
'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    connect: { // Conexión al servidor local
      server: {
        options: {
          port: 9000,
          base: 'app/',
          keepalive: true
        }
      }
    }
  });

  // Carga de paquequetes instalados en 'node_modules'
  grunt.loadNpmTasks('grunt-contrib-connect');
  
  // Registro de tareas para levantar procesos de grunt.
  // Si se desea agregar mas tareas deben ser agregadas tambien
  // en esta linea.
  grunt.registerTask('default', ['connect']);

};