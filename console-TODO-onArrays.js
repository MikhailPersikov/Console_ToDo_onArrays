const STATUS = {
    TO_DO: 'To Do',
    IN_PROGRESS: 'In Progress',
    DONE: 'Done',
};

const PRIORITY = {
    LOW: 'low',
    HIGH: 'high'
}

const DEFALUT = {
    STATUS: 'To Do',
    PRIORITY: 'low'
}

const list = [{
        name: 'create a post',
        status: STATUS.IN_PROGRESS,
        priority: PRIORITY.LOW,
    },
    {
        name: 'drink a coffee',
        status: STATUS.DONE,
        priority: PRIORITY.LOW,
    },
    {
        name: 'drink a water',
        status: STATUS.DONE,
        priority: PRIORITY.LOW,
    },
    {
        name: ' get the drugs',
        status: STATUS.TO_DO,
        priority: PRIORITY.HIGH,
    }

];

function deleteTask(task) {
    let taskFoundIndex = list.findIndex(item => item.name == task);
    if (taskFoundIndex != -1) list.splice(taskFoundIndex, 1)
    else console.log('This task does not exist!');
};

function addTask(task) {
    const addedTask = {
        name: task,
        status: DEFALUT.STATUS,
        priority: DEFALUT.PRIORITY,
    }

    list.splice(list.length, 0, addedTask)
};

function changeStatus(task, status) {
    const taskFoundIndex = list.findIndex(item => item.name == task);
    if (taskFoundIndex != -1) list[taskFoundIndex].status = status;
    else console.log('This task does not exist!');
};

function showBy(info){
    if (info == 'status')  {
        const objStatus = {
            ToDo: [],
            InProgress : [],
            Done: [],
        }
    
        list.forEach(item => {
            if (item.status == STATUS.TO_DO) objStatus.ToDo.push(item.name)
            if (item.status == STATUS.IN_PROGRESS) objStatus.InProgress.push(item.name)
            if (item.status == STATUS.DONE) objStatus.Done.push(item.name)
        })
    
        for (let status in objStatus){
            if(objStatus[status].length == 0) objStatus[status].push('-')
        }
    
        console.log(` 
        Done:
            ${objStatus.Done}
        In Progress: 
            ${objStatus.InProgress}
        To Do:
            ${objStatus.ToDo}
        `)
    }
    else if(info == 'priority') {
        const objPriority = {
            HIGH: [],
            LOW: [],
            }
        list.forEach(item => {
            if (item.priority == PRIORITY.HIGH) objPriority.HIGH.push(item.name)
            if (item.priority == PRIORITY.LOW) objPriority.LOW.push(item.name)
        })
        for (let priority in objPriority){
            if(objPriority[priority].length == 0) objPriority[priority].push('-')
        }
        console.log(`
            high:
            ${objPriority.HIGH}
            low:
            ${objPriority.LOW}
        `)
    }
}

// addTask('walk on the street');
// changeStatus('create a post','Done');
// deleteTask('create a post');
// showBy("status");
// showBy("priority");

