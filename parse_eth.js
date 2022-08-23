if (typeof parseEth === 'undefined') {
    const parseEth = function () {
        window.addEventListener("dblclick", function (e) {
            const number = window.getSelection().toString();
            const result = parseInt(number) / 10e17

            if (isNaN(result) || result == 0 || result < 0.009) {
                return
            }

            const node = document.createElement("div");
            
            node.style.left = e.pageX + 'px'
            node.style.top = e.pageY + 'px'
            node.style.zIndex = 1337;
            node.style.position = 'absolute'
            node.style.backgroundColor = 'red';
            node.style.color = 'black'
            node.style.borderRadius = '5px';
            node.style.fontSize = '1.4em';
            node.style.padding = '3px';
            node.appendChild(document.createTextNode(`${result} ETH`));

            document.body.appendChild(node);

            setTimeout(function() { node.remove(); }, 2000);
        });
    }

    parseEth()
}