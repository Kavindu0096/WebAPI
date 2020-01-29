var express = require('express');
var router = express.Router();


var heroArray = [
    {
        "id": 1,
        "name": 'Aravinda',
        "SuperPower": '1',
        "likeCount": '2'
    },
    {
        "id": 2,
        "name": 'Ranjan',
        "SuperPower": '2',
        "likeCount": '2'
    },
    {
        "id": 3,
        "name": 'Kemila',
        "SuperPower": '1',
        "likeCount": '3'
    }
]
//get method

router.get("", (req, res) => {
    res.send(heroArray)
})


//get by params 
router.get("/:heroId", (req, res) => {
    let userRequestedId = req.params.heroId;
    //res.send("You have requested ");
    let requestedHero = heroArray.find(h => h.id == userRequestedId);
    // let test = heroArray.find(h => h.id === 1)
    res.send(requestedHero);
    // console.log(requestedHero);
    // console.log(userRequestedId);
    // console.log(heroArray);
});

//POST
router.post("", (req, res) => {
    //Read the req body and find all the values of the new object to be created 
    //Create the object
    //Append it to the array 
    console.log(req.body);

    if (!req.body.name) {
        res.status(400).send("Please check name");
        return;
    }
    let newHero = {
        id: heroArray.length + 1,
        name: req.body.name,
        SuperPower: req.body.SuperPower,
        likeCount: req.body.likeCount
    }
    heroArray.push(newHero);
    res.send(newHero);
})



//PUT
router.put("/:heroId", (req, res) => {
    let requestedIdtoEdit = parseInt(req.params.heroId);
    if (!req.body.likeCount) {
        return res.status(400).send("Please check values");
    }

    let heroToEdit = heroArray.find(h => h.id === requestedIdtoEdit);

    if (!heroToEdit) {
        return res.status(404).send("Given id does not exist");
    }

    heroToEdit.likeCount = req.body.likeCount;
    res.send(heroToEdit);


});


//DELETE
router.delete("/:heroId", (req, res) => {
    let requestedIdtoDelete = parseInt(req.params.heroId);
    let heroToDelete = heroArray.find(h => h.id === requestedIdtoDelete);
    if (!heroToDelete) {
        return res.status(404).send("Given id does not exist");
    }
    let indexOfHero = heroArray.indexOf(heroToDelete)
    heroArray.splice(indexOfHero, 1);

    res.send(heroToDelete);


});

module.exports = router;