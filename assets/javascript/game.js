$(document).ready(function () {
    const characterArray = [
        {
            name: 'Aang',
            image: './assets/images/aang.png',
            hp: 100,
            ap: 5,
            cap: 5,
            index: 0
        },
        {
            name: 'Katara',
            image: './assets/images/katara.png',
            hp: 100,
            ap: 5,
            cap: 5,
            index: 1
        },
        {
            name: 'Toph',
            image: './assets/images/toph.png',
            hp: 100,
            ap: 5,
            cap: 5,
            index: 2
        },
        {
            name: 'Zuko',
            image: './assets/images/zuko.png',
            hp: 100,
            ap: 5,
            cap: 5,
            index: 3
        }
    ];

    let fighter = [];
    let defenderRow = [];
    let defender = [];


    function gameSetUp() {
        characterArray.map(character => {
            console.log(character);
            let column = $('<div class="col">');
            let newDiv = $(`<img src="${character.image}" class="img-fluid character-image" alt=${character.name} >`);

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

            fighter.map(character => {
                console.log(character);
                let column = $('<div class="col">');
                let newDiv = $(`<img src="${character.image}" class="img-fluid fighter-image" alt=${character.name} >`);

                newDiv.attr('index', character.index);

                column.html(newDiv);

                $('#character-choice').append(column);

            });

            characterArray.map(character => {
                defenderRow.push(character);
            });

            defenderRow.splice(selection, 1);

            defenderRow.map(character => {
                console.log(character);
                let column = $('<div class="col">');
                let newDiv = $(`<img src="${character.image}" class="img-fluid defender-image" alt=${character.name} >`);

                newDiv.attr('index', character.index);

                column.html(newDiv);

                $('#defender-choice').append(column);

            });
            $('#select-fighter-text').empty();
            $('#select-defender-text').html('<h2>Select Your Opponent!</h2>')
            selectDefender();
        });

        selectDefender();
    }

    function selectDefender() {
        $('.defender-image').on('click', function () {
            const selection = $(this).attr('index');
            console.log(selection);
            defender.push(characterArray[selection]);
            console.log(defender);
            $('#defender-choice').empty();
            $('#select-defender-text').empty();

            defender.map(character => {
                console.log(character);
                let column = $('<div class="col">');
                let newDiv = $(`<img src="${character.image}" class="img-fluid defender-image" alt=${character.name} >`);

                newDiv.attr('index', character.index);

                column.html(newDiv);
                
                $('#character-choice').append('<div class= "col"><h3 id="vs">VS</h3></div>');
                $('#character-choice').append(column);

            });

            characterArray.map(character => {
                defenderRow.push(character);
            });
        });
    }

    gameSetUp();
});