let char = new Knight('Cristiano')
let monster = new LitleMonster()
let log = new Log(document.querySelector('.log'))

const stage = new Stage (
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
)

stage.start()