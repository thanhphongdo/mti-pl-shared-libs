import type { config as base } from './envs/default';
import type { config as production } from './envs/production';
export declare type Objectype = Record<string, unknown>;
export declare type Default = typeof base;
export declare type Production = typeof production;
export declare type Config = Default & Production;
