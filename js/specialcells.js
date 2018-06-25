// Jorge Juarez - Project 0 : Scrabble Game
// .js file used in conjunction with ../views/index.html
// .js file used to house cells in Scrabble table with special events attached to them
// also include associated functions with them

const double_letter_idxs = [initPt(0,3), initPt(0,11),
    initPt(2,6), initPt(2,8), initPt(3,0), initPt(3,7), initPt(3,14),
    initPt(6,2), initPt(6,6), initPt(6,8), initPt(6,12), initPt(7,3),
    initPt(7,11), initPt(8,2), initPt(8,6), initPt(8,8), initPt(8,12),
    initPt(11,0), initPt(11,7), initPt(11,14), initPt(12,6), initPt(12,8),
    initPt(14,3), initPt(14,11),
];

const triple_letter_idxs = [initPt(1,5), initPt(1,9), initPt(5,1), initPt(5,5), 
    initPt(5, 9), initPt(5, 13), initPt(9, 1), initPt(9, 5), initPt(9, 9), initPt(9, 13),
    initPt(13, 5), initPt(13, 9),
];

const double_word_idxs = [initPt(1,1), initPt(1,13), initPt(2,2), initPt(2,12),
    initPt(3,3), initPt(3,11), initPt(4,4), initPt(4,10), initPt(10,4), initPt(10,10),
    initPt(11,3), initPt(11,11), initPt(12,2), initPt(12,12), initPt(13,1), initPt(13,13)];

const triple_word_idxs = [initPt(0, 0), initPt(0, 7), initPt(0, 14),
    initPt(7, 0), initPt(7, 14), initPt(14, 0), initPt(14, 7), initPt(14, 14),
];

const free_space_idx = initPt(7,7);
