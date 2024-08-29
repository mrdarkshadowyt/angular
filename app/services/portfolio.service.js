angular.module('portfolioApp').service('PortfolioService', function($http) {
    this.getProjects = function() {
        return $http.get('assets/projects.json');
    };
});
