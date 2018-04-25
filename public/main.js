function addItem(text){
    var list = document.getElementById('list');
    var item = document.createElement('tr');
    item.innerHTML = text;
    list.appendChild(item);
  };
  
  var input = document.getElementById('input')
  input.value = '';
  input.focus();
  var button = document.getElementById('button');
  
  input.addEventListener('keyup', handleKeyup);
  
  function handleClick(){
    addItem(input.value);
    input.value = '';
  };
  button.addEventListener('click',handleClick);