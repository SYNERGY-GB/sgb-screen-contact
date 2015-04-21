'use strict';

angular.module('sgb-screen-contact', ['megazord'])
  .controller('sgb-screen-contact-controller', ['$stateParams', '$scope', function($stateParams, $scope){
    $scope.contactInfo = $stateParams.data;

    $scope.launchTwitter = function(){};

    $scope.launchFacebook = function(){};

    $scope.launchLinkedIn = function(){};

    $scope.launchYouTube = function(){};

    $scope.launchOther = function(){};

  }]);