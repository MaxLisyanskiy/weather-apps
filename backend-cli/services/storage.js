import { homedir } from 'os'
import { join } from 'path'
import { writeFile, readFile } from 'fs/promises'
import { isExist } from '../utils/is-exist.js'

const filePath = join(homedir(), 'weather-data.json')

const saveKeyValue = async (key, value) => {
    let data = {}

    if (await isExist(filePath)) {
        const file = await readFile(filePath)
        data = JSON.parse(file)
    }

    data[key] = value
    await writeFile(filePath, JSON.stringify(data))
}

const getKeyValue = async (key, value) => {
    if (await isExist(filePath)) {
        const file = await readFile(filePath)
        const data = JSON.parse(file)
        return data[key]
    }

    return undefined
}

export { saveKeyValue, getKeyValue }