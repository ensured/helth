document.getElementById("output-container").style.padding = "0px";
document.getElementById("bmi_result").style.padding = "0px";
console.log(document.getElementById("activity").value)

calculate.addEventListener("click", function() {
    const amount_decimals = 3;

    var weight = document.getElementById("weight").value;
    var height_feet = document.getElementById("height_feet").value;
    var height_inches = document.getElementById("height_inches").value;

    var final_height_inches = parseFloat(height_feet) * 12 + parseFloat(height_inches);
    var bmi_formula = (weight / (final_height_inches * final_height_inches)) * 703;


    var e = document.getElementById("activity");
    var activity_value = e.options[e.selectedIndex].value;

    var kilo_weight = weight / 2.2
    final_height_cm = final_height_inches * 2.54
    var age = document.getElementById("kbmr-age").value;
    var gender = document.getElementById("kbmr-gender").value;

    // let no_activity = bmi_formula * 1.2
    // let light_activity = bmi_formula * 1.375
    // let moderate_activity = bmi_formula * 1.55
    // let high_activity = bmi_formula * 1.725
    // let extreme_activity = bmi_formula * 1.9

    if (bmi_formula < 18.5) {
        bmi_result.innerHTML = `Underweight<br>Current BMI: ${parseFloat(bmi_formula).toFixed(amount_decimals)}`;
        bmi_result.style.fontSize = "40px";
        bmi_result.style.color = "#FFFFFF";
    } else
    if (bmi_formula >= 18.5 && bmi_formula < 25) {
        document.getElementById("bmi_result").innerHTML = `Normal Weight<br>Current BMI: ${parseFloat(bmi_formula).toFixed(amount_decimals)}`;
        document.getElementById("bmi_result").style.fontSize = "40px";
        document.getElementById("bmi_result").style.color = "#FFFFFF";
    } else if (bmi_formula >= 25 && bmi_formula < 30) {
        document.getElementById("bmi_result").innerHTML = `Overweight<br>Current BMI: ${parseFloat(bmi_formula).toFixed(amount_decimals)}`;
        document.getElementById("bmi_result").style.fontSize = "40px";
        document.getElementById("bmi_result").style.color = "#FFFFFF";
    } else if (bmi_formula >= 30) {
        document.getElementById("bmi_result").innerHTML = `Obese<br>Current BMI: ${parseFloat(bmi_formula).toFixed(amount_decimals)}`;
        document.getElementById("bmi_result").style.fontSize = "40px";
        document.getElementById("bmi_result").style.color = "#FFFFFF";
    }

    function kbmr() {
        if (activity_value == "0.2") {
            let total_calories_per_day = activity_value + daily_caloric_intake
            return total_calories_per_day;
        } else if (activity_value == "1.375") {
            let total_calories_per_day = activity_value + daily_caloric_intake
            return total_calories_per_day;
        } else if (activity_value == "1.55") {
            let total_calories_per_day = activity_value + daily_caloric_intake
            return total_calories_per_day;
        } else if (activity_value == "1.725") {
            let total_calories_per_day = activity_value + daily_caloric_intake
            return total_calories_per_day;
        } else if (activity_value == "1.9") {
            let total_calories_per_day = activity_value + daily_caloric_intake
            return total_calories_per_day;
        }
    }




    if (gender == "Male") {
        let men_bmr = 66 + (6.3 * weight) + (12.9 * final_height_inches) - (6.8 * age)
        console.log(men_bmr);
        var total_daily_calorie_needs = men_bmr * activity_value
        document.getElementById("total_calories").innerHTML = '<strong><u>' + total_daily_calorie_needs.toFixed(2) + `</u></strong> calories/day`
    } else {
        var women_bmr = 447.593 + (9.247 * kilo_weight) + (3.098 * final_height_cm) - (4.330 * age)
        console.log(women_bmr);
        var total_daily_calorie_needs = women_bmr * activity_value
        document.getElementById("total_calories").innerHTML = '<strong><u>' + total_daily_calorie_needs.toFixed(2) + `</u></strong> calories/day`
    }


    document.getElementById("total_calories").style.padding = "10px";
    kbmr_gender = document.getElementById("kbmr-gender").value

});