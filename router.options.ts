import { resolve } from 'path';
import type { RouterConfig } from '@nuxt/schema';

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
  hooks: {
    'pages:extend'(pages: any[]) {
      // add a route
      pages.push({
        name: 'user-terms-of-use',
        path: '/user-terms-of-use',
        file: resolve(__dirname, 'pages/docs/user-terms-of-use.vue'),
      });

      pages.push({
        name: 'transactionFeeAndLimit',
        path: '/transaction-fee-and-limit',
        file: resolve(
          __dirname,
          'pages/docs/gogowire/transaction-fee-and-limit.vue'
        ),
      });

      // remove routes
      // function removePagesMatching(pattern: RegExp, pages: NuxtPage[] = []) {
      //   const pagesToRemove = [];
      //   for (const page of pages) {
      //     if (pattern.test(page.file)) {
      //       pagesToRemove.push(page);
      //     } else {
      //       removePagesMatching(pattern, page.children);
      //     }
      //   }
      //   for (const page of pagesToRemove) {
      //     pages.splice(pages.indexOf(page), 1);
      //   }
      // }
      // removePagesMatching(/\.ts$/, pages);
    },
  },
};
