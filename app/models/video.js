import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({


title: attr(),
text: attr(),
date: attr(),
youtube: attr(),
url: attr()

});
