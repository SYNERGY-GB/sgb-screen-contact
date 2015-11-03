'use strict';

angular.module('sgb-screen-contact', ['megazord'])
    .controller('sgb-screen-contact-controller', ['_data', '_screen', '_screenParams', '$scope', function (_data, _screen, _screenParams, $scope) {

        _screen.initialize($scope, _screenParams);

        $scope.contactInfo = _data;

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