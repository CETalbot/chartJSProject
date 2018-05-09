window.onload = function() {
    //Variable to call the premier league data before the datasets for the chart
    var footballData;
    //Variable to call the championship data before the datasets for the chart
    var championshipData;
    //Variable which the dataset labels and colour assignments are made for the chart
    var championshipChart = {
        //The datasets being used from the json files to be displayed in chart
        datasets: [{
            //The label of the data being used within both charts, using the string, key values from the json files.
            label: "BTP_Arrests",
            //Removes colour background from the line
            fill: false,
            //Defines the line colour
            borderColor: "black"
            //Each string/key value is then defined as a label and colours assigned to the lines 
        }, {
            label: "Violent_Disorder",
            fill: false,
            borderColor: "red"
        }, {
            label: "Public_Disorder",
            fill: false,
            borderColor: "brown"
        }, {
            label: "Throwing_Missiles",
            fill: false,
            borderColor: "orange"
        }, {
            label: "Racist_and_Indecent_Chanting",
            fill: false,
            borderColor: "grey"
        }, {
            label: "Pitch_Incursion",
            fill: false,
            borderColor: "green"
        }, {
            label: "Alcohol_Offences",
            fill: false,
            borderColor: "blue"
        }, {
            label: "Ticket_Touting",
            fill: false,
            borderColor: "yellow"
        }, {
            label: "Possession_Of_An_Offensive_Weapon",
            fill: false,
            borderColor: "navy"
        }, {
            label: "Possession_Of_Pyrotechnics",
            fill: false,
            borderColor: "violet"
        }, {
            label: "Breach_Of_Banning_Order",
            fill: false,
            borderColor: "purple"
        }, {
            label: "Criminal_Damage",
            fill: false,
            borderColor: "turquoise"
        }]
    }
    //Function to request the premier league data from the local server 
    function loadFile(url, callback) {
        //Variable to request the premier league data from the local server
        var request = new XMLHttpRequest();
        //Function to check the status of the XML request
        request.onreadystatechange = function() {
            /*The readyState if statement is if the XML request is ok to run the code within the if statement if not to not run the code
            referenced to https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp last used 09/05/2018*/
            if (this.readyState == 4 && this.status == 200) {
                /*json.parse get the premier league data from the local server 
                referenced to https://www.w3schools.com/js/js_json_parse.asp last used 09/05/2018*/
                footballData = JSON.parse(this.responseText);
                console.log(footballData);
                //This requests that name from the json file displays as a label within the chart
                championshipChart.labels = createArray(footballData, "name");
                /*For loop calls for all of the json file which it runs to the end of the file, this then gets send to the createArray function
                to push it into an array*/
                for (var i = 0; i < championshipChart.datasets.length; i++) {
                    championshipChart.datasets[i].data = createArray(footballData, championshipChart.datasets[i].label);
                }
                console.log(championshipChart);
                //To display the json file in the chart 
                chartLine();
            }
        };
        //ajax requests to open the data.json file
        request.open("GET", "./jsonFiles/data.json", true);
        //ajax sends the request to a server to open the json file
        request.send();
    }
    //Function to open the data.json file in the line chart once the page is loaded
    loadFile();
    //Function to request the championship data from the local server 
    function loadFile2(url, callback) {
        //Variable to request the championship data from the local server
        var request = new XMLHttpRequest();
        //Function to check the status of the XML request
        request.onreadystatechange = function() {
            /*The readyState if statement is if the XML request is ok to run the code within the if statement if not to not run the code
            referenced to https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp last used 09/05/2018*/
            if (this.readyState == 4 && this.status == 200) {
                /*json.parse get the championship data from the local server 
                referenced to https://www.w3schools.com/js/js_json_parse.asp last used 09/05/2018*/
                championshipData = JSON.parse(this.responseText);
                console.log(championshipData);
                //This requests that name from the json file displays as a label within the chart
                championshipChart.labels = createArray(championshipData, "name");
                /*For loop calls for all of the json file which it runs to the end of the file, this then gets send to the createArray function
                to push it into an array*/
                for (var i = 0; i < championshipChart.datasets.length; i++) {
                    championshipChart.datasets[i].data = createArray(championshipData, championshipChart.datasets[i].label);
                }
                console.log(championshipChart);
                //To display the json file in the chart 
                chartLine();
            }
        };
        //ajax requests to open the championship.json file
        request.open("GET", "./jsonFiles/championship.json", true);
        //ajax sends the request to a server to open the json file
        request.send();
    }
    //function to create an array from the data.json file
    function createArray(array, key) {
        //Variable to push the data into
        var dataFootball = [];
        //For loop to push the json object into an array
        for (var i = 0; i < array.length; i++) {
            dataFootball.push(array[i][key]);
        }
        //Returns the json object as an array
        return dataFootball;
    }
    //function to create an array from the championship.json file
    function arrayCreating(array, key) {
        //Variable to push the data into 
        var dataChampionship = [];
        //For loop to push the json object into an array
        for (var i = 0; i < array.length; i++) {
            dataChampionship.push(array[i][key]);
        }
        //Returns the json object as an array
        return dataChampionship;
    }
    //Button click function, this loads the premier league data in the chart
    $("#premier").click(function() {
        loadFile();
    });
    //Button click function, this loads the championship data in the chart
    $("#championship").click(function() {
        loadFile2();
    });

    //Creates the canvas element in the javascript file
    var ctx = document.getElementById("lineChart").getContext('2d');
    //Line Chart function to create a chart
    function chartLine() {
        //Variable, to create a new chart within the canvas 
        var lineChart = new Chart(ctx, {
            //Type of the chart displays on the html page
            type: "line",
            //Links to the the datasets at the top of the page which displays within the chart
            data: championshipChart,
            options: {
                //This adjusts the chart to be reponsive on the webpage 
                responsive: true,
                //This displays the title and adjusts the settings 
                title: {
                    //Displays the title
                    display: true,
                    //Font size of the title
                    fontSize: 18,
                    //Text displays on the html file
                    text: "Football Arrests, Banning Orders Relation to Football Clubs, Premier League and Championship"
                },
                //The scales adjustments for the y and x axes
                scales: {
                    //y axes settings
                    yAxes: [{
                        //y axes scale label
                        scaleLabel: {
                            //Displays the label for y axes
                            display: true,
                            //Text displays as a label for the y axes
                            labelString: "Arrest and Banning Orders"
                        }
                    }],
                   //y axes settings
                    xAxes: [{ 
                    //x axes scale label
                        scaleLabel: {
                            //Displays the label for x axes
                            display: true,
                            //Text displays as a label for the y axes
                            labelString: "Football Clubs"
                        },
                        ticks: {
                            //This displays the football clubs across the bottom, without skipping every other one
                            autoSkip: false
                        }
                    }]
                }
            }
        });
    }
}