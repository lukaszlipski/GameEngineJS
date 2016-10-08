let Controls = {
    Keys : null,
    Mouse : null,
    keyboardTab : new Array(223),
    mouseTab : new Array(3),
    keyDownHandler : function(event){
        Controls.keyboardTab[event.keyCode] = 1;
    },
    keyUpHandler : function(event){
        Controls.keyboardTab[event.keyCode] = 0;
    },
    mouseDownHandler : function(event){
        Controls.mouseTab[event.button] = 1;
    },
    mouseUpHandler : function(event){
        Controls.mouseTab[event.button] = 0;
    },
    init : function(){
        document.addEventListener('keydown', Controls.keyDownHandler, false);
        document.addEventListener('keyup', Controls.keyUpHandler, false);
        document.addEventListener('mousedown', Controls.mouseDownHandler, false);
        document.addEventListener('mouseup', Controls.mouseUpHandler, false);


        for(let i=0;i<Controls.keyboardTab.length;i++)
            Controls.keyboardTab[i] = 0;
        for(let i=0;i<Controls.mouseTab.length;i++)
            Controls.mouseTab[i] = 0;
    },
    isKeyPressed : function(key){
        return Controls.keyboardTab[key];
    },
    isMousePressed : function(mouse){
        return Controls.mouseTab[mouse];
    }

}

// Key & mouse defines
Controls.Mouse = {
    Left : 0,
    Middle : 1,
    Right : 2
}
Controls.Keys = {
        Backspace : 8,
        Tab : 9,
        Enter : 13,
        Shift : 16,
        Ctrl : 17,
        Alt : 18,
        Pause : 19,
        CapsLock : 20,
        Esc : 27,
        PageUp : 33,
        PageDown : 34,
        End : 35,
        Home : 36,
        Left : 37,
        Up : 38,
        Right : 39,
        Down : 40,
        Insert : 45,
        Delete : 46,
        Zero : 48,
        One : 49,
        Two : 50,
        Three : 51,
        Four : 52,
        Five : 53,
        Six : 54,
        Seven : 55,
        Eight : 56,
        Nine : 57,
        A : 65,
        B : 66,
        C : 67,
        D : 68,
        E : 69,
        F : 70,
        G : 71,
        H : 72,
        I : 73,
        J : 74,
        K : 75,
        L : 76,
        M : 77,
        N : 78,
        O : 79,
        P : 80,
        Q : 81,
        R : 82,
        S : 83,
        T : 84,
        U : 85,
        V : 86,
        W : 87,
        X : 88,
        Y : 89,
        Z : 90,
        LeftWindow : 91,
        RightWindow : 92,
        Select : 93,
        Numpad : {
            Zero : 96,
            One : 97,
            Two : 98,
            Three : 99,
            Four : 100,
            Five : 101,
            Six : 102,
            Seven : 103,
            Eight : 104,
            Nine : 105,
            Multiply : 106,
            Add : 107,
            Subtract : 109,
            Point : 110,
            Divide : 111
        },
        F1 : 112,
        F2 : 113,
        F3 : 114,
        F4 : 115,
        F5 : 116,
        F6 : 117,
        F7 : 118,
        F8 : 119,
        F9 : 120,
        NumLock : 144,
        ScrollLock : 145,
        SemiColon : 186,
        EqualSign : 187,
        Comma : 188,
        Dash : 189,
        Period : 190,
        ForwardSlash : 191,
        GraveAccent : 192,
        OpenBracket : 219,
        BackSlash : 220,
        CloseBracket : 221,
        SingleQuote : 222
    }