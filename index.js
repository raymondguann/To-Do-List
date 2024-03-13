window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        const task_el = document.createElement('div');
        task_el.classList.add('task');

        // creating task elements (check, edit, delete, delete)

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');
    
        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = task;
        task_input_el.setAttribute('readonly', 'readonly');

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');

        const task_check_el = document.createElement('button');
        task_check_el.classList.add('check');
        task_check_el.innerText = '✓';
        
        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerText = 'Edit';

        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerText = 'X';

        // const task_clear_el = document.createElement('button');
        // task_clear_el.classList.add('clear');
        // task_clear_el.innerText = 'Clear';


        task_actions_el.appendChild(task_check_el);
        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);
        //task_actions_el.appendChild(task_clear_el);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);

        // appends the newly created task element to list 

        input.value = '';

        // set up event listeners for each action button on click (check, edit, delete)

        task_check_el.addEventListener('click', (e) => {
            if (task_check_el.innerText.toLowerCase() == "✓") {
                task_check_el.innerText = "uncheck";
                task_input_el.style.color = "green";
                task_input_el.style.textDecoration = "line-through";
                task_input_el.removeAttribute("style, color");
                task_input_el.focus();
            } else {
                task_check_el.innerText = "✓";
                task_input_el.setAttribute("style", "color");
            }
        });

        task_edit_el.addEventListener('click', (e) => {
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                task_edit_el.innerText = "Save";
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
            } else {
                task_edit_el.innerText = "Edit";
                task_input_el.setAttribute("readonly", "readonly");
            }
        });

        task_delete_el.addEventListener('click', (e) => {
            list_el.removeChild(task_el);
        });

        task_clear_el.addEventListener('click', (e) => {
            if (task_check_el.innerText.toLowerCase() == "uncheck") {
                list_el.innerText ="";
            }
        });
    })
})