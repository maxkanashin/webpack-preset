import { Configuration } from "webpack"

const buildResolver = {
    prod: (): Configuration['resolve'] => {
        return {
            extensions: ['.tsx', '.ts', '.js'],
        }
    },
    dev: () => {
        return {
            extensions: ['.tsx', '.ts', '.js'],
        }
    },
}

export default buildResolver;