import _ from 'lodash';
import moment from 'moment';

export function test() {
    // code here
    console.log("webpack test")

}

export function renderHtml() {

    function component() {

        const container = document.createElement('div');

        // header
        const text = document.createElement('h1');
        text.innerHTML = _.join(['Hello World build with', 'webpack'], ' '); // Lodash, currently included via a script, is required for this line to work
        //text.style.textAlign = "center";
        container.appendChild(text);

        // link
        const link = document.createElement("a");
        link.setAttribute("href", "https://www.opswat.com/");
        link.style.color = "red";
        link.innerText = "Click here to go to homepage";
        container.appendChild(link);

        // copyright
        const copyright = document.createElement('div');
        copyright.innerHTML = _.join(['Copyright', ' @' + moment().format('YYYY')], ' ');
        //copyright.style.textAlign = "center";
        container.appendChild(copyright);

        return container;

    }

    document.body.appendChild(component());
}