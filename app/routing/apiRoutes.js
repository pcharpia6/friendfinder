var friends = require("../data/friends");

module.exports = function(app) {
    
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        // console.log(req.body);
        // console.log(friends.length);
        let inputVal = req.body.values
        let data;

        genCompareVal(inputVal);

        function genCompareVal(input) {
            compareReturn = [];
            for (let i = 0; i < friends.length; i++) {
                let comparePerson = friends[i];
                console.log(comparePerson);
                let personValCompare = 0;
                for (let o = 0; o < 10; o ++) {
                    let returnVal = Math.abs(
                    parseInt(input[o]) - comparePerson.scores[o]
                    );
                    personValCompare += returnVal;
                };
                compareReturn.push(personValCompare);
            }
            returnFriend(getFriendex(compareReturn));
        };

        function getFriendex(input) {
            let friendex = input.indexOf(Math.min(...input));
            return friendex
        };

        function returnFriend(input) {
            data = friends[input]
        };

        res.json(data)        
    });

};