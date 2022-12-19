import os from 'os'

function getOsInfo(infoToGet) {
    let osInfo
    switch (infoToGet) {
        case '--EOL':

            osInfo = os.EOL === '\r\n' ? '\\r\\n' : '\\n'

            break;
        case '--cpus':
            osInfo = os.cpus().map(cpu => {
                delete cpu.times
                cpu.speed /= 1000
                return cpu
            })
            break
        case '--homedir':
            osInfo = os.homedir()
            break
        case '--username':
            osInfo = os.userInfo().username
            break
        case '--architecture':
            osInfo = os.arch()
            break
        default:
            osInfo = 'Invalid input'
    }
    return osInfo

}

export {getOsInfo}
