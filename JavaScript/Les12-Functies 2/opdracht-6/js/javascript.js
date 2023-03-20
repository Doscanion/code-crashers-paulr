function reFunction(number) {
    // number % 2 == 0 ? console.log('positief getal') : number - 1,
    //     reFunction(number);
    if (number % 2 == 0) {
        console.log('positief getal ' + 4);
    } else {
        console.log(number);
        reFunction(number - 1);
    }
}
reFunction(5);

let employees = {
    design: [
        {
            name: 'Ruud',
            salary: 1200,
        },
        {
            name: 'Nancy',
            salary: 2100,
        },
    ],
    development: {
        frontend: {
            angular: [
                {
                    name: 'Mika',
                    salary: 1900,
                },
                {
                    name: 'Jeffrey',
                    salary: 1900,
                },
            ],
            react: [
                {
                    name: 'Julio',
                    salary: 2400,
                },
            ],
        },
        backend: [
            {
                name: 'Aron',
                salary: 2600,
            },
        ],
    },
    seo: [
        {
            name: 'Alex',
            salary: 1800,
        },
    ],
};

const isObject = (val) => {
    if (val === null || Array.isArray(val) || val === undefined) {
        return false;
    }

    return typeof val === 'object';
};

let moneyCombined = 0;

function salary(employees) {
    for (const key in employees) {
        if (Array.isArray(employees[key])) {
            console.log(employees[key]);
            for (const money in employees[key]) {
                console.log(employees[key][money].salary);
                moneyCombined += employees[key][money].salary;
            }
        } else {
            console.log('nope ' + key);
            salary(employees[key]);
        }
    }
}

salary(employees);
console.log(moneyCombined);
