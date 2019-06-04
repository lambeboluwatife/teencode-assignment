const style = document.createElement('style');
style.innerHTML = 'div {' +
'background-color: darkred;' +
'padding: 20px;' +
'}';

const ref = document.querySelector('script')

ref.parentNode.insertBefore(style, ref);
