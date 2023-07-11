# Gbsodev-Techtest-Library-Web

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Generar versión release
### Herramientas requeridas
- Docker Desktop
  - Consulte la sección [Docker Descktop](#docker-desktop)
### Compilar release
```
ng build --configuration=production
```
### Construir imagen docker
```
docker build --pull --rm -f "Dockerfile" -t gbsodev/gbsodev-techtest-library-web:release "."
```
### Publicar imagen de versión en repositorio DOcker Hub
```
docker push gbsodev/gbsodev-techtest-library-web:release
```
### Iniciar aplicación en solitario
```
docker run -p 8080:80 gbsodev/gbsodev-techtest-library-web:release
```

**NOTA:** Para iniciar las capas de api y base de datos, consulte la documentación del repositorio WebApi [Poner en marcha en entorno de desarrollo](https://github.com/GbsoDev/gbsodev-techtest-library-webapi/tree/master#poner-en-marcha-en-entorno-de-desarrollo)

## Puesta en marcha en entorno productivo
- Consulte la [Sección](https://github.com/GbsoDev/gbsodev-techtest-library-webapi/tree/master#puesta-en-marcha-en-entorno-productivo)
 correspondiente en el repositorio WebApi

# Docker Desktop:
Para correr contenedores en el equipo, configure el equipo o servidor en siguiente orden
  1. Habilite la virtualización del procesador `disponible en la bios `
  1. Habilite la característica de Windows Hyper-V. opción `activar o desactivar caracteristicas de Windows`
  1. Instale WSL mediante el comando de PowerShell
     ```
     wsl --install
     ```
  1. Configure la versión 2 de WSL con el comando de PowerShell
     ```
     wsl --set-version 2
     ```
  1. Instalar Docker Desktop para Windows [Aquí](https://www.docker.com/products/docker-desktop/)
