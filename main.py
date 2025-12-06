basic.show_leds("""
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    """)
music.play(music.builtin_playable_sound_effect(soundExpression.hello),
    music.PlaybackMode.UNTIL_DONE)

def on_forever():
    pass
basic.forever(on_forever)
