#!/bin/sh

VERSION=$(ng version)
if [ -n "$VERSION" ]
then
	echo "Angular version is $VERSION"
else
	echo "angular CLI isn't installed"
	echo "Angular CLI will be installed"
	npm update
	npm install -g @angular/cli
fi
