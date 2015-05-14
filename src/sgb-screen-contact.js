'use strict';

angular.module('sgb-screen-contact', ['megazord'])
    .controller('sgb-screen-contact-controller', ['$stateParams', '_screen', '_screenParams', '$scope', function ($stateParams, _screen, _screenParams, $scope) {

        _screen.initialize($scope, _screenParams);

        $scope.contactInfo = $stateParams.data;

        $scope.launchTwitter = function () {
        };

        $scope.launchFacebook = function () {
        };

        $scope.launchLinkedIn = function () {
        };

        $scope.launchYouTube = function () {
        };

        $scope.launchOther = function () {
        };

    }]);