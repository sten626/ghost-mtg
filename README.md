# ghost-mtg

Ghost customization for having responsive MtG deck lists in blog posts.

## Usage Example

To use with Ghost, you must first compile the Sass files. Once compiled, copy `ghost-mtg.css` and `ghost-mtg.js` to the `css` and `js` folders of your theme directory. Once in your theme folder, go to Ghost's Code Injection settings and reference the css file in the header and the js file in the footer. Then you can create decklists in posts with html using the following format:

    <figure class="decklist">
        <header>
            <h4>Deck Name</h4>
            <h5>Player Name</h5>
        </header>
        <main>
            <section class="decklist__column">
                <section>
                    <h6>Creatures</h6>
                    <ul>
                        <li>4 Kitchen Finks</li>
                        <li>2 Anafenza, Kin-Tree Spirit</li>
                        ...
                    </ul>
                </section>
                <section>
                    <h6>Lands</h6>
                    <ul>
                        <li>3 Gavony Township</li>
                        <li>2 Temple Garden</li>
                        ...
                    </ul>
                </section>
            </section>
            <section class="decklist__column">
                <section>
                    <h6>Spells</h6>
                    <ul>
                        <li>4 Chord of Calling</li>
                        <li>4 Collected Company</li>
                        ...
                    </ul>
                </section>
                <section class="decklist__sideboard">
                    <h6>Sideboard</h6>
                    <ul>
                        <li>3 Path to Exile</li>
                        <li>1 Reclamation Sage</li>
                        ...
                    </ul>
                </section>
            </section>
            <div class="medium-view-cf"></div>
            <section class="decklist__image"></section>
        </main>
    </figure>

The four sections (Creatures, Spells, Lands, Sideboard) can be arranged in whichever way works best between the two `decklist__column` sections.

## Copyright & License

The MIT License (MIT)

Copyright (c) 2017 Steven Indzeoski

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
