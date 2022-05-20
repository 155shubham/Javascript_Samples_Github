/*
    Data immutation is getting the copy of the existing object and making the changes
    in the new copy and the not the existing one. So, that the first copy remains as it 
    is  

*/

const player = { score: 100, name: "SB" };

// 1st way using object.assign()
new_player = Object.assign(player);

// 2nd way using spread()

// 3rd way using slice()
