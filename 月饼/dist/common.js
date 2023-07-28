const i18nDoms = document.querySelectorAll('[i18n-key]');
const lang = new URLSearchParams(location.search).get('lang') || 'zh_CN';
[...i18nDoms].forEach(item => {
  const keyValue = contentMap[lang][item.getAttribute('i18n-key')]
  if (keyValue) {
    if (item.nodeName === 'IMG') {
      item.src = keyValue
    } else {
      item.innerHTML = keyValue;
    }
  }
})