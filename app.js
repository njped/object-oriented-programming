// class Person {
    
// }

const person1 = {
    name: 'Nathan',
    username: 'njpedigo',
    role: 'Programmer',
    ablities: [
        'teleport',
        'fly',
        'ultimate blacksmith',
        'fire laser beams'
    ],
    doCommute: () => {
        console.log('using a car')
    }
}

const person2 = {
    name: 'Evil Nathan',
    username: 'evelpedigo',
    role: 'evil villian of all programmers',
    ablities: [
        'fly',
        'lazy superpower',
        'fire black laser beams'
    ],
    doCommute: () => {
        console.log('using a private jet')
    }
}

const person3 = {
    name: 'Newsreporter Nathan',
    username: 'reportpedigo',
    role: 'reporter for all programmers',
    ablities: [
        'sleep',
        'keyboard warrior'
    ],
    doCommute: () => {
        console.log(`doesn't leave his home at all, because he is lazy`)
    }
}


const personList = [person1, person2, person3]

for(let person in personList) {
    person.doCommute()
}

class Person {
    constructor(name) {
        this.name = name;
        this.username = 'njpedigo';
        this.role = 'Programmer';
        this.ablities = [
            'teleport',
            'fly',
            'ultimate blacksmith',
            'fire laser beams'
        ];
    }
    
    doCommute () {
        console.log('user a car');
    }
}
