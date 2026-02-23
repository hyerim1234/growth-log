// plugins/vuetify.js
import 'vuetify/styles'; // Vuetify 스타일을 가져옵니다
import { createVuetify } from 'vuetify';
import { mdi } from 'vuetify/lib/iconsets/mdi';

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases: {
      // 아이콘 설정
      mdi,
    },
    sets: {
      mdi,
    }
  }
});
