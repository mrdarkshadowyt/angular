angular.module('portfolioApp', [])
    .component('header', {
        templateUrl: 'app/components/header/header.component.html',
        controller: function() {
            // Header controller logic
        }
    })
    .component('about', {
        templateUrl: 'app/components/about/about.component.html',
        controller: function() {
            // About controller logic
        }
    })
    .component('projects', {
        templateUrl: 'app/components/projects/projects.component.html',
        controller: function() {
            // Projects controller logic
        }
    })
    .component('contact', {
        templateUrl: 'app/components/contact/contact.component.html',
        controller: function() {
            // Contact controller logic
        }
    });
