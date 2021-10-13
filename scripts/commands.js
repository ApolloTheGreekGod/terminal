$('body').terminal({
    hello: function() {
        this.echo('Hello, there. Wellcome to this terminal.');
    },
    cat: function(width, height) {
        const img = $('<img src="https://placekitten.com/' +
                      width + '/' + height + '">');
        this.echo(img);
    },
    help: function() {
        this.echo(` Commands : 
        help - help menu 
        hello - Greet the terminal
        about - Info about this terminal
        cat [width] [height] - generates random cat pictures
        `)
    },
    info: function() {
        this.echo(`
        Terminal Info : 
        Name : Apollo
        Creator : Rayden Ooi
        Made with JQuery, JavaScript, HTML, CSS`)
    }
},
 {
    greetings:
 `      $$$$$$\        $$$$$$$\          $$$$$$\         $$\              $$\               $$$$$$\  
     $$  __$$\       $$  __$$\        $$  __$$\        $$ |            $$ |            $$  __$$\ 
    $$ /  $$ |      $$ |  $$ |      $$ /  $$ |      $$ |            $$ |            $$ /  $$ |
    $$$$$$$$ |      $$$$$$$  |      $$ |  $$ |      $$ |            $$ |            $$ |  $$ |
    $$  __$$ |      $$  ____/       $$ |  $$ |      $$ |            $$ |            $$ |  $$ |
    $$ |  $$ |      $$ |            $$ |  $$ |      $$ |            $$ |            $$ |  $$ |
    $$ |  $$ |      $$ |             $$$$$$  |      $$$$$$$$\       $$$$$$$$\          $$$$$$  |
    \__|  \__|      \__|             \______/       \________|      \________|       \______/ 


    Welcome to my Terminal-like Website! Type 'help' to see a list of commands.
    `

});
