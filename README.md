### Hexlet tests and linter status:
[![Actions Status](https://github.com/Weloza/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Weloza/frontend-project-46/actions)
[![Actions Status](https://github.com/Weloza/frontend-project-46/actions/workflows/check.yml/badge.svg)](https://github.com/Weloza/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/55f2fc25d0b5f720da36/maintainability)](https://codeclimate.com/github/Weloza/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/55f2fc25d0b5f720da36/test_coverage)](https://codeclimate.com/github/Weloza/frontend-project-46/test_coverage)

## Difference calculator 

Сompares 2 files for differences between them. 
The following file formats are supported:
- .json
- .yaml/.yml
The result of the comparison can be formatted with the following formatters:
- 'stylish' (default)
- 'plain'
- 'json'

***Install***

1. Clone this repository

2. Run the command: _make install_

3. Run the command: _npm link_

***Comands used***

1. gendiff -h   - output help menu

2. gendiff <path to 1st file> <path to 2nd file>   - formatter 'stylish'

3. gendiff --format [formatter] <path to 1st file> <path to 2nd file>  - with a choise a formatter by yourself ('plain', 'json') 

***Demonstration of the work***

Comparing two flat files(.json)
[![asciicast](https://asciinema.org/a/663178.svg)](https://asciinema.org/a/663178)

Comparing two flat files(.yaml)
[![asciicast](https://asciinema.org/a/663247.svg)](https://asciinema.org/a/663247)

Comparing two files and the conclusion of the differences between them (default formatter = 'stylish')
[![asciicast](https://asciinema.org/a/663615.svg)](https://asciinema.org/a/663615)

Combining two objects with line-by-line output of changes (formatter = 'plain')
[![asciicast](https://asciinema.org/a/663302.svg)](https://asciinema.org/a/663302)

Comparing two files and output as a json string (formatter = 'json')
[![asciicast](https://asciinema.org/a/663310.svg)](https://asciinema.org/a/663310)