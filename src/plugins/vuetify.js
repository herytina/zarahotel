// plugins/vuetify.js
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import 'vuetify/dist/vuetify.min.css';
import 'vuetify/styles'; // Importer les styles de Vuetify

const vuetify = createVuetify({
  components,
  directives
});

export default vuetify;
