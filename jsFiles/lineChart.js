window.onload = function() {

    var footballData;
    var championshipData;
    var championshipChart = {
        datasets: [{
            label: "BTP_Arrests",
            borderColor: "black"
        }, {
            label: "Violent_Disorder",
            borderColor: "blue"
        }, {
            label: "Public_Disorder",
            borderColor: "purple"
        }, {
            label: "Throwing_Missiles",
            borderColor: "red"
        }, {
            label: "Racist_and_Indecent_Chanting",
            borderColor: "pink"
        }, {
            label: "Pitch_Incursion",
            borderColor: "orange"
        }, {
            label: "Alcohol_Offences",
            borderColor: "green",
        }, {
            label: "Ticket_Touting",
            borderColor: "yellow"
        }, {
            label: "Possession_Of_An_Offensive_Weapon",
            borderColor: "brown"
        }, {
            label: "Possession_Of_Pyrotechnics",
            borderColor: "grey"
        }, {
            label: "Breach_Of_Banning_Order",
            borderColor: "navy"
        }, {
            label: "Criminal_Damage",
            borderColor: "cyan"
        }]
    };

    var championshipChart = {
        datasets: [{
            label: "BTP_Arrests",
            borderColor: "pink"
        }, {
            label: "Violent_Disorder",
            borderColor: "blue"
        }, {
            label: "Public_Disorder",
            borderColor: "green"
        }, {
            label: "Throwing_Missiles",
            borderColor: "red"
        }, {
            label: "Racist_and_Indecent_Chanting",
            borderColor: "black"
        }, {
            label: "Pitch_Incursion",
            borderColor: "purple"
        }, {
            label: "Alcohol_Offences",
            borderColor: "brown"
        }, {
            label: "Ticket_Touting",
            borderColor: "yellow"
        }, {
            label: "Possession_Of_An_Offensive_Weapon",
            borderColor: "navy"
        }, {
            label: "Possession_Of_Pyrotechnics",
            borderColor: "grey"
        }, {
            label: "Breach_Of_Banning_Order",
            borderColor: "cyan"
        }, {
            label: "Criminal_Damage",
            borderColor: "orange"
        }]
    }

    function loadFile(url, callback) {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {

                footballData = JSON.parse(this.responseText);
                console.log(footballData);
                championshipChart.labels = createArray(footballData, "name");

                for (var i = 0; i < championshipChart.datasets.length; i++) {
                    championshipChart.datasets[i].data = createArray(footballData, championshipChart.datasets[i].label);
                }
                console.log(championshipChart);
                chartLine();
            }
        };
        request.open("GET", "./jsonFiles/data.json", true);
        request.send();
    }
    loadFile();

    function loadFile2(url, callback) {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {

                championshipData = JSON.parse(this.responseText);
                console.log(championshipData);
                championshipChart.labels = createArray(championshipData, "name");

                for (var i = 0; i < championshipChart.datasets.length; i++) {
                    championshipChart.datasets[i].data = createArray(championshipData, championshipChart.datasets[i].label);
                }
                console.log(championshipChart);
                chartLine();
            }
        };
        request.open("GET", "./jsonFiles/championship.json", true);
        request.send();
    }

    function createArray(array, key) {
        var dataFootball = [];
        for (var i = 0; i < array.length; i++) {
            dataFootball.push(array[i][key]);
        }
        return dataFootball;
    }

    function arrayCreating(array, key) {
        var dataChampionship = [];
        for (var i = 0; i < array.length; i++) {
            dataChampionship.push(array[i][key]);
        }
        return dataChampionship;
    }

    $("#premier").click(function() {
        loadFile();
    });

    $("#championship").click(function() {
        loadFile2();
    });

    var ctx = document.getElementById("lineChart").getContext('2d');

    ctx.canvas.width = 1300;
    ctx.canvas.height = 550;

    function chartLine() {
        var lineChart = new Chart(ctx, {
            type: "line",
            data: championshipChart,
            options: {
                responsive: true,
                title: {
                    display: true,
                    text: "Football Arrests, Banning Orders Relation to Football Clubs, Premier League and Championship"
                },
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: "Arrest and Banning Orders"
                        }
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: "Football Clubs"
                        },
                        ticks: {
                            autoSkip: false
                        }
                    }]
                }
            }
        });
    }
}