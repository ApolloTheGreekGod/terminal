$('body').terminal({
    hello: function() {
        this.echo('Hello, there. Wellcome to this terminal.');
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
        this.echo(` Commands : 
        \n
        Note: Commands displayed here are the only available commands, this terminal is not a real terminal therefore Linux/Unix commands will not work. \n
        \n
        --- Common Commands ---
        \n
        help - help menu 
        hello - Greet the terminal
        info - Info about this terminal
        clear - clear this terminal
        apollo - reload this terminal
        \n
        --- Fun Commands ---
        \n
        catpic [width] [height] - generates random cat pictures
        \n
        --- Navigation ---
        \n
        ls - view directories
        cd [directory]- Go to another webpage by inserting the directory name in the brackets
        go - Go to another webpage by prompting you to enter a directory name
        pwd - view path
        `)
    },
    info: function() {
        this.echo(`
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
       },
       cd: function(dir){
        
           try { 
            var realsies = ['about', 'home']
            if (!dir.toLowerCase().includes(realsies[1]) && !dir.toLowerCase().includes(realsies[2])) {
                this.echo("That directory/parameter doesn't exist.")
            }
             if (dir.toLowerCase() === 'about'){
               location.replace('about.html');
           }
            if (dir.toLowerCase() === 'home') {
               location.replace('index.html');
           }
        }
            catch(err) { this.echo("Please insert a directory.")}
       },
       ls: function(){
           this.echo("Home  About")
       },
       pwd: function() {
           this.echo("user/home")
       },
       apollo: function() {
           location.reload();
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
    Welcome to my Terminal-like Website! Type 'help' to see a list of commands.
    `

});
