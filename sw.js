importScripts('https://cdnjs.cloudflare.com/ajax/libs/sw-toolbox/3.6.1/sw-toolbox.js');

toolbox.options.debug = true;

toolbox.precache([
    'index.html',
    'views/principal.html',
    'views/produto.html',
    'js/loja.js',
    'produtos.json',
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
    'https://code.jquery.com/jquery-3.2.1.slim.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js',
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js',
    'https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/1.0.3/angular-ui-router.min.js'
]);

toolbox.router.get('index.html', toolbox.networkFirst);
toolbox.router.get('views/*', toolbox.networkFirst);
toolbox.router.get('js/loja.js', toolbox.networkFirst);
toolbox.router.get('produtos.json', toolbox.networkFirst);

toolbox.router.get('*', toolbox.cacheFirst);