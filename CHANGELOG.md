# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) 
and this project adheres to [Semantic Versioning](http://semver.org/).

## [2.0.2] - 2018-01-28

### Fixed

- Putting card links and images back to only http as Gatherer doesn't even support https.

## [2.0.1] - 2018-01-28

### Added

- `js-clean` and `css-clean` npm scripts for cleaning up the `dist` folder.

### Changed

- Adding version number to css and js file names in `dist` folder.

### Fixed

- Making js compile script create the folders if they don't exist instead of crashing.
- Changing links and card image addresses to make the scheme of the host site (eg. https).
- Decklist no longer displays Magic card back when you mouse over a section header.

## [2.0] - 2018-01-28

### Changed

- Changed the styles to be compatible with the new version of Casper and Ghost 1.0.
- A much needed README update.

### Removed

- Hacky JS code for touch stuff. Will revist in the future hopefully with something better.

## [1.2] - 2017-07-10

### Added

- Scripts for compiling, linting, and minifying scss and js.
- Watch scripts for both scss and js.
- A `dist` folder that contains compiled source.

### Changed

- Reorganised source into `js` and `scss` folders.

## [1.1] - 2017-01-05

### Added

- Created CHANGELOG.
- Added example deck list to the README file.
- Functionality to turn card names through the post into links with the `<card>` tag.
- Card image appears when hovering over `<card>` tags.
- Background colour on sideboard area.

### Changed

- Updated the year in README.
- Decklist border colour.
- Made decklist font size slightly smaller.

### Removed

- Deleted the `test-list.html` file since I added an example to the README.

## 1.0 - 2017-01-05

### Added

- Initial release.
- Allows user to import JS and CSS files to their Ghost theme and then include nicely formatted decklists in their posts.
- Hovering over a card in the decklist on desktop will update the card preview, while clicking on the name will open Gatherer in a new tab.
- On mobile, tapping once will have the effect on hovering, while tapping a second time is like clicking.

[Unreleased]: https://github.com/sten626/ghost-mtg/compare/2.0.1...develop
[2.0.1]: https://github.com/sten626/ghost-mtg/compare/2.0...2.0.1
[2.0]: https://github.com/sten626/ghost-mtg/compare/1.2...2.0
[1.2]: https://github.com/sten626/ghost-mtg/compare/1.1.0...1.2
[1.1]: https://github.com/sten626/ghost-mtg/compare/1.0...1.1.0
