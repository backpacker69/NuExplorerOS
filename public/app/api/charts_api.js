var db = require('./api.tools.js').db;
var moment = require('./api.tools.js').moment;
var numeral = require('./api.tools.js').numeral;

exports.pospow = function(req,res) {
    
    
    db.ChartCollection.find({_id:"pospow"},function(err,doc){
        
        
        res.send(doc[0]);
        
        
        
        
    });   
};
exports.diff = function(req,res) {
    
    
    db.ChartCollection.find({_id:"diff"},function(err,doc){
        
        
        res.send(doc[0].pos);
        
        
        
        
    });   
};
exports.size = function(req,res) {
    
    
    db.ChartCollection.find({_id:"size"},function(err,doc){
        
        
        res.send(doc[0]);
        
        
        
        
    });   
};
exports.numTrans = function(req,res) {
    
    
    db.ChartCollection.find({_id:"numtrans"},function(err,doc){
        
        
        res.send(doc[0]);
        
        
        
        
    });   
};
exports.orphan = function(req,res) {
    
    
    db.ChartCollection.find({_id:"orphan"},function(err,doc){
        
        
        res.send(doc[0]);
        
        
        
        
    });   
};
exports.solvedBy = function(req,res) {
    
function compressArray(original) {
    var compressed = [];
    // make a copy of the input array
    var copy = original.slice(0);
    // first loop goes over every element
    for (var i = 0; i < original.length; i++) {
    var myCount = 0;	
    // loop over every element in the copy and see if it's the same
    for (var w = 0; w < copy.length; w++) {
    if (original[i] == copy[w]) {
    // increase amount of times duplicate is found
    myCount++;
    // sets item to undefined
    delete copy[w];
    }
    }
    if (myCount > 0) {
    var a = [];
    a.push(original[i]);
    a.push((myCount/original.length)*100);
    compressed.push(a);
    }
    }
    return compressed;
};
    
    
    
    
   var date = parseInt(((new Date).getTime())/1000); 
        var oneDay = date - 86400;
        
        //var oneDay = 1410445410 - 86400;//this is for testing
    db.BlockCollection.find({'blockTimeStamp':{"$gte":oneDay}},function(err,docOD){
        
        
        var dayBlocks = docOD.length, //~144 blocks
            addresses = [];
        for(var f=0; f<dayBlocks; f++){
            
            var solver = docOD[f].blockSolvedBy;
            addresses.push(solver);
      
        }//for loop one day
        
        var fi = compressArray(addresses);
        res.send(fi);
        
        
        
    });
          
};

exports.parked = function(req,res) {

function compressArray(original) {
    var compressed = [];
    // make a copy of the input array
    var copy = original.slice(0);
    // first loop goes over every element
    for (var i = 0; i < original.length; i++) {
    var myCount = 0;
    // loop over every element in the copy and see if it's the same
    for (var w = 0; w < copy.length; w++) {
    if (original[i] == copy[w]) {
    // increase amount of times duplicate is found
    myCount++;
    // sets item to undefined
    delete copy[w];
    }
    }
    if (myCount > 0) {
    var a = [];
    a.push(original[i]);
    a.push((myCount/original.length)*100);
    compressed.push(a);
    }
    }
    return compressed;
};




   var date = parseInt(((new Date).getTime())/1000);
        
    db.ChartCollection.find({'_id':"park"},function(err,docOD){

        trans = docOD[0].park;
        result = [];

        sums = [];
        total = 0;
        for(var f=0; f<trans.length; f++){
            total = total + trans[f][2];
            }

        for(var t=1;t<100;t++) {
            sums[t]=0;
            }

        for(var f=0; f<trans.length; f++){
        
          for(var t=1; t<100; t++) {
            if(trans[f][1]<(date + t*86400)) {
                sums[t] =  sums[t] + trans[f][2];
             //   trans[f][2]=0;
                }
            }


        }

        for(var t=1;t<100;t++) {
            result.push([(date + t*86400)*1000,Number((total-sums[t]).toFixed(2))]);
            }


        res.send(result);   

    });

};


exports.sdd = function(req,res) {


    db.ChartCollection.find({_id:"sdd"},function(err,doc){


        res.send(doc[0].sdd);




    });
};
