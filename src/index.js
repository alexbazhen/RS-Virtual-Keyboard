import kb from './kb';
import './style.scss';
import Lang from './langSettings';
import FuncKeys from './functionalKeys';
import TextArea from './textarea';

let keyboard;
let keys = [];
let isCaps = false;
function toggleCaps() {
   if (isCaps) {
      isCaps = false;
      keys[29].classList.remove('active');
   } else {
      isCaps = true;
      keys[29].classList.add('active');
   }
}
let isAlt = false;
let isCtrl = false;
let isShift = false;
function manyKey() {
   if (isAlt && isCtrl) {
      Lang.change();
   }
}
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
      keyboard = document.createElement('div');
      keyboard.className = 'keyboard';
      wrapper.append(keyboard);
      for (let i = 0; i < 64; i++) {
         const newKey = document.createElement('button');
         newKey.className = `btn ${kb[i].codeName}`;
         const spanRu = document.createElement('p');
         const spanEn = document.createElement('p');
         spanRu.className = 'ru';
         spanEn.className = 'en';
         spanRu.innerHTML = `
         <span class="caseDown ${Lang.build('ru')}">${kb[i].ru.caseDown}</span>
         <span class="caseUp hidden">${kb[i].ru.caseUp}</span>
         <span class="caps hidden">${kb[i].ru.caps}</span>
         <span class="shiftCaps hidden">${kb[i].ru.shiftCaps}</span>`;
         spanEn.innerHTML = `
         <span class="caseDown ${Lang.build('en')}">${kb[i].en.caseDown}</span>
         <span class="caseUp hidden">${kb[i].en.caseUp}</span>
         <span class="caps hidden">${kb[i].en.caps}</span>
         <span class="shiftCaps hidden">${kb[i].en.shiftCaps}</span>`;
         newKey.append(spanRu);
         newKey.append(spanEn);
         keyboard.append(newKey);
      }
      keys = keyboard.querySelectorAll('button');

      // Create Attention
      const attention = document.createElement('p');
      attention.innerHTML = 'Создано в ОС Windows <br>Для переключения языка ввода, используйте комбинацию: левые Alt + Ctrl';
      wrapper.append(attention);
   }
}
generationKeyboard();

function checkCode(symb, down) {
   switch (symb) {
      case 'CapsLock':
         if (!down) {
            toggleCaps();
            FuncKeys.caps(keys, isCaps, isShift);
         }
         break;
      case 'ShiftLeft':
         if (!down) {
            isShift = true;
            FuncKeys.shift(keys, isShift, isCaps);
         } else {
            isShift = false;
            FuncKeys.shift(keys, isShift, isCaps);
         }
         break;
      case 'ShiftRight':
         if (!down) {
            isShift = true;
            FuncKeys.shift(keys, isShift);
         } else {
            isShift = false;
            FuncKeys.shift(keys, isShift);
         }
         break;
      case 'ControlLeft':
         if (!down) {
            isCtrl = true;
            manyKey();
         } else {
            isCtrl = false;
         }
         break;
      case 'AltLeft':
         if (!down) {
            isAlt = true;
            manyKey();
         } else {
            isAlt = false;
         }
         break;
      default:
         break;
   }
}
function inTextArea(keyb, key) {
   let symb = false;
   let ent;
   if (keyb) {
      symb = key.code;
      keys.forEach((actKey) => {
         if (actKey.classList.contains(key.code)) {
            const allSpans = actKey.querySelectorAll('span');
            allSpans.forEach((el) => {
               if (!el.classList.contains('hidden')) {
                  ent = el.innerText;
               }
            });
         }
      });
   } else {
      symb = key.target.classList.item(1);
      const allSpans = key.target.querySelectorAll('span');
      allSpans.forEach((el) => {
         if (!el.classList.contains('hidden')) {
            ent = el.innerText;
         }
      });
   }
   switch (symb) {
      case 'CapsLock':
         break;
      case 'ShiftLeft':
         break;
      case 'ShiftRight':
         break;
      case 'ControlLeft':
         break;
      case 'ControlRight':
         break;
      case 'AltLeft':
         break;
      case 'MetaLeft':
         break;
      case 'AltRight':
         break;
      case 'Backspace':
         TextArea.back();
         break;
      case 'Delete':
         TextArea.delete();
         break;
      case 'Tab':
         TextArea.add('   ');
         break;
      case 'Enter':
         TextArea.add('\n');
         break;
      case 'ArrowUp':
         TextArea.add('▲');
         break;
      case 'ArrowDown':
         TextArea.add('▼');
         break;
      case 'ArrowLeft':
         TextArea.add('◄');
         break;
      case 'ArrowRight':
         TextArea.add('►');
         break;
      default:
         TextArea.add(ent);
         break;
   }
}
window.addEventListener('keydown', (e) => {
   e.preventDefault();
   keys.forEach((key) => {
      if (key.classList.contains(e.code)) {
         key.classList.add('hover');
         checkCode(e.code);
         inTextArea(true, e);
      }
   });
});
window.addEventListener('keyup', (e) => {
   e.preventDefault();
   keys.forEach((key) => {
      if (key.classList.contains(e.code)) {
         key.classList.remove('hover');
         checkCode(e.code, true);
      }
   });
});
keyboard.addEventListener('mousedown', (e) => {
   e.preventDefault();
   if (e.target.classList.contains('btn')) {
      e.target.classList.add('hover');
      checkCode(e.target.classList.item(1));
      inTextArea(false, e);
   }
});
keyboard.addEventListener('mouseup', (e) => {
   e.preventDefault();
   if (e.target.classList.contains('btn')) {
      e.target.classList.remove('hover');
      checkCode(e.target.classList.item(1), true);
   }
});
