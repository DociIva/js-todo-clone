//console.log('CIAO BELLI');
$(document).ready(function() {

// sorgente dall'esterno
// arr di ogg
var todoItems = [
    { 
        text : 'ritirare la spesa',
        completed : false,

    },
    {
        text : 'fare la lavatrice',
        completed : true,
    },
    {
        text : 'pagare le bollete',
        completed : false,
    },
    {
        text : 'valare il cane',
        completed : true,
    },
    
];

// referenze

var list = $('.todos');
var newInput = $('.add-todo');
var template = $('#template li');

// 1. popolazione della todo list (p --> riempire con dati non nostri)
// cicliamo
for(var i = 0; i < todoItems.length; i++) {
    var todo = todoItems[i];
    // template (clone clona il nostro template dal html)
    var item = template.clone();
    // cerca
    item.find('.text').text(todo.text);

    if(todo.completed){
        item.find('.text').addClass('completed');
    }

    // aggiunta alla lista
    list.append(item);
};

// 2. Inserimento nuovo todo 
newInput.keyup(function(event){
  console.log( event.which );
  
  if(event.which === 13){
      var text = newInput.val().trim();

      if(text !== ''){
         console.log(text);
         
           // template 
           var item = template.clone();
           item.find('.text').text(text);
           // aggiungi alla lista
           list.append(item);

           // reset 
          newInput.val('');

        }
    }
});
    // 3. rimozione todo item 
    // A
    /*list.find('li i').click(function(){
       $(this).parent().remove();
    });*/

    //B
    $('body').on('click', '.todos li i', function(){
        $(this).parent().remove();
    });
    
    // rendi todo completato / da fare
    // A
    /*
    list.find('.text').click(function(){
        $(this).toogleClass('completed');
    });
    */
    // B
    $('body').on('click', 'todos li span', function(){
        $(this).toogleClass('completed');
    });









// chiusura doc ready

});