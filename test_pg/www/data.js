var myApp = angular.module('myApp');

myApp.factory('Data', function(){
    var data = {};
    
    data.items = [
        { 
            title: 'Ashley',
            icon: 'comment-o',
            description: 'Item 1 Description'
        },
        { 
            title: 'Hannah',
            icon: 'desktop',
            description: 'Item 2 Description'
        },
        { 
            title: 'Ellie',
            icon: 'heart-o',
            description: 'Item 3 Description'
        }
    ]; 
    
    return data;
});