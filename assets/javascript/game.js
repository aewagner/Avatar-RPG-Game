$(document).ready(function () {
    let characterArray = [
        {
            name: 'Aang',
            image: './assets/images/aang.png',
            hp: 180,
            ap: 8,
            cap: 25,
            index: 0
        },
        {
            name: 'Katara',
            image: './assets/images/katara.png',
            hp: 150,
            ap: 5,
            cap: 20,
            index: 1
        },
        {
            name: 'Toph',
            image: './assets/images/toph.png',
            hp: 160,
            ap: 10,
            cap: 50,
            index: 2
        },
        {
            name: 'Zuko',
            image: './assets/images/zuko.png',
            hp: 175,
            ap: 8,
            cap: 31,
            index: 3
        }
    ];

    let fighter = [];
    let defenderRow = [];
    let defender = [];
    let wins = 0;


    function gameSetUp() {
        characterArray.map(character => {
            console.log(character);
            let column = $('<div class="col">');
            let newDiv = $(`<h4>${character.name}</h4><img src="${character.image}" id="${character.name}" class="img-fluid character-image" alt=${character.name} ><h6>HP: ${character.hp}</h6>`);

            newDiv.attr('index', character.index);


            column.html(newDiv);

            $('#character-choice').append(column);

        });
        $('#select-fighter-text').html('<h2>Select Your Character!</h2>');
        selectFighter();
    }

    function selectFighter() {
        $('.character-image').on('click', function () {
            const selection = $(this).attr('index');
            console.log(selection);
            fighter.push(characterArray[selection]);
            console.log(fighter);
            $('#character-choice').empty();

            fighterMap();

            characterArray.map(character => {
                defenderRow.push(character);
            });

            defenderRow.splice(selection, 1);

            defenderRowMap();

            $('#select-fighter-text').empty();
            $('#select-defender-text').html('<h2>Select Your Opponent!</h2>');
            selectDefender();
        });

        selectDefender();
    }

    function selectDefender() {
        $('.defender-image').on('click', function () {
            const selection = $(this).attr('index');
            const selectionId = $(this).attr('id');
            console.log(selection);
            console.log('selectionId', selectionId);
            defender = [];
            defender.push(characterArray[selection]);
            console.log(defender);
            // $(`#${selectionId}`).remove();
            console.log('defenderRow before', defenderRow);
            defenderRow = defenderRow.filter(object => {
                if (object.name !== selectionId)
                    return object;
            });
            console.log('defenderRow after', defenderRow);

            $('#select-defender-text').html('<h2>Opponents Left to Fight</h2>');
            $('#defender-choice').empty();
            $('#character-choice').empty();

            fighterMap();

            defender.map(character => {
                console.log(character);
                let column = $('<div class="col">');
                let newDiv = $(`<h4>${character.name}</h4><img src="${character.image}" id="${character.name}" class="img-fluid defender-image" alt=${character.name} ><h6 id="defender-hp">${character.hp}</h6>`);

                newDiv.attr('index', character.index);

                column.html(newDiv);

                $('#character-choice').append('<div class="col"><h3 id="vs">VS.</h3></div>');
                $('#character-choice').append(column);

            });

            defenderRowMap();


            $('#attack-button-row').html('<button type="button" id="attack-button" class="btn btn-danger">Attack!</button>');

            // characterArray.map(character => {
            //     defenderRow.push(character);
            // });
            fightLogic();
            console.log('defender selected', defender);
        });

    }

    function fightLogic() {
        $('#attack-button').on('click', function () {
            console.log('click');
            console.log('fighter[0].hp', fighter[0].hp);
            console.log('defender[0].hp', defender[0].hp);
            defender[0].hp -= fighter[0].ap;
            fighter[0].hp -= defender[0].cap;
            fighter[0].ap += fighter[0].ap;
            console.log('fighter[0].hp', fighter[0].hp);
            console.log('fighter[0].ap', fighter[0].ap);
            console.log('defender[0].hp', defender[0].hp);
            $('#fighter-hp').text(fighter[0].hp);
            $('#defender-hp').text(defender[0].hp);

            if (defender[0].hp <= 0) {
                console.log('You Won! pick a new opponent');
                wins++;
                $('#character-choice').empty();


                // fighter.map(character => {
                //     console.log(character);
                //     let column = $('<div class="col">');
                //     let newDiv = $(`<img src="${character.image}" id="${character.name}" class="img-fluid fighter-image" alt=${character.name} >`);

                //     newDiv.attr('index', character.index);

                //     column.html(newDiv);

                //     $('#character-choice').append(column);

                // });

                fighterMap();

                console.log('wins', wins);
                if (wins === 3) {
                    $('#select-defender-text').html("<h1>You Win!</h1>");
                    $('#attack-button-row').empty();
                    $('#restet-button-row').html('<button type="button" id="reset-button" class="btn btn-primary">Reset</button>');
                    reset();
                }

                $('#attack-button-row').empty();
                $('#select-defender-text').html('<h2>Select Your Next Opponent!</h2>');
                selectDefender();
                console.log('New opponent', defender);
                


            }

            if (fighter[0].hp <= 0) {
                console.log('You lose');
                $('#select-defender-text').html("<h1>GAME OVER!</h1>");
                $('#attack-button-row').empty();
                $('#defender-choice').empty();
                $('#reset-button-row').html('<button type="button" id="reset-button" class="btn btn-primary">Reset</button>');
                reset();
            }


        });

    }

    function reset() {
        $('#reset-button').on('click', function () {
            characterArray = [
                {
                    name: 'Aang',
                    image: './assets/images/aang.png',
                    hp: 180,
                    ap: 8,
                    cap: 25,
                    index: 0
                },
                {
                    name: 'Katara',
                    image: './assets/images/katara.png',
                    hp: 150,
                    ap: 5,
                    cap: 20,
                    index: 1
                },
                {
                    name: 'Toph',
                    image: './assets/images/toph.png',
                    hp: 160,
                    ap: 10,
                    cap: 50,
                    index: 2
                },
                {
                    name: 'Zuko',
                    image: './assets/images/zuko.png',
                    hp: 175,
                    ap: 8,
                    cap: 31,
                    index: 3
                }
            ];
            fighter = [];
            defenderRow = [];
            defender = [];
            wins = 0;
            console.log('After reset characterArray', characterArray);
            $('#defender-choice').empty();
            $('#character-choice').empty();
            $('#attack-button-row').empty();
            $('#reset-button-row').empty();
            $('#select-defender-text').empty();
            gameSetUp();
        });
    }

    function fighterMap() {
        fighter.map(character => {
            console.log(character);
            let column = $('<div class="col">');
            let newDiv = $(`<h4>${character.name}</h4><img src="${character.image}" id="${character.name}" class="img-fluid fighter-image" alt=${character.name} ><h6 id="fighter-hp">${character.hp}</h6>`);

            newDiv.attr('index', character.index);

            column.html(newDiv);

            $('#character-choice').append(column);

        });
    }

    function defenderRowMap() {
        defenderRow.map(character => {
            console.log(character);
            let column = $('<div class="col">');
            let newDiv = $(`<h4>${character.name}</h4><img src="${character.image}" id="${character.name}" class="img-fluid defender-image" alt=${character.name} ><h6>${character.hp}</h6>`);

            newDiv.attr('index', character.index);

            column.html(newDiv);

            $('#defender-choice').append(column);

        });
    }


    gameSetUp();
});