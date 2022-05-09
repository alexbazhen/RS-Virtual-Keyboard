import kb from './kb';
import './style.scss';

function generationKeyboard() { // Generation Keyboard
   if (document.body) {
      // Create Wrapper
      const wrapper = document.createElement('div');
      wrapper.className = 'wrapper';
      document.body.append(wrapper);

      // Create Name App
      const titleApp = document.createElement('h1');
      titleApp.innerText = 'RS School Virtual Keyboard';
      wrapper.append(titleApp);

      // Create TextArea
      const area = document.createElement('textarea');
      area.className = 'textarea';
      wrapper.append(area);

      // Create Keyboard Div
      const keyboard = document.createElement('div');
      keyboard.className = 'keyboard';
      wrapper.append(keyboard);
      for (let i = 0; i < 64; i++) {
         const newKey = document.createElement('button');
         newKey.className = `btn ${kb[i].codeName}`;
         const spanRu = document.createElement('span');
         const spanEn = document.createElement('span');
         spanRu.className = 'ru';
         spanEn.className = 'en';
         spanRu.innerHTML = `
         <span class="caseDown">${kb[i].ru.caseDown}</span>
         <span class="caseUp hidden">${kb[i].ru.caseUp}</span>
         <span class="caps hidden">${kb[i].ru.caps}</span>
         <span class="shiftCaps hidden">${kb[i].ru.shiftCaps}</span>`;
         spanEn.innerHTML = `
         <span class="caseDown hidden">${kb[i].en.caseDown}</span>
         <span class="caseUp hidden">${kb[i].en.caseUp}</span>
         <span class="caps hidden">${kb[i].en.caps}</span>
         <span class="shiftCaps hidden">${kb[i].en.shiftCaps}</span>`;
         newKey.append(spanRu);
         newKey.append(spanEn);
         keyboard.append(newKey);
      }

      // Create Attention
      const attention = document.createElement('p');
      attention.innerHTML = 'Создано в ОС Windows <br>Для переключения языка ввода, используйте комбинацию: Alt + Ctrl';
      wrapper.append(attention);
   }
}
generationKeyboard();
