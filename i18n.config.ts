import { zhTW } from './lang/zh_TW';
// import { en } from './lang/en';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'zh_TW',
  messages: {
    zh_TW: zhTW,
  },
}));
