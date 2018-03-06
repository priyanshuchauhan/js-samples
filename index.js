// ES6 Support
import {chartTest} from "./chartTest";
import {bizzApp} from "./BizzAppz";
import {inheritanceTest} from "./inheritanceApp";
import {fetchTest} from "./fetchApp";
import * as ChartJS from "chart.js"

const options = chartTest();
const bizzAppResult = bizzApp();
const inheritanceTestResult = inheritanceTest();
fetchTest();

const ctx = document.getElementById('chartJSContainer').getContext('2d');
new ChartJS.Chart(ctx, options);

document.getElementById('BuzzApp').innerHTML = bizzAppResult.join('<br>');
document.getElementById('inheritanceTest').innerHTML = inheritanceTestResult.join('<br>');

// Navigation handler for different question, hiding-unhiding for navigation.
$(document).ready(function() {
    function hideAll() {
        $("#question1info").hide("slow");
        $("#question2info").hide("slow");
        $("#question3info").hide("slow");
        $("#question4info").hide("slow");
    }
    $("#question1").click(function () {
        hideAll();
        $("#question1info").fadeToggle();
    });
    $("#question2").click(function () {
        hideAll();
        $("#question2info").fadeToggle();
    });
    $("#question3").click(function () {
        hideAll();
        $("#question3info").fadeToggle();
    });
    $("#question4").click(function () {
        hideAll();
        $("#question4info").fadeToggle();
    });
});