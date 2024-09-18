const taskContent = document.querySelector('#taskContent')
const statusContent = document.querySelector('#statusContent')
const taskForm = document.querySelector('#taskForm')
const inputText = document.querySelector('#inputText')
const jsStatus = document.querySelectorAll('.js-status')

const items = [
    {name: 'Task 1', status: 1},   /*burdaki name figmanin 1-ci divine aiddir */
    {name: 'Task 2', status: 0},
    {name: 'Task 3', status: 0},
    
]

let editIndex = '';


function taskItem (index) {
    const task = items[index]
   


    return `
    <div class="p-[12px] flex items-center justify-between border border-[#E1E1E1]">
    <label class="${task.status ? 'line-through' : ''}">
        <input onchange="changeStatus(${index}, event)" type="checkbox" ${task.status ? 'checked' : ''}> 
        <span>${task.name}</span>
    </label>

    <div class="flex items-center gap-x-[8px]">
        <button onclick="deleteTask(${index})" class="flex bg-red-500 text-white rounded size-[20px] items-center justify-center text-[12px]">
            <i class="fa fa-trash"></i>
        </button>

        <button onclick="editTask(${index})" class="flex bg-blue-500 text-white rounded size[20px] items-center justify-center text-[12px]">
            <i class="fa fa-pen"></i>
        </button>
        
    </div>
</div>
`

   /*function deleteTask () { /* bu teq barauzerde klik etdiyimizde konsolda verir bize burdaki konsolda yazdigimizi 
    console.log(vfvv);    } */
    
 


    const deleteTask = (index) => {
        items.splice(index, 1)
        createUI()
            }

const changeStatus = (index, e) =>
items[index].status = e.target.checked ? 1 : 0
createUI()
}

const editTask = (index) => {
    const task = items[index];
    inputText.value = task.name;
    editIndex = index;
  
    
}

  function createUI (status = '') {
    taskContent.innerHTML = ''
   
   

    for (let index in items) {
    if (status)  {
     const task = items[index];
      if (task.status === parseInt(status)) {
         taskContent.innerHTML += taskItem(index)
      }
      
    }
     else{
        taskContent.innerHTML += taskItem(index)
     }

   /* taskContent.innerHTML += taskItem()   /* <input type="checkbox" ${task.status ? 'checked' : ''}> o demekdir ki, status varsa(bu status 
    yuxaridaki 0,1-lerdir), 2-ci taski sec, yoxdursa bos qoy */
    }
   }
  
  createUI();

   taskForm.addEventListener('submit', function (e)  {

  
     e.preventDefault()   /*bu deyer bize forumu yenilemeden verecek */
     
    const value = inputText.value;
      inputText.value = ''  /*axtarisda nese yazsaq brauzerde butona sixdiqda elave edecek, ancaq axtaris yerinden silecek yazdigimizi */
    inputText.focus()  /*yazdigimizi elavedib sildekden sonra secili saxlayir kursuru axtaris yerinde */

    
     
    if (value.trim()) { /*trim onun cun dur ki, biz bosluq verende klik etsek,bos tesk elave etmesin */
        /*items.push({name: value, status: 0},) /*value yaziriq ki brauzerde 1-ci axtaris yerine nese yazib yasilpilusa vursaq, onu elave etsin*/
        if (editIndex.toString()) {
        items[editIndex].name = value;
        editIndex = ''   
        }
        else{
            items.unshift({name: value, status: 0}) /* yazdiqda ise, yazdiqlarimizin eynisi yuxari elave olunur*/
        }
        
     
    }
  
      
    createUI();
})


 /*inputText.addEventListener('keyup', function () {  ne edirikse brauzerde consolda gosterir
    console.log(e)
}) */



/*for (let btn of jsStatus) {
    btn.addEventListener('click', function () {
        console.log(this);
    })
  }   */


   /* statusContent.addEventListener('click', function () {
        if (e.target.tagName === 'BUTTON')  {
        console.log(e.target.getAttribute('data-status'));
        }
        
    }) */

    statusContent.addEventListener('click', function () {
        if (e.target.tagName === 'BUTTON')  {
       createUI(e.target.dataset.status)
        }
        
    })







    






    
  