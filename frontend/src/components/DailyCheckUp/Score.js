let score = [];

const addScore = (i) => {
 score.push(i)
};

const sendScore = () => {
 // Creating variable to store the sum
 var sum = 0;
     
 // Running the for loop
 for (let i = 0; i < score.length; i++) {
     sum += score[i];
 }
 return sum
};

export { addScore, sendScore };
