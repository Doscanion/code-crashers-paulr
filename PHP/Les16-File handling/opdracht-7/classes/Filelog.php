<?php
class Filelog {
    public static function createLogArray(string $file) {
        $roundNumber = null;
        $roundarray = [];
        if (file_exists('./logs/' . $file)) {
            echo 'File exist';
            $contents = file_get_contents('./logs/' . $file);
            $encoding = mb_detect_encoding($contents, 'UTF-16,UTF-8');
            $normalizedContents = mb_convert_encoding($contents, 'UTF-8', $encoding);
            $logLines = explode("\n", $normalizedContents);
            // echo '<pre>';
            // print_r($logLines);
            // echo '</pre>';

            foreach ($logLines as $key => $value) {
                echo '<pre>';
                var_dump($value);
                var_dump(preg_match('/Game Start/', trim($value)));
                var_dump(str_contains($value, "Game Start"));
                echo '</pre>';
                if (preg_match('/Game Start/', trim($value))) {
                    echo "Game Start";
                    if ($roundNumber !== null) {
                        $roundNumber++;
                    } elseif ($roundNumber === null) {
                        $roundNumber = 0;
                    }
                }
                // echo '<pre>';
                // var_dump($roundNumber);
                // echo '</pre>';
                if (preg_match_all('/\d+\s+\d+\.\d+\.\d+\.\d+\s+(\S+)\s+\w+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+(\d+)\s+\d+\s*$/', $logLines[$key], $playerstats)) {
                    $roundarray[$roundNumber][] = [$playerstats[1], $playerstats[2]];
                }
            }
            echo '<pre>';
            print_r($roundarray);
            echo '</pre>';
        }
        return $roundarray;
    }

    public function statTable(array $array) {
        $rounds = count($array);
        echo '<table>';
        echo '<tr>';
        echo '<th>Speler</th>';
        for ($i = 0; $i < $rounds; $i++) {
            echo '<th>Round ' . $i + 1 . '</th>';
        }
        echo '<th>Total</th>';
        echo '</tr>';
        $namesNumber = count($array[0]);
        $newStat = [];
        foreach ($array as $round) {
            foreach ($round as $roundPlayer) {
                $playerName = $roundPlayer[0][0];
                $score = $roundPlayer[1][0];

                if (!isset($newStat[$playerName])) {
                    $newStat[$playerName] = [];
                }

                $newStat[$playerName][] = $score;
            }
        }


        $playersAmount = count($newStat);

        // foreach ($newStat as $key => $values) {
        //     $total = 0;
        //     foreach ($values as $value) {
        //         $total += (int) $value;
        //     }
        //     $newStat[$key][] = $total;
        // }

        foreach ($newStat as $key => $values) {
            $total = 0;
            for ($i = 0; $i < $rounds; $i++) {
                if (isset($values[$i])) {
                    $total += (int) $values[$i];
                } else {
                    $newStat[$key][] = 0;
                    $total += (int) 0;
                }
            }
            $newStat[$key][] = $total;
        }

        echo '<pre>';
        var_dump($newStat);
        echo '</pre>';

        uasort($newStat, function ($a, $b) {
            return $b[2] - $a[2];
        });


        foreach ($newStat as $key => $playstats) {
            echo '<tr>';
            echo '<td>' . $key . '</td>';
            for ($i = 0; $i < $rounds + 1; $i++) {
                echo '<td>' . $playstats[$i] . '</td>';
            }
            echo '</tr>';
        }

        echo '</table>';
    }
}
