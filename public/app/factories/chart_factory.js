angular.module('NE.chartFactory', ['NE.apiFactory']) //instantiates
.factory('chartFactory', ['apiFactory','$location', function(apiFactory,$location){

	var chartFactory = {
		posDiff: getDiffChart,
		numTrans: getNumTransChart,
		orphan: getOrphanChart,
        parked: getParkedChart,
        sdd: getSDDChart,
		bSolved: getSolvedByChart,
		toggleChart: toggleChart,

	};
	return chartFactory
	
function toggleChart(chart){
	return $location.path('/charts/'+ chart)
}

function getDiffChart(){

return apiFactory.getDiffChart().then(sendData);

function sendData(response){
return  {
   options:{
    chart: {
            type: 'line',
            zoomType: 'x'            
        }
    },
        title: {
            text: 'Proof -of- Stake Difficulty'
        },
        xAxis: {
          type: 'datetime'
            
        },
        yAxis: {
            min:0,
            title: {
                text: 'Difficulty'
            }
        },
        subtitle:{
              
                text: 'every 1440 blocks (source: blockexplorer.nu)'
            } ,
        series: [{
            name: 'PoS Diff.',
            data: response.data
            
        }]
  }
 };
};


function getNumTransChart(){

return apiFactory.getnumTransChart().then(sendData);

function sendData(response){
return {
   options:{
    chart: {
            type: 'line',
            zoomType: 'x'            
        }
    },
        title: {
            text: 'No. Trans. (24hr avg)'
        },
        xAxis: {
            type:'datetime'
          
            
        },
        yAxis: {
            min:0,
            title: {
                text: '# of Trans.'
            }
        },
        subtitle:{
              
                text: 'every 1440 blocks (source: blockexplorer.nu)'
            } ,
        series: [{
            name: 'No. Trans. NuShares',
            data: response.data.Shares
        },
        {
            name: 'No. Trans. NuBits',
            data: response.data.Bits
        }
        ]
  };
};

};


function getOrphanChart(){
return apiFactory.getOrphanChart().then(sendData);

function sendData(response){

return {
   options:{
    chart: {
            type: 'line',
            zoomType: 'x'            
        }
    },
        title: {
            text: 'Orphan Blocks'
        },
        xAxis: {
            type:'datetime'
          
            
        },
        yAxis: {
            min:0,
            title: {
                text: '# of Orphan Blocks'
            }
        },
        subtitle:{
              
                text: 'every 1440 blocks (source: blockexplorer.nu)'
            } ,
        series: [{
            name: 'Orphan Blocks',
            data: response.data.orph
        }]
  };
};
};

function getSolvedByChart(){

return apiFactory.getSolvedByChart().then(sendData);

function sendData(response){

return {
   options:{
    chart: {
            type: 'pie'
                       
        },
    tooltip: {
            
            valueSuffix: '%'
        }
    },
        title: {
            text: 'Blocks Solved'
        },
        
        subtitle:{
              
                text: 'blocks solved in the past 24hrs. (source: blockexplorer.nu)'
            } ,
        
        series: [{
            
            name: 'Blocks Minted',
            data: response.data
        }]
  };
};
};

function getParkedChart(){

return apiFactory.getParkedChart().then(sendData);

function sendData(response){

return {
   options:{
    chart: {
            type: 'line'

        },
    tooltip: {

            valueSuffix: ''
        }
    },
        title: {
            text: 'Parked NuBits'
        },
        yAxis: {
            min:0,
            title: {
                text: 'NuBits'
            }
        },
        xAxis: {
            type:'datetime'


        },
        subtitle:{

                text: 'NuBits to remain parked until day'
            } ,

        series: [{

            name: 'Parked NuBits',
            data: response.data
        }]
  };
};
};

function getSDDChart(){

return apiFactory.getSDDChart().then(sendData);

function sendData(response){

return {
   options:{
    chart: {
            type: 'line',
            zoomType: 'x'

        },
    tooltip: {

            valueSuffix: ''
        }
    },
        title: {
            text: 'Share Days Destroyed'
        },
        yAxis: {
            title: {
                text: 'SDD'
            }
        },
        xAxis: {
            type:'datetime'


        },
        subtitle:{

                text: 'every 1440 blocks'
            } ,

        series: [{

            name: 'share days destroyed',
            data: response.data
        }]
  };
};
};



}]);
