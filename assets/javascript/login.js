'use strict';

uixecureShopApp.controller('loginController', ['$scope', '$http', '$window', '$document', function($scope, $http, $window, $document) {
    // login
    $scope.error = '此欄位不能為空白';
    let request = {
        name: 'system',
        password: '123'
    };
    $scope.userName = '';
    $scope.userCode = '';
    let isAuthenticated = false;

    $scope.formLogin = function() {
        const userName = $scope.userName;
        const userCode = $scope.userCode;        
        const config_form = {'Content-Type': 'application/json; charset=utf-8'};
        
        $http.post('http://localhost:3000/login', JSON.stringify(request), config_form).then(function(response){
            isAuthenticated = userName === request.name && userCode === request.password;
            $scope.data = response.data;
            if (isAuthenticated){
                $window.location = 'index_login.html';
            } else {
                // alert('帳號密碼錯誤!');
                swal({
                    text: "帳號密碼錯誤!",
                    icon: "error",
                    button: "確定",
                    confirmButtonText: 'Submit',
                    showCancelButton: true
                });
            }
        }).catch(function(response){
            const err = response.data;
            swal({
                text: "無法連結資料庫",
                icon: "error",
                button: "確定",
            });
        });
    }
    
    // eye password
    const password = $document[0].querySelector('#password');
    const eyepassword = $document[0].querySelector('#eye-password');
    eyepassword.addEventListener('click', () => {
        if(password.type === 'password') {
            password.type = 'text';
            eyepassword.classList.remove('fa-eye-slash','text-gray-400');
            eyepassword.classList.add('fa-eye','text-primary');
        } else {
            password.type = 'password';
            eyepassword.classList.add('fa-eye-slash','text-gray-400');
            eyepassword.classList.remove('fa-eye','text-primary');
        }
    });
}]);
