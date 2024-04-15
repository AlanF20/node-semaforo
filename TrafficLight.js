import color from 'colors'
import cron from 'node-cron'
import { printBgColor } from './utils.js'
import { v4 as uuidV4 } from 'uuid'

export class TrafficLight {
  UID = uuidV4()
  actualTrafficLightColor = ''
  timeToLeave = 0
  RESTARTED_FLAG = 0
  cronJob = cron
  lightColors = {
    GREEN: 'green',
    YELLOW: 'yellow',
    RED: 'red'
  }

  constructor (actualLightColor, ttl) {
    this.actualTrafficLightColor = actualLightColor
    this.timeToLeave = ttl
  }

  start () {
    if (!this.RESTARTED_FLAG) {
      printBgColor(color.bgBlack('       '), color.bgBlack('       '), color.bgGreen('       '))
    }
    this.cronJob.schedule(`*/${this.timeToLeave} * * * * *`, (param) => {
      console.log(param)
      if (this.actualTrafficLightColor === this.lightColors.GREEN) {
        printBgColor(color.bgRed('       '), color.bgBlack('       '), color.bgBlack('       '))
        console.log('\n')
        this.actualTrafficLightColor = this.lightColors.YELLOW
      } else if (this.actualTrafficLightColor === this.lightColors.YELLOW) {
        printBgColor(color.bgBlack('       '), color.bgYellow('       '), color.bgBlack('       '))
        console.log('\n')
        this.actualTrafficLightColor = this.lightColors.RED
      } else {
        printBgColor(color.bgBlack('       '), color.bgBlack('       '), color.bgGreen('       '))
        console.log('\n')
        this.actualTrafficLightColor = this.lightColors.GREEN
      }
      if (this.timeToLeave === 5) {
        console.log('stoped')
        this.stop()
      }
    })
  }

  stop () {
    this.cronJob.getTasks().forEach(task => {
      task.stop()
    })
    this.actualTrafficLightColor = 'rojo'
    this.RESTARTED_FLAG = 1
  }
}
