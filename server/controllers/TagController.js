const Tag = require('./../models/Tag')
module.exports = {  
    // getAllTag: (req, res, next) => {
	// 	Tag.find({}).then((err, tags)=> {
    //         if (err)
    //             res.send(err)
    //         else if (!tags)
    //             res.send(404)
    //         else
    //             res.send(tags)
    //         next()            
    //     })

    // },
    
    getAllTag: (req, res, next) => {
        // mongoose aggregate reference from https://gist.github.com/kdelemme/9659364
        Tag.aggregate([
            { "$project": {
                "value": "$_id",
                "label": "$title",
            }}
        ], function (err, tags) {
            if (err)
                res.send(err)
            else if (!tags)
                res.send(404)
            else
                res.send(tags)
            next()            
        });
        
    }
}