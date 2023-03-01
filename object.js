const person = {
    name: 'Sufiyan',
    isStudent: true,
    friends : ['rahim', 'karim', 'jamal', 'hafiz'],
    marks: {
        bangla: 56,
        english: 70,
        math: 80,
    },
    exam: function(){
        const fullMarks = this.marks.bangla + this.marks.english + this.marks.math;
        return fullMarks;
    }
}


const {name, isStudent, friends, marks} = person;
// console.log(name);
// console.log(isStudent);
// console.log(friends);

const [faltu, balance, ...rest] = person.friends;
console.log(balance);
console.log(rest);

const mrks = person.exam();
// console.log(marks);

const subs = Object.entries(person.marks);
// for(const sub in person.marks){
//     console.log(sub);
// }
// subs.forEach(sub => console.log(sub[0] + ': ' + sub[1]))
// console.log(subs);
Object.entries(person.marks).forEach(sub => {
    const subMrk = sub[0] + ': ' + sub[1];
    // console.log(subMrk);
    return subMrk;

})

const str = `${person.name} is  ${person.isStudent? 'a student': 'not a student'}. His second best friend is ${person.friends[1]}. He got in bangla: ${person.marks.bangla}, English: ${person.marks.english}, math: ${person.marks.math}`;
// console.log(str);


const result = () =>  89;
// console.log(result());

const divide = (num) => num/17;

// console.log(divide(34));

const addDivide = (num1, num2) => (num1+num2)/2;
// console.log(addDivide(15,5));


const sevenAdd = (num1, num2) => {
    num1+=7;
    num2+=7;
    return num1+num2;
}

// console.log(sevenAdd(13,23));

const arr1 = [7, 14, 21, 28, 35, 42, 49];
const arr2 = arr1.map(element => element/7);
// console.log(arr2);

