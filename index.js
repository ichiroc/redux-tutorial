import { createStore } from 'redux';
import { addTodo, toggleTodo, setVisibilityFilter } from './actions/index.js';

let store = createStore(function(){ return 'Hello Redux'; });

//Todo の追加
var addTodoElem = document.getElementById('addTodo');
var input = addTodoElem.getElementsByTagName('input')[0];
var button = addTodoElem.getElementsByTagName('button')[0];
buton.addEventListener('click',()=>{
    // ボタンをクリックしたら「TODOを追加する」というアクションをStoreに渡す
    var todoText = input.value;
    store.dispatch(addTodo(todoText));
});


//Todo の完了
var todoList = document.getElementById('todoList');
var elements = todoList.getElementsByTagName('li');
var listArray = [...elements];
listArray.forEach((v,index) => {
    store.dispatch(toggleTodo(index));
    //TODOをクリックしたら「TODOの完了状態を切り替える」というアクションをStoreに渡す
});

//フィルタリング
var links = document.getElementById('links');
var childs = links.childNodes;
var childList = [...childs];
childList.filter(v => v.nodeName != '#text' ).forEach(v => {
    v.addEventListener('click', e => {
        // リンクをクリックしたら「TODOのフィルタリング状態を切り替える」というアクションをStoreに渡す
        var filterText = v.innerHTML;
        store.dispatch(setVisibilityFilter(filterText));
    });
});
