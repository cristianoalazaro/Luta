//Knight or Sorcerer
//LightMonster or BigMonster

class Character {
    _life = 1
    maxLife = 1
    attack = 0
    defense = 0

    constructor(name) {
        this.name = name
    }

    get life() {
        return this._life
    }

    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife
    }
}

class Knight extends Character {
    constructor(name) {
        super(name)
        this.life = 100
        this.attack = 10
        this.defense = 8
        this.maxLife = this.life
    }
}

class Sorcerer extends Character {
    constructor(name) {
        super(name)
        this.life = 80
        this.attack = 15
        this.defense = 
        this.defense = 3
        this.maxLife = this.life
    }
}

class LitleMonster extends Character {
    constructor() {
        super('Little Monster')
        this.life = 40
        this.attack = 4
        this.defense = 4
        this.maxLife = this.life
    }
}

class BigMonster extends Character {
    constructor() {
        super('Big Monster')
        this.life = 120
        this.attack = 16
        this.defense = 6
        this.maxLife = this.life
    }
}

class Stage {
    constructor(fighter1, fighter2, fighter1El, fighter2El, logObject) {
        this.fighter1 = fighter1
        this.fighter2 = fighter2
        this.fighter1El = fighter1El
        this.fighter2El = fighter2El
        this.logObject = logObject
    }

    start() {
        this.update()
        
        //TODO: Envento do botão Atacar
        this.fighter1El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2))
        this.fighter2El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1))
    }

    update() {
        //fighter1
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(2)} HP` 
        const pctF1 = this.fighter1.life / this.fighter1.maxLife * 100
        this.fighter1El.querySelector('.bar').style.width = `${pctF1}%`       
        //fighter2
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(2)} HP`
        const pctF2 = this.fighter2.life / this.fighter2.maxLife * 100
        this.fighter2El.querySelector('.bar').style.width = `${pctF2}%`
    }

    doAttack(attacking, attacked) {
        if (attacking.life <= 0 || attacked.life <= 0){
            this.logObject.addMessage('Matando cachorro morto')
            return;
        }

        const attackFactor =  (Math.random().toFixed(2) * 2)
        const defenseFactor = (Math.random().toFixed(2) * 2)

        const actualAtack = (attacking.attack * attackFactor).toFixed(2)
        const actualDefense = (attacked.defense * defenseFactor).toFixed(2)

        if (actualAtack > actualDefense) {
            attacked.life -= actualAtack
            this.logObject.addMessage(`${attacking.name} causou ${actualAtack} de danos em ${attacked.name}`)

        } else {
            this.logObject.addMessage(`${attacked.name} conseguiu defender`)
        }

        this.update()
    }
}

class Log {
    list = []

    constructor(listEl) {
        this.listEl = listEl
    }

    addMessage(msg) {
        this.list.push(msg)
        this.render()
    }

    render() {
        this.listEl.innerHTML = ''

        for (let i of this.list) {
            this.listEl.innerHTML += `<li>${i}</>`
        }
    }
}