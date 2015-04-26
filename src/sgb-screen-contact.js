'use strict';

angular.module('sgb-screen-contact', ['megazord'])
  .controller('sgb-screen-contact-controller', ['$stateParams', '_screenParams', '$scope', function($stateParams, _screenParams, $scope){

      $scope.title = _screenParams.title || 'contact_info_title';
      $scope.contactInfo = $stateParams.data;

      $scope.launchTwitter = function(){};

      $scope.launchFacebook = function(){};

      $scope.launchLinkedIn = function(){};

      $scope.launchYouTube = function(){};

      $scope.launchOther = function(){};

  }]);