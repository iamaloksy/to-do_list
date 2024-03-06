const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");


addBtn.addEventListener("click", function () {
  
  let task = taskInput.value;

  
  if (task) {
    
    let li = document.createElement("li");

   
    li.textContent = task;

   
    let closeBtn = document.createElement("button");

   
    closeBtn.textContent = "×";

   
    closeBtn.className = "close";

    
    li.appendChild(closeBtn);

   
    taskList.appendChild(li);

    
    taskInput.value = "";

  
    li.addEventListener("click", function () {
      
      li.classList.toggle("checked");
    });

   
    closeBtn.addEventListener("click", function () {
      
      taskList.removeChild(li);
    });
  }
});
