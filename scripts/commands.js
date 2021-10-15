$('body').terminal({
    hello: function() {
        this.echo('Hello, there. Wellcome to this terminal.');
    },
    cat: function(width, height) {
        const img = $('<img src="https://placekitten.com/' +
                      width + '/' + height + '">');
        img.on('load', this.resume);
        this.pause();
        this.echo(img);
    },
    help: function() {
        this.echo(` Commands : 
        help - help menu 
        hello - Greet the terminal
        info - Info about this terminal
        clear - clear this terminal
        cat [width] [height] - generates random cat pictures
        cd - Go to a directory
        `)
    },
    info: function() {
        this.echo(`
        --- Terminal Info ---
        Name      : Apollo
        Creator   : Rayden Ooi
        Made with : JQuery, JavaScript, HTML, CSS`)
    },
    about: function() {
        location.replace('about.html')
    },
    cd: function(){
        try{ 
       var dir = prompt(`Choose directory : About, Home`);
       var dirs = ['about', 'home']
       if (dir.toLowerCase() != dirs) {
           this.echo('That is not a directory.')
       }
       switch(dir.toLowerCase()) {
           case "about":
               location.replace('about.html');
               break;
           case "home":
               location.replace('index.html');
               break;
            }
        }
            catch(err) {
                this.echo("No directory selected.")
            }
       }
},
 {
     checkArity: false,
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
