// Jorge Juarez - specialcells.js
// .js file used to house cells in Scrabble table with special events attached to them
// also include associated functions with them

const double_letter_idxs = [initPt(0,3), initPt(0,11),
    initPt(2,6), initPt(2,8), initPt(3,0), initPt(3,7), initPt(3,14),
    initPt(6,2), initPt(6,6), initPt(6,8), initPt(6,12), initPt(7,3),
    initPt(7,11), initPt(8,2), initPt(8,6), initPt(8,8), initPt(8,12),
    initPt(11,0), initPt(11,7), initPt(11,14), initPt(12,6), initPt(12,8),
    initPt(14,3), initPt(14,11),
];

const triple_letter_idxs = [initPt(1,5), ];

const double_word_idxs = [initPt(1,1)];

const triple_word_idxs = [initPt(0, 0), initPt(0, 7), initPt(0, 14),
    initPt(7, 0), initPt(7, 14), initPt(14, 0), initPt(14, 7), initPt(14, 14),
];

