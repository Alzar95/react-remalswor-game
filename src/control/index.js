import $ from 'jquery';
import fireballGif from '../resource/images/fireball.gif';
import fireballForEnemyGif from '../resource/images/fireball-for-enemy.gif';
import fireballSound from '../resource/sounds/fireball.mp3';
import medicalRainSound from '../resource/sounds/medical-rain.mp3';
import './index.css';

let killedMonsters = 0;
let arrayOfAdjectives = ["Ужасный", "Злобный", "Сопливый"],
    arrayOfCharacterClasses = ["Огр", "Гоблин", "Гном"],
    arrayOfNames = ["Том", "Макс", "Дима"];
let randElementArrayOfAdjectives,
    randElementArrayOfCharacterClasses,
    randElementArrayOfNames;
let arrayOfEnemyBodies = [' <svg>\n' +
'                <circle cx="90" cy="100" r="30" fill="yellow">\n' +
'                    <animate attributeName="cy" dur="2s" repeatCount="indefinite" values="100; 90; 100"/>\n' +
'                </circle>\n' +
'                <circle cx="65" cy="90" r="5" fill="red">\n' +
'                    <animate attributeName="cy" dur="2s" repeatCount="indefinite" values="95; 85; 95"/>\n' +
'                </circle>\n' +
'                <circle cx="80" cy="90" r="5" fill="red">\n' +
'                    <animate attributeName="cy" dur="2s" repeatCount="indefinite" values="95; 85; 95"/>\n' +
'                </circle>\n' +
'                <line x1="90" y1="100" x2="90" y2="250" stroke="yellow" stroke-width="8" />\n' +
'                <polyline points="90,130 70,185 45,185" fill="none" stroke="yellow" stroke-width="8"/>\n' +
'                <polyline points="90,130 130,155 105,185" fill="none" stroke="yellow" stroke-width="8"/>\n' +
'                <line x1="90" y1="250" x2="70" y2="300" stroke="yellow" stroke-width="8" />\n' +
'                <line x1="90" y1="250" x2="110" y2="300" stroke="yellow" stroke-width="8" />\n' +
'            </svg>',
    ' <svg>\n' +
    '                <circle cx="90" cy="100" r="30" fill="green">\n' +
    '                    <animate attributeName="cy" dur="2s" repeatCount="indefinite" values="100; 90; 100"/>\n' +
    '                </circle>\n' +
    '                <circle cx="65" cy="90" r="5" fill="red">\n' +
    '                    <animate attributeName="cy" dur="2s" repeatCount="indefinite" values="95; 85; 95"/>\n' +
    '                </circle>\n' +
    '                <circle cx="80" cy="90" r="5" fill="red">\n' +
    '                    <animate attributeName="cy" dur="2s" repeatCount="indefinite" values="95; 85; 95"/>\n' +
    '                </circle>\n' +
    '                <line x1="90" y1="100" x2="90" y2="250" stroke="green" stroke-width="8" />\n' +
    '                <polyline points="90,130 70,185 45,185" fill="none" stroke="green" stroke-width="8"/>\n' +
    '                <polyline points="90,130 130,155 105,185" fill="none" stroke="green" stroke-width="8"/>\n' +
    '                <line x1="90" y1="250" x2="70" y2="300" stroke="green" stroke-width="8" />\n' +
    '                <line x1="90" y1="250" x2="110" y2="300" stroke="green" stroke-width="8" />\n' +
    '            </svg>',
    ' <svg>\n' +
    '                <circle cx="90" cy="100" r="30" fill="blue">\n' +
    '                    <animate attributeName="cy" dur="2s" repeatCount="indefinite" values="100; 90; 100"/>\n' +
    '                </circle>\n' +
    '                <circle cx="65" cy="90" r="5" fill="red">\n' +
    '                    <animate attributeName="cy" dur="2s" repeatCount="indefinite" values="95; 85; 95"/>\n' +
    '                </circle>\n' +
    '                <circle cx="80" cy="90" r="5" fill="red">\n' +
    '                    <animate attributeName="cy" dur="2s" repeatCount="indefinite" values="95; 85; 95"/>\n' +
    '                </circle>\n' +
    '                <line x1="90" y1="100" x2="90" y2="250" stroke="blue" stroke-width="8" />\n' +
    '                <polyline points="90,130 70,185 45,185" fill="none" stroke="blue" stroke-width="8"/>\n' +
    '                <polyline points="90,130 130,155 105,185" fill="none" stroke="blue" stroke-width="8"/>\n' +
    '                <line x1="90" y1="250" x2="70" y2="300" stroke="blue" stroke-width="8" />\n' +
    '                <line x1="90" y1="250" x2="110" y2="300" stroke="blue" stroke-width="8" />\n' +
    '            </svg>'];
let indexForTheEnemyBody = 0;
let arrayForKilledMonsters = [];

