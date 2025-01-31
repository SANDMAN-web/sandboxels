elements.reality = {
    color: ["#FF2121FF", "#FF5757FF],
    behavior: behaviors.POWDER,
    category: "infinity",
        state: "solid",
        reactions: {
            "dirt": { elem1: "reality", elem2: "sand" },
            "grenade": { elem1: "reality", elem2: "bubble" },
            "electric": { elem1: "reality", elem2: "electric" },
            "dust": { elem1: "reality", elem2: "gold" },
            "sun": { elem1: "reality", elem2: "supernova" },
            "dna": { elem1: "reality", elem2: "ant" },
            "ice": { elem1: "reality", elem2: "fire" },
            "magma": { elem1: "reality", elem2: "water" }
            "rock": { elem1: "reality_stone" }
        },
}
elements.reality_stone = {
    color: ["#CF0000FF", "#DE0000FF],
    behavior: behaviors.CLONER,
    ignore: ["ecloner","slow_cloner","clone_powder","floating_cloner","wall","ewall"],
        category:"infinity",
        insulate:true,
        hardness: 1,
        darkText: true,,
       },
}
