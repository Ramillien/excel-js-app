export class Emitter {
    constructor(props) {
        this.listeners ={}
    }

    // dispatch, fire, trigger
    // Уведомляем слушателей если они есть
    // table.emit('table:select', {a: 1})
    emit(event, ...args) {
        if (!Array.isArray(this.listeners[event])) {
            return false
        }
        this.listeners[event].forEach(listener => {
            listener(...args)
        })
        return true
    }

    // on, listen
    // Подписываемся на уведомление
    // Добавляем нового слушателя
    // formula.subscribe('table:select', () => {})
    subscribe(event, fn) {
        this.listeners[event] = this.listeners[event] || []
        this.listeners[event].push(fn)
        return () => {
            this.listeners[event] =
                this.listeners[event].filter(listener => listener !== fn)
        }
    }
}

// const emitter = new Emitter()
//
// const unsub = emitter.subscribe('ramil', data => console.log('sub: ', data))
// emitter.emit('12123', 33)
//
// setTimeout(() => {
//     emitter.emit('ramil', 'after 2 sec')
// }, 2000)
//
// setTimeout(() => {
//    unsub()
// }, 3000)
//
// setTimeout(() => {
//     emitter.emit('ramil', 'after 4 sec')
// }, 4000)


