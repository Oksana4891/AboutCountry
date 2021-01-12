import PNotify from '../../node_modules/pnotify/dist/es/PNotify.js';
import PNotifyStyleMaterial from '../../node_modules/pnotify/dist/es/PNotifyStyleMaterial.js';
import { messages } from './message.js';

const error = () => {
  PNotify.error({
    title: 'Error',
    text: messages.error,
    modules: {
      Desktop: {
        desktop: true,
      },
    },
  });
};

const info = () => {
  PNotify.info({
    title: 'Info',
    text: messages.info,
    modules: {
      Desktop: {
        desktop: true,
      },
    },
  });
};

export { error, info };
