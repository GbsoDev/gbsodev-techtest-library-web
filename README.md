# GbsodevTechtestLibraryWeb

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


##### Herramientas requeridas
	Docker Desktop
##### Generar versión
Run `ng build --configuration=production`

##### Construir imagen docker
run `docker build --pull --rm -f "Dockerfile" -t gbsodev/gbsodev-techtest-library-web:release "."`

### Publicar contenedor en repositorio
Run `docker push gbsodev/gbsodev-techtest-library-web:release`

### Iniciar aplicación en solitario
run `docker run -p 80:80 gbsodev/gbsodev-techtest-library-web:release`

### Iniciar aplicación front, api y base de datos
run `docker-compose up -p gbsodev-techtest-library`
