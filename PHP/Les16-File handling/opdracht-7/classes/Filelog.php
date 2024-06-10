<?php
class Filelog {
    private string $fileName;
    private array $roundarray = [];

    public function __construct(string $fileName) {
        $this->fileName = $fileName;
    }


    public function createLogArray() {
        if (!empty($this->roundarray)) return $this->roundarray;

        if (file_exists('./logs/' . $this->fileName)) {
            $roundNumber = null;
            // echo 'File exist';
            $contents = file_get_contents('./logs/' . $this->fileName);
            $encoding = mb_detect_encoding($contents, 'UTF-16,UTF-8');
            $normalizedContents = mb_convert_encoding($contents, 'UTF-8', $encoding);
            $logLines = explode("\n", $normalizedContents);
            // echo '<pre>';
            // print_r($logLines);
            // echo '</pre>';

            foreach ($logLines as $key => $value) {
                // echo '<pre>';
                // var_dump($value);
                // var_dump(preg_match('/Game Start/', trim($value)));
                // var_dump(str_contains($value, "Game Start"));
                // echo '</pre>';
                if (preg_match('/Game Start/', trim($value))) {
                    // echo "Game Start";
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
                    $this->roundarray[$roundNumber][] = [$playerstats[1], $playerstats[2]];
                }
            }
            // echo '<pre>';
            // print_r($roundarray);
            // echo '</pre>';
        }
        return $this->roundarray;
    }

    public function statTable() {
        $this->createLogArray();
        $rounds = count($this->roundarray);
        $result = '<table>';
        $result .= '<tr>';
        $result .= '<th>Speler</th>';
        for ($i = 0; $i < $rounds; $i++) {
            $result .= '<th>Round ' . $i + 1 . '</th>';
        }
        $result .= '<th>Total</th>';
        $result .= '</tr>';
        // $namesNumber = count($this->roundarray[0]);
        $newStat = [];
        foreach ($this->roundarray as $round) {
            foreach ($round as $roundPlayer) {
                $playerName = $roundPlayer[0][0];
                $score = $roundPlayer[1][0];

                if (!isset($newStat[$playerName])) {
                    $newStat[$playerName] = [];
                }

                $newStat[$playerName][] = $score;
            }
        }


        // $playersAmount = count($newStat);

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

        // echo '<pre>';
        // var_dump($newStat);
        // echo '</pre>';

        uasort($newStat, function ($a, $b) {
            return $b[2] - $a[2];
        });


        foreach ($newStat as $key => $playstats) {
            $result .= '<tr>';
            $result .= '<td>' . $key . '</td>';
            for ($i = 0; $i < $rounds + 1; $i++) {
                $result .= '<td>' . $playstats[$i] . '</td>';
            }
            $result .= '</tr>';
        }

        $result .= '</table>';
        return $result;
    }
}
