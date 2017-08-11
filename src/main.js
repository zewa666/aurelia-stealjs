import { bootstrap } from 'aurelia-bootstrapper';

export function configure(aurelia) {
  bootstrap((aurelia) => {
    aurelia.use
      .defaultBindingLanguage()
      .defaultResources()
      .developmentLogging();
      
    aurelia.start()
      .then( () => { aurelia.setRoot("src/app", document.body); } )
      .catch( (e) => console.log(e) );
  });
}
