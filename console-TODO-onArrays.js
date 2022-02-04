const STATUS = {
    TO_DO: 'To Do',
    IN_PROGRESS: 'In Progress',
    DONE: 'Done',
};

const PRIORITY = {
    LOW: 'low',
    HIGH: 'high'
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
    const newTask = {
        name: task,
        status: STATUS.TO_DO,
        priority: 'low',
    }

    list.splice(list.length, 0, newTask)
};

function changeStatus(task, status) {
    let taskFoundIndex = list.findIndex(item => item.name == task);
    if (taskFoundIndex != -1) list[taskFoundIndex].status = status;
    else console.log('This task does not exist!');
};

function showList() {
    const isArrayStatus = {
        ToDo: [],
        InProgress : [],
        Done: [],
    }

    list.forEach((item, index) => {
        if (list[index].status == STATUS.TO_DO) isArrayStatus.ToDo.push(list[index].name)
        if (list[index].status == STATUS.IN_PROGRESS) isArrayStatus.InProgress.push(list[index].name)
        if (list[index].status == STATUS.DONE) isArrayStatus.Done.push(list[index].name)
    })

    for (let status in isArrayStatus){
        if(isArrayStatus[status].length == 0) isArrayStatus[status].push('-')
    }

    console.log(` 
    Done:
        ${isArrayStatus.Done}
    In Progress: 
        ${isArrayStatus.InProgress}
    To Do:
        ${isArrayStatus.ToDo}
    `);
};

function showBy(info){
    if (info == 'status')  showList();
    else if(info == 'priority') {
        const isArrayPriority = {
            HIGH: [],
            LOW: [],
            }
        list.forEach((item, index) => {
            if (list[index].priority == PRIORITY.HIGH) isArrayPriority.HIGH.push(list[index].name)
            if (list[index].priority == PRIORITY.LOW) isArrayPriority.LOW.push(list[index].name)
        })
        for (let priority in isArrayPriority){
            if(isArrayPriority[priority].length == 0) isArrayPriority[priority].push('-')
        }
        console.log(`
            high:
            ${isArrayPriority.HIGH}
            low:
            ${isArrayPriority.LOW}
        `)
    }
}

// addTask('walk on the street');
// changeStatus('create a post','Done');
// deleteTask('create a post');
// showList();

// showBy("status");
// showBy("priority");

