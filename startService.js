
let NW = require('node-windows');
let Service = NW.Service;

// Create a new service object
let svc = new Service({
  name:'My_APP',
  description: 'The nodejs.org example web server.',
  // E:\\Programming\\Test\\templ_express\\
  script: 'E:\\Programming\\Test\\templ_express\\index.js',
  nodeOptions: [
    '--harmony',
    '--max_old_space_size=4096'
  ]
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();
