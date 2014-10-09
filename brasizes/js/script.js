//This program will calculate bra size based on measurements taken by the user. I am making this to help my wife.
/**
 * Created by stevencarter on 6/10/14.
 */
alert("Please follow the instructions in the following prompts.")
var cupLetter = ["AA", "A", "B", "C", "D", "DD", "E", "F", "FF", "G", "GG", "H", "HH", "J", "JJ"]; //This array sets up the cup size number designations

var measureUnderSnug = prompt("Measure your underbust with the measuring tape comfortably snug against the skin, being sure to keep it parallel to the ground.\n\nAll measurements to the nearest whole inch.\n\nRecord your measurementd here."); //This prompt will give instructions on how to take the first measurement and record it.
var measureUnderTight = prompt("Measure your underbust with the measuring tape pulled as tightly as possible, being sure to keep it parallel to the ground.\n\nAll measurements to the nearest whole inch.\n\nRecord your measurement here."); //This prompt will give instructions on how to take the second measurement and record it.
var measureBustStanding = prompt("Measure your bust while standing, being sure to keep it parallel to the ground.\n\nAll measurements to the nearest whole inch.\n\nRecord your measurement here."); //This prompt will give instructions on how to take the third measurement and record it.

if (measureUnderTight > 36) {
    alert("Because your Tight Underbust measurement was greater than 36, this calculator may not be accurate\n\nYou may want to consult a bra fitting professional.")
} //This logic statement determines if the calculator will be reliably accurate.

var cupLetterCall = cupLetter[measureBustStanding - measureUnderSnug]; //This associates bra measurements with cup size letters.
var sizeCheck = measureBustStanding - measureUnderSnug; //This command sets up a variable to make sure the user is compatible with the program
if( sizeCheck > 14){
    console.log("Your bust is outside the range of this program. I apologise for the inconvenience")
} else {
    interUnderSnug = measureUnderSnug % 2; //This determines if the Underbust Snug measurement is even or odd.
    var finalUnderSnug = Number(measureUnderSnug) + interUnderSnug;

    alert("Your bra size is " + finalUnderSnug + cupLetterCall + "."); //This command will give the user their final bra size.
} //This if/else statement makes sure that the user is an ok cup size for the limited range of the program. The message in the console reflects this failsafe.