/*
    Data immutation is creating a new copy of the existing object and making the changes
    in the new copy leaving existing one unchanged. This functionality can be useful when we do 
    undo and redo operationstocompare with the previous object(s).
*/
const player = { name: "SB", score: 100 };

/* 
    1st way using object.assign()
*/
new_player_1 = Object.assign({}, player, { name: "SB", score: 200 });

console.log("\n new_player_1", new_player_1);
console.log("\n player", player);

console.log(
  `\n Check the score of player which remained unchanged even if we changed 
  the score of new_player_1 as both objets are different.`
);

console.log(
  "==========================================================================================="
);

/* 
    2nd way using spread()
*/
new_player_2 = { ...player, score: 300 };

console.log("\n new_player_2", new_player_2);
console.log("\n player", player);

console.log(
  `\n Check the score of player which remained unchanged even if we changed 
  the score of new_player_2 as both objets are different. \n`
);

console.log(
  "==========================================================================================="
);

/* 
    3rd way using slice() in case of object having array
*/
student_detail = { marks: [90, 40, 35, 40, 50] };

new_marks = student_detail.marks.slice(); // get a new copy of the array

new_marks[0] = 100;

new_student_detail = { new_marks };

console.log("\n new_student_detail : ", new_student_detail);
console.log("\n student_detail : ", student_detail);

console.log(
  `\n Check the makrs in the new_student_detail and student_detail. student_detail marks remains unchanged. \n`
);
console.log(
  "==========================================================================================="
);
