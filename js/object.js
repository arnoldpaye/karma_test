if (typeof NS == 'undefined') { NS = {}; }

NS.myFunction = {
    stuff: [],

    init: function init() {
        this.stuff.push('Testing');
    },

    reset: function reset() {
        this.stuff = [];
    },

    append: function append(string1, string2) {
        return string1 + ' ' + string2;
    }
};

NS.myFunction.init();