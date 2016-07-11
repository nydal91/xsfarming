export default function() {



 this.get('/videos', function() {
    return {
      data: [{
        type: 'videos',
id: 1,
        attributes: {
title: 'Small farming in Scandinavia',
text: 'jappjapp',
date: 2016,
url: 'https://www.youtube.com/embed/sEhDN6-JhCM'
  }
      },


{
        type: 'videos',
id: 2,
        attributes: {
title: 'Small farming in Scandinavia part 2',
text: 'jappjapp',
date: 2016,
url: 'https://www.youtube.com/embed/2IYvxTStGAg'
  }
},
{
        type: 'videos',
id: 3,
        attributes: {
title: 'Small farming in Scandinavia part 3',
text: 'jappjapp',
date: 2016,
url: 'https://www.youtube.com/embed/gp2_lN3mHRo'
}


      },
{
        type: 'videos',
id: 4,
        attributes: {
title: 'Tractor fixing',
text: 'jappjapp',
date: 2016,
url: 'https://www.youtube.com/embed/uJZ-_llCQWo'
}



},

{
        type: 'videos',
id: 5,
        attributes: {
title: 'Starting Haymaking',
text: 'jappjapp',
date: 2016,
url: 'https://www.youtube.com/embed/COJtRsdPErk'
}



},

{
        type: 'videos',
id: 6,
        attributes: {
title: 'Farming silo',
text: 'jappjapp',
date: 2016,
url: 'https://www.youtube.com/embed/o41Hb9SfBCg'
}



},




{
        type: 'videos',
id: 7,
        attributes: {
title: 'Farming cows',
text: 'jappjapp',
date: 2016,
url: 'https://www.youtube.com/embed/OJrsVS5VqMM'
}


}

]
    };
  });

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
}
