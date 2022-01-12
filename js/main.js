* {
    padding: 0;
    margin: 0;
}

body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    font-family: sans-serif;
    background: linear-gradient(#0081f0,#DC281E);
}

button:hover {
    cursor: pointer;
    background: green;
}

ul {
    list-style-type: none;
}

#container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

h1 {
    color: #fff;
    font-size: 40px;
}

/* forma -> todo-form */

.todo-form {
    max-width: 100%;
    margin: 40px 0;
}

.todo-input {
    width: 60%;
    border: 0;
    outline: 0;
    border-radius: 10px;
    padding: 10px;
    margin-right: 10px;
    font-size: 20px;
}

.add-button {
    background: #ff7b7b;
    color: #fff;
    border: 0;
    outline: 0;
    border-radius: 10px;
    padding: 10px 30px;
    font-size: 20px;
}

/* stavke liste -> todo-items*/

.todo-items {
    min-width: 50%;
    max-width: 100%;
}

.item {
    background: #fff;
    padding: 10px;
    font-size: 20px;
}

.item:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.item:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

.checkbox {
    margin-right: 10px;
}

.delete-button {
    float: right;
    background: red;
    border: 0;
    outline: 0;
    border-radius: 10px;
    padding: 1px 10px;
    margin-left: 10px;
    font-size: 20px;
    font-weight: 600;
    color: #fff;
}

.checked {
    text-decoration: line-through;
}






