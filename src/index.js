class SpotifyVttPlayer {
    constructor() {
        let d = new Dialog({
            title: "Test Dialog",
            content: "<p>You must choose either Option 1, or Option 2</p>",
            buttons: {
                one: {
                    icon: '<i class="fas fa-check"></i>',
                    label: "Option One",
                    callback: () => console.log("Chose One")
                },
                two: {
                    icon: '<i class="fas fa-times"></i>',
                    label: "Option Two",
                    callback: () => console.log("Chose Two")
                }
            },
            default: "two",
            render: html => console.log("Register interactivity in the rendered dialog"),
            close: html => console.log("This always is logged no matter which option is chosen")
        });
        d.render(true);
    }
}


Hooks.once('init', () => {
    game.modules.get('my-module-name').api = new SpotifyVttPlayer();

    Hooks.callAll('SpotifyVttPlayerReady', game.modules.get('my-module-name').api)
});