const functions = {
    nameGeneration: () => {
        randElementArrayOfAdjectives = Math.floor(Math.random() * arrayOfAdjectives.length);
        randElementArrayOfCharacterClasses = Math.floor(Math.random() * arrayOfCharacterClasses.length);
        randElementArrayOfNames = Math.floor(Math.random() * arrayOfNames.length);

        $(".name-of-the-enemy").empty().append(arrayOfAdjectives[randElementArrayOfAdjectives] + ' '
            + arrayOfCharacterClasses[randElementArrayOfCharacterClasses] + ' ' + arrayOfNames[randElementArrayOfNames]);
    },
    depictionOfTheEnemy: () => {
        $(".enemy").empty();
        $(".enemy").append(arrayOfEnemyBodies[indexForTheEnemyBody]);

        if(indexForTheEnemyBody < arrayOfEnemyBodies.length - 1) {
            ++indexForTheEnemyBody;
        } else {
            indexForTheEnemyBody = 0;
        }
    },
    newEnemy: () => {
        ++killedMonsters;

        functions.nameGeneration();
        functions.depictionOfTheEnemy();

        $(".progressbar-for-enemy").progressbar({
            value: 100
        });
    },
    playAudio: (spellName) => {
        let myAudio = new Audio();

        if(spellName === 'fireball') {
            myAudio.src = fireballSound;
        } else if(spellName === 'medical-rain') {
            myAudio.src = medicalRainSound;
        }

        myAudio.play();
    },

    spellHero: (spellName) => {
        if (spellName === 'fireball') {
            functions.playAudio(spellName);
            $(".main-central-field").append('<img class="fireball-for-hero" src=' + fireballGif + '>');
        }
        else if (spellName === 'medical-rain') {
            functions.playAudio(spellName);
            $(".field-for-therapeutic-rain").append('<canvas id="rain"></canvas>');
            let time = true;
            let w = rain.width = 110,
                h = rain.height = 270,
                ctx = rain.getContext('2d'),

                total = w,
                accelleration = .55,

                size = w / total,
                occupation = w / total,
                repaintColor = 'rgba(255, 255, 255, 0)';
            let colors = [],
                dots = [],
                dotsVel = [];

            let portion = 360 / total;
            for (let i = 0; i < total; ++i) {
                colors[i] = portion * i;

                dots[i] = h;
                dotsVel[i] = 10;
            }

            function anim() {
                if (time) {
                    window.requestAnimationFrame(anim);

                    ctx.fillStyle = repaintColor;
                    ctx.fillRect(0, 0, w, h);

                    for (let i = 0; i < total; ++i) {
                        let currentY = dots[i] - 1;
                        dots[i] += dotsVel[i] += accelleration;

                        ctx.fillStyle = 'hsl(' + colors[i] + ', 80%, 50%)';
                        ctx.fillRect(occupation * i, currentY, size, dotsVel[i] + 1);

                        if (dots[i] > h && Math.random() < .01) {
                            dots[i] = dotsVel[i] = 0;
                        }
                    }
                } else {
                    time = true;
                    return false;
                }
            }

            anim();
            setTimeout(function () {
                time = false;
                $('#rain').empty().remove();
            }, 3000);
        }
    },

    attackOfTheEnemy: () => {
        let currentHealthOfTheHero = $(".progressbar-for-hero").progressbar("value");

        functions.playAudio('fireball');
        $(".main-central-field").append('<img class="fireball-for-enemy" src=' + fireballForEnemyGif + ' >');

        function selectionSort(array) {
            let n = array.length;
            for (let i = 0; i < n - 1; i++) {
                let max = i;
                for (let j = i + 1; j < n; j++) {
                    if (array[j] > array[max]) max = j;
                }
                let t = array[max];
                array[max] = array[i];
                array[i] = t;
            }
            return array;
        }

        setTimeout(function () {
            $(".fireball-for-enemy").empty().remove();
            $(".progressbar-for-hero").progressbar({
                value: currentHealthOfTheHero - 10
            });

            if ($(".progressbar-for-hero").progressbar("value") <= 0) {
                arrayForKilledMonsters.push(killedMonsters);
                if (JSON.parse(localStorage.getItem("Killed monsters"))) {
                    for (let i = 0; i < JSON.parse(localStorage.getItem("Killed monsters")).length; i++) {
                        arrayForKilledMonsters.push(JSON.parse(localStorage.getItem("Killed monsters"))[i]);
                    }
                }
                localStorage.setItem("Killed monsters", JSON.stringify(arrayForKilledMonsters));
                document.getElementsByClassName('highscore-table-screen')[0].style.display = 'block';

                selectionSort(arrayForKilledMonsters);

                for (let i = 0; i < arrayForKilledMonsters.length; i++) {
                    $('.highscore-table-screen .highscore-table table').append('<tr>' +
                        '<td>Hero</td>' +
                        '<td>' + arrayForKilledMonsters[i] + '</td>' +
                        '</tr>');
                }
            }
        }, 1000)
    },

    attackOfTheHero: () => {
    setTimeout(function () {
        let currentHealthOfTheEnemy = $(".progressbar-for-enemy").progressbar("value");

        $(".progressbar-for-enemy").progressbar({
            value: currentHealthOfTheEnemy - 25
        });

        $(".fireball-for-hero").empty().remove();

        if ($(".progressbar-for-enemy").progressbar("value") <= 0) {
            functions.newEnemy();
        } else {
            setTimeout(function () {
                functions.attackOfTheEnemy();
            }, 500);
        }
    }, 1000);
},
    treatmentHero: () => {
        let currentHealthOfTheHero = $(".progressbar-for-hero").progressbar("value");

        setTimeout(function () {
            $(".progressbar-for-hero").progressbar({
                value: currentHealthOfTheHero + 20
            });

            setTimeout(function () {
                functions.attackOfTheEnemy();
                setTimeout(function () {
                    $(".progressbar-for-hero").progressbar({
                        value: currentHealthOfTheHero - 10
                    });

                    currentHealthOfTheHero = $(".progressbar-for-hero").progressbar("value");
                }, 3000)
            }, 500);

            currentHealthOfTheHero = $(".progressbar-for-hero").progressbar("value");
        }, 3000);
    }
};

export default functions;