'use strict';
const uixecureShopApp = angular.module('uixecureShopApp', []);

uixecureShopApp.controller('headerController', ['$scope', '$document', function ($scope, $document) {
    // language data
    $scope.language = ['繁體中文', 'English', '日本語'];
    // language Menu
    $scope.languageMenu = false;
    $scope.languagePhone = false;
    $scope.languageIndex = 0;
    $scope.lang = 0;
    $scope.languageToggle = function() {
        $scope.languageMenu = !$scope.languageMenu;
    }
    $scope.languagePhoneToggle = function() {
        $scope.languagePhone = !$scope.languagePhone;
    }
    $scope.languageFun = function(i) {
        $scope.languageMenu = !$scope.languageMenu;
        $scope.languageIndex = i;
    }
    // member
    $scope.memberMenu = false;
    $scope.memberPhone = false;
    $scope.memberToggle = function() {
        $scope.memberMenu = !$scope.memberMenu;
    }
    $scope.memberPhoneToggle = function() {
        $scope.memberPhone = !$scope.memberPhone;
    }
    // navbar javascript
    const bars = $document[0].querySelector(".bars");
    const menu = $document[0].querySelector(".menu");
    bars.addEventListener("click", (e) => {
        // console.log(e.target.classList)
        if (e.target.classList[1] === "fa-bars") {
            menu.classList.add("menu-show");
            bars.querySelector("i").classList.remove("fa-bars");
            bars.querySelector("i").classList.add("fa-xmark");
        } else {
            menu.classList.remove("menu-show");
            bars.querySelector("i").classList.add("fa-bars");
            bars.querySelector("i").classList.remove("fa-xmark");
        }
    });
}]);

uixecureShopApp.controller('footerController', ['$scope', function($scope){
    // 顯示頁尾西元年份
    $scope.year = new Date().getFullYear();
}]);