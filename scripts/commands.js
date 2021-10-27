$('body').terminal({
    hello: function() {
        this.typing('echo', 90, `Hello, there. Welcome to this terminal and type 'help' to view a list of commands.`);
        this.typing('prompt', 70, `HELP IM STUCK INSIDE THIS TERMINAL!!`);
    },
    catpic: function(width, height) {
        if (width == null || height == null) {
            this.echo('Please insert width and height.')
        }
        if (width != null && height != null) {
            const img = $('<img src="https://placekitten.com/' +
                      width + '/' + height + '">');
        img.on('load', this.resume);
        this.pause();
        this.echo(img);}
    },
    help: function() {
        this.typing('echo', 5, ` Commands : 
        \n
        Note: Commands displayed here are the only available commands, this terminal is not a real terminal. Real-world commands will not work. \n
        \n
        --- Common Commands ---
        \n
        help - Help menu 
        hello - Greet the terminal
        info - Info about this terminal
        clear - Clear this terminal
        apollo - Reload this terminal
        whoami - Check terminal name
        \n
        --- Fun Commands ---
        \n
        catpic [width] [height] - Generates random cat pictures
        \n
        --- Navigation ---
        \n
        ls - view directories
        cd [directory]- Go to another webpage by inserting the directory name in the brackets
        go - Go to another webpage by prompting you to enter a directory name
        pwd - View path
        `)
    },
    info: function() {
        this.typing('echo', 5, `
        ---- Terminal Info ----
        \n
        Name      : Apollo
        Creator   : Rayden Ooi
        Made with : JavaScript, HTML, CSS
        \n`)
    },
    go: function(){
        try{ 
       var dir = prompt(`Choose directory : About, Home`);
       var dirs = ['about', 'home', 'itoilet']
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
            case "itoilet":
               location.replace('https://apollothegreekgod.github.io/raydeno/');
            }
        }
            catch(err) {
                this.echo("No directory selected.")
            }
       },
       cd: function(dir){
        
           try { 
            if (!dir.toLowerCase().includes('home') && !dir.toLowerCase().includes('about') && !dir.toLowerCase().includes('itoilet')) {
                this.echo("That directory/parameter doesn't exist.")
            }
             if (dir.toLowerCase() === 'about'){
               location.replace('about.html');
           }
            if (dir.toLowerCase() === 'home') {
               location.replace('index.html');
           }
           if (dir.toLowerCase() === 'itoilet') {
               location.replace('https://apollothegreekgod.github.io/raydeno/');
           }
        }
            catch(err) { this.echo("Please insert a directory.")}
       },
       ls: function(){
           this.echo("Home  About  iToilet")
       },
       pwd: function() {
           this.echo("user/home")
       },
       apollo: function() {
           location.reload();
       },
       whoami: function() {
           this.typing('echo', 5, 'Apollo')
       },
       joke: function() {
        const axios = require(['axios']);
           axios.get('https://api.icndb.com/jokes/random')
           .then(data =>
            this.typing('echo', 5, `${jokes[1]}`)
            )
 
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
    $$ |  $$ |      $$ |             $$$$$$  |      $$$$$$$$ |       $$$$$$$$ |      $$$$$$  |
     __|   __|       __|              ______/        ________|        ________|       ______/ 
    \n
    Welcome to my Terminal-like Website! Type 'hello' to get started.
    `

});
//https://terminal.jcubic.pl/ <- docs and examples from original JQuery Terminal Library