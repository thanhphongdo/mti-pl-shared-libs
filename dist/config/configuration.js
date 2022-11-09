"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configuration = void 0;
const util = {
    isObject(value) {
        return value !== null && typeof value === 'object' && !Array.isArray(value);
    },
    merge(target, source) {
        for (const key of Object.keys(source)) {
            const targetValue = target[key];
            const sourceValue = source[key];
            if (this.isObject(targetValue) && this.isObject(sourceValue)) {
                Object.assign(sourceValue, this.merge(targetValue, sourceValue));
            }
        }
        return Object.assign(Object.assign({}, target), source);
    },
};
const configuration = async () => {
    const { config } = await Promise.resolve().then(() => require(`${__dirname}/envs/default`));
    const { config: environment } = await Promise.resolve().then(() => require(`${__dirname}/envs/${(process.env.NODE_ENV || 'local').trim()}`));
    return util.merge(config, environment);
};
exports.configuration = configuration;
//# sourceMappingURL=configuration.js.map