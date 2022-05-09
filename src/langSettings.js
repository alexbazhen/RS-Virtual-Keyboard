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
}
