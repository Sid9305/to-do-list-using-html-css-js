window.addEventListener('load',() =>
{
    const new_task = document.querySelector(".new-task-container");
    const input = document.querySelector("#new_task");
    const list = document.querySelector("#tasks");

    new_task.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = input.value;

        if(!task)
        {
            alert("Please fill out the task");
            return;
        }

        const task_class = document.createElement("div");
        task_class.classList.add("task");

        const content_class = document.createElement("div");
        content_class.classList.add("content");

        const text_class = document.createElement("input");
        text_class.classList.add("text");
        text_class.type  = "text";
        text_class.value = task;
        text_class.setAttribute("readonly","readonly");

        content_class.appendChild(text_class);

        const actions_class = document.createElement("div");
        actions_class.classList.add("actions");

        const edit_btn = document.createElement("button");
        edit_btn.classList.add("edit");
        edit_btn.innerHTML = "Edit"
        actions_class.appendChild(edit_btn);

        const del_btn = document.createElement("button");
        del_btn.classList.add("delete");
        del_btn.innerHTML = "Delete"
        actions_class.appendChild(del_btn);

        task_class.appendChild(content_class);
        task_class.appendChild(actions_class);

        list.appendChild(task_class);
        input.value="";

        edit_btn.addEventListener('click' , () => {
            if(edit_btn.innerText == "Edit")
            {
                text_class.removeAttribute("readonly");
                text_class.focus();
                edit_btn.innerText = "Save";
            }
            else
            {
                text_class.setAttribute("readonly","readonly");
                edit_btn.innerText = "Edit";
            }
            
        });

        del_btn.addEventListener('click', () => {
            list.removeChild(task_class);
        });
    })
})