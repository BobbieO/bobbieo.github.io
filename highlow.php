<?php

// `say -v Zarvox Shall, we, play, a, game`;

// to check if arguments have been entered.
if ($argc !== 3) {
    die ("Please enter a min-max numeric range.\n");
}

// if second number is larger
if ($argv[1] < $argv[2]) {
    $min = $argv[1];
    $max = $argv[2];
} else if ($argv[1] > $argv[2]) {
    $min = $argv[2];
    $max = $argv[1];
} else if (!is_numeric($argv[1]) || !is_numeric($argv[2]) ) {
    echo "Please enter a min-max range.\n";
}

//game generates random number
$gameNum = mt_rand ($min, $max);
echo "The computer is secretly thinking {$gameNum}\n";

//pause for voice
sleep (2);

// game prompts user for her guess
fwrite(STDOUT, "I'm thinking of a number from {$min}-{$max}. What is it?\n");
// `say -v Zarvox I am thinking of a number from 1 to 100, What is it`;

//counts guesses
$guessAttempts = 0;

do {
    $userGuess = trim(fgets(STDIN));
   
    if ($userGuess > $gameNum) {
        fwrite(STDOUT, "Nope, too high. Try again!\n");
        // `say -v Hysterical Nope, too high, Try again`;
        $guessAttempts++;
    } elseif ($userGuess < $gameNum) {
        fwrite(STDOUT, "Nope, too low. Try again!\n");
        // `say -v Hysterical Nope, too low, Try again`;
        $guessAttempts++;
    } 

} while ($userGuess != $gameNum);

fwrite(STDOUT, "You won! {$gameNum} was my number!\n");
// `say -v Bad News You won, {$gameNum} was my number`;

fwrite(STDOUT, "It took {$guessAttempts} times to read my mind.\n");
// `say -v Zarvox It took {$guessAttempts} times to read my mind`;

fwrite(STDOUT, "Play again?\n");

?>

<!DOCTYPE html>
<html>
<head>
    <title>High Low Game</title>
</head>
<body>

<h1></h1>
<p>Test</p>
<p>Test2</p>


</body>
</html>

