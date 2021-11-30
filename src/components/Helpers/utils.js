export const getNoun = (number, one, two, five) => {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
        return five;
    }
    n %= 10;
    if (n === 1) {
        return one;
    }
    if (n >= 2 && n <= 4) {
        return two;
    }
    return five;
};

export const sortButtonMode = (e, state, setState) => {
    console.log(state);
    console.log(e.target.children[0].children[0]);
    if (state > 1) {
        setState(1)
    } else {
        setState(state + 1);
    }
    if (state === 0) {
        e.target.children[0].children[0].style.color = '#E3E3E3';
        e.target.children[0].children[1].style.color = 'black';
    } else if (state === 1) {
        e.target.children[0].children[1].style.color = 'black';
        e.target.children[0].children[0].style.color = '#E3E3E3';
    } else if (state === 2) {
        e.target.children[0].children[1].style.color = '#E3E3E3';
        e.target.children[0].children[0].style.color = 'black';
    }
};