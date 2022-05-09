export default class Lang {
   static get() {
      if (localStorage.getItem('active-lang') == null) {
         this.set('en');
      }
      return localStorage.getItem('active-lang') == null ? 'en' : localStorage.getItem('active-lang');
   }

   static build(lang) {
      const activeLang = this.get();
      return activeLang === lang ? '' : 'hidden';
   }

   static set(lang) {
      localStorage.setItem('active-lang', lang);
   }

   static change() {
      if (localStorage.getItem('active-lang') === 'en') {
         this.set('ru');
         const keys = document.querySelectorAll('button');
         keys.forEach((key) => {
            const allSpan = key.querySelectorAll('span');
            allSpan.forEach((el) => {
               if (!el.classList.contains('hidden')) {
                  const name = el.classList.item(0);
                  el.classList.add('hidden');
                  const newParent = key.querySelector('.ru');
                  const newEl = newParent.querySelector(`.${name}`);
                  newEl.classList.remove('hidden');
               }
            });
         });
      } else {
         this.set('en');
         const keys = document.querySelectorAll('button');
         keys.forEach((key) => {
            const allSpan = key.querySelectorAll('span');
            allSpan.forEach((el) => {
               if (!el.classList.contains('hidden')) {
                  const name = el.classList.item(0);
                  el.classList.add('hidden');
                  const newParent = key.querySelector('.en');
                  const newEl = newParent.querySelector(`.${name}`);
                  newEl.classList.remove('hidden');
               }
            });
         });
      }
   }
}
