// code your solution here

function superbowlWin(array){
    return array.find(obj => obj.result === 'W') ? array.find(obj => obj.result === 'W').year : undefined
}