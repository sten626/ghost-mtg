# ghost-mtg

Ghost customization for having responsive MtG deck lists in blog posts.

## Installing

To use with Ghost, copy `ghost-mtg.min.css` and `ghost-mtg.min.js` to the `css` and `js` folders of your theme directory. Once in your theme folder, go to Ghost's Code Injection settings and reference the ghost-mtg files. 

### Blog Header

    <link rel="stylesheet" href="/assets/css/ghost-mtg.min.css">

### Blog Footer

    <script src="/assets/js/ghost-mtg.min.js"></script>

## Card Usage

Throughout your blog post, surround any card name with card tags (e.g. `<card>Tarmogoyf</card>`) to turn the card name into a Gatherer link, which also displays the card image on hover.

## Decklist Usage

To put decklists into your posts, first just write out your decklist using fairly normal Ghost Markdown as formatted below.

    Deck Name

    Player Name

    Creatures
    - 3 Scavenging Ooze
    - 4 Tarmogoyf
    ...

    Spells
    - 4 Fatal Push
    - 3 Liliana of the Veil
    ...

    Lands
    - 2 Creeping Tar Pit
    - 4 Verdant Catacombs
    ...

    Sideboard
    - 1 Ashiok, Nightmare Weaver
    - 1 Damnation
    ...

After you've finished writing out the decklist like this, simply surround the list with `<decklist>` tags, with blank lines around them.

    <decklist>

    Deck Name
    ...
    Sideboard
    ...

    </decklist>

The code is pretty rigid in its current form, and might not work correctly if formatting doesn't match what it expects. If for some reason it fails though, your decklist should remain as a reasonable looking HTML unordered list.

## Copyright & License

The MIT License (MIT)

Copyright (c) 2018 Steven Indzeoski

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
