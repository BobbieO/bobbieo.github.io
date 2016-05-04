<?php
//require goes here when done.

// function pageController()
// {
    $message = 'Please enter a minimum and maximum number range.';

    
    // assess and assign num values entered into form
    function numAssess() 
    {
        if ($minNum < $maxNum) {
            $min = $minNum;
            $max = $maxNum;
        } else if ($minNum > $maxNum) {
            $min = $maxNum;
            $max = $minNum;
        } else if (!is_numeric($minNum) || !is_numeric($maxNum) ) {
            $message = "We need a number value.\n";
        }
    }



    function randNum()
    {
        //game generates random number
        $gameNum = mt_rand ($min, $max);
        return $gameNum;

        // game prompts user for her guess
        $message = "I'm thinking of a number from {$min}-{$max}. What is it?";
    }


    function userGuessing()
    {
        //counts guesses
        $guessAttempts = 0;

        do {
            $userGuess = '';
           
            if ($userGuess > $gameNum) {
                $message = "Nope, too high. Try again!";
                $guessAttempts++;
            } elseif ($userGuess < $gameNum) {
                $message = "Nope, too low. Try again!";
                $guessAttempts++;
            } 

        } while ($userGuess != $gameNum);

            $message = "You won! {$gameNum} was my number!\n It took {$guessAttempts} times to read my mind.\n Play again?\n";
    }


// }

// extract(pageController());

?>

<!DOCTYPE html>
<html>
<head>
    <title>High Low Game</title>
</head>
<body>

<h1>High-Low</h1>
<p><?=$message;?></p>
<form>
    <div>
        <input type="text" id="minNum" name="minNum" placeholder="minimum number">
        <label for="minNum"></label>
    
        <input type="text" id="maxNum" name="maxNum" placeholder="maximum number">
        <label for="midInput"></label>

        <input type="submit" value="Start Game">
    
    </div>

    <div>
        <input type="text" id="userGuess" name="userGuess" placeholder="your guess">
        <label for="userGuess"></label>

         <input type="submit" value="My Guess">
    </div>
</form>


</body>
</html>